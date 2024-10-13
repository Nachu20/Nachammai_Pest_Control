import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; 
import { Contact } from 'lucide-react';
import ContactUs from '../Components/ContactUS';
import FAQ from '../Components/FAQ';
import RandomPointsGame from '../Components/RandomPointsGame';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const slideIn = {
        hidden: { x: '-100%' },
        visible: { x: 0, transition: { duration: 1 } }
    };

    const imageSlideIn = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    };

  return (
    <motion.div initial="hidden" animate="visible">
      <RandomPointsGame/>
        {/* Carousel */}
        <section className="slider-container overflow-hidden">
            <Slider {...settings}>
            <motion.div variants={fadeIn} className="bg-[url('/images/slide1.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="container text-center">
                    
                    <p className="font-bold text-3xl md:text-4xl lg:text-6xl text-stroke-2-brown900 text-white mb-7">
                    Helping you get rid of <br /> annoying pests
                    </p>

                    <Link to="/contact">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#172e1c] px-6 py-2 rounded-full text-white font-semibold text-xl md:text-2xl tracking-wide transition-all hover:transition-all hover:bg-green-800">
                        Contact Us
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[url('/images/slide2.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="text-center">
                    <p className="font-bold text-3xl md:text-4xl lg:text-6xl text-stroke-2-brown900 text-white mb-7">
                    Best solutions to avoid disease <br /> causing pests
                    </p>

                    <Link to="/services">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#172e1c] px-6 py-2 rounded-full text-white font-semibold text-xl md:text-2xl tracking-wide">
                        Services
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[url('/images/slide3.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="text-center">
                   
                    <p className="font-bold text-3xl md:text-4xl lg:text-6xl text-stroke-2-brown900 text-white mb-7">
                    Safe and effective pest <br /> control solutions
                    </p>

                    <Link to="/about">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-[#172e1c] px-6 py-2 rounded-full text-white font-semibold text-xl md:text-2xl tracking-wide">
                        About Us
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            </Slider>
        </section>

        {/*About Us*/}
        <motion.section variants={fadeIn} className="-mt-2 py-14 bg-teal-50 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <motion.div className="flex justify-center items-center text-[#18311c] font-bold mb-5 md:mb-8">
            <motion.h1 className="text-4xl md:text-5xl">About Us</motion.h1>
          </motion.div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-0 justify-between items-center">
            <motion.div variants={fadeIn} className="flex flex-col justify-start order-2 lg:order-1 gap-y-4">
              <h2 className="text-[#18311D] text-3xl font-bold leading-snug mt-4 lg:mt-0 lg:mb-2.5">
                NACHAMMAI PEST CONTROL
              </h2>
              <p className="text-[#18311C] text-justify leading-relaxed md:text-xl">
                Nachammai Pest Control provides comprehensive commercial and residential pest
                control solutions across Tamil Nadu. With over 5 years of experience, we have
                safeguarded numerous properties throughout the region, including schools,
                colleges, and organizations, earning the trust and satisfaction of our valued
                customers. As a leading pest control service, we offer a wide range of services, 
                including termite control, cockroach control, rodent control,
                ant control, mosquito control, and rat control, all at affordable rates.
                If you're engaged in gardening or organic farming in Tamil Nadu, we understand
                the importance of maintaining a healthy environment. Don't let stubborn weeds,
                millipedes, centipedes, or snakes disrupt your passion. Nachammai Pest Control
                offers hassle-free treatments for pre- and post-construction termite control
                and efficient bed bug control solutions. Take control of your space by scheduling
                a complimentary inspection for your residential or commercial property.
                Let us help you reclaim your environment and eliminate pests effectively—your pest-free life starts here!
              </p>

              <div className="mt-5 flex justify-end">
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.1 }} className="flex items-center text-white font-semibold underline-offset-1 bg-[#172e1c] text-lg px-5 py-2 rounded-lg shadow-md hover:bg-green-500 transition">
                    See More
                    <img
                      className="ml-0.5 h-6 w-6 -mr-2"
                      src="/icons/Right2.svg"
                      alt="Arrow icon"
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex justify-center flex-col lg:justify-end gap-4 items-center order-1 lg:order-2">
              <p className='text-[#18311C] text-justify leading-relaxed md:text-xl font-bold text-lg '>Find Out what can we do for you.
              </p>
              <p className='text-[#18311C] text-justify leading-relaxed md:text-xl font-bold text-lg'>Get in Touch Today for more information!
              </p>
              
              <button className='bg-[#172e1c] p-3 rounded-md text-white  font-semibold'><a href="tel:+91 9791171377">Call Now</a></button>
              <button className='bg-[#172e1c] p-3 rounded-md text-white font-semibold'><Link to='/contact'>Contact Us</Link></button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/*Pest Services*/}
      <motion.div variants={fadeIn} className="bg-teal-50 p-4 rounded-lg ">
           <h2 className="text-2xl text-center text-[#18311C] font-bold mb-4">What Kind of Pest Control Service Are You Looking For?</h2>
            <div className="grid grid-cols-3 mt-4 gap-4">
              <div className="flex flex-col items-center justify-center">
                <img src="/images/ants.gif" alt="" className='w-20 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Ants</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/roaches.gif" alt="" className='w-20 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Roaches</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/termites.gif" alt="" className='w-20 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Termites</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/spiders.gif" alt="" className='w-20 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Spiders</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/rats.gif" alt="" className='w-24 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Rats & Mice</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/bedbugs.gif" alt="" className='w-20 h-20' />
                <p className="text-[#18311C] mt-2 font-bold">Bed Bugs</p>
              </div>
            </div>
        </motion.div>

        {/*Technicians*/}

        <section className="pt-8 md:pt-14 bg-teal-50 ">
          <motion.h1 variants={fadeIn} className="mt-5 md:mt-0 text-3xl md:text-5xl text-center  text-[#18311C]">
            Profession Pest Control Technicians
          </motion.h1>
       </section>

       <motion.section variants={fadeIn} className="pt-8 md:pt-14  bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#18311C] mb-4">
                Pest Control Inspections done right 
              </h2>
              <p className="text-[#18311C] leading-relaxed md:text-xl">
                At Nachammai Pest Control, our team of professional pest control
                technicians is dedicated to providing high-quality pest management
                solutions across Tamil Nadu. With over 5 years of experience, our skilled
                technicians employ effective methods and eco-friendly products to tackle
                various pest issues, including termites, cockroaches, rodents, ants,
                mosquitoes, and rats. Their expertise ensures that we deliver reliable,
                safe, and efficient services to residential and commercial clients alike. 
                Trust our professionals to protect your property and create a pest-free environment for you and your loved ones.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/tech1.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-5 md:pt-14  bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-[#18311C] mb-4">
                Customized Treatment Plans
              </h2>
              <p className="text-[#18311C] leading-relaxed md:text-xl">
                 We understand that each pest problem
                 is unique, which is why we offer customized treatment plans tailored
                 to meet the specific needs of our clients across Tamil Nadu. Our
                 professional pest control technicians conduct thorough inspections
                 to assess the extent of the infestation and identify the types of pests
                 present. Based on this analysis, we develop targeted strategies that combine
                 effective methods and eco-friendly products to ensure optimal results.
                 Whether you're dealing with termites, cockroaches, rodents, or other pests,
                 our personalized approach guarantees that you receive the most effective solutions for a pest-free environment.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/tech2.jpg"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-8 md:pt-14  bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#18311C] mb-4">
                Your Pest Free Partners
              </h2>
              <p className="text-[#18311C] leading-relaxed md:text-xl">
                we believe in providing service on your time, 
                ensuring that pest control solutions fit seamlessly into your schedule.
                Our dedicated team of professional technicians is flexible and available
                to accommodate your needs, whether you require a prompt inspection or a tailored
                treatment plan. With over 5 years of experience, we prioritize your convenience while
                delivering effective, eco-friendly pest management solutions. Trust us to handle your
                pest issues efficiently, allowing you to enjoy a pest-free environment without disrupting your daily routine.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/tech3.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-5 md:pt-14  bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-[#18311C] mb-4">
                Service on your time
              </h2>
              <p className="text-[#18311C] leading-relaxed md:text-xl">
                At Nachammai Pest Control, we understand that your time is valuable.
                That’s why we offer service on your time, providing flexible scheduling
                options to meet your pest control needs. Whether it’s a residential or commercial
                property, our professional technicians are dedicated to accommodating your schedule, 
                ensuring that effective pest management doesn’t disrupt your daily routine. 
                With over 5 years of experience, we are committed to delivering prompt and reliable solutions, 
                allowing you to reclaim your space and enjoy a pest-free environment at your convenience.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/tech4.jpeg"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-8 md:pt-14  bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#18311C] mb-4">
                Free Service on next Service
              </h2>
              <p className="text-[#18311C] leading-relaxed md:text-xl">
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
                src="images/tech5.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>





        
        <motion.div variants={fadeIn} className="bg-teal-50 p-4 rounded-lg   ">
            <FAQ />
        </motion.div>
        
        {/*Contact*/}
        <motion.section variants={fadeIn} className="p-4">
          <ContactUs />
        </motion.section>
    </motion.div>
  );
};

export default Home;
