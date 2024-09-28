import Button from "./Button";
import Card from "./Card";

const LowerSection = () => {
    return (
        <div className="bg-white w-full py-16">
            <div className="xl:max-w-[1180px] mx-auto px-4 md:px-6 xl:px-0">
                <div className="items-center md:grid md:grid-cols-[auto_1fr_auto] lg:gap-0 md:gap-4 space-y-4">
                    <h2 className="text-[#191A15] lg:text-[50px] md:text-[35px] text-[30px] leading-none font-semibold">Our Features<br className="md:block hidden" />you can get</h2>
                    <p className="text-[#A6A6A6] md:max-w-md lg:text-lg md:text-base font-medium w-full mx-auto">
                        We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
                    </p>
                    <Button type="primary" className="bg-[#54BD95] hover:bg-[#439978] transition-all !leading-none py-5 md:px-[30px] px-[20px] rounded-full md:text-lg text-base font-medium ">Get Started</Button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:pt-[74px] pt-[30px] gap-[44px]">
                    <Card
                        imgSrc="/images/Teams.svg"
                        imgAlt="Collaboration Teams"
                        title="Collboration Teams"
                        description="Here you can handle projects together with team virtually"
                    />

                    <Card
                        imgSrc="/images/Storage.svg"
                        imgAlt="Cloud Storage"
                        title="Cloud Storage"
                        description="No nedd to worry about storage because we provide storage up to 2 TB"
                    />

                    <Card
                        imgSrc="/images/Daily.svg"
                        imgAlt="Daily Analytics"
                        title="Daily Analytics"
                        description="We always provide useful informatin to make it easier for you every day"
                    />
                </div>

            </div>
        </div>
    );
};

export default LowerSection;
