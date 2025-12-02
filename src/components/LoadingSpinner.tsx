'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900" dir="rtl">
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Bubbles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Bubble 1 - Top Left */}
          <motion.div
            className="absolute -top-16 -left-12 h-3 w-3 rounded-full bg-[#00E186]"
            animate={{
              y: [-10, -30, -10],
              x: [-5, 5, -5],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bubble 2 - Top Right */}
          <motion.div
            className="absolute -top-20 -right-8 h-4 w-4 rounded-full bg-[#2077FF]"
            animate={{
              y: [-15, -35, -15],
              x: [5, -5, 5],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />

          {/* Bubble 3 - Left */}
          <motion.div
            className="absolute -left-20 top-0 h-5 w-5 rounded-full bg-[#00E186]"
            animate={{
              y: [-20, 20, -20],
              x: [-10, -5, -10],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Bubble 4 - Right */}
          <motion.div
            className="absolute -right-16 top-4 h-3 w-3 rounded-full bg-[#2077FF]"
            animate={{
              y: [10, -20, 10],
              x: [5, 10, 5],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          />

          {/* Bubble 5 - Bottom Left */}
          <motion.div
            className="absolute -bottom-12 -left-14 h-4 w-4 rounded-full bg-[#00E186]"
            animate={{
              y: [15, -10, 15],
              x: [-5, 5, -5],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />

          {/* Bubble 6 - Bottom Right */}
          <motion.div
            className="absolute -bottom-16 -right-10 h-3 w-3 rounded-full bg-[#2077FF]"
            animate={{
              y: [20, -5, 20],
              x: [5, -5, 5],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />

          {/* Small Bubble 7 - Top Center */}
          <motion.div
            className="absolute -top-24 left-1/2 h-2 w-2 rounded-full bg-[#00E186]"
            animate={{
              y: [-10, -25, -10],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          />

          {/* Small Bubble 8 - Bottom Center */}
          <motion.div
            className="absolute -bottom-20 left-1/2 h-2 w-2 rounded-full bg-[#2077FF]"
            animate={{
              y: [15, -8, 15],
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1,
            }}
          />
        </div>

        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [0.9, 1.05, 1] }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.7, 1],
          }}
          className="relative z-10 mb-6"
        >
          <Image
            src="/imgs/logo.jpg"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-2xl shadow-lg"
            priority
          />
        </motion.div>

        {/* Loading Text with Pulsing Animation */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-lg font-medium text-gray-700 dark:text-white"
        >
          جاري التحميل…
        </motion.p>
      </div>
    </div>
  );
}
