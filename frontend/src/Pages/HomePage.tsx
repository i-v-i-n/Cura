import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function HomePage() {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        tl.fromTo(navbarRef.current,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.3"
        );
        tl.fromTo(heroRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            "-=0.6"
        );

    }, []);

    return (
        <div ref={containerRef}>
            <div ref={navbarRef}>
                <Navbar type="user" />
            </div>
            <Header/>
            <div
                ref={heroRef}
                className="flex flex-col items-center justify-center h-[85dvh]"
            >
                <HeroSection />
            </div>
        </div>
    );
}

export default HomePage;
