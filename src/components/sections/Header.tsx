"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import svgPaths from "@/components/svg/svgPaths";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            {/* Backdrop Overlay for Mobile Menu (Click outside to close) */}
            <div
                className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
                style={{ top: '72px' }} // Starts below the header
            />

            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-[72px] flex items-center justify-center border-b border-transparent ${scrolled || isOpen ? "bg-[#fff6ee]/95 backdrop-blur-md border-[#191919]/5 shadow-sm" : "bg-transparent"
                    }`}
            >
                <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 bg-transparent backdrop-blur-[3.1px]"></div>
                    <div className="absolute inset-x-[320px] top-1/2 -translate-y-1/2 h-[72px] border border-[rgba(255,255,255,0.08)] hidden md:block pointer-events-none"></div>
                </div>

                <div className="layout-container flex items-center justify-between w-full max-w-[1280px] relative z-10 h-full px-4 md:px-0">
                    {/* Logo (Left) */}
                    <div className="relative w-[120px] md:w-[158px] h-[32px] md:h-[41px] flex-shrink-0">
                        <img
                            src="/images/logo_nav.svg"
                            alt="Festival Parental"
                            className="w-full h-full object-contain object-left"
                        />
                    </div>

                    {/* Mobile Right Container: Button + Hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        {/* Ingresso Button - Orange with Icon */}
                        <a
                            href="#ingressos"
                            className="bg-[#f7a73c] text-[#191919] text-[12px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-[40px] shadow-[2px_2px_0px_0px_#191919] active:translate-y-[1px] active:shadow-none transition-all border border-[#191919] flex items-center gap-2"
                        >
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={svgPaths.p60d3f00} fill="currentColor" />
                            </svg>
                            Ingresso
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-[#191919] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#191919] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#191919] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <nav className="hidden md:flex items-center gap-[32px]">
                        <div className="flex items-center gap-[8px] p-[10px]">
                            {[
                                { name: "Palestrantes", href: "#palestrantes" },
                                { name: "Programação do Festival", href: "#programacao" },
                                { name: "Atrações", href: "#convidados-especiais" },
                                { name: "Galeria 2025", href: "#" }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`font-dm-sans text-[#191919] text-[13px] font-normal tracking-[0.14px] px-[8px] py-[10px] transition-colors whitespace-nowrap ${item.href === "#" ? "cursor-default opacity-60 hover:text-[#191919]" : "hover:text-[#ef7d25]"}`}
                                    onClick={(e) => {
                                        if (item.href === "#") {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* CTA Button & Sponsor Link - Desktop */}
                    <div className="hidden md:flex items-center gap-[16px]">
                        <a href="#patrocinador" className="font-dm-sans text-[#191919] text-[13px] font-bold uppercase tracking-[0.8px] hover:text-[#ef7d25] transition-colors whitespace-nowrap">
                            Seja patrocinador
                        </a>
                        <a href="#ingressos" className="group relative">
                            <div className="bg-[#f7a73c] border border-[#191919] flex items-center justify-center gap-[10px] px-[24px] py-[12px] rounded-[40px] shadow-[2px_2px_0px_0px_#191919] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_#191919] transition-all">
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#191919]">
                                    <path d={svgPaths.p60d3f00} fill="currentColor" />
                                </svg>
                                <span className="font-dm-sans font-bold text-[#191919] text-[13px] uppercase tracking-[0.8px] whitespace-nowrap">
                                    Garanta seu INGRESSO agora
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Dropdown (100% Width, Auto Height) */}
                <div className={`
                    md:hidden absolute top-[72px] left-0 w-full bg-[#fff6ee] border-b border-[#191919]/10 shadow-xl 
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[500px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}
                `}>
                    <div className="flex flex-col px-6 gap-6 items-center">
                        {[
                            { name: "Palestrantes", href: "#palestrantes" },
                            { name: "Programação do Festival", href: "#programacao" },
                            { name: "Atrações", href: "#convidados-especiais" },
                            { name: "Galeria 2025", href: "#" },
                            { name: "Seja patrocinador", href: "#patrocinador" }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href === "#") {
                                        e.preventDefault();
                                    } else {
                                        setIsOpen(false);
                                    }
                                }}
                                className={`text-[#191919] font-dm-sans text-[18px] font-medium transition-colors w-full text-center ${item.href === "#" ? "cursor-default opacity-60" : "active:text-[#ef7d25]"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}
