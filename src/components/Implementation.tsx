import { motion } from 'motion/react';
import { Database, Server, MessageCircle, Brain } from 'lucide-react';
import cronImage from 'figma:asset/47ab13a279a16bd9943f63e89931ec7bf1371b35.png';

export function Implementation() {
  const steps = [
    {
      icon: Database,
      title: "Ma'lumot modeli (ER diagram)",
      description: "To'liq normallashtirilgan ma'lumotlar bazasi strukturasi",
      techs: ['PostgreSQL', 'MySQL', 'Migrations']
    },
    {
      icon: Server,
      title: "Backend API (PHP/Laravel + MySQL)",
      description: "RESTful API va biznes logikasi",
      techs: ['Laravel', 'MySQL', 'Redis', 'JWT']
    },
    {
      icon: MessageCircle,
      title: "Telegram bot (Python, Cron Jobs)",
      description: "Avtomatik eslatmalar va monitoring",
      techs: ['Python', 'Telegram API', 'Cron', 'Webhooks']
    },
    {
      icon: Brain,
      title: "AI features (risk analysis, payment prediction)",
      description: "Machine Learning asosida tahlil va prognoz",
      techs: ['TensorFlow', 'Scikit-learn', 'Python', 'ML Pipeline']
    }
  ];

  return (
    <section className="relative px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Implementation Plan
          </h2>
          <p className="text-slate-400">
            Texnologik stack va arxitektura yondashuvi
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
              <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Number */}
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-50" />
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-slate-400">
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4">
                      {step.description}
                    </p>

                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-2">
                      {step.techs.map((tech, idx) => {
                        const gradients = [
                          'from-blue-500 to-cyan-500',
                          'from-purple-500 to-pink-500',
                          'from-pink-500 to-rose-500',
                          'from-orange-500 to-yellow-500'
                        ];
                        const gradient = gradients[idx % gradients.length];
                        
                        return (
                          <div key={idx} className="relative group/pill">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-full opacity-30 group-hover/pill:opacity-50 blur-sm transition-opacity`} />
                            <span className={`relative inline-flex px-3 py-1 text-xs rounded-full bg-gradient-to-r ${gradient} bg-opacity-20 border border-white/20 text-white`}>
                              {tech}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Cron Image - Faqat Telegram bot qismi uchun */}
                  {i === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={cronImage} 
                            alt="Cron Job Scheduler - Avtomatik vazifalar jadvali" 
                            className="w-64 h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="text-white mb-2">
                            Avtomatik vazifalar jadvali
                          </h4>
                          <p className="text-sm text-slate-400 mb-3">
                            Cron job'lar yordamida kunlik va vaqti-vaqti bilan bajariladigan vazifalarni avtomatlashtirish:
                          </p>
                          <ul className="space-y-2 text-xs text-slate-500">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>Har kuni ertalab 9:00 da to'lov eslatmalari yuborish</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-400 mt-0.5">•</span>
                              <span>Kechikkan to'lovlarni soat 18:00 da tekshirish</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-pink-400 mt-0.5">•</span>
                              <span>Haftalik hisobotlarni dushanba kunlari yaratish</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-0.5">•</span>
                              <span>Ma'lumotlar bazasini har kuni zaxiralash</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
          <div className="relative p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="mb-2 text-white">
                Arxitektura diagrammasi
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Client → API → Database → AI Engine → Telegram Bot
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Frontend', 'Backend', 'Database', 'AI/ML', 'Bot', 'Monitoring'].map((layer, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                    {layer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}