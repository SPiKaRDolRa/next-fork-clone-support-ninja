import Image from 'next/image';

const ContentSection = () => {
  return (
    <div className="bg-[#F7E1D2] text-gray-900">
      {/* Hero Section */}
      <section className="bg-beige py-10">
        <div className="max-w-6xl mx-auto p-6 flex items-center bg-[#BFC1B9] rounded-xl">
          <p className="text-lg font-medium max-w-[395px]">Driving better business results for 200+ companies.</p>
          <div className="flex justify-center mt-4">
            {/* Logos of companies (Placeholder images) */}
            <Image src="/logos.png" alt="Company Logos" width={400} height={50} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
            <Image src="/illustration.png" alt="Illustration" width={400} height={300} />
          </div>
          <div className='text-black'>
            <h2 className="text-3xl font-semibold">Free up resources, accelerate growth, and solve for scale.</h2>
            <p className="mt-4 text-gray-300">
              At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.
              Our customized, agile, AI-enabled solutions don't just deliver cost savings — they also help you achieve key business outcomes.
              We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you're never locked into rigid, long-term contracts.
              Now that's outsourcing worth talking about.</p>
          </div>
        </div>
      </section>

      {/* Clients Testimonials */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Why our clients stick with us</h2>
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <p className="italic">"Superskills is really responsive and flexible..."</p>
            <p className="mt-2 text-sm font-semibold">- Client Name, Head of HR</p>
          </div>
        </div>
      </section>

      {/* Talent Network Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Spanning a wider world of talent</h2>
          <p className="mt-4 text-gray-700">We help you access talent globally...</p>
          <button className="mt-6 bg-green-600 text-white py-2 px-6 rounded">Get Started</button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">We're better <span className="italic">together.</span></h2>
          <p className="mt-4">Start building your dream team.</p>
          <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded">Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default ContentSection;