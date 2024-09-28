const Card = ({ imgSrc, imgAlt, title, description }) => {
    return (
        <div>
            <div className="rounded-[20px] mb-[30px] overflow-hidden text-left">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-auto"
                />
            </div>
            <h3 className="text-[#191A15] text-[30px] leading-none font-semibold mb-5">{title}</h3>
            <p className="text-[#A6A6A6] text-lg">{description}</p>
        </div>
    );
};

export default Card;
