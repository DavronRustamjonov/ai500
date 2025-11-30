import { motion } from 'motion/react';
import { Lightbulb, Palette, Rocket, Sparkles } from 'lucide-react';
import mvpChatbot from 'figma:asset/7ebbcbb88e8058a6c11210ee996b3d744af211cb.png';
import mvpDashboard from 'figma:asset/f3462d73648626e46e42f62a050fad771ea8a217.png';
import mvpStatistics from 'figma:asset/22569eb41f2bcb1fe57decb0ca02dbcf5f5b6407.png';

export function Roadmap() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Idea',
      description: 'Biznes muammosini aniqlash',
      gradient: 'from-yellow-500 to-orange-500',
      status: 'completed'
    },
    {
      icon: Palette,
      title: 'Prototype',
      description: 'Dastlabki dizayn va texnologiya',
      gradient: 'from-blue-500 to-cyan-500',
      status: 'completed'
    },
    {
      icon: Rocket,
      title: 'MVP',
      description: 'Asosiy funksiyalar bilan mahsulot',
      gradient: 'from-purple-500 to-pink-500',
      status: 'current'
    },
    {
      icon: Sparkles,
      title: 'Launch',
      description: 'Bozorga chiqarish va marketing',
      gradient: 'from-pink-500 to-rose-500',
      status: 'upcoming'
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
            Roadmap
          </h2>
          <p className="text-slate-400">
            G'oyadan bozorga: to'liq yo'nalish xaritasi
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30" />
          
          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Node with glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.gradient} ${step.status === 'current' ? 'animate-pulse' : ''}`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient} blur-lg opacity-50`} />
                  </div>
                </div>

                {/* Card */}
                <div className="mt-8 group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-20 ${step.status === 'current' ? 'opacity-40 animate-pulse' : ''} group-hover:opacity-40 blur transition-opacity`} />
                  <div className={`relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border transition-all duration-300 ${
                    step.status === 'current' 
                      ? 'border-purple-500/50' 
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-20 mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="mb-2 text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4">
                      {step.description}
                    </p>

                    {step.status === 'current' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-xs text-purple-300">Hozir</span>
                      </div>
                    )}
                    
                    {step.status === 'completed' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-green-300">Tugallandi</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
              )}

              <div className="flex gap-4">
                {/* Node */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center ${step.status === 'current' ? 'animate-pulse' : ''}`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-20 ${step.status === 'current' ? 'opacity-40' : ''} blur transition-opacity`} />
                  <div className={`relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border transition-all duration-300 ${
                    step.status === 'current' 
                      ? 'border-purple-500/50' 
                      : 'border-white/10'
                  }`}>
                    <h3 className="mb-2 text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mb-4">
                      {step.description}
                    </p>

                    {step.status === 'current' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-xs text-purple-300">Hozir</span>
                      </div>
                    )}
                    
                    {step.status === 'completed' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-green-300">Tugallandi</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MVP Screenshots - MVP namunalari */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-purple-500/20 border border-purple-500/30">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">MVP Namunalari</span>
            </div>
            <h3 className="mb-2 text-white">
              Ishlab chiqilgan mahsulot interfeyslari
            </h3>
            <p className="text-sm text-slate-400">
              SmartPay CRM platformasining asosiy funksiyalari
            </p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Chatbot Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
              <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <img 
                  src={mvpChatbot} 
                  alt="AI Chatbot - Smart Kredit Tizimi yordamchisi" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 border-t border-white/10">
                  <h4 className="text-white mb-1">AI Chatbot</h4>
                  <p className="text-xs text-slate-400">Smart yordamchi bot</p>
                </div>
              </div>
            </motion.div>

            {/* Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
              <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                <img 
                  src={mvpDashboard} 
                  alt="Asosiy Panel - Kredit va to'lovlar monitoring" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 border-t border-white/10">
                  <h4 className="text-white mb-1">Asosiy Panel</h4>
                  <p className="text-xs text-slate-400">Real-time monitoring</p>
                </div>
              </div>
            </motion.div>

            {/* Statistics Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
              <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
                <img 
                  src={mvpStatistics} 
                  alt="Statistika - Kunlik va oylik grafiklar" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 border-t border-white/10">
                  <h4 className="text-white mb-1">Statistika</h4>
                  <p className="text-xs text-slate-400">Tahlil va hisobotlar</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}