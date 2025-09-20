import React from "react";
import { useState } from "react";
import { href } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const search = "";
const linkItem = [
  {
    id: 1,
    name: "Accueil",
    link: "/",
  },
  {
    id: 2,
    name: "A propos",
    link: "/propos",
  },
  {
    id: 3,
    name: "Formations",
    link: "/formation",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
  {
    id: 5,
    name: "Projets",
    link: "/projects",
  },
  {
    id: 4,
    name: "temoignages",
    link: "/temoignages",
  },
  {
    id: 5,
    name: "Actualites",
    link: "/actualites",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useState(false);
  const { authUser } = useAuth();
  return (
    <div className="flex p-2 pt-7 justify-between gap-8 items-center text-white shadow-md z-10 w-full backdrop-blur-3xl">
      <div className="text-black">GENDEV</div>
      <div className="">
        <ul className="flex gap-3 items-center text-black ">
          {linkItem.map((data, index) => (
            <li key={index}>
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-left flex items-center gap-4">
        <form action="" method="get" className="relative">
          <Search className="absolute text-black ml-2 mt-1" />
          <input
            type="text"
            placeholder="search"
            className="border-[1px] border-b-blue-950 rounded-4xl text-black p-1 pl-8 w-30"
          />
        </form>
        <Link to="/signup">
          <button className="border-1 border-blue-800 px-3 py-1 rounded-md text-black bg-white ">
            sing in
          </button>
        </Link>

        <button
          className="border-1 border-blue-800 px-3 py-1 rounded-md text-white bg-blue-950 hover:text-white"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          {authUser == null ? "loggin" : "logout"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
