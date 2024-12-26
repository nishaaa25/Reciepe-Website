import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <div className='w-screen overflow-x-hidden relative py-20'>
      <header className="w-9/12 py-20 mx-auto text-center">
        <h1 className="custom-heading-text">
          One shared passion: <span>Food</span>
        </h1>
        <p className='custom-para-text'>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-9/12 mx-auto flex-center flex-col">
        <h2 className='text-[34px] pb-10 font-bold'>Community Perks</h2>
        <ul className="flex-center flex-col gap-5">
          <li className='flex-center flex-col gap-3'>
            <Image src={mealIcon} width={140} alt="A delicious meal" />
            <p className='text-lg'>Share & discover recipes</p>
          </li>
          <li className='flex-center flex-col gap-3'>
            <Image src={communityIcon} width={140} alt="A crowd of people, cooking" />
            <p className='text-lg'>Find new friends & like-minded people</p>
          </li>
          <li className='flex-center flex-col gap-3'>
            <Image
              src={eventsIcon}
              width={140}
              alt="A crowd of people at a cooking event"
            />
            <p className='text-lg'>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </div>
  );
}