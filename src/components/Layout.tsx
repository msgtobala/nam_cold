import Footer from '@components/Footer'
import Header from '@components/Header'
import ScrollToTop from '@components/ScrollToTop'
import TrustedEverywhere from '@components/TrustedEverywhere'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-svh w-full flex-col font-sans">
      <ScrollToTop />
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <TrustedEverywhere />
      <Footer />
    </div>
  )
}
