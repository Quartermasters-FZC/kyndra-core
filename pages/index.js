import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])

  return (
    <>
      <Head>
        <title>Kyndra – The Future of Personalized Learning</title>
        <meta name="description" content="Kyndra is an AI-powered P-SaaS platform transforming education." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-gradient-to-r from-white to-blue-50 text-gray-800 min-h-screen px-6 py-16 text-center overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="py-24" data-aos="fade-down">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">Welcome to Kyndra</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Kyndra is a future-ready, AI-powered Private School-as-a-Service (P-SaaS) platform built for the school choice revolution.
          </p>
        </section>

        {/* REPORT LINKS */}
        <section className="mt-12 space-y-4" data-aos="fade-up">
          <a href="/market-research.html" className="text-blue-600 underline">📊 Market Research</a>
          <a href="/kyndra-infographic.html" className="text-green-600 underline">📈 Infographic</a>
          <a href="https://docs.google.com/document/d/1egcEePWUn3Q9pUhUPf_CLNVxIiW0uIhv9sb1v0IpBoY" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">📄 Full Report</a>
        </section>

        {/* TIMELINE SECTION */}
        <section className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-blue-700 mb-10">Kyndra’s Milestones</h2>
          <ol className="border-l-4 border-blue-500 space-y-10 text-left pl-6">
            <li data-aos="fade-right">
              <h3 className="text-xl font-bold">2022 – Vision Formed</h3>
              <p>Kyndra’s founding idea: give every student a personalized AI-powered micro-school experience.</p>
            </li>
            <li data-aos="fade-left">
              <h3 className="text-xl font-bold">2023 – Pilot Launch</h3>
              <p>Launched first pilot with 12 schools and over 8,000 students across three states.</p>
            </li>
            <li data-aos="fade-right">
              <h3 className="text-xl font-bold">2024 – Product Maturity</h3>
              <p>Full platform built with AI LMS, real-time dashboards, and state voucher integration.</p>
            </li>
            <li data-aos="fade-left">
              <h3 className="text-xl font-bold">2025 – National Scale</h3>
              <p>Over 1 million students reached and growing through district, charter, and microschool adoption.</p>
            </li>
          </ol>
        </section>

        {/* INVESTOR HIGHLIGHTS */}
        <section className="mt-24 bg-gray-100 py-16 px-6 rounded-lg shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Investor Highlights</h2>
          <ul className="text-left space-y-4">
            <li>✅ Operating in 14 U.S. states with voucher-aligned legislation</li>
            <li>✅ 37 partner school networks and over 1,400 campuses</li>
            <li>✅ Proprietary AI modules for learning, discovery, and mastery</li>
            <li>✅ Zero legacy infrastructure – modern P-SaaS architecture</li>
            <li>✅ Revenue-generating with government-aligned funding streams</li>
          </ul>
        </section>

        {/* NEWSLETTER */}
        <section className="mt-24 max-w-2xl mx-auto text-left bg-white p-8 rounded shadow-md border border-gray-200 animate__animated animate__fadeInUp" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Join the Kyndra Journey</h3>
          <p className="mb-4">Get updates on our latest breakthroughs and impact stories.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">Subscribe</button>
          </form>
        </section>

        {/* FLOATING CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
            💡 Join the Revolution
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-32 text-sm text-gray-500">
          © {new Date().getFullYear()} Kyndra – hello@quartermasters.me
        </footer>
      </main>
    </>
  )
}
