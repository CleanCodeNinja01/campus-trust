import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to CampusTrust</h1>
        <p className="text-xl mb-8">Your trusted platform for connecting students and tutors.</p>
        <Link href="/signup">
          <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get Started
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-white/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Find Tutors</h3>
            <p>Browse through a list of qualified tutors for various subjects.</p>
          </div>
          <div className="p-8 border border-white/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Become a Tutor</h3>
            <p>Share your knowledge and earn money by becoming a tutor.</p>
          </div>
          <div className="p-8 border border-white/20 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
            <p>Our platform ensures secure and hassle-free payment processing.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Join our community of learners and educators today.</p>
        <Link href="/signup">
          <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Sign Up Now
          </a>
        </Link>
      </section>
    </div>
  )
}
