import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="relative h-full w-full custom-shadow rounded-md bg-slate-600 bg-opacity-30 flex flex-col">
      <header>
        <div className="h-[280px] relative">
          <Image src={image} alt={title} fill />
        </div>
        <div className="p-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="italic text-sm">by {creator}</p>
        </div>
      </header>
      <div className="flex-grow pb-16 px-3">
        <p>{summary}</p>
        <div className="absolute bottom-5 right-3">
          <Link href={`/meals/${slug}`} className="bg-orange-500 rounded-md px-3 py-2 text-sm">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
