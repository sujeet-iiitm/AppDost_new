import { Smartphone, Globe, Code, Palette, Cloud, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technologies like React Native and Flutter.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, fast, and SEO-optimized websites that deliver exceptional user experiences across all devices.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that captivate users and create memorable digital experiences.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Robust security implementations and ongoing maintenance to keep your applications running smoothly.',
    gradient: 'from-rose-500 to-pink-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 block">
            WHAT WE OFFER
          </span>
          <h2 className="mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-transparent hover:border-blue-200 transition-all duration-300 group hover:shadow-xl bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-4`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
