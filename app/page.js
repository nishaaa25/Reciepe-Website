import ImageCarousel from "@/components/Image-Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden relative ">
      <header className="w-10/12 h-screen mx-auto relative flex-center gap-20">
        {/* <div className="w-1/2 relative h-[50vh] rounded-3xl border border-neutral-200">
        <ImageCarousel/>
        </div> */}
        <div className="w-full relative text-center mt-36">
          <div className="pb-24">
            <h1 className="text-8xl tracking-[4.5px] font-[900]">RESTURANTO</h1>
            <p className="text-base uppercase tracking-[20px] font-[300] pl-2">NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES</p>
          </div>
          <div className="flex-center flex-col gap-4 ">
            <button className="btn text-xl font-semibold uppercase">
              <Link href="/meals">Explore Meals</Link>
            </button>
            <button className="btn text-xl font-semibold uppercase">
              <Link href="/community">Join the Community</Link>
            </button>
          </div>
        </div>
      </header>
      <main className="w-10/12 relative min-h-screen mx-auto text-center">
        <section className="w-[40vw] mx-auto">
          <h2 className="custom-heading-text">How it works</h2>
          <p className="custom-para-text">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="custom-para-text">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="w-[40vw] mx-auto mt-20">
          <h2 className="custom-heading-text">Why NextLevel Food?</h2>
          <p className="custom-para-text">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="custom-para-text">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main></div>
  );
}
