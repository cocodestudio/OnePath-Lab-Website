'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Clock, Calendar, Search, Loader2, X } from 'lucide-react'

const gradients = [
    'linear-gradient(135deg, #e0eaff 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #fce7f3 0%, #db2777 100%)',
    'linear-gradient(135deg, #dcfce7 0%, #16a34a 100%)',
    'linear-gradient(135deg, #fef08a 0%, #eab308 100%)',
    'linear-gradient(135deg, #e0f2fe 0%, #0284c7 100%)',
    'linear-gradient(135deg, #fae8ff 0%, #c026d3 100%)'
]

export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [blogs, setBlogs] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // Naya state post modal ke liye
    const [selectedPost, setSelectedPost] = useState<any | null>(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/blogs/public', {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                })
                if (response.ok) {
                    const data = await response.json()
                    setBlogs(data)
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchBlogs()
    }, [])

    // Modal open hone par background scroll band karne ke liye
    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [selectedPost])

    const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean)))]

    const filteredPosts = blogs.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory
        const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredPost = filteredPosts.find(p => p.featured)
    const gridPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All')

    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A'
        const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{ padding: '160px 20px 80px', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, letterSpacing: '-0.02em' }}>
                        Insights & <span style={{ color: 'var(--blue-primary, #2563eb)' }}>Resources</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 48, maxWidth: 600, margin: '0 auto' }}>
                        Expert advice, industry updates, and operational strategies to help you scale your pathology lab.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '100px', padding: '12px 24px', width: '100%', maxWidth: 450 }}>
                            <Search size={20} color="#94a3b8" style={{ marginRight: 12 }} />
                            <input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 15, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }} />
                        </div>

                        {blogs.length > 0 && (
                            <div className="category-scroll-container">
                                <div className="category-scroll">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat as string)}
                                            style={{
                                                padding: '8px 20px', borderRadius: '100px', fontSize: 14, fontWeight: 600,
                                                fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', whiteSpace: 'nowrap',
                                                transition: 'all 0.2s ease',
                                                background: activeCategory === cat ? 'var(--blue-primary, #2563eb)' : 'transparent',
                                                color: activeCategory === cat ? '#ffffff' : '#64748b',
                                                border: activeCategory === cat ? '1px solid var(--blue-primary, #2563eb)' : '1px solid #e2e8f0',
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section style={{ padding: '60px 20px 100px', flex: 1 }}>
                <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>

                    {isLoading ? (
                        <div style={{ textAlign: 'center', padding: '100px 20px', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                            <Loader2 size={40} className="animate-spin" color="var(--blue-primary, #2563eb)" />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500 }}>Loading latest articles...</span>
                        </div>
                    ) : (
                        <>
                            {/* Featured Post */}
                            {featuredPost && activeCategory === 'All' && !searchQuery && (
                                <div onClick={() => setSelectedPost(featuredPost)} style={{ cursor: 'pointer' }}>
                                    <div className="featured-card" style={{ background: '#ffffff', borderRadius: '32px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', marginBottom: 60, transition: 'all 0.3s ease' }}>
                                        <div className="featured-image" style={{ width: '50%', background: gradients[0] }} />
                                        <div className="featured-content" style={{ padding: '56px 48px', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                                                <span style={{ background: '#eff6ff', color: 'var(--blue-primary, #2563eb)', padding: '6px 14px', borderRadius: '8px', fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>{featuredPost.category}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}><Clock size={14} /> {featuredPost.read_time}</span>
                                            </div>
                                            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, lineHeight: 1.3 }}>{featuredPost.title}</h2>

                                            {/* Truncated Excerpt */}
                                            <p className="line-clamp-3" style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 32 }}>{featuredPost.excerpt}</p>

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}><Calendar size={14} /> {formatDate(featuredPost.created_at)}</span>
                                                <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary, #2563eb)', fontWeight: 700, fontSize: 15, fontFamily: "'DM Sans', sans-serif", transition: 'gap 0.2s' }}>Read Article <ArrowRight size={18} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Standard Grid Posts */}
                            {gridPosts.length > 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                                    {gridPosts.map((post, i) => {
                                        const cardGradient = gradients[(i + 1) % gradients.length];
                                        return (
                                            <div key={post.id} onClick={() => setSelectedPost(post)} style={{ cursor: 'pointer' }}>
                                                <div className="blog-card" style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
                                                    <div style={{ height: 200, background: cardGradient, position: 'relative' }}>
                                                        <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.9)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>{post.category}</div>
                                                    </div>
                                                    <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, color: '#94a3b8', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {formatDate(post.created_at)}</span>
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> {post.read_time}</span>
                                                        </div>
                                                        <h3 className="line-clamp-2" style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>

                                                        {/* Truncated Excerpt */}
                                                        <p className="line-clamp-3" style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: 24, flex: 1 }}>{post.excerpt}</p>

                                                        <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary, #2563eb)', fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans', sans-serif", transition: 'gap 0.2s', marginTop: 'auto' }}>Read Article <ArrowRight size={16} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                !featuredPost && <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b', fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}>No articles found.</div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ── MODAL POPUP (FULL POST) ── */}
            {selectedPost && (
                <div className="modal-backdrop" onClick={() => setSelectedPost(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedPost(null)}>
                            <X size={22} />
                        </button>

                        <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #f1f5f9' }}>
                            <span style={{ background: '#eff6ff', color: 'var(--blue-primary, #2563eb)', padding: '6px 14px', borderRadius: '8px', fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', display: 'inline-block', marginBottom: 16 }}>
                                {selectedPost.category}
                            </span>
                            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", lineHeight: 1.2, marginBottom: 20 }}>
                                {selectedPost.title}
                            </h2>
                            <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: '#64748b', fontSize: 14.5, fontFamily: "'DM Sans', sans-serif" }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={16} /> {formatDate(selectedPost.created_at)}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} /> {selectedPost.read_time}</span>
                            </div>
                        </div>

                        {/* Full Post Content (pre-wrap for text formatting, or dangerouslySetInnerHTML if using HTML from admin) */}
                        <div className="post-body" dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }} />
                    </div>
                </div>
            )}

            <Footer />

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
                .category-scroll-container { width: 100vw; max-width: 100%; overflow-x: hidden; }
                .category-scroll { display: flex; gap: 12px; overflow-x: auto; padding: 4px 20px 12px; justify-content: flex-start; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
                .category-scroll::-webkit-scrollbar { display: none; }
                
                /* Modal Styles */
                .modal-backdrop {
                    position: fixed; inset: 0; z-index: 1050;
                    background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(6px);
                    display: flex; align-items: center; justify-content: center; padding: 20px;
                    animation: fadeIn 0.2s ease-out;
                }
                .modal-content {
                    background: #ffffff; width: 100%; max-width: 860px; max-height: 90vh;
                    border-radius: 24px; padding: 48px; position: relative;
                    overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .modal-close {
                    position: absolute; top: 24px; right: 24px;
                    background: #f1f5f9; border: none; border-radius: 50%;
                    width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
                    cursor: pointer; color: #475569; transition: all 0.2s;
                }
                .modal-close:hover { background: #e2e8f0; color: #0f172a; transform: scale(1.05); }
                
                .post-body {
                    font-family: 'DM Sans', sans-serif; font-size: 17px; color: #334155;
                    line-height: 1.8; white-space: pre-wrap;
                }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

                @media (min-width: 768px) {
                    .category-scroll-container { width: auto; }
                    .category-scroll { justify-content: center; padding: 4px 0; }
                }
                @media (max-width: 850px) {
                    .featured-card { flex-direction: column !important; }
                    .featured-image { width: 100% !important; height: 250px !important; }
                    .featured-content { width: 100% !important; padding: 32px 24px !important; }
                    .modal-content { padding: 32px 24px; }
                }
            `}} />
        </main>
    )
}