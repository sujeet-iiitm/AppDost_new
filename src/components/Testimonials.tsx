import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'AppDost transformed our vision into reality. Their expertise in mobile development helped us launch our app ahead of schedule with exceptional quality.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, FitLife',
    content: 'Working with AppDost was a game-changer. They understood our needs perfectly and delivered a product that exceeded our expectations. Highly recommended!',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, ShopEasy',
    content: 'The team\'s technical expertise and dedication to our project was outstanding. Our e-commerce platform is now faster and more user-friendly than ever.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'David Kumar',
    role: 'Product Manager, HealthHub',
    content: 'Exceptional service from start to finish. The AppDost team brought fresh ideas and innovative solutions to every challenge we faced.',
    rating: 5,
    initials: 'DK',
  },
  {
    name: 'Lisa Anderson',
    role: 'Director, FoodNow',
    content: 'Our food delivery app is a huge success thanks to AppDost. Their attention to detail and commitment to excellence is unmatched.',
    rating: 5,
    initials: 'LA',
  },
  {
    name: 'James Wilson',
    role: 'VP Engineering, DataViz',
    content: 'Professional, responsive, and highly skilled. AppDost delivered a complex analytics dashboard that our clients absolutely love.',
    rating: 5,
    initials: 'JW',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 block">
            CLIENT FEEDBACK
          </span>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-10 h-10 text-blue-600/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3 border-t pt-4">
                    <Avatar className="bg-gradient-to-br from-blue-500 to-purple-600">
                      <AvatarFallback className="bg-transparent text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
