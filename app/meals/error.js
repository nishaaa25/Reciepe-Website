'use client';
 
export default function Error() {
    return <div className="w-screen overflow-x-hidden relative text-center h-screen flex-center flex-col">
        <h2 className="custom-heading-text uppercase">Oopss, An Error Occured!</h2>
        <p className="custom-para-text">Sorry, We failed to fetch meal data. Please try again later. </p>
    </div>
};