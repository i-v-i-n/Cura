import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
import HeroSection from "../Components/layout/HeroSection";
import Navbar from "../Components/ui/Navbar";
import Header from "../Components/layout/Header";

function HomePage() {
  const navbarRef = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleServerCall = async () => {
    setLoading(true);
    const response = await fetch("/api/getResult", { method: "POST" });
    const data = await response.json();

    setLoading(false);
    navigate("/result", { state: { result: data } });
  };

  return (
    <div ref={containerRef}>
      <img src="hospital.svg" alt="hospital" className="fixed left-[-70px] bottom-5 w-xl opacity-20 z-10"/>
      <div ref={navbarRef}>
          <Navbar type="user" />
      </div>
      <Header/>
      <div ref={heroRef} className="flex flex-col items-center justify-center h-[85dvh]">
        <HeroSection />
        <button
          onClick={handleServerCall}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {loading ? "Loading..." : "Get Result"}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
