"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function ShareMealForm(prevStae, formData) {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

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
      message: "Invalid Input."
    }
  }

  await saveMeal(mealData);
  revalidatePath('/meals')
  redirect("/meals");
}
