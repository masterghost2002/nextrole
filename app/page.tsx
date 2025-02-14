"use client";
import { CardStack } from "@/components/ui/card-stack";
import { motion } from "framer-motion";

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Software Engineer",
      content:
        "NextRole helped me negotiate a 30% higher salary in my new position!",
    },
    {
      id: 2,
      name: "Mike Chen",
      designation: "Product Manager",
      content:
        "The interview insights were invaluable. Landed my dream job at a top tech company.",
    },
    {
      id: 3,
      name: "Lisa Parker",
      designation: "UX Designer",
      content:
        "The anonymous reviews helped me avoid toxic work environments. Thank you NextRole!",
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
            Sign Up
          </button>
        </nav>

        {/* Hero Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-[#03051E] text-6xl sm:text-7xl font-black leading-tight">
              Your Next Role,
              <span className="text-[#D91656]"> Revealed.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Get insider insights on salaries, work culture, and interview
              experiences to make your next career move with confidence.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <button className="px-8 py-3 bg-[#D91656] text-white transform hover:translate-y-[-2px] transition-all border-2 border-[#03051E] ">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-[#03051E] text-[#03051E] hover:bg-[#03051E] hover:text-white transform hover:translate-y-[-2px] transition-all ">
                Explore Companies
              </button>
            </div>
          </motion.div>

          {/* Hero Decoration */}
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

        {/* How It Works Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-[#03051E] mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Sign Up", icon: "🎯" },
              { title: "Explore Companies", icon: "🔍" },
              { title: "Get Insights", icon: "💡" },
              { title: "Make Your Move", icon: "🚀" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 border-2 border-[#03051E] hover:bg-[#03051E] hover:text-white transition-all group"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Step {index + 1} of your journey to finding the perfect role.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-[#03051E] mb-16">
            What Users Are Saying
          </h2>
          <div className="flex justify-center">
            <CardStack items={testimonials} />
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
