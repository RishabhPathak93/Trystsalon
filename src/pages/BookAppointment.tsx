import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';

const BookAppointment = () => {
  return (
    <div className="bg-champagne_pink/10 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-lora text-salon-purple mb-4">
            Appointment
          </h1>
          <p className="text-lg text-jet/70 max-w-2xl mx-auto">
            Schedule your next salon visit with us. Complete the form below and we'll confirm your appointment shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookingForm />
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md h-full"
            >
              <SectionTitle
                title="Contact Information"
                subtitle="Feel free to reach us directly via phone or email."
              />

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-salon-purple mb-2">Bangalore</h3>
                  <p className="flex items-center text-jet/70 mb-1">
                    <svg className="w-5 h-5 mr-2 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+918880903903" className="hover:text-salon-purple transition-colors">
                      +91 8880903903
                    </a>
                  </p>
                  <p className="flex items-start text-jet/70">
                    <svg className="w-5 h-5 mr-2 text-salon-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      #123, Indiranagar, 100 Feet Road,<br />
                      Bangalore - 560038
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-salon-purple mb-2">Chennai</h3>
                  <p className="flex items-center text-jet/70 mb-1">
                    <svg className="w-5 h-5 mr-2 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+917811903903" className="hover:text-salon-purple transition-colors">
                      +91 7811903903
                    </a>
                  </p>
                  <p className="flex items-start text-jet/70">
                    <svg className="w-5 h-5 mr-2 text-salon-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      #45, Nungambakkam High Road,<br />
                      Chennai - 600034
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-salon-purple mb-2">Hyderabad</h3>
                  <p className="flex items-center text-jet/70 mb-1">
                    <svg className="w-5 h-5 mr-2 text-salon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+917601903903" className="hover:text-salon-purple transition-colors">
                      +91 7601903903
                    </a>
                  </p>
                  <p className="flex items-start text-jet/70">
                    <svg className="w-5 h-5 mr-2 text-salon-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      #78, Jubilee Hills, Road No. 36,<br />
                      Hyderabad - 500033
                    </span>
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-salon-purple mb-3">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
