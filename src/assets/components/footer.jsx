import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-[10%] pt-[5%] pb-0 bg-gray-100 mb-0">
      <div className="w-full  grid grid-cols-2  gap-15">
        <div className="text-start">
          <h1 className="text-2xl font-semibold">GENIUS DEVELOPPERS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            rem expedita architecto consequatur aperiam reiciendis aliquid
            eligendi earum sint officiis nihil impedit. Vel, inventore incidunt
            magnam adipisci expedita magni nemo.
          </p>
          <div className="flex justify-between p-3 pl-0">
            <p>Lorem</p> <p>ipsum</p> <p> dolor</p> <p> sit</p>
          </div>
        </div>
        <div className="text-start">
          <h1>Abonne-toi a notre newsLetter pour</h1>
          <p>Pour etre notifier de toutes nos nouvelles publications</p>
          <form action="" className="gap-5">
            <input
              type="text"
              placeholder="Votre email"
              className="input w-2/4 pl-10 p-1 border-2 border-gray-400 rounded-2xl mr-5"
            />
            <button
              type="submit"
              className="right-0 w-1/4 border-2 h-10 mt-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-r from-purple-500 to-blue-800 text-white"
            >
              s'incrire
            </button>
          </form>
        </div>
      </div>
      <hr className="text-gray-300 w-full " />
      <div className="flex justify-between p-3">
        <p>Copyright2025.gendev - tous droits reserves</p>
        <div className="flex items-center gap-3">
          <Link to={""}>
            <Facebook />
          </Link>
          <Link>
            <Instagram />
          </Link>
          <Link>
            <Linkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
