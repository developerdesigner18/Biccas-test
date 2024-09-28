import React from "react";
import { StarFilled } from "@ant-design/icons";

const MidSection = () => {
    return (
        <div className="xl:max-w-[1180px] px-4 md:px-6 mx-auto xl:px-0 bg-[#F9F8FE] w-full py-16">
            <div className="grid lg:grid-cols-10 grid-cols-1 items-start md:gap-0 gap-10">
                <div className="lg:pr-8 lg:col-span-6 col-span-1">
                    <h2 className="text-[#191A15] text-3xl md:text-[50px] md:leading-[60px] font-semibold md:pr-5 md:pb-[30px] pb-5">How we support our pratner all over the world</h2>
                    <p className="text-[#A6A6A6] text-base leading-[30px] md:pr-10 font-medium md:pb-12 pb-5">
                        SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
                    </p>

                    <div className=" flex gap-8 text-left">
                        <div className="flex  flex-col md:gap-4 gap-1">
                            <div className="flex  gap-1">
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                            </div>
                            <p className="text-[#191A15] text-lg"><span className="font-bold">4.9</span> / 5 rating</p>
                            <p className="text-[#A6A6A6] text-lg font-bold">Databricks</p>

                        </div>

                        <div className="flex flex-col md:gap-4 gap-1">
                            <div className="flex gap-1">
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#FFC728] w-7 h-7 star" />
                                <StarFilled className="text-[#BBBBBB] w-7 h-7 star" />
                            </div>
                            <p className="text-[#191A15] text-lg"><span className="font-bold">4.8</span> / 5 rating</p>
                            <p className="text-[#A6A6A6] text-lg font-bold">Chainalysis</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-7 lg:col-span-4 col-span-1">
                    <div className="flex items-start gap-5">
                        <div className="bg-white w-[60px] h-[60px] flex justify-center items-center shadow-[0px_4px_9px_0px_#0000000D]">
                            <img src="/images/Publishing.svg" alt="Publishing" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="w-[calc(100%-80px)] flex flex-col gap-2.5">
                            <h3 className="text-[#191A15] text-[28px] font-bold">Publishing</h3>
                            <p className="text-[#A6A6A6] text-lg font-medium">
                                Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="bg-white w-[60px] h-[60px] flex justify-center items-center shadow-[0px_4px_9px_0px_#0000000D]">
                            <img src="/images/Analytics.svg" alt="Analytics" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="w-[calc(100%-80px)] flex flex-col gap-2.5">
                            <h3 className="text-[#191A15] text-[28px] font-bold">Analytics</h3>
                            <p className="text-[#A6A6A6] text-lg font-medium">
                                Analyze your performance and create goegeous report
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="bg-white w-[60px] h-[60px] flex justify-center items-center shadow-[0px_4px_9px_0px_#0000000D]">
                            <img src="/images/Engagement.svg" alt="Engagement" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="w-[calc(100%-80px)] flex flex-col gap-2.5">
                            <h3 className="text-[#191A15] text-[28px] font-bold">Engagement</h3>
                            <p className="text-[#A6A6A6] text-lg font-medium">
                                Quiuckly navigate you anda engage with your adience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidSection;
