import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogsClient from './BlogsClient'

export const metadata: Metadata = {
    title: 'Pathology & Clinical Laboratory Insights Blog | OnePath Lab',
    description: 'Expert clinical articles, analyzer interfacing tutorials, NABL ISO 15189 accreditation checklists, and diagnostic laboratory management strategies.',
    alternates: {
        canonical: 'https://onepathlab.com/blogs',
    },
    openGraph: {
        title: 'Pathology & Clinical Laboratory Insights Blog | OnePath Lab',
        description: 'Actionable clinical guides, analyzer interfacing tutorials, and laboratory scaling strategies.',
        url: 'https://onepathlab.com/blogs',
        siteName: 'OnePath Lab',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OnePath Lab Blog | Diagnostic Industry Insights',
        description: 'Articles on LIS software, analyzer automation, and pathology lab management.',
    },
}

export default function BlogsPage() {
    return (
        <>
            <Navbar />
            <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <BlogsClient />
            </main>
            <Footer />
        </>
    )
}