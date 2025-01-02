'use server';

import { saveMeal } from "./meals";

export async function ShareMealForm(formData){
    
    const mealData = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
    }

    await saveMeal(mealData);
}