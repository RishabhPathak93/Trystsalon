import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Careers = () => {
  return (
    <div className="min-h-screen py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-lora text-salon-purple">
            Let's Create a Beautiful World, One Appointment at a Time.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-jet/70">
            Since our inception in 2004, we have been a part of life-changing makeovers, red-carpet claim-to-fame looks, spa birthday celebrations, show stoppers, indulgent days of self-love, and a lot more. You are in the right place if you'd love to be a part of our journey as we set out to transform beauty practices and surround ourselves with beautiful people.
          </p>
          <p className="mt-4 font-bold text-jet">
            Here's to helping people look good, and feel great.
          </p>
        </motion.div>

        <div className="p-8 rounded-lg shadow-md bg-champagne-pink/10">
          <h2 className="mb-8 text-2xl text-center md:text-3xl font-lora text-salon-purple">
            Apply to Join Our Team
          </h2>

          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-jet">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-jet">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-jet">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="city" className="block mb-1 text-sm font-medium text-jet">
                City
              </label>
              <select
                id="city"
                name="city"
                required
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              >
                <option value="">Select City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            <div>
              <label htmlFor="position" className="block mb-1 text-sm font-medium text-jet">
                Applying for
              </label>
              <select
                id="position"
                name="position"
                required
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              >
                <option value="">Select Position</option>
                <option value="Stylist">Stylist</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <div>
              <label htmlFor="cv" className="block mb-1 text-sm font-medium text-jet">
                Submit CV
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 text-white transition-colors rounded-md bg-salon-purple hover:bg-salon-purple/90 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers; 