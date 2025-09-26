import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Form from "../Components/ui/Form";
import Navbar from "../Components/ui/Navbar";

function Login() {
    const navbarRef = useRef(null);
    const formRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power2.out" }
        );
        tl.fromTo(navbarRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.3"
        );

        tl.fromTo(formRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
        );
    }, []);

    return (
        <div ref={containerRef}>
            <div ref={navbarRef}>
                <Navbar type="auth" />
            </div>
            <div
                ref={formRef}
                className="flex flex-col items-center justify-center h-[90dvh] bg-gray-100"
            >
                <Form type="login" />
            </div>
        </div>
    );
}

export default Login;
