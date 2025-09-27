import Footer from "../Components/layout/Footer";
import Navbar from "../Components/ui/Navbar";
import ResultCard from "../Components/ui/ResultCard";

function ResultPage() {
    return <>
        <Navbar type="user" />
        <img src="hospital.svg" alt="hospital" className="fixed left-[-70px] bottom-5 w-xl opacity-20 z-10" />
        <div className="flex flex-col items-center justify-center h-[85dvh]">
            <ResultCard />
            <Footer />
        </div>;
    </>
}
export default ResultPage;