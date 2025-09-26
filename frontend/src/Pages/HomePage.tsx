import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

function HomePage() {
    return (
        <div>
            <Navbar type="user" username="John Doe"/>
            <div className="flex flex-col items-center justify-center h-[90dvh] bg-gray-100">
                <HeroSection/>
            </div>
        </div>
    );
}
export default HomePage;