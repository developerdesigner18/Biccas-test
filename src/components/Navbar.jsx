import { useState } from 'react';
import { Button as AButton, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Button from './Button';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [selectedLink, setSelectedLink] = useState('Home');

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        closeDrawer();
    };

    return (
        <div className='xl:max-w-[1180px] px-4 md:px-6 xl:px-0 mx-auto'>
            <nav className="flex justify-between items-center md:pt-10 py-5">
                <div className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[40px] font-semibold  text-[#54BD95] leading-[30px]">Biccas</div>
                <div className="hidden md:flex md:items-center xl:gap-28 lg:gap-20 md:gap-2.5 text-gray-700">
                    <ul className="flex gap-10">
                        {['Home', 'Product', 'FAQ', 'Blog', 'About Us'].map((link) => (
                            <li
                                key={link}
                                onClick={() => handleLinkClick(link)}
                                className={`cursor-pointer xl:text-lg md:text-base !leading-none font-medium relative after:absolute after:top-[110%] after:left-0 hover:text-[#000] after:w-0 after:h-[2px] after:bg-[#000] after:hover:w-full after:transition-all transition-all ${selectedLink === link ? 'text-black' : 'text-[#A6A6A6]'}`}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2.5 items-center">
                        <Button className="border border-[#54BD95]/0 hover:border-[#54BD95] hover:text-[#54BD95] transition-all p-2.5 rounded-[10px] text-[#A6A6A6] text-base font-medium ">Login</Button>
                        <Button type="primary" className="bg-[#54BD95] hover:bg-[#439978] transition-all p-2.5 rounded-[10px] text-[#F8F8FA] text-base font-medium ">Sign Up</Button>
                    </div>
                </div>
                <div className="md:hidden">
                    <Button className="bg-[#54BD95] transition-all w-10 h-10 flex items-center justify-center rounded-[5px] text-[#F8F8FA] text-base font-medium ">
                        <AButton type="text" className='text-white' icon={<MenuOutlined />} onClick={showDrawer} />
                    </Button>
                </div>

                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={closeDrawer}
                    open={visible}
                    closable={true}
                >
                    <ul className="flex flex-col gap-5">
                        {['Home', 'Product', 'FAQ', 'Blog', 'About Us'].map((link) => (
                            <li
                                key={link}
                                onClick={() => handleLinkClick(link)}
                                className={`cursor-pointer xl:text-lg md:text-base !leading-none font-medium relative after:absolute after:top-[110%] after:left-0 hover:text-[#000] after:w-0 after:h-[2px] after:bg-[#000] after:hover:w-full after:transition-all transition-all ${selectedLink === link ? 'text-black' : 'text-[#A6A6A6]'}`}
                            >
                                {link}
                            </li>
                        ))}
                        <div className="flex flex-col gap-2.5">
                            <Button className="border border-[#54BD95] text-[#54BD95] transition-all p-2.5 rounded-[10px] text-base font-medium ">Login</Button>
                            <Button type="primary" className="bg-[#54BD95]  transition-all p-2.5 rounded-[10px] text-[#F8F8FA] text-base font-medium ">Sign Up</Button>
                        </div>
                    </ul>
                </Drawer>
            </nav>
        </div>
    );
};

export default Navbar;
