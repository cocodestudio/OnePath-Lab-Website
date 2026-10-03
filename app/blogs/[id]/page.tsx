import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogPostClient from './BlogPostClient'

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    const apiOrigin = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
        : "http://127.0.0.1:8000"

    let title = 'Clinical Diagnostics & Pathology Insights | OnePath Lab'
    let description = 'Read clinical workflows, NABL compliance protocols, and laboratory automation guides from OnePath Lab.'
    let ogImage = '/logo.png'

    try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 2000)
        const res = await fetch(`${apiOrigin}/api/blogs/public/${id}`, {
            headers: { 'Accept': 'application/json' },
            signal: controller.signal,
            next: { revalidate: 60 }
        })
        clearTimeout(timeout)

        if (res.ok) {
            const data = await res.json()
            const blog = data.data
            if (blog) {
                if (blog.title) title = `${blog.title} | OnePath Lab`
                if (blog.excerpt) description = blog.excerpt
                if (blog.image_url) {
                    ogImage = blog.image_url.startsWith('http')
                        ? blog.image_url
                        : `${apiOrigin}${blog.image_url.startsWith('/') ? '' : '/'}${blog.image_url}`
                }
            }
        }
    } catch {
        // Fallback to default metadata
    }

    return {
        title,
        description,
        alternates: {
            canonical: `https://onepathlab.com/blogs/${id}`,
        },
        openGraph: {
            title,
            description,
            url: `https://onepathlab.com/blogs/${id}`,
            siteName: 'OnePath Lab',
            images: [{ url: ogImage }],
            locale: 'en_IN',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { id } = await params
    let initialBlog = null

    try {
        const apiOrigin = process.env.NEXT_PUBLIC_API_URL
            ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
            : "http://127.0.0.1:8000"

        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 2500)
        const res = await fetch(`${apiOrigin}/api/blogs/public/${id}`, {
            headers: { 'Accept': 'application/json' },
            signal: controller.signal,
            next: { revalidate: 60 }
        })
        clearTimeout(timeout)

        if (res.ok) {
            const data = await res.json()
            initialBlog = data.data || null
        }
    } catch {
        // Silently handled by client fallback
    }

    return (
        <>
            <Navbar />
            <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <BlogPostClient id={id} initialBlog={initialBlog} />
            </main>
            <Footer />
        </>
    )
}
