/**
 * High-Fidelity Native Vector PDF Generator & Downloader for OnePath Lab Reports
 * Uses Chromium/Chrome Headless Engine to produce 100% pixel-perfect,
 * crisp vector PDFs with zero line disbalance, identical to on-screen preview.
 */

export interface GeneratePdfOptions {
  printContainer: HTMLElement;
  filename?: string;
}

function inlineElementImages(element: HTMLElement) {
  const imgs = element.querySelectorAll<HTMLImageElement>("img");
  imgs.forEach((img) => {
    try {
      if (img.src && !img.src.startsWith("data:")) {
        if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL("image/png");
            img.src = dataUrl;
            img.setAttribute("src", dataUrl);
            return;
          }
        }
      }
      if (img.src) {
        img.setAttribute("src", img.src);
      }
    } catch {
      if (img.src) {
        img.setAttribute("src", img.src);
      }
    }
  });
}

export function prepareReportHtml(printContainer: HTMLElement): string {
  let pageElements = printContainer.querySelectorAll<HTMLElement>(".report-print-page");
  if (!pageElements || pageElements.length === 0) {
    pageElements = printContainer.querySelectorAll<HTMLElement>(".report-preview-page-card");
  }
  if (!pageElements || pageElements.length === 0) {
    throw new Error("No printable report pages found to generate PDF.");
  }

  const styles: string[] = [];
  document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach((link) => {
    styles.push(link.outerHTML);
  });

  document.querySelectorAll<HTMLStyleElement>("style").forEach((style) => {
    styles.push(style.outerHTML);
  });

  try {
    let sheetCss = "";
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const rules = document.styleSheets[i].cssRules;
        if (rules) {
          for (let r = 0; r < rules.length; r++) {
            sheetCss += rules[r].cssText + "\n";
          }
        }
      } catch {
        // Cross-origin stylesheet security restriction, safely skip
      }
    }
    if (sheetCss) {
      styles.push(`<style>${sheetCss}</style>`);
    }
  } catch (e) {
    console.warn("Could not extract document styleSheets rules:", e);
  }

  const pagesHtml = Array.from(pageElements)
    .map((el) => {
      const clone = el.cloneNode(true) as HTMLElement;

      clone.style.transform = "none";
      clone.style.webkitTransform = "none";
      clone.style.width = "794px";
      clone.style.height = "1123px";
      clone.style.minHeight = "1123px";
      clone.style.maxHeight = "1123px";
      clone.style.margin = "0 auto";
      clone.style.position = "relative";
      clone.style.overflow = "hidden";
      clone.style.boxSizing = "border-box";
      clone.style.backgroundColor = "#ffffff";

      inlineElementImages(clone);

      return clone.outerHTML;
    })
    .join("\n");

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  ${origin ? `<base href="${origin}/" />` : ""}
  <title>Lab Report</title>
  ${styles.join("\n")}
  <style>
    @page {
      size: A4 portrait;
      margin: 0 !important;
    }
    *, *::before, *::after {
      box-sizing: border-box !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 794px !important;
      background-color: #ffffff !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-family: Arial, "Helvetica Neue", Helvetica, "Segoe UI", Roboto, sans-serif !important;
    }
    .report-print-page {
      width: 794px !important;
      height: 1123px !important;
      min-height: 1123px !important;
      max-height: 1123px !important;
      margin: 0 auto !important;
      padding: 0 !important;
      position: relative !important;
      overflow: hidden !important;
      background-color: #ffffff !important;
      transform: none !important;
      page-break-after: always !important;
      break-after: page !important;
      box-sizing: border-box !important;
    }
    .report-print-page:last-child {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }
    .letterhead-bg-img {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: fill !important;
      z-index: 0 !important;
      display: block !important;
    }
  </style>
</head>
<body>
  ${pagesHtml}
</body>
</html>`;
}

export async function generateNativePdfBlob(html: string, filename: string): Promise<Blob> {
  const res = await fetch("/api/reports/download-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ html, filename }),
  });

  if (!res.ok) {
    let errMessage = "Server returned an error generating PDF";
    try {
      const data = await res.json();
      if (data?.error) errMessage = data.error;
    } catch {
      const text = await res.text();
      if (text) errMessage = text;
    }
    throw new Error(errMessage);
  }

  return await res.blob();
}

export async function downloadNativePdf({ printContainer, filename }: GeneratePdfOptions): Promise<void> {
  const safeFilename = filename || "LabReport.pdf";
  const html = prepareReportHtml(printContainer);

  const pdfBlob = await generateNativePdfBlob(html, safeFilename);

  const blobUrl = URL.createObjectURL(pdfBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = blobUrl;
  downloadLink.download = safeFilename;
  document.body.appendChild(downloadLink);
  downloadLink.click();

  setTimeout(() => {
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(blobUrl);
  }, 3000);
}
