import type { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
    title: 'Sign In to Laboratory Workstation | OnePath Lab LIS',
    description: 'Sign in to access your OnePath Lab diagnostic workstation. Manage patient registration, analyzer results, WhatsApp delivery, and billing.',
    alternates: {
        canonical: 'https://onepathlab.com/login',
    },
    openGraph: {
        title: 'Sign In | OnePath Lab LIS Workstation',
        description: 'Secure cloud login for pathology technicians, pathologists, and lab administrators.',
        url: 'https://onepathlab.com/login',
        siteName: 'OnePath Lab',
        locale: 'en_IN',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function LoginPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', background: '#ffffff' }}>
            <LoginForm />
        </main>
    )
}