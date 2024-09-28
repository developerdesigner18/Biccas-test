import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import LogosSection from "./LogosSection";

const UpperSection = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="w-[634px] h-[634px] absolute -z-[4] rounded-full -top-[280px] -left-[317px] blur-[1000px] bg-[#52BDAA]"></div>
            <div className="w-[634px] h-[634px] absolute -z-[3] rounded-full top-1/2 -translate-y-1/2 -right-[317px] blur-[1000px] bg-[#52BDAA]"></div>
            <div className="w-[634px] h-[634px] absolute -z-[2] rounded-full -top-[364px] right-[10%] blur-[1000px] bg-[#FFD6D6]"></div>
            <div className="w-[634px] h-[634px] absolute -z-[1] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[1000px] bg-[#fff]"></div>

            <Navbar />

            <HeroSection />

            <LogosSection />
        </div>
    );
};

export default UpperSection;
