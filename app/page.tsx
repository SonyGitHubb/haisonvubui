"use client";
import React, { useState, useEffect, useRef } from "react";
import type { ReactElement } from "react";

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/haisonvubui/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/haisonvubui/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/SonyGitHubb", icon: "github" },
];

const content = {
  en: {
    about: "Hi, I'm Hai Son Vu Bui – a recent EDUCAnet High School graduate with a focus on IT. I'm passionate about technology, web development, and continuous learning. Currently, I'm studying Artificial Intelligence at Unicorn University to expand my skills. I'm eager to grow in a dynamic environment where I can apply my knowledge and make an impact.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "SQL", "Java", "HTML", "CSS"],
    certificate: [
      "Program Participation - EY",
      "Program Participation – Samsung Solve for Tomorrow",
      "Cambridge B1"
    ],
    education: ["High School Diploma IT, EDUCAnet Prague (2021-2025)","Bachelor of Artificial Intelligence, Unicorn University (2025-Present)"],
    copyright: "© 2026 Hai Son Vu Bui. All rights reserved.",
  },
  cs: {
    about: "Ahoj, jsem Hai Son Vu Bui – čerstvý absolvent střední školy EDUCAnet se zaměřením na IT. Jsem nadšený do technologií, webového vývoje a neustálého vzdělávání. Aktuálně studuji umělou inteligenci na Unicorn University, abych rozšířil své dovednosti. Chci růst v dynamickém prostředí, kde mohu uplatnit své znalosti a mít skutečný dopad.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "SQL", "Java", "HTML", "CSS"],
    certificate: [
      "Účast v programu - EY",
      "Účast v programu – Samsung Solve for Tomorrow",
      "Cambridge B1"
    ],
    education: [
      "Středoškolské vzdělání IT, EDUCAnet Praha (2021-2025)",
      "Bakalář umělé inteligence, Unicorn University (2025-Present)"
    ],
    copyright: "© 2026 Hai Son Vu Bui. Všechna práva vyhrazena.",
  },
};

function SocialIcon({ icon, url }: { icon: string; url: string }) {
  const icons: Record<string, ReactElement> = {
    instagram: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1"/></svg>
    ),
    linkedin: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 11v5"/><path d="M12 11v5"/><path d="M16 11v5"/><circle cx="8" cy="8" r="1"/></svg>
    ),
    github: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
    ),
  };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:bg-[#030303] rounded-full p-3 mx-3 transition-colors" aria-label={icon}>
      {icons[icon]}
    </a>
  );
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'cs'>('en');
  const t = content[lang];
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <div className="w-full max-w-2xl bg-black bg-opacity-80 rounded-lg shadow-lg p-8">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4 flex justify-center">
              <div
                className={`relative w-24 h-10 rounded-full flex items-center cursor-pointer select-none border border-[#444] shadow-lg ${lang === 'cs' ? '' : 'bg-gradient-to-r from-[#232323] to-[#2c2c2c]'}`}
                style={{ background: lang === 'cs' ? '#fff' : undefined, transition: 'background 0.3s' }}
                onClick={() => setLang(lang === 'en' ? 'cs' : 'en')}
                aria-label="Switch language"
              >
                <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-base font-bold transition-opacity ${lang === 'en' ? 'text-white opacity-100' : 'text-black opacity-50'}`}>EN</span>
                <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-base font-bold transition-opacity ${lang === 'cs' ? 'text-black opacity-100' : 'text-white opacity-50'}`}>CS</span>
                <span
                  className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 rounded-full bg-gradient-to-b from-white to-gray-200 w-10 h-10 shadow-lg border border-[#bbb] ${lang === 'en' ? 'left-0' : 'right-0'}`}
                  style={{ boxShadow: '0 2px 12px #0004' }}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Hai Son Vu Bui</h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-6">
            {SOCIALS.map(({ icon, url }) => (
              <SocialIcon key={icon} icon={icon} url={url} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{lang === 'en' ? 'About Me' : 'O mně'}</h2>
            <p className="text-lg">{t.about}</p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{lang === 'en' ? 'Skills' : 'Dovednosti'}</h2>
            <div className="flex flex-wrap gap-2">
              {t.skills.map(skill => (
                <span
                  key={skill}
                  className="rounded-lg px-8 py-4 text-lg font-semibold"
                  style={{ background: '#363636', color: '#fff', display: 'inline-block', minWidth: '80px', textAlign: 'center' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{lang === 'en' ? 'Soft Skills' : 'Měkké dovednosti'}</h2>
            <div className="flex flex-wrap gap-2">
              {['Communication', 'Teamwork', 'Problem-solving', 'Time management'].map(soft => (
                <span
                  key={soft}
                  className="rounded-lg px-8 py-4 text-lg font-semibold"
                  style={{ background: '#fff', color: '#000', display: 'inline-block', minWidth: '120px', textAlign: 'center', border: '1px solid #363636' }}
                >
                  {soft}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{lang === 'en' ? 'Certificate' : 'Certifikát'}</h2>
            <ul className="list-disc list-inside">
              {Array.isArray(t.certificate)
                ? t.certificate.map((cert: string) => <li key={cert}>{cert}</li>)
                : <li>{t.certificate}</li>}
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{lang === 'en' ? 'Education' : 'Vzdělání'}</h2>
            <ul className="list-disc list-inside">
              {Array.isArray(t.education)
                ? t.education.map((edu: string) => <li key={edu}>{edu}</li>)
                : <li>{t.education}</li>}
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <footer className="text-center text-sm text-gray-400 mt-8">
            {t.copyright}
          </footer>
        </AnimatedSection>
      </div>
    </main>
  );
}