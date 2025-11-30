import { motion } from 'motion/react';
import { CheckCircle2, Users, Store, Clock } from 'lucide-react';

/**
 * Why Us Section - Nega biz qismi
 * 
 * Ishonch ko'rsatkichlari:
 * - Real biznes tajribasi
 * - Statistik ma'lumotlar (interviews, pilot stores, reminders)
 * - Raqamlar va natijalar bilan
 * 
 * Glassmorphism cards va stat indicators
 */
export function WhyUs() {
  // Bizning afzalliklarimiz
  const reasons = [
    {
      icon: CheckCircle2,
      text: "Real biznes muammosidan kelib chiqqan yechim",
      description: "Haqiqiy do'konlar va mijozlar bilan o'tkazilgan tadqiqotlar asosida"
    },
    {
      icon: CheckCircle2,
      text: "Tez prototiplash va test",
      description: "Agile metodologiya yordamida tezkor rivojlantirish"
    },
    {
      icon: CheckCircle2,
      text: "AI asosidagi tahlil moduli",
      description: "Machine Learning algoritmlari yordamida aqlli prognozlar"
    }
  ];

  // Statistik ko'rsatkichlar
  const stats = [
    {
      icon: Users,
      number: '10+',
      label: 'Interviews',
      sublabel: 'Do\'kon egalari bilan suhbatlar',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Store,
      number: '3',
      label: 'Pilot stores',
      sublabel: 'Sinov do\'konlari',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Reminders',
      sublabel: 'Tinimsiz xizmat',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="relative px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Qism sarlavhasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nega Biz?
          </h2>
          <p className="text-slate-400">
            Ishonch va tajribaga asoslangan yondashuv
          </p>
        </motion.div>

        {/* Trust Indicators - Ishonch ko'rsatkichlari */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative group">
            {/* Animated Glow - Animatsiyalangan nur */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-opacity" />
            
            {/* Main Card - Asosiy karta */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10">
              <div className="space-y-6">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 group/item"
                  >
                    {/* Icon with gradient bg */}
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover/item:border-blue-500/50 transition-colors">
                      <reason.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      {/* Main text */}
                      <p className="text-slate-200 mb-1">
                        {reason.text}
                      </p>
                      {/* Additional description */}
                      <p className="text-xs text-slate-500">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards - Statistik kartochkalar */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Stat Card Glow - Statistika kartasi nuri */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity`} />
              
              {/* Stat Card Container */}
              <div className="relative p-8 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center group-hover:scale-105 transform">
                {/* Icon Circle */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Stat Number - Statistik raqam */}
                <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                
                {/* Label - Belgi */}
                <p className="text-slate-400 text-sm mb-1">
                  {stat.label}
                </p>
                
                {/* Sublabel - Qo'shimcha belgi */}
                <p className="text-xs text-slate-600">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}