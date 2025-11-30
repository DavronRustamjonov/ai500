import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Team Section - Jamoa qismi
 * 
 * 2 ta jamoa a'zosi kartochkalari:
 * - Avatar bilan
 * - Rol va mas'uliyat
 * - Texnologik ko'nikmalar
 * - Ijtimoiy tarmoq havolalari
 * 
 * Responsive grid layout (mobile: 1 column, desktop: 2 columns)
 */
export function Team() {
  // Jamoa a'zolari ma'lumotlari
  const team = [
    {
      name: 'Farrux Sobirov',
      role: 'Founder & Full-Stack Developer',
      description: 'Mahsulot vizyoni va texnik yo\'nalishi',
      skills: ['React', 'Node.js', 'AI/ML', 'Product'],
      avatar: '👨‍💻',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Davron Rustamjonov',
      role: 'Backend & Integratsiya Engineer',
      description: 'Server va API arxitekturasi',
      skills: ['PHP/Laravel', 'MySQL', 'API', 'DevOps', 'Data Analyst'],
      avatar: '👨‍💼',
      gradient: 'from-purple-500 to-pink-500'
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
            Bizning Jamoa
          </h2>
          <p className="text-slate-400">
            Tajribali mutaxassislar bilan kuchli mahsulot yaratamiz
          </p>
        </motion.div>

        {/* Team Grid - Jamoa panjarasi */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              {/* Card Glow - Karta nuri */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-20 group-hover:opacity-40 blur transition-opacity`} />
              
              {/* Card Container */}
              <div className="relative p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Avatar Section - Avatar qismi */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Avatar Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-xl opacity-50`} />
                  {/* Avatar Circle */}
                  <div className="relative w-24 h-24 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                </div>

                {/* Member Info - A'zo ma'lumotlari */}
                <div className="text-center mb-6">
                  <h3 className="mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">
                    {member.role}
                  </p>
                  {/* Description - Tavsif */}
                  <p className="text-xs text-slate-500">
                    {member.description}
                  </p>
                </div>

                {/* Skills Tags - Ko'nikmalar teglari */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links - Ijtimoiy havolalar */}
                <div className="flex justify-center gap-3">
                  {[
                    { Icon: Github, label: 'GitHub profili' },
                    { Icon: Linkedin, label: 'LinkedIn profili' },
                    { Icon: Mail, label: 'Email yuborish' }
                  ].map(({ Icon, label }, idx) => (
                    <button
                      key={idx}
                      aria-label={label}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}