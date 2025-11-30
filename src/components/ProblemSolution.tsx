import { motion } from 'motion/react';
import { AlertCircle, CheckCircle, FileSpreadsheet, Bell, TrendingDown, Zap, BarChart3, MessageSquare } from 'lucide-react';

/**
 * Problem → Solution Section
 * 
 * Biznes muammolari va ularning yechimlari
 * Ikki ustunli layout:
 * - Chap: Muammolar (qizil rang)
 * - O'ng: Yechimlar (yashil rang)
 * 
 * Glassmorphism effektlari va hover animatsiyalari
 */
export function ProblemSolution() {
  // Biznes muammolari ro'yxati
  const problems = [
    { 
      icon: FileSpreadsheet, 
      text: "To'lovlar qo'lda yuritiladi",
      detail: "Xodimlar barcha hisob-kitoblarni qo'lda bajaradilar"
    },
    { 
      icon: AlertCircle, 
      text: "Excel va daftar xatoliklari ko'p",
      detail: "Inson xatosi tufayli ma'lumotlar noto'g'ri kiritiladi"
    },
    { 
      icon: TrendingDown, 
      text: "Kechikkan to'lovlar nazoratsiz qoladi",
      detail: "Mijozlarni kuzatish va eslatish qiyin"
    }
  ];

  // SmartPay CRM yechimlari
  const solutions = [
    { 
      icon: Zap, 
      text: "AI asosida avtomatik hisob-kitob",
      detail: "Barcha hisob-kitoblar avtomatik ravishda amalga oshiriladi"
    },
    { 
      icon: BarChart3, 
      text: "Real-time kredit monitoring paneli",
      detail: "Barcha ma'lumotlarni bir joydan ko'rish va tahlil qilish"
    },
    { 
      icon: MessageSquare, 
      text: "Telegram bot orqali kunlik eslatmalar",
      detail: "Mijozlarga avtomatik eslatmalar yuboriladi"
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
            Muammo → Yechim
          </h2>
          <p className="text-slate-400">
            Biznes muammolarini zamonaviy texnologiyalar bilan hal qilamiz
          </p>
        </motion.div>

        {/* Two Column Layout - Ikki ustunli tartib */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card - Muammo kartasi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect - Nur effekti */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
            
            {/* Card Container - Karta konteyner */}
            <div className="relative p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
              {/* Label Badge - Belgi nishoni */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/20 border border-red-500/30">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-300">Muammo</span>
              </div>
              
              <h3 className="mb-6 text-white">
                Hozirgi holat
              </h3>

              {/* Problems List - Muammolar ro'yxati */}
              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors group/item"
                  >
                    {/* Icon Container */}
                    <div className="p-2 rounded-lg bg-red-500/10 group-hover/item:bg-red-500/20 transition-colors">
                      <problem.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      {/* Problem text */}
                      <p className="text-slate-200 mb-1">
                        {problem.text}
                      </p>
                      {/* Detail explanation */}
                      <p className="text-xs text-slate-500">
                        {problem.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution Card - Yechim kartasi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect - Nur effekti */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity" />
            
            {/* Card Container - Karta konteyner */}
            <div className="relative p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
              {/* Label Badge - Belgi nishoni */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-500/20 border border-green-500/30">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Yechim</span>
              </div>
              
              <h3 className="mb-6 text-white">
                SmartPay bilan
              </h3>

              {/* Solutions List - Yechimlar ro'yxati */}
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-colors group/item"
                  >
                    {/* Icon Container */}
                    <div className="p-2 rounded-lg bg-green-500/10 group-hover/item:bg-green-500/20 transition-colors">
                      <solution.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1">
                      {/* Solution text */}
                      <p className="text-slate-200 mb-1">
                        {solution.text}
                      </p>
                      {/* Detail explanation */}
                      <p className="text-xs text-slate-500">
                        {solution.detail}
                      </p>
                    </div>
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