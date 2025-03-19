import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F7E1D2] py-16 text-center">
      {/* Top Text */}
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#2B2C30] leading-[47px]">
        Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power your growth.
      </p>

      {/* Heading */}
      <h1 className="mt-6 text-4xl md:text-6xl font-normal text-[#2B2C30] leading-[108px]">
        Outsourcing worth talking about
      </h1>

      {/* Divider */}
      <hr className="mt-8 w-4/5 mx-auto border-[#BFC1B9]" />

      {/* Question */}
      <h2 className="mt-10 text-2xl font-bold text-[#2B2C30]">
        Which outsourcing solutions are you looking for?
      </h2>
      <p className="text-md text-[#2B2C30]">Choose as many as you need.</p>

      {/* Options */}
      <div className="flex w-full justify-center">
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4/5">
          {[
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg", title: "Customer Experience" },
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp", title: "Customer Support" },
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp", title: "Technical Customer Support" },
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp", title: "Content Moderation" },
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp", title: "Data Processing" },
            { img: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp", title: "Finance & Accounting" },
          ].map((item, index) => (
            <div key={index} className="relative hover:bg-white bg-[#FBEEE6] bg-opacity-50 rounded-lg p-4 text-center hover:shadow-md">
              <img src={item.img} alt={item.title} className="mx-auto w-28 h-28" />
              <p className="mt-4 font-bold text-[#2B2C30]">{item.title}</p>
              <input type="checkbox" className="absolute top-3 right-3 w-5 h-5 border border-gray-500 rounded-md" />
            </div>
          ))}
        </div>
      </div>
     

      {/* Get Started Button */}
      <div className="mt-12">
        <a
          href="/get-started"
          className="bg-[#EE4B4A] text-white py-3 px-8 rounded-full text-lg font-medium flex items-center justify-center mx-auto w-[230px] hover:bg-red-600 transition"
        >
          Get Started
          <div className="ml-3 w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <span className="text-[#EE4B4A] text-xl">→</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
