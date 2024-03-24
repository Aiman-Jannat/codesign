import { motion } from "framer-motion";


const SliderView = ({ img, text }) => {
    return (
        < motion.div
        initial={{scale:0}}
            whileInView={{
              x: 0,
              y: 0,
              scale: 0.9,
              rotate: 360,
            }}
             transition={{
              duration: 1,
              delay:0.8
             }}
             
         className="hero relative h-10 md:h-15 lg:h-20 rounded-md" style={{ backgroundImage: `url(${img})` }}>
            <div className=" absolute inset-0 bg-black opacity-30"></div>
            <p className="relative text-center text-white">{text}</p>
        </motion.div>
    );
};

export default SliderView;