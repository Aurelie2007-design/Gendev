import React from "react";
import { images } from "./images/home/image";
import { getAllEditions } from "../store/FormationsData";
import { Link } from "react-router-dom";

const Formations = () => {
  const editions = getAllEditions();

  return (
    <div>
      {/* petite apercu */}
      <div className="bg-center bg-no-repeat h-150 bg-cover bg-white border-b-[1px] border-purple-300">
        <div className="bg-[rgba(0,0,0,0)]  h-full w-full flex justify-between items-center ">
          <div className="ml-[5%]">
            <h1 className="text-5xl bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent font-semibold lowercase">
              CHAQUE ANNEE, NOUS VOUS PROPOSONS DES FORMATIONS PROFESSIONNELLES
            </h1>
            <p className=" text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolore eligendi perspiciatis alias sed sit
              necessitatibus.
            </p>
            <button className="right-0 w-fit p-5 border-2 py-3 mt-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-r from-purple-500 to-blue-800 text-white">
              Decouvrir nos formations
            </button>
          </div>
          <div className="ml-[5%] relative bg-linear-30 bg-gradient-to-tr  from-blue-700 to-blue-950 h-full rounded-tl-[400px] rounded-bl-[200px] w-full">
            <img
              src={`${images.image13}`}
              alt=""
              className="right-0 h-120 w-85 rotate-6 ml-90 mt-10 "
            />
            <img
              src={`${images.image14}`}
              alt=""
              className="absolute size-80 top-10 left-20 rotate-[-12deg]"
            />
            <img
              src={`${images.image15}`}
              alt=""
              className="absolute size-50 object-cover bottom-20 left-30 rotate-[-20deg]"
            />
          </div>
        </div>
      </div>
      {/* Formation offerte */}
      <div className="mx-[5%] h-fit my-15 mt-25">
        <h1 className="text-center text-5xl mb-3"> Formations offertes</h1>
        <p className="text-center text-gray-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" grid grid-cols-3 ">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="h-70 w-90 bg-[rgba(0,0,205,0.5)] rounded-3xl">
                <img src="" alt="" />
              </div>
            </div>

            <h1 className="text-2xl font-semibold m-2">Programmation web</h1>
            <p className=" text-gray-400 font-normal m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita quo sapiente animi magnam dolor numquam ipsam molestias
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="h-70 w-90 bg-[rgba(0,0,100,0.4)] rounded-3xl">
                <img src="" alt="" />
              </div>
            </div>

            <h1 className="text-2xl font-semibold m-2">
              Conception assistee par odinateur
            </h1>
            <p className=" text-gray-400 font-normal m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita quo sapiente animi magnam dolor numquam ipsam molestias
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="h-70 w-90 bg-[rgba(0,0,155,0.5)] rounded-3xl">
                <img src="" alt="" />
              </div>
            </div>

            <h1 className="text-2xl font-semibold m-2">
              Arduino + internet des objects
            </h1>
            <p className=" text-gray-400 font-normal m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita quo sapiente animi magnam dolor numquam ipsam molestias
            </p>
          </div>
        </div>
      </div>
      {/* nouvelle formation */}
      <div className="bg-[rgba(136,136,136,0.1)] pb-10">
        <div
          className="rounded-b-[200px] bg-fixed"
          style={{ backgroundImage: `url(${images.image15})` }}
        >
          <div className="bg-[rgba(0,0,0,0.7)] h-100 text-white  p-20 rounded-b-[200px] ">
            <div className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent ">
              <h1 className="text-center text-5xl mb-5 ">
                Prochaine formation <span>2026</span>
              </h1>
              <p className="text-center text-2xl">
                Pendant les grandes vacances
              </p>
              <p className="mx-[20%] text-center text-gray-300 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nulla accusamus, architecto quas, perferendis optio, eaque
                voluptate officia necessitatibus doloremque itaque tempora ea
                consectetur esse illo similique! Rerum, iure veritatis. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
                libero excepturi veritatis natus et sapiente. Repellendus autem
                obcaecati nulla tempore ex rerum, odio asperiores natus?
                Consequatur nisi delectus dolorum suscipit?
              </p>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="right-0 w-fit p-5 border-2 py-3 mt-7 ml-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-tr from-blue-800 to-purple-800 text-white"
                >
                  Plus de details
                </button>
                <button
                  type="submit"
                  className="right-0 w-fit p-5 border-2 py-3 mt-7 ml-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-tr from-blue-800 to-purple-800 text-white"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="]">
          <h1 className="text-4xl font-semibold m-10 text-center text-blue-950 ">
            Modules de formation
          </h1>
          <div className="m-3 grid grid-cols-3 gap-5 text-center mx-[10%]">
            <div className="">
              <div className="flex justify-center items-center">
                <div className="size-40  bg-[rgba(0,0,205,0.5)] rounded-full">
                  <img src="" alt="" />
                </div>
              </div>

              <h1 className="text-2xl font-semibold m-2">Programmation web</h1>
              <p className=" text-gray-400 font-normal m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                expedita quo sapiente animi magnam dolor numquam ipsam molestias
              </p>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="size-40 bg-[rgba(0,0,100,0.4)] rounded-full">
                  <img src="" alt="" />
                </div>
              </div>

              <h1 className="text-2xl font-semibold m-2">
                Conception assistee par odinateur
              </h1>
              <p className=" text-gray-400 font-normal m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                expedita quo sapiente animi magnam dolor numquam ipsam molestias
              </p>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="size-40 bg-[rgba(0,0,155,0.5)] rounded-full">
                  <img src="" alt="" />
                </div>
              </div>

              <h1 className="text-2xl font-semibold m-2">
                Arduino + internet des objects
              </h1>
              <p className=" text-gray-400 font-normal m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                expedita quo sapiente animi magnam dolor numquam ipsam molestias
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Présentation des éditions passées */}
      <div className="mx-[5%] h-fit my-15 mt-25">
        <h1 className="text-center text-5xl mb-3">
          Présentation des éditions passées{" "}
        </h1>
        <p className="text-center mb-10">
          Deux editions passees au cours de deux dernieres annees
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="p-6  gap-6">
          {editions.map((edition) => (
            <div key={edition.id} className="p-8 ">
              <div className="grid grid-cols-2 w-300 bg-gray-50">
                <div className="w-150">
                  <img src={edition.image} alt="" className="w-full h-100" />
                </div>
                <div className="m-10 w-150">
                  <h2 className="text-xl font-bold">{edition.title}</h2>
                  <p className="mt-2 line-clamp-3">{edition.description}</p>

                  <Link to={`/edition/${edition.id}`}>
                    <button className="right-0 w-fit p-5 border-2 py-2 mt-7 ml-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-tr from-blue-900 to-purple-500 text-white">
                      Voir plus
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formations;
