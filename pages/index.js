import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <Head>
        <title>Kyndra – The Future of Personalized Private School as a Service</title>
        <meta name="description" content="AI-powered private education at home, on your terms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-gradient-to-r from-white to-blue-50 text-gray-800 min-h-screen px-6 py-16 text-center overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="py-24" data-aos="fade-down">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Your Child’s Future, Personalized</h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">AI-Powered Private Schooling. At Home. On Your Terms.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800">Join Early Access</a>
            <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Partner With Us</a>
          </div>
        </section>

        {/* WHY KYNDRA */}
        <section className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Kyndra?</h2>
          <p className="mb-4">In a world where traditional school systems are crumbling under the weight of limited capacity, outdated curricula, and growing safety concerns, Kyndra offers a smarter, safer, and more scalable alternative.</p>
          <blockquote className="italic text-gray-600">"You shouldn’t have to choose between quality education and your child’s well-being."</blockquote>
          <p className="mt-4">Kyndra is a personalized education platform designed for the 21st century — combining the flexibility of homeschooling, the rigor of private education, and the power of AI.</p>
        </section>

        {/* PROBLEMS WE SOLVE */}
        <section className="mt-20 max-w-4xl mx-auto text-left space-y-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">The Problems We Solve</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Overcrowded Classrooms:</strong> Physical schools are at capacity. We scale instantly.</li>
            <li><strong>Teacher Shortages:</strong> AI tutors never call in sick and are available 24/7.</li>
            <li><strong>Rigid Schedules:</strong> Learn anytime, anywhere. Perfect for modern families.</li>
            <li><strong>Safety Concerns:</strong> Eliminate exposure to school shootings, bullying, and peer pressure.</li>
            <li><strong>One-Size-Fits-All Learning:</strong> Our AI adapts to every learner’s pace, skill level, and interest.</li>
          </ul>
        </section>

        {/* MODULES */}
        <section className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left" data-aos="fade-up">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Kyndra Learn</h3>
            <p>Core academic subjects aligned with Common Core standards for Grades 5–8.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Kyndra Path</h3>
            <p>Career-aligned microtracks in AI, coding, media, and entrepreneurship.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Kyndra Insight</h3>
            <p>Personalized diagnostics, live progress dashboards, and adaptive learning profiles.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">KyndraAI</h3>
            <p>Our custom-built AI engine delivers real-time tutoring, smart feedback, and infinite personalization.</p>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="mt-20 max-w-4xl mx-auto text-left" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Who Is Kyndra For?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Parents</strong> seeking flexible, future-ready education for their children.</li>
            <li><strong>Microschools</strong> and homeschool pods ready to scale with turnkey tools.</li>
            <li><strong>States and Voucher Programs</strong> aiming to lower costs while increasing access.</li>
            <li><strong>Teachers</strong> looking to multiply their impact with AI-powered tools.</li>
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="mt-20 max-w-5xl mx-auto text-left space-y-8" data-aos="fade-up">
          <div>
            <h3 className="text-2xl font-bold text-blue-700">For Parents</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Peace of mind: safe, supportive environment</li>
              <li>Affordable private school experience via vouchers</li>
              <li>Full control and visibility through real-time dashboards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700">For Students</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Learn at their own pace</li>
              <li>Choose real-world career tracks</li>
              <li>Thrive without social pressures</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700">For Educators</h3>
            <ul className="list-disc list-inside ml-4">
              <li>AI-assisted teaching tools</li>
              <li>Remote delivery of content to any group size</li>
              <li>Lower burnout, higher impact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700">For Government & Vouchers</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Lower per-student cost</li>
              <li>Instant scaling in rural and underserved regions</li>
              <li>Data-driven insights into student performance</li>
            </ul>
          </div>
        </section>

        {/* SAFETY */}
        <section className="mt-20 max-w-4xl mx-auto" data-aos="fade-in">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Safety First</h2>
          <blockquote className="italic text-gray-600">"Every parent wants the best for their child. But above all, they want them safe."</blockquote>
          <p className="mt-4">Kyndra eliminates the risks associated with physical schools. No lockdown drills. No bullying. No violence. Just a safe space for learning, growing, and thriving.</p>
        </section>

        {/* MISSION */}
        <section className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p>To make world-class personalized education universally accessible, emotionally safe, and endlessly scalable.</p>
        </section>

        {/* CTA SECTION */}
        <section className="mt-20 max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Join the Movement</h2>
          <p className="mb-4">We work with families, schools, investors, researchers, and microschool operators aligned with our mission to reimagine education.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800">Join Early Access</a>
            <a href="#" className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800">Download Whitepaper</a>
            <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Partner With Us</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 text-sm text-gray-500">
          © {new Date().getFullYear()} Kyndra – hello@quartermasters.me
        </footer>
      </main>
    </>
  )
}
