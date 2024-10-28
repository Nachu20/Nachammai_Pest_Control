import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must contain at least 3 characters" })
      .max(20, { message: "Name must contain at most 20 characters" }),
    
    email: z.string().email({ message: "Email is required" }),

    mobile: z
      .string()
      .length(10, { message: "Mobile number must be exactly 10 digits" })
      .regex(/^[0-9]+$/, { message: "Mobile number must be digits only" }),

    message: z
      .string()
      .min(5, { message: "Your message must contain at least 5 characters" })
      .max(250, {
        message: "Your message must contain at most 250 characters",
      }),
  });

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  const sendMail = (formData) => {
    
    const serviceID = "service_rpz8s8f"; // service id from emailjs
    const templateID = "template_48u2diq"; // template id from emailjs
    const userID = "oDpIL0_AXnp-RjuNm"; // user id from emailjs
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile, // Include mobile number in the params
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Message failed to send, Please try again.");
      }
    );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.section className=" py-14" variants={fadeIn} initial="hidden" animate="visible" >
      <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
        <div className="flex justify-center items-center text-[#18311C] mb-5 md:mb-8">
          <h1 className="text-center text-4xl md:text-5xl">Book Now</h1> 
        </div>

        <p className="md:text-xl text-[#18311C] text-center mb-8 mx-auto max-w-xl">
          We’d love to hear from you! Just fill out the form, and our expert
          team will be ready to contact you.
        </p>

        <form
          action=""
          onSubmit={handleSubmit(sendMail)}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div>
            <label htmlFor="name" className="text-[#18311C] font-bold text-lg block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-black focus:border-indigo-700 focus:outline-none"
            />
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.name?.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[#18311C] font-bold text-lg block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-black focus:border-indigo-700 focus:outline-none"
            />
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.email?.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="text-[#18311C] font-bold text-lg block mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter your mobile number"
              {...register("mobile")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-black focus:border-indigo-700 focus:outline-none"
            />
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.mobile?.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-[#18311C] font-bold text-lg block mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message"
              {...register("message")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-black focus:border-indigo-700 focus:outline-none"
            ></textarea>
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.message?.message}
              </small>
            )}

            <div className="mt-7">
              <button className="px-5 py-2.5 rounded-lg text-white bg-[#172e1c] font-semibold transition-all hover:transition-all hover:bg-green-500">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUs;
