"use client";
import { CardStack } from "@/components/ui/card-stack";
import { motion } from "framer-motion";

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "John D.",
      designation: "Software Engineer",
      content:
        "This platform helped me ace my interview by giving me real insights into the process. Highly recommend!",
    },
    {
      id: 2,
      name: "Sarah L.",
      designation: "Product Manager",
      content:
        "I love how I can share my experiences anonymously without any fear. Great community!",
    },
    {
      id: 3,
      name: "Mike T.",
      designation: "Data Scientist",
      content:
        "The salary data is spot on! It helped me negotiate a better offer.",
    },
    {
      id: 4,
      name: "Emily R.",
      designation: "UX Designer",
      content:
        "A must-use platform for anyone looking to understand company culture before joining.",
    },
  ];

  return (
    <main className="bg-[#F7F7F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="py-6 flex justify-between items-center">
          <div className="text-4xl font-black text-[#03051E] relative group cursor-pointer">
            Next<span className="text-[#D91656]">Role</span>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#D91656] group-hover:w-full transition-all duration-300"></div>
          </div>
          <button className="px-6 py-2 bg-[#D91656] text-white transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E]">
            Sign Up with Google
          </button>
        </nav>

        {/* Section 1: Hero Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-[#03051E] text-5xl sm:text-6xl font-black leading-tight">
              Unlock Real Insights
              <span className="text-[#D91656]"> Anonymously</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Get honest interview experiences, work culture insights, salary
              ranges, and connect with a community of professionals – all
              anonymously.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#D91656] text-white transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E]">
                Sign Up with Google
              </button>
              <button className="px-8 py-3 border-2 border-[#03051E] text-[#03051E] hover:bg-[#03051E] hover:text-white transform hover:translate-y-[-2px] transition-all">
                Log In
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>✓ Anonymous Posting</span>
              <span>✓ Real Insights</span>
              <span>✓ Trusted Community</span>
              <span>✓ Free Forever</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -z-10 w-72 h-72 bg-[#D91656] rounded-full opacity-10 blur-3xl right-0 top-0"></div>
            <div className="border-4 border-[#03051E] rounded-3xl p-8 bg-white">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-[#F7F7F7] p-4 rounded-xl border border-gray-200"
                  >
                    <div className="w-full h-24 rounded-lg bg-gradient-to-br from-[#D91656]/10 to-[#03051E]/10"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: What We Provide - Enhanced & Mobile Responsive */}
        <div className="py-12 sm:py-20">
          <div className="space-y-4 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900">
              What We <span className="text-[#D91656]">Provide</span>
            </h2>
            <p className="text-neutral-600 text-lg sm:text-xl max-w-2xl">
              Everything you need to make informed career decisions, all in one
              place.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left side - Interview & Culture */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D91656]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <span className="text-4xl sm:text-5xl">🎯</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
                        Interview{" "}
                        <span className="text-[#D91656]">Experiences</span>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Access a vast library of real interview experiences.
                        Learn from others' journeys, common questions, and
                        insider tips to ace your next interview.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D91656]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <span className="text-4xl sm:text-5xl">🔍</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
                        Work Culture{" "}
                        <span className="text-[#D91656]">Insights</span>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Get an unfiltered look into company cultures. Real
                        stories from real employees help you make informed
                        decisions about your next career move.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Salary & Community */}
            <div className="space-y-6 sm:space-y-8 lg:pt-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D91656]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <span className="text-4xl sm:text-5xl">💰</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
                        Salary <span className="text-[#D91656]">Ranges</span>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Make informed salary decisions with our comprehensive
                        database of verified compensation data across different
                        roles and experience levels.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D91656]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <span className="text-4xl sm:text-5xl">👥</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
                        Anonymous{" "}
                        <span className="text-[#D91656]">Community</span>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Join a thriving community of professionals sharing
                        experiences and advice, all while maintaining complete
                        anonymity.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 3: Testimonials - Enhanced */}
        <div className="py-12 sm:py-20">
          <div className="space-y-4 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900">
              What Our <span className="text-[#D91656]">Users</span> Say
            </h2>
            <p className="text-neutral-600 text-lg sm:text-xl max-w-2xl">
              Real stories from professionals who've found success with
              NextRole.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-96 h-96 bg-[#D91656] rounded-full opacity-5 blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition-all duration-300" />
                  <div className="relative p-8 rounded-2xl border-2 border-neutral-900/10">
                    <div className="mb-6">
                      <svg
                        className="w-10 h-10 text-[#D91656]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <p className="text-neutral-600 mb-6 leading-relaxed italic">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D91656] to-[#03051E] rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: How It Works */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-[#03051E] mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sign Up with Google",
                icon: "🔐",
                description:
                  "Create your account in seconds using your Google login.",
              },
              {
                title: "Explore Anonymously",
                icon: "🔍",
                description:
                  "Browse interview experiences, work culture, and salary data without revealing your identity.",
              },
              {
                title: "Post & Connect",
                icon: "✍️",
                description:
                  "Share your experiences, ask questions, and connect with others – all anonymously.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 border-2 border-[#03051E] hover:bg-[#03051E] hover:text-white transition-all group rounded-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#D91656] text-white transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E] text-lg">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 border-t-2 border-[#03051E]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#03051E]">NextRole</h3>
              <p className="text-gray-600">
                Your next career move starts here.
              </p>
            </div>
            {["Company", "Resources", "Legal", "Connect"].map((section) => (
              <div key={section} className="space-y-4">
                <h4 className="text-lg font-bold text-[#03051E]">{section}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 hover:text-[#D91656] cursor-pointer"
                    >
                      {section} Link {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-600">
            © 2024 NextRole. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
