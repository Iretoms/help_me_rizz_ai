import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface HoverCardProps {
  text: string;
  divColor?: string;
  ballColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
  padding?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  text,
  divColor = "coralDark",
  ballColor = "gray-300",
  textColor = "white",
  width = "100",
  height = "100",
  padding = "0",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cardVariants = {
    hovered: {},
  };

  const ballVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 100,
      transition: {
        duration: 3,
        ease: "easeInOut",
        type: "spring",
      },
    },
  };

  const handleHoverStart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsHovered(true);
    x.set(event.nativeEvent.offsetX);
    y.set(event.nativeEvent.offsetY);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative bg-${divColor} rounded-xl cursor-pointer overflow-hidden`}
      style={{ width, height, padding }}
      onMouseEnter={handleHoverStart}
      onMouseMove={(event) => {
        if (isHovered) {
          x.set(event.nativeEvent.offsetX);
          y.set(event.nativeEvent.offsetY);
        }
      }}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        className="absolute"
        style={{ left: x, top: y }}
        variants={ballVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        exit="hidden"
      >
        <div className={`w-2 h-2 bg-${ballColor} rounded-full`}></div>
      </motion.div>

      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        variants={cardVariants}
        animate={isHovered ? "hovered" : "normal"}
        transition={{ duration: 0.1 }}
        style={{ color: isHovered ? "black" : textColor }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default HoverCard;
