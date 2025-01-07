"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function saveFile(imgFile) {
  const arrayBuffer = await imgFile.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' }, // You can specify more options like folder, transformation, etc.
      function (error, result) {
        if (error || result === undefined) {
          reject(error || new Error("Upload result is undefined."));
        } else {
          resolve(result);
        }
      }
    );
    
    uploadStream.end(buffer);
  });
}


export async function ShareMealForm(prevStae, formData) {
  const imgFile = formData.get("image");
  console.log(imgFile);

  const uploadedImg = await saveFile(imgFile);

  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
    image: uploadedImg.url,
  };

  console.log(mealData);

  if (
    isInvalidText(mealData.title) ||
    isInvalidText(mealData.summary) ||
    isInvalidText(mealData.creator) ||
    isInvalidText(mealData.instructions) ||
    isInvalidText(mealData.creator_email) ||
    !mealData.image ||
    mealData.image.size === 0 ||
    !mealData.creator_email.includes("@")
  ) {
    return {
      message: "Invalid Input.",
    };
  }

  await saveMeal(mealData);
  revalidatePath("/meals");
  redirect("/meals");
}
