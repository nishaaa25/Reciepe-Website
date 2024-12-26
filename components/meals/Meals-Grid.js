import MealItem from "./Meal-Item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="w-full grid grid-cols-3 gap-20 items-stretch">
      {meals.map((meal) => (
        <li key={meal.id} className="h-full">
            <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}