import { Header } from "@/components/portfolio/header"
import { Footer } from "@/components/portfolio/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-w-0 min-h-[calc(100vh-8rem)]">{children}</main>
      <Footer />
    </>
  )
}
