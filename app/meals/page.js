import MealsGrid from "@/components/meals/Meals-Grid";
import {getMeals} from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: 'All meals',
  description: 'Delicious meals, shared by a food-loving community.',
}; 

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen relative py-20">
      <header className="w-10/12 mx-auto relative py-20 ">
        <h1 className="custom-heading-text">Delicious meals created by you</h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and
          fun!!
        </p>
        <button className="bg-blue-400 mt-5 text-white py-3 px-8 rounded-sm">
          <Link href="meals/share">Share ur favourite recipe </Link>
        </button>
      </header>
      <main className="w-10/12 mx-auto relative ">
      <Suspense fallback={<p className="text-center text-sm">Fetching Mealsss...</p>}>
        <Meals/>
      </Suspense>
      </main>
    </div>
  );
}
