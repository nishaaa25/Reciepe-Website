import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";
import NavLink from "./Nav-Link";

export default function MainHeader() {
  return (
    <div className="main-header w-screen overflow-hidden py-3 absolute top-0 left-0 z-10">
      <nav className="nav w-10/12 mx-auto relative flex justify-between items-center ">
        <Link href="/">
          <div className="flex place-items-center relative object-cover">
              <Image src={LogoImg} alt="logo" width={260}/>
          </div>
        </Link>
        <ul className="flex place-items-center gap-4">
          <li className="p-5 font-semibold ">
            <NavLink href={"/meals"}>Browse Meals</NavLink>
          </li>
          <li className="p-5 font-semibold">
            <NavLink href={"/community"}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
