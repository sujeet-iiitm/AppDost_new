import { Button } from './ui/button';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import Lightning from './Lighting';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface arr {
  title : string,
  logo : string,
  description : string,
}
const array : arr  = [
  {title :  "Web Development",
   logo : "💻",
   description : "+10 Projects"
  },
  {title :  "Mobile Apps",
   logo : "📱",
   description : "+4 Apps"
  },
  {title :  "Fast Delivery",
   logo : "⚡",
   description : "On Time"
  },

]
export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700">Your App Development Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="block text-slate-800 mb-2">Transform Your Ideas Into</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Powerful Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 mb-8 max-w-lg"
            >
              We craft stunning mobile apps, responsive websites, and cutting-edge software solutions 
              that drive real business results. Your success is our mission.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50+', label: 'Team Members' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="relative w-3/4 max-w-3xl mx-auto"
    >
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl blur-3xl opacity-30" />

      {/* Foreground glass card container */}
      <div className="relative bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {array.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
              }}
              className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="text-4xl mb-3 drop-shadow-lg">{item.logo}</div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700/80 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
        </div>
      </div>
    </section>
  );
}
