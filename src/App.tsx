import { ProblemSolution } from './components/ProblemSolution';
import { Team } from './components/Team';
import { WhyUs } from './components/WhyUs';
import { Roadmap } from './components/Roadmap';
import { Implementation } from './components/Implementation';

/**
 * SmartPay CRM - Landing Page
 * 
 * Premium SaaS-uslubdagi landing page:
 * 1. Muammo → Yechim
 * 2. Jamoa (rollar, ko'nikmalar, texnologiyalar staki)
 * 3. Nima uchun jamoangiz bu muammoni hal qila oladi
 * 4. Yo'l xaritasi: Idea / Prototype / MVP / Launched
 * 5. Yechimni qanday amalga oshirish (bosqichlar, texnologiyalar, AI vositalari)
 * 
 * Texnologiyalar:
 * - React
 * - Tailwind CSS
 * - Motion (Framer Motion)
 * - Lucide Icons
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-hidden">
      {/* 1. Muammo → Yechim */}
      <ProblemSolution />
      
      {/* 2. Jamoa a'zolari */}
      <Team />
      
      {/* 3. Nima uchun jamoangiz bu muammoni hal qila oladi */}
      <WhyUs />
      
      {/* 4. Yo'l xaritasi */}
      <Roadmap />
      
      {/* 5. Yechimni qanday amalga oshirish */}
      <Implementation />
    </div>
  );
}