

const SliderView = ({ img, text }) => {
    return (
        < div className="hero relative h-10 md:h-15 lg:h-20 rounded-md" style={{ backgroundImage: `url(${img})` }}>
            <div className=" absolute inset-0 bg-black opacity-30"></div>
            <p className="relative text-center text-white">{text}</p>
        </div>
    );
};

export default SliderView;