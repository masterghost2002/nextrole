'use client';
import { motion } from 'framer-motion';
import { testimonials, howItWorks } from '@/constant/landing-page';
import { SignUpButton, LoginButton } from '@/components/auth-buttons';
import { SearchCheck, ShieldCheck, Infinity, VenetianMask } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <div className="group relative cursor-pointer text-4xl font-black text-[#03051E]">
            Next<span className="text-[#D91656]">Role</span>
            <div className="absolute -bottom-2 left-0 h-1 w-0 bg-[#D91656] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <SignUpButton className="w-[120px]">Sign Up</SignUpButton>
        </nav>

        {/* Section 1: Hero Section */}
        <div className="grid grid-cols-1 items-center gap-12 md:py-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-black leading-tight text-[#03051E] sm:text-6xl">
              Unlock Real Insights
              <span className="text-[#D91656]"> Anonymously</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-600">
              Get honest interview experiences, work culture insights, salary
              ranges, and connect with a community of professionals – all
              anonymously.
            </p>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <SignUpButton className="w-full">
                Sign Up with Google
              </SignUpButton>
              <LoginButton className="w-full">Log In</LoginButton>
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
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#D91656] opacity-10 blur-3xl"></div>
            <div className="rounded-3xl border-4 border-[#03051E] bg-white p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  <SearchCheck key="search" />,
                  <ShieldCheck key="shield" />,
                  <Infinity key="infinity" />,
                  <VenetianMask key="venetian" />
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-[#F7F7F7] p-4"
                  >
                    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#D91656]/10 to-[#03051E]/10">
                      {React.cloneElement(icon, {
                        className: 'w-8 h-8 md:w-12 md:h-12 text-[#D91656]',
                        strokeWidth: 1.5
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: What We Provide */}
        <div className="py-12 sm:py-20">
          <div className="mb-12 space-y-4 sm:mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl">
              What We <span className="text-[#D91656]">Provide</span>
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600 sm:text-xl">
              Everything you need to make informed career decisions, all in one
              place.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left side - Interview & Culture */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group relative"
              >
                <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-[#D91656]/10 to-transparent transition-all duration-300 group-hover:scale-105" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                    <span className="text-4xl sm:text-5xl">🎯</span>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-neutral-900 sm:mb-3 sm:text-2xl">
                        Interview{' '}
                        <span className="text-[#D91656]">Experiences</span>
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
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
                className="group relative"
              >
                <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-[#D91656]/10 to-transparent transition-all duration-300 group-hover:scale-105" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                    <span className="text-4xl sm:text-5xl">🔍</span>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-neutral-900 sm:mb-3 sm:text-2xl">
                        Work Culture{' '}
                        <span className="text-[#D91656]">Insights</span>
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
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
                className="group relative"
              >
                <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-[#D91656]/10 to-transparent transition-all duration-300 group-hover:scale-105" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                    <span className="text-4xl sm:text-5xl">💰</span>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-neutral-900 sm:mb-3 sm:text-2xl">
                        Salary <span className="text-[#D91656]">Ranges</span>
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
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
                className="group relative"
              >
                <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-[#D91656]/10 to-transparent transition-all duration-300 group-hover:scale-105" />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                    <span className="text-4xl sm:text-5xl">👥</span>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-neutral-900 sm:mb-3 sm:text-2xl">
                        Anonymous{' '}
                        <span className="text-[#D91656]">Community</span>
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
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

        {/* Section 3: Testimonials  */}
        <div className="py-6 sm:py-20 md:py-12">
          <div className="mb-12 space-y-4 sm:mb-16">
            <h2 className="text-3xl font-bold leading-normal text-neutral-900 sm:text-4xl lg:text-5xl">
              USER<span className="text-[#D91656]">.STORIES</span>()
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600 sm:text-xl">
              Real stories from professionals who've found success with
              NextRole.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-[80%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#D91656] opacity-5 blur-3xl"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 transform rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105" />
                  <div className="relative rounded-2xl border-2 border-neutral-900/10 p-8">
                    <div className="mb-6">
                      <svg
                        className="h-10 w-10 text-[#D91656]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <p className="mb-6 italic leading-relaxed text-neutral-600">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D91656] to-[#03051E] font-bold text-white">
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

        {/* Section 4: How It Works - Revamped */}
        <div className="md:py- py-6">
          <div className="mb-12 space-y-4 sm:mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl">
              How It <span className="text-[#D91656]">Works</span>
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600 sm:text-xl">
              Get started in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute bottom-0 left-8 top-0 hidden w-1 bg-neutral-200 sm:left-1/2 sm:block" />

            {/* Steps */}
            <div className="space-y-12 sm:space-y-24">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative">
                  {/* Step Number Circle - Mobile */}
                  <div className="absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#D91656] text-sm font-bold text-white sm:hidden">
                    {item.step}
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: item.align === 'left' ? -20 : 20
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative ml-16 sm:ml-0 sm:w-1/2 ${
                      item.align === 'right' ? 'sm:ml-auto' : 'sm:mr-auto'
                    } ${item.align === 'left' ? 'sm:pr-16' : 'sm:pl-16'}`}
                  >
                    {/* Step Number Circle - Desktop */}
                    <div
                      className={`absolute top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-[#D91656] text-lg font-bold text-white sm:flex ${
                        item.align === 'left' ? 'right-10' : 'left-10'
                      } -translate-y-1/4 transform`}
                    >
                      {item.step}
                    </div>

                    {/* Content Card */}
                    <div className="group relative">
                      <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-[#D91656]/10 to-transparent transition-all duration-300 group-hover:scale-105" />
                      <div className="relative p-6 sm:p-8">
                        <div className="flex flex-col gap-4">
                          <span className="text-4xl sm:text-5xl">
                            {item.icon}
                          </span>
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-neutral-900 sm:text-2xl">
                              {item.title}
                            </h3>
                            <p className="leading-relaxed text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <SignUpButton className="w-full md:w-[200px]">
              Get Started Now
            </SignUpButton>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t-2 border-[#03051E] py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#03051E]">NextRole</h3>
              <p className="text-gray-600">
                Your next career move starts here.
              </p>
            </div>
            {['Company', 'Resources', 'Legal', 'Connect'].map((section) => (
              <div key={section} className="space-y-4">
                <h4 className="text-lg font-bold text-[#03051E]">{section}</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer text-gray-600 hover:text-[#D91656]"
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
