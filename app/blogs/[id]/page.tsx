'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    ArrowLeft,
    Calendar,
    Clock,
    Share2,
    Check,
    BookOpen,
    ArrowRight,
    ChevronRight,
    Loader2,
    Sparkles,
    ShieldCheck
} from 'lucide-react'

const gradients = [
    'linear-gradient(135deg, #e0eaff 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #fce7f3 0%, #db2777 100%)',
    'linear-gradient(135deg, #dcfce7 0%, #16a34a 100%)',
    'linear-gradient(135deg, #fef08a 0%, #eab308 100%)',
    'linear-gradient(135deg, #e0f2fe 0%, #0284c7 100%)',
    'linear-gradient(135deg, #fae8ff 0%, #c026d3 100%)'
]

const resolveImageUrl = (url?: string) => {
    if (!url) return ''
    if (url.startsWith('http://') || url.startsWith('https://')) return url
    const apiOrigin = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
        : "http://127.0.0.1:8000"
    return `${apiOrigin}${url.startsWith('/') ? '' : '/'}${url}`
}

export default function BlogPostDetail() {
    const params = useParams()
    const router = useRouter()
    const id = params?.id as string

    const [blog, setBlog] = useState<any | null>(null)
    const [relatedBlogs, setRelatedBlogs] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!id) return
        let isMounted = true

        const fetchArticle = async () => {
            setIsLoading(true)
            try {
                const apiOrigin = process.env.NEXT_PUBLIC_API_URL
                    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
                    : "http://127.0.0.1:8000"

                // 1. Try single article endpoint
                const res = await fetch(`${apiOrigin}/api/blogs/public/${id}`, {
                    headers: { 'Accept': 'application/json' }
                })

                if (res.ok) {
                    const json = await res.json()
                    if (isMounted && json.data) {
                        setBlog(json.data)
                        setRelatedBlogs(json.related || [])
                        setIsLoading(false)
                        return
                    }
                }

                // 2. Fallback: Query all blogs and match by slug or id
                const allRes = await fetch(`${apiOrigin}/api/blogs/public`, {
                    headers: { 'Accept': 'application/json' }
                })

                if (allRes.ok && isMounted) {
                    const data = await allRes.json()
                    const list: any[] = Array.isArray(data) ? data : (data.data || [])
                    const found = list.find((b: any) => String(b.slug) === String(id) || String(b.id) === String(id))

                    if (found) {
                        setBlog(found)
                        const related = list.filter((b: any) => b.id !== found.id).slice(0, 3)
                        setRelatedBlogs(related)
                    }
                }
            } catch (err) {
                console.error("Error fetching article:", err)
            } finally {
                if (isMounted) setIsLoading(false)
            }
        }

        fetchArticle()
        return () => { isMounted = false }
    }, [id])

    const handleCopyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const formatDate = (dateString?: string) => {
        if (!dateString) return 'Recent Editorial'
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <>
            <Navbar />
            <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                {/* Top Breadcrumbs & Back Bar */}
                <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '110px' }}>
                    <div className="container" style={{ maxWidth: 1040, margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            <Link href="/" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
                            <ChevronRight size={14} color="#94a3b8" />
                            <Link href="/blogs" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}>Blogs & Insights</Link>
                            <ChevronRight size={14} color="#94a3b8" />
                            <span style={{ color: '#0f172a', fontWeight: 600, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {blog ? blog.title : 'Article Details'}
                            </span>
                        </div>

                        <Link
                            href="/blogs"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 13.5,
                                fontWeight: 700,
                                color: 'var(--blue-primary, #2563eb)',
                                textDecoration: 'none',
                                background: '#eff6ff',
                                padding: '6px 14px',
                                borderRadius: 8,
                                transition: 'all 0.2s'
                            }}
                        >
                            <ArrowLeft size={15} />
                            <span>All Articles</span>
                        </Link>
                    </div>
                </div>

                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '120px 20px', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: 1 }}>
                        <Loader2 size={44} className="animate-spin" color="var(--blue-primary, #2563eb)" />
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 600 }}>
                            Loading comprehensive article...
                        </span>
                    </div>
                ) : !blog ? (
                    <div style={{ textAlign: 'center', padding: '100px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: 1 }}>
                        <div style={{ width: 64, height: 64, borderRadius: 20, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                            <BookOpen size={30} />
                        </div>
                        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            Article Not Found
                        </h2>
                        <p style={{ color: '#64748b', fontSize: 15, maxWidth: 420 }}>
                            The requested article may have been updated or moved. Browse all our clinical and operational articles.
                        </p>
                        <Link
                            href="/blogs"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                background: '#2563eb',
                                color: '#ffffff',
                                fontWeight: 700,
                                padding: '12px 24px',
                                borderRadius: 10,
                                textDecoration: 'none',
                                marginTop: 8
                            }}
                        >
                            <ArrowLeft size={16} /> Return to Blog Directory
                        </Link>
                    </div>
                ) : (
                    /* Article Container */
                    <article style={{ flex: 1, paddingBottom: 80 }}>
                        {/* Article Header */}
                        <header style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '48px 20px 56px' }}>
                            <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>
                                {/* Category Badge */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                    <span style={{
                                        background: '#eff6ff',
                                        color: 'var(--blue-primary, #2563eb)',
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        fontSize: 13,
                                        fontWeight: 800,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        letterSpacing: '0.04em',
                                        textTransform: 'uppercase'
                                    }}>
                                        {blog.category || 'Diagnostics'}
                                    </span>

                                    {blog.featured && (
                                        <span style={{
                                            background: '#fef3c7',
                                            color: '#b45309',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 4
                                        }}>
                                            <Sparkles size={13} /> Featured Article
                                        </span>
                                    )}
                                </div>

                                {/* Article Title */}
                                <h1 style={{
                                    fontSize: 'clamp(28px, 4.5vw, 48px)',
                                    fontWeight: 800,
                                    color: '#0f172a',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    lineHeight: 1.25,
                                    letterSpacing: '-0.025em',
                                    marginBottom: 20
                                }}>
                                    {blog.title}
                                </h1>

                                {/* Excerpt */}
                                {blog.excerpt && (
                                    <p style={{
                                        fontSize: 'clamp(17px, 2vw, 20px)',
                                        color: '#475569',
                                        lineHeight: 1.65,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        marginBottom: 32,
                                        fontWeight: 400
                                    }}>
                                        {blog.excerpt}
                                    </p>
                                )}

                                {/* Metadata & Author row */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: 16,
                                    paddingTop: 24,
                                    borderTop: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                        {/* Avatar */}
                                        <div style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 12,
                                            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 800,
                                            fontSize: 18,
                                            boxShadow: '0 2px 8px rgba(37,99,235,0.2)'
                                        }}>
                                            OP
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                OnePath Medical & Tech Editorial
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#64748b', fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                    <Calendar size={14} /> {formatDate(blog.created_at)}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                    <Clock size={14} /> {blog.read_time || blog.readTime || '5 min read'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <button
                                            type="button"
                                            onClick={handleCopyLink}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                background: copied ? '#dcfce7' : '#f1f5f9',
                                                color: copied ? '#16a34a' : '#475569',
                                                border: '1px solid',
                                                borderColor: copied ? '#bbf7d0' : '#e2e8f0',
                                                padding: '8px 14px',
                                                borderRadius: 8,
                                                fontSize: 13,
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                fontFamily: "'Plus Jakarta Sans', sans-serif"
                                            }}
                                            title="Share article link"
                                        >
                                            {copied ? <Check size={14} /> : <Share2 size={14} />}
                                            <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Article Content Area */}
                        <div className="container" style={{ maxWidth: 860, margin: '48px auto 0', padding: '0 20px' }}>
                            {/* Featured Cover Image */}
                            {blog.image_url ? (
                                <div style={{
                                    borderRadius: 24,
                                    overflow: 'hidden',
                                    marginBottom: 48,
                                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)',
                                    border: '1px solid #e2e8f0',
                                    background: '#ffffff'
                                }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={resolveImageUrl(blog.image_url)}
                                        alt={blog.title}
                                        style={{
                                            width: '100%',
                                            maxHeight: 520,
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            ) : (
                                <div style={{
                                    height: 280,
                                    borderRadius: 24,
                                    background: gradients[0],
                                    marginBottom: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)'
                                }}>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.92)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '12px 24px',
                                        borderRadius: 12,
                                        fontWeight: 800,
                                        fontSize: 16,
                                        color: '#0f172a',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                                    }}>
                                        OnePath Lab Clinical Intelligence
                                    </div>
                                </div>
                            )}

                            {/* Main Body with HTML formatting */}
                            <div
                                className="blog-article-body"
                                dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt }}
                            />

                            {/* Editorial Sign-off Box */}
                            <div style={{
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: 20,
                                padding: '32px',
                                marginTop: 60,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: '#eff6ff',
                                    color: '#2563eb',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <ShieldCheck size={28} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        Clinically Validated & Operations Approved
                                    </h4>
                                    <p style={{ margin: '4px 0 0', fontSize: 14, color: '#64748b', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        Authored by the OnePath LIS Product & Pathology Workflow team. Designed to empower modern clinical testing laboratories with paperless automation and QR-verified patient reports.
                                    </p>
                                </div>
                            </div>

                            {/* Call To Action Banner */}
                            <div style={{
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                                borderRadius: 24,
                                padding: '48px',
                                marginTop: 40,
                                color: '#ffffff',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: 250,
                                    height: 250,
                                    background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
                                    pointerEvents: 'none'
                                }} />
                                <h3 style={{
                                    fontSize: 'clamp(22px, 3vw, 32px)',
                                    fontWeight: 800,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    marginBottom: 12
                                }}>
                                    Ready to modernize your Pathology Laboratory?
                                </h3>
                                <p style={{
                                    fontSize: 16,
                                    color: '#94a3b8',
                                    maxWidth: 540,
                                    margin: '0 auto 28px',
                                    lineHeight: 1.6,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                                }}>
                                    Join hundreds of clinical diagnostics hubs delivering instant WhatsApp reports, interfacing analyzer machines, and scaling revenue.
                                </p>
                                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href="https://app.onepathlab.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            background: '#2563eb',
                                            color: '#ffffff',
                                            padding: '14px 28px',
                                            borderRadius: 12,
                                            fontWeight: 700,
                                            fontSize: 15,
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            boxShadow: '0 4px 14px rgba(37,99,235,0.4)',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                                        }}
                                    >
                                        Start 7-Day Free Trial <ArrowRight size={16} />
                                    </a>
                                    <Link
                                        href="/pricing"
                                        style={{
                                            background: 'rgba(255,255,255,0.1)',
                                            color: '#ffffff',
                                            padding: '14px 24px',
                                            borderRadius: 12,
                                            fontWeight: 700,
                                            fontSize: 15,
                                            textDecoration: 'none',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                                        }}
                                    >
                                        View Pricing Plans
                                    </Link>
                                </div>
                            </div>

                            {/* Related Articles Section */}
                            {relatedBlogs.length > 0 && (
                                <section style={{ marginTop: 80 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                                        <h3 style={{
                                            fontSize: 24,
                                            fontWeight: 800,
                                            color: '#0f172a',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            margin: 0
                                        }}>
                                            Recommended Articles
                                        </h3>
                                        <Link
                                            href="/blogs"
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: '#2563eb',
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 4
                                            }}
                                        >
                                            View all <ArrowRight size={14} />
                                        </Link>
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        gap: 24
                                    }}>
                                        {relatedBlogs.map((rel, i) => (
                                            <Link
                                                key={rel.id || i}
                                                href={`/blogs/${rel.slug || rel.id}`}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                <div className="related-card" style={{
                                                    background: '#ffffff',
                                                    borderRadius: 18,
                                                    border: '1px solid #e2e8f0',
                                                    overflow: 'hidden',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.25s ease'
                                                }}>
                                                    {rel.image_url ? (
                                                        <div style={{ height: 140, overflow: 'hidden' }}>
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={resolveImageUrl(rel.image_url)}
                                                                alt=""
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div style={{ height: 120, background: gradients[(i + 2) % gradients.length] }} />
                                                    )}
                                                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                                        <span style={{
                                                            fontSize: 11,
                                                            fontWeight: 800,
                                                            color: '#2563eb',
                                                            textTransform: 'uppercase',
                                                            marginBottom: 8
                                                        }}>
                                                            {rel.category}
                                                        </span>
                                                        <h4 style={{
                                                            fontSize: 16,
                                                            fontWeight: 700,
                                                            color: '#0f172a',
                                                            lineHeight: 1.4,
                                                            margin: '0 0 10px',
                                                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                                                        }}>
                                                            {rel.title}
                                                        </h4>
                                                        <span style={{
                                                            marginTop: 'auto',
                                                            fontSize: 13,
                                                            fontWeight: 700,
                                                            color: '#2563eb',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 4
                                                        }}>
                                                            Read Article <ArrowRight size={13} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </article>
                )}

                <Footer />

                {/* Rich HTML Styling for Article Body */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes spin { 100% { transform: rotate(360deg); } }
                    .animate-spin { animation: spin 1s linear infinite; }

                    .related-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 12px 28px -8px rgba(0,0,0,0.08);
                        border-color: #cbd5e1 !important;
                    }

                    .blog-article-body {
                        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        font-size: 18px;
                        line-height: 1.85;
                        color: #334155;
                    }

                    .blog-article-body h1 {
                        font-size: clamp(26px, 3.5vw, 36px);
                        font-weight: 800;
                        color: #0f172a;
                        margin: 44px 0 20px;
                        line-height: 1.3;
                        letter-spacing: -0.02em;
                    }

                    .blog-article-body h2 {
                        font-size: clamp(22px, 3vw, 28px);
                        font-weight: 800;
                        color: #0f172a;
                        margin: 36px 0 16px;
                        line-height: 1.35;
                        letter-spacing: -0.015em;
                        border-bottom: 2px solid #f1f5f9;
                        padding-bottom: 8px;
                    }

                    .blog-article-body h3 {
                        font-size: clamp(19px, 2.5vw, 22px);
                        font-weight: 700;
                        color: #1e293b;
                        margin: 28px 0 12px;
                        line-height: 1.4;
                    }

                    .blog-article-body p {
                        margin: 0 0 22px;
                    }

                    .blog-article-body strong {
                        color: #0f172a;
                        font-weight: 700;
                    }

                    .blog-article-body ul, .blog-article-body ol {
                        margin: 0 0 24px;
                        padding-left: 28px;
                    }

                    .blog-article-body li {
                        margin-bottom: 10px;
                        line-height: 1.75;
                    }

                    .blog-article-body blockquote {
                        margin: 28px 0;
                        padding: 20px 24px;
                        background: #eff6ff;
                        border-left: 4px solid #2563eb;
                        border-radius: 0 14px 14px 0;
                        color: #1e3a8a;
                        font-size: 17.5px;
                        line-height: 1.7;
                    }

                    .blog-article-body blockquote p {
                        margin: 0;
                    }

                    .blog-article-body table, .blog-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 28px 0;
                        border: 1px solid #cbd5e1;
                        border-radius: 12px;
                        overflow: hidden;
                        font-size: 15px;
                        background: #ffffff;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.02);
                    }

                    .blog-article-body th {
                        background: #f1f5f9;
                        padding: 14px 18px;
                        text-align: left;
                        font-weight: 700;
                        color: #0f172a;
                        border: 1px solid #cbd5e1;
                    }

                    .blog-article-body td {
                        padding: 12px 18px;
                        border: 1px solid #cbd5e1;
                        color: #334155;
                    }

                    .blog-article-body tr:nth-child(even) td {
                        background: #f8fafc;
                    }

                    .blog-article-body hr {
                        border: none;
                        border-top: 1px solid #e2e8f0;
                        margin: 40px 0;
                    }

                    .blog-article-body code {
                        background: #f1f5f9;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 14.5px;
                        color: #0f172a;
                        font-family: monospace;
                    }

                    @media (max-width: 640px) {
                        .blog-article-body {
                            font-size: 16.5px;
                            line-height: 1.75;
                        }
                    }
                    `
                }} />
            </main>
        </>
    )
}
