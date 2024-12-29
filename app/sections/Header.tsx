"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

type ToggleProps ={
    isOpen: boolean;
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-50">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/icons/logo.svg" alt="Blockforge Logo" />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase text-sm tracking-wide font-heading hidden md:block">
                <div
                  className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 "
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(225deg, transparent, transparent 10px, black 10px)",
                  }}
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 text-fuchsia-500"
                >
                  <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="leading-6">Get Started</span>
              </button>

              <div className="size-10 relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500", isOpen && "rotate-45 translate-y-0")} />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500", isOpen && "-rotate-45 translate-y-0")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <MobileNavigation isOpen={isOpen} />
      </div>
    </>
  );
}

function MobileNavigation({ isOpen }: ToggleProps) {
  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed size-full bg-zinc-900 top-0 left-0 z-40">
          <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28">        
            <div className="h-full flex justify-center items-center">
              <nav className="flex flex-col text-center gap-12 md:gap-16">
                {navLinks.map((link, delayIndex) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.5,
                        ease: "linear",
                        delay: delayIndex * .25
                    }}
                    href={link.href}
                    key={link.title}
                  >
                    <span className="text-zinc-500 hover:text-zinc-300 font-black text-4xl md:text-5xl lg:text-6xl transition-all duration-300">{link.title}</span>
                    
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
