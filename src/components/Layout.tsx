import Footer from '@components/Footer'
import Header from '@components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-svh w-full flex-col font-sans">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
