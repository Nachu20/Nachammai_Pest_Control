import React from 'react'
import ContactUs from '../Components/ContactUS'

const About = () => {
  return (
    <div>
      <section className="relative bg-[url('/images/banner2.webp')] bg-center bg-no-repeat bg-cover min-h-[600px] flex justify-center items-center">
        <h1 className=" text-black text-5xl md:text-6xl font-semibold">
          About Us
        </h1>
      </section>

      <section className="pt-8 md:pt-14 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Vision & mission
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We focus on making the best resource, for an excellent Growing
                media. We are specializing in a wide range of value-added coir
                products. Our dream is to support and cater globally to a
                sustainable day-to-day living with our eco-friendly products.
                Grow as the best sustainable agro supplier ensuring sufficient
                supply with high quality, having in mind, the protection of our
                environment and natural resources.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/ourvisionandmission.png"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="pt-8 md:pt-14 pb-10 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-brown900 mb-4">
                Our Team
              </h2>
              <img
                src="/images/ourteam.png"
                alt="ourteamimage"
                className="object-cover rounded-lg mb-3 md:mb-10"
              />
            </div>
            <p className="text-[#333333] leading-relaxed md:text-xl">
              Over the past 40 years, our family had standard experience growing
              coconuts on our farms with immediate production farms to the
              growing medium. We are successful third-generation young
              entrepreneurs entirely focusing on long-term business. So as we
              started a new venture in the same industry to add more valuable
              products.
            </p>
          </div>
        </div>
      </section>


      <ContactUs/>
    </div>
  )
}

export default About