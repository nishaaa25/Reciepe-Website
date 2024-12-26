"use client";
import Image from "next/image";
import Burger from "@/assets/burger.jpg";
import Curry from "@/assets/curry.jpg";
import Dumplings from "@/assets/dumplings.jpg";
import Pizza from "@/assets/pizza.jpg";
import Schnitzel from "@/assets/schnitzel.jpg";
import TomatoSalad from "@/assets/tomato-salad.jpg";
import Macncheese from "@/assets/macncheese.jpg";
import { useEffect, useState } from "react";

const images = [
  {
    imgUrl: Burger,
    imgTitle: "Burger",
  },
  {
    imgUrl: Pizza,
    imgTitle: "Pizza",
  },
  {
    imgUrl: TomatoSalad,
    imgTitle: "TomatoSalad",
  },
  {
    imgUrl: Schnitzel,
    imgTitle: "Schnitzel",
  },
  {
    imgUrl: Macncheese,
    imgTitle: "Macncheese",
  },
  {
    imgUrl: Curry,
    imgTitle: "Curry",
  },
  {
    imgUrl: Dumplings,
    imgTitle: "Dumplings",
  },
];

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
console.log("img is getting valled");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((img, i) => (
        <Image
          key={i} // Corrected typo `keyt` to `key`
          alt={img.imgTitle}
          src={img.imgUrl}
          className={currentImageIndex === i ? "active" : ""}
        />
      ))}
    </div>
  );
}
