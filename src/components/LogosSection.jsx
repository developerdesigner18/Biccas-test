const LogosSection = () => {
    return (
        <div className="xl:max-w-[1180px] px-4 md:px-6 xl:px-0 mx-auto xl:pb-[112px] md:pb-[80px] pb-[30px]">
            <div className="flex flex-col items-center xl:gap-[60px] md:gap-10 gap-5">
                <div className="text-center">
                    <h2 className="md:text-[40px] text-2xl text-[#191A15] md:leading-none font-bold">More than 25,000 teams use Collabs</h2>
                </div>
                <div className="md:flex grid grid-cols-2 justify-center md:gap-[50px] gap-5 md:px-[35px] px-[25px]  text-gray-500">
                    <div className="flex items-center">
                        <img src="/images/Unsplash.svg" alt="Unsplash Logo" className="object-contain h-[36px]" />
                    </div>
                    <div className="flex items-center">
                        <img src="/images/Notion.svg" alt="Notion Logo" className="object-contain h-[36px]" />
                    </div>
                    <div className="flex items-center">
                        <img src="images/Intercom.svg" alt="Intercom Logo" className="object-contain h-[36px]" />
                    </div>
                    <div className="flex items-center">
                        <img src="/images/Descript.svg" alt="Descript Logo" className="object-contain h-[36px]" />
                    </div>
                    <div className="flex items-center">
                        <img src="/images/Grammarly.svg" alt="Grammarly Logo" className="object-contain h-[36px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogosSection;