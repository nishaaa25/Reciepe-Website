'use client'; 

import ImagePicker from "@/components/Image-Picker";
import MealsFormSubmission from "@/components/meals/meals-form-submission";
import { ShareMealForm } from "@/lib/shareMealForm";
import { useActionState } from "react";

export default function ShareMealPage() {
  const [ state, formState] = useActionState(ShareMealForm, {message: null});

  return (
    <div className="w-screen overflow-x-hidden min-h-screen relative py-20">
      <header className="w-10/12 mx-auto relative pt-20 pb-8">
        <h1 className="custom-heading-text">
          Share your <span>favorite meal</span>
        </h1>
        <p className="custom-para-text">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="w-10/12 mx-auto relative">
        <form
          className="w-1/2 relative flex flex-col gap-5"
          action={formState}
        >
          <div className="flex-center gap-2">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="name" className="font-bold text-base uppercase">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-gray-900 border border-gray-600 rounded-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="email" className="font-bold text-base uppercase">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-gray-900 border border-gray-600 rounded-sm"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="title" className="font-bold text-base uppercase">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="bg-gray-900 border border-gray-600 rounded-sm"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="summary" className="font-bold text-base uppercase">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="bg-gray-900 border border-gray-600 rounded-sm"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="instructions"
              className="font-bold text-base uppercase"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="bg-gray-900 border border-gray-600 rounded-sm"
            ></textarea>
          </div>
          <ImagePicker label="image" name="image"/>
          {state.message && <p>{state.message}</p>}
          <div>
            <MealsFormSubmission/>
          </div>
        </form>
      </main>
    </div>
  );
}
