import Button from './Button';

const HeroSection = () => {
    return (
        <div className="xl:max-w-[1180px] px-4 md:px-6 xl:px-0 mx-auto xl:py-[130px] md:py-[80px] py-[30px] flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl xl:text-[80px] md:text-[60px] xl:leading-[90px] font-bold leading-tight text-[#191A15] xl:pb-7 pb-3">We’re here to Increase your Productivity</h1>
                <img className='xl:w-[75%] mx-auto md:m-0 w-[70%] object-contain' src="/images/Underline.svg" alt="" />
                <p className="text-[#000] text-sm md:text-lg w-[75%] mx-auto md:m-0 xl:py-[50px] py-6">
                    Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
                </p>
                <div className="flex flex-row md:gap-10 gap-5 md:justify-start justify-center items-center">
                    <Button type="primary" className="bg-[#54BD95] hover:bg-[#439978] transition-all !leading-none py-5 md:px-[30px] px-[20px] rounded-full md:text-lg text-base font-medium ">Try Free Trial</Button>
                    <Button type="default" className="text-[#191A15] text-lg font-medium flex items-center gap-[14px] !p-0">
                        <img src="/images/Play.svg" alt="play" className='w-10 h-10' />
                        <span>View Demo</span>
                    </Button>
                </div>
            </div>

            <div className="md:w-1/2 relative mt-8 md:mt-0">
                <img
                    src="/images/Person.svg"
                    alt="Person"
                    className="relative z-10 w-full max-w-xs mx-auto md:max-w-none"
                />
            </div>
        </div>
    );
};

export default HeroSection;
