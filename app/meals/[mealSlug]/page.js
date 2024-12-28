import { getMealsDetails } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function mealsItem({ params }) {
  const meal = getMealsDetails(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <div className="w-screen overflow-x-hidden min-h-screen relative py-20">
      <header className="w-8/12 mx-auto relative pt-20 pb-8 flex gap-10 ">
        <div className="w-[350px] h-[350px] relative custom-shadow">
          <Image src={meal.image} alt="alt" fill />
        </div>
        <div className="w-7/12 relative flex justify-center flex-col">
          <h2 className="custom-heading-text">{meal.title}</h2>
          <p className="italic text-lg pb-4">
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className="custom-para-text">{meal.summary}</p>
        </div>
      </header>
      <main className="w-8/12 mx-auto relative px-6 pb-6 bg-yellow-300 bg-opacity-80 rounded-xl">
        <p
          className="text-black"
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br>"),
          }}
        ></p>
      </main>
    </div>
  );
}
