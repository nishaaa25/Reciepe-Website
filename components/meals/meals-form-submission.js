"use client";
import { useActionState } from "react";

export default function MealsFormSubmission() {
  const { pending } = useActionState();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full p-2 rounded-sm bg-red-600  text-center"
    >
      {pending ? "Submittingg..." : "Share Meal"}
    </button>
  );
}
