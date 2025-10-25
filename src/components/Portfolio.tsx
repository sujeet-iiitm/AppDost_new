import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'EcoShop - E-commerce Platform',
    description: 'A modern e-commerce platform with AI-powered recommendations and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjEzMTQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB'],
    rating: 4.9,
  },
  {
    title: 'FitTrack Pro - Fitness App',
    description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1618688862225-ac941a9da58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjEyNDMwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Flutter', 'Firebase', 'ML'],
    rating: 4.8,
  },
  {
    title: 'FoodHub - Delivery Service',
    description: 'Fast and reliable food delivery platform connecting restaurants with hungry customers.',
    image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzYxMzI3NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'GraphQL', 'AWS'],
    rating: 4.7,
  },
  {
    title: 'BizMetrics - Analytics Dashboard',
    description: 'Real-time business analytics dashboard with interactive charts and AI-driven insights.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjEzMDI4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'D3.js', 'Python'],
    rating: 4.9,
  },
  {
    title: 'HealthCare Plus',
    description: 'Telemedicine platform enabling virtual consultations and health record management.',
    image: 'https://images.unsplash.com/photo-1668874896975-7f874c90600a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjEyNjQ4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'WebRTC', 'PostgreSQL'],
    rating: 5.0,
  },
  {
    title: 'DevConnect - Developer Platform',
    description: 'Social platform for developers to collaborate, share code, and build together.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEzMTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'Nest.js', 'Redis'],
    rating: 4.8,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 block">
            OUR WORK
          </span>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="bg-white text-slate-800 px-4 py-2 rounded-full flex items-center space-x-2"
                    >
                      <span className="text-sm">View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-slate-800 flex-1">{project.title}</h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-slate-600">{project.rating}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
