'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Search, Loader2, BookOpen } from 'lucide-react'

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

export default function BlogsClient() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [blogs, setBlogs] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isMounted = true
        const fetchBlogs = async () => {
            try {
                const apiOrigin = process.env.NEXT_PUBLIC_API_URL
                    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
                    : "http://127.0.0.1:8000"

                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), 4000)

                const response = await fetch(`${apiOrigin}/api/blogs/public`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' },
                    signal: controller.signal
                })
                clearTimeout(timeoutId)

                if (response.ok && isMounted) {
                    const data = await response.json()
                    if (Array.isArray(data)) {
                        setBlogs(data)
                    } else if (data && Array.isArray(data.data)) {
                        setBlogs(data.data)
                    }
                }
            } catch {
                // Backend is offline or not running locally - silently keep empty list
            } finally {
                if (isMounted) setIsLoading(false)
            }
        }
        fetchBlogs()
        return () => { isMounted = false }
    }, [])

    const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean)))]

    const filteredPosts = blogs.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory
        const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredPost = filteredPosts.find(p => Boolean(p.featured) && p.featured !== '0' && p.featured !== 0)
    const gridPosts = filteredPosts.filter(p => !featuredPost || p !== featuredPost)

    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A'
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <>
            {/* Hero Section */}
            <section style={{ padding: '160px 20px 80px', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20, letterSpacing: '-0.02em' }}>
                        Insights &amp; <span style={{ color: 'var(--blue-primary, #2563eb)' }}>Resources</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#64748b', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 48, maxWidth: 600, margin: '0 auto' }}>
                        Expert clinical advice, industry updates, and operational strategies to help you scale your pathology laboratory.
                    </p>

                    {/* Search Bar */}
                    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '50px', padding: '10px 24px', maxWidth: 540, margin: '0 auto 40px', transition: 'all 0.3s ease' }}>
                        <Search size={20} color="#94a3b8" style={{ marginRight: 12 }} />
                        <input
                            type="text"
                            placeholder="Search by topic, analyzer, or pathology guide..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '15px', color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="category-scroll-container">
                        <div className="category-scroll">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '30px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        border: activeCategory === category ? '1px solid var(--blue-primary, #2563eb)' : '1px solid #e2e8f0',
                                        background: activeCategory === category ? 'var(--blue-primary, #2563eb)' : '#ffffff',
                                        color: activeCategory === category ? '#ffffff' : '#64748b',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section style={{ padding: '60px 20px 100px', flex: 1 }}>
                <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>

                    {isLoading ? (
                        <div style={{ textAlign: 'center', padding: '100px 20px', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                            <Loader2 size={40} className="animate-spin" color="var(--blue-primary, #2563eb)" />
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 500 }}>Loading latest diagnostic articles...</span>
                        </div>
                    ) : (
                        <>
                            {/* Featured Post */}
                            {featuredPost && activeCategory === 'All' && !searchQuery && (
                                <Link
                                    href={`/blogs/${featuredPost.slug || featuredPost.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                >
                                    <div className="featured-card" style={{ background: '#ffffff', borderRadius: '32px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', marginBottom: 60, transition: 'all 0.3s ease' }}>
                                        {featuredPost.image_url ? (
                                            <div className="featured-image" style={{ width: '50%', minHeight: 320, position: 'relative', overflow: 'hidden' }}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={resolveImageUrl(featuredPost.image_url)}
                                                    alt={featuredPost.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="featured-image" style={{ width: '50%', background: gradients[0] }} />
                                        )}
                                        <div className="featured-content" style={{ padding: '56px 48px', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                                                <span style={{ background: '#eff6ff', color: 'var(--blue-primary, #2563eb)', padding: '6px 14px', borderRadius: '8px', fontSize: 13, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'uppercase' }}>
                                                    {featuredPost.category}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                    <Clock size={14} /> {featuredPost.read_time || featuredPost.readTime || '5 min read'}
                                                </span>
                                            </div>
                                            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20, lineHeight: 1.3 }}>
                                                {featuredPost.title}
                                            </h2>

                                            <p className="line-clamp-3" style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 32 }}>
                                                {featuredPost.excerpt}
                                            </p>

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                    <Calendar size={14} /> {formatDate(featuredPost.created_at)}
                                                </span>
                                                <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary, #2563eb)', fontWeight: 700, fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'gap 0.2s' }}>
                                                    Read Article <ArrowRight size={18} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {/* Standard Grid Posts */}
                            {gridPosts.length > 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                                    {gridPosts.map((post, i) => {
                                        const cardGradient = gradients[(i + 1) % gradients.length];
                                        return (
                                            <Link
                                                key={post.id || i}
                                                href={`/blogs/${post.slug || post.id}`}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                <div className="blog-card" style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
                                                    {post.image_url ? (
                                                        <div style={{ height: 210, position: 'relative', overflow: 'hidden' }}>
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={resolveImageUrl(post.image_url)}
                                                                alt={post.title}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                            />
                                                            <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.92)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'uppercase' }}>
                                                                {post.category || 'General'}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{ height: 200, background: cardGradient, position: 'relative' }}>
                                                            <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.9)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'uppercase' }}>
                                                                {post.category || 'General'}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, color: '#94a3b8', fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {formatDate(post.created_at)}</span>
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> {post.read_time || post.readTime || '3 min read'}</span>
                                                        </div>
                                                        <h3 className="line-clamp-2" style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12, lineHeight: 1.4 }}>
                                                            {post.title}
                                                        </h3>

                                                        <p className="line-clamp-3" style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 24, flex: 1 }}>
                                                            {post.excerpt}
                                                        </p>

                                                        <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary, #2563eb)', fontWeight: 700, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'gap 0.2s', marginTop: 'auto' }}>
                                                            Read Article <ArrowRight size={16} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            ) : (
                                !featuredPost && (
                                    <div style={{ textAlign: 'center', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                        <div style={{ width: 56, height: 56, borderRadius: 16, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-primary, #2563eb)', marginBottom: 6 }}>
                                            <BookOpen size={26} />
                                        </div>
                                        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0 }}>
                                            {searchQuery ? `No articles matching "${searchQuery}"` : 'No articles published yet'}
                                        </h3>
                                        <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, maxWidth: 420 }}>
                                            {searchQuery ? 'Try searching with different keywords.' : 'Articles published from the admin portal will appear here in real time.'}
                                        </p>
                                    </div>
                                )
                            )}
                        </>
                    )}
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .search-bar:focus-within { border-color: #2563eb !important; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.1) !important; }
                .featured-card:hover { transform: translateY(-4px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1) !important; border-color: #cbd5e1 !important; }
                .featured-card:hover .read-more-link { gap: 12px !important; }
                .blog-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px -10px rgba(0,0,0,0.08) !important; border-color: #cbd5e1 !important; }
                .blog-card:hover .read-more-link { gap: 10px !important; }
                
                @keyframes spin { 100% { transform: rotate(360deg); } }
                .animate-spin { animation: spin 1s linear infinite; }

                /* CSS Truncation */
                .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

                /* Category Scroll */
                .category-scroll-container { width: 100%; max-width: 100%; overflow-x: hidden; }
                .category-scroll { display: flex; gap: 12px; overflow-x: auto; padding: 4px 20px 12px; justify-content: flex-start; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
                .category-scroll::-webkit-scrollbar { display: none; }

                @media (min-width: 768px) {
                    .category-scroll-container { width: auto; }
                    .category-scroll { justify-content: center; padding: 4px 0; }
                }
                @media (max-width: 850px) {
                    .featured-card { flex-direction: column !important; }
                    .featured-image { width: 100% !important; min-height: 250px !important; }
                    .featured-content { width: 100% !important; padding: 32px 24px !important; }
                }
            `}} />
        </>
    )
}
