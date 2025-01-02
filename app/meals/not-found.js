export default function NotFound() {
  return (
    <div className="w-screen overflow-x-hidden relative text-center h-screen flex-center flex-col ">
      <div className="p-10 rounded-md border border-red-400">
        <h2 className="custom-heading-text uppercase">Meal Not Found</h2>
        <p className="custom-para-text">
          Unfortunately, we could not find hhh the requested meal data.
        </p>
      </div>
    </div>
  );
}
