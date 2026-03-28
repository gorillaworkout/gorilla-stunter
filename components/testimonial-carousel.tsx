"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    initials: "SM",
    name: "Sollah",
    role: "National Champion",
    text: "Gorilla Stunter transformed my cheerleading career. The training is intense but incredibly rewarding. I've never felt more confident in my abilities."
  },
  {
    initials: "KM",
    name: "Kimi",
    role: "Flyer",
    text: "Teknik partner stunt yang diajarin bener-bener solid. Awalnya takut jatuh, tapi coach-nya bikin aku ngerasa aman banget di atas."
  },
  {
    initials: "HK",
    name: "Hikaru",
    role: "Elite Base",
    text: "Power, speed, dan execution. Tiga hal itu bener-bener diasah sampai maksimal di sini. Vibes latihannya juga gak ada lawan!"
  },
  {
    initials: "IT",
    name: "Indah Tri",
    role: "Elite Stunter",
    text: "The partner matching system is genius! I found my perfect stunt partner here and we've been dominating competitions ever since."
  },
  {
    initials: "RK",
    name: "Raka",
    role: "Pro Base",
    text: "Dari nol sampai bisa full up. Latihannya brutal tapi seru abis. Komunitasnya juga saling support banget."
  },
  {
    initials: "FR",
    name: "Firly",
    role: "Flyer",
    text: "Gak nyangka bisa ngelewatin limit diri sendiri. Coach-nya super detail kalau ngejelasin teknik, bad habit langsung ilang."
  },
  {
    initials: "AL",
    name: "Rai",
    role: "Flyer",
    text: "This community is like family. The support, knowledge sharing, and celebration of achievements makes every training session special."
  }
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="relative w-full overflow-x-auto flex gap-6 pb-8 snap-x snap-mandatory cursor-grab scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex gap-8 w-max px-4">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="w-[350px] shrink-0 snap-center bg-background border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-border/50">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="font-heading font-bold text-primary-foreground">{t.initials}</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="font-body text-sm text-primary/80 font-bold tracking-wide uppercase">{t.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
