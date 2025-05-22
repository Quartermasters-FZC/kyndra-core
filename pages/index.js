import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyndra – The Future of Personalized Learning</title>
        <meta name="description" content="Kyndra is an AI-powered P-SaaS platform transforming education." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white text-gray-800 min-h-screen px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-800">Welcome to Kyndra</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Kyndra is a future-ready, AI-powered Private School-as-a-Service (P-SaaS) platform built for the school choice revolution.
        </p>

        <div className="mt-12 space-y-4">
          <a href="/market-research.html" className="text-blue-600 underline">📊 Market Research</a>
          <a href="/kyndra-infographic.html" className="text-green-600 underline">📈 Infographic</a>
          <a
            href="https://docs.google.com/document/d/1egcEePWUn3Q9pUhUPf_CLNVxIiW0uIhv9sb1v0IpBoY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline"
          >
            📄 Full Report
          </a>
        </div>

        <footer className="mt-20 text-sm text-gray-400">
          © {new Date().getFullYear()} Kyndra – hello@quartermasters.me
        </footer>
      </main>
    </>
  );
}
