import { useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  { id: 1, name: 'Bangalore - Indiranagar' },
  { id: 2, name: 'Bangalore - Koramangala' },
  { id: 3, name: 'Bangalore - Whitefield' },
  { id: 4, name: 'Chennai - Nungambakkam' },
  { id: 5, name: 'Chennai - Adyar' },
  { id: 6, name: 'Hyderabad - Jubilee Hills' },
  { id: 7, name: 'Hyderabad - Gachibowli' },
];

const services = [
  { 
    id: 1, 
    name: 'Microblading', 
    category: 'Brow Services', 
    icon: '✏️' 
  },
  { 
    id: 2, 
    name: 'Microshading', 
    category: 'Brow Services', 
    icon: '🖌️' 
  },
  { 
    id: 3, 
    name: 'Fusion', 
    category: 'Brow Services', 
    icon: '🌈' 
  },
  { 
    id: 4, 
    name: 'Lip Blushing', 
    category: 'Lip Services', 
    icon: '💋' 
  },
  { 
    id: 5, 
    name: 'Tattoo', 
    category: 'Special Services', 
    icon: '🎨' 
  },
  { 
    id: 6, 
    name: 'Lip Tinting / Dark Lip Neutralization', 
    category: 'Lip Services', 
    icon: '💄' 
  },
  { 
    id: 7, 
    name: 'Beauty Spot', 
    category: 'Special Services', 
    icon: '✨' 
  },
  { 
    id: 8, 
    name: 'Lash Lift', 
    category: 'Lash Services', 
    icon: '👁️' 
  },
  { 
    id: 9, 
    name: 'Brow Lamination', 
    category: 'Brow Services', 
    icon: '🌟' 
  },
  { 
    id: 10, 
    name: 'Brow Tinting', 
    category: 'Brow Services', 
    icon: '🖌️' 
  },
  { 
    id: 11, 
    name: 'Lash Tinting', 
    category: 'Lash Services', 
    icon: '👀' 
  },
  { 
    id: 12, 
    name: 'Classic Extensions', 
    category: 'Lash Services', 
    icon: '✨' 
  },
  { 
    id: 13, 
    name: 'Russian Volume Extensions', 
    category: 'Lash Services', 
    icon: '🌟' 
  },
  { 
    id: 14, 
    name: 'Body Massages', 
    category: 'Body Services', 
    icon: '💆' 
  },
  { 
    id: 15, 
    name: 'Body Beautifiers', 
    category: 'Body Services', 
    icon: '✨' 
  },
  { 
    id: 16, 
    name: 'Couples Massage', 
    category: 'Body Services', 
    icon: '❤️' 
  },
  { 
    id: 17, 
    name: 'Nail Extension/Art', 
    category: 'Nail Services', 
    icon: '💅' 
  },
  { 
    id: 18, 
    name: 'Mani-Pedi', 
    category: 'Nail Services', 
    icon: '💖' 
  }
];

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    location: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          location: '',
          service: '',
          date: '',
          time: '',
          notes: ''
        });
        setStep(1);
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  if (submitted) {
    return (
      <motion.div
        className="p-8 text-center bg-white rounded-lg shadow-md md:p-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mb-4 text-2xl font-lora text-jet">Thank You!</h2>
        <p className="mb-6 text-jet/70">
          Your appointment request has been received. We'll contact you shortly to confirm your booking.
        </p>
        <p className="text-sm text-jet/50">
          A confirmation email has been sent to {formData.email}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md md:p-12">
      <h2 className="mb-8 text-2xl text-center md:text-3xl font-lora text-salon-purple">Book an Appointment</h2>

      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-salon-purple text-white' : 'bg-gray-200 text-gray-500'}`}>
            1
          </div>
          <div className={`w-12 h-1 ${step >= 2 ? 'bg-salon-purple' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-salon-purple text-white' : 'bg-gray-200 text-gray-500'}`}>
            2
          </div>
          <div className={`w-12 h-1 ${step >= 3 ? 'bg-salon-purple' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-salon-purple text-white' : 'bg-gray-200 text-gray-500'}`}>
            3
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-jet">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-jet">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-jet">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Your email"
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="w-full py-3 text-white transition-colors rounded-md bg-salon-purple hover:bg-salon-purple/90 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <label htmlFor="city" className="block mb-1 text-sm font-medium text-jet">
                City
              </label>
              <select
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              >
                <option value="">Select City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block mb-1 text-sm font-medium text-jet">
                Salon Location
              </label>
              <select
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium text-jet">
                Select Service
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                >
                  <option value="">Select a Service</option>
                  {Object.entries(
                    services.reduce((acc, service) => {
                      if (!acc[service.category]) acc[service.category] = [];
                      acc[service.category].push(service);
                      return acc;
                    }, {} as Record<string, typeof services>)
                  ).map(([category, categoryServices]) => (
                    <optgroup key={category} label={category}>
                      {categoryServices.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.icon} {service.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 py-3 transition-colors border rounded-md border-salon-purple text-salon-purple hover:bg-salon-purple/10 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-1/2 py-3 text-white transition-colors rounded-md bg-salon-purple hover:bg-salon-purple/90 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div>
              <label htmlFor="date" className="block mb-1 text-sm font-medium text-jet">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              />
            </div>

            <div>
              <label htmlFor="time" className="block mb-1 text-sm font-medium text-jet">
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block mb-1 text-sm font-medium text-jet">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 transition-colors border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-purple/30 focus:border-salon-purple"
                placeholder="Any specific requirements or preferences..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 py-3 transition-colors border rounded-md border-salon-purple text-salon-purple hover:bg-salon-purple/10 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center w-1/2 py-3 text-white transition-colors rounded-md bg-salon-purple hover:bg-salon-purple/90 focus:outline-none focus:ring-2 focus:ring-salon-purple/50"
              >
                {submitting ? (
                  <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Book Now"
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
