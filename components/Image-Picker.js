"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const imageRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    imageRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () =>{
        setSelectedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);

  };

  return (
    <div>
      <label htmlFor={name} className="font-bold text-base uppercase">{label}</label>
      <div>
        <div className="w-[150px] h-[150px] relative rounded-md border flex-center">
            {selectedImage ? <Image
            src={selectedImage}
            alt="This is the image selected by the user."
            fill
          />: <p className="text-xs text-center p-4">No image has been selected yet.</p> }
        </div>
        <input
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          required
          className="hidden"
          onChange={handleImageChange}
          ref={imageRef}
        />
        <button
          type="button"
          onClick={handleImagePicker}
          className="bg-white rounded-sm text-black px-2 py-1 text-sm mt-4"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
