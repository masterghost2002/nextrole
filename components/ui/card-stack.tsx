"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white h-60 w-60 md:h-60 md:w-96 p-4 border-2 border-[#03051E] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-[#03051E]">{card.content}</div>
          <div>
            <p className="text-[#D91656] font-bold">{card.name}</p>
            <p className="text-gray-600">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
