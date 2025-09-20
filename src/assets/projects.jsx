import React from "react";
import { images } from "./images/home/image";
import {
  AxeIcon,
  BaggageClaimIcon,
  LucideAirplay,
  LucideOctagon,
  Phone,
} from "lucide-react";

const Projects = () => {
  return (
    <div>
      <div className="bg-linear-30 from-blue-700 to-blue-950 h-[70vh]">
        <div className="flex justify-between items-center text-gray-200 h-full  ">
          <div className="text-center m-30">
            <h1 className="text-6xl m-8">
              Plusieurs projets realises dans la ville de Goma
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quibusdam officiis fuga dignissimos maiores unde ducimus,
              praesentium quis qui minus eveniet consequuntur deserunt quam
              delectus beatae, eum obcaecati corrupti cupiditate.
            </p>
            <div className="flex justify-center items-center ">
              <div className="h-40 bg-gray-100  my-5 rounded-4xl w-200 flex justify-center items-center overflow-hidden p-10 text-black">
                <div className="flex justify-center items-center gap-8">
                  <i className="font-bold text-3xl">
                    We<span className="text-amber-500">Buy</span>
                  </i>
                  <div className="border-amber-500 border-2 rounded-full">
                    <img
                      src={`${images.image9}`}
                      alt=""
                      className="size-20 rounded-full border-white border-2"
                    />
                  </div>

                  <p className="text-2xl font-bold">
                    Votre nouveau plateforme{" "}
                  </p>
                  <i className="font-semibold">
                    <span className="text-4xl font-bold text-amber-500">E</span>
                    commerce
                  </i>
                </div>
              </div>
            </div>
            <button className="right-0 w-fit p-5 border-2 py-3 mt-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-r from-purple-500 to-blue-800 text-white">
              Quick Demo
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center m-15 ">
          <AxeIcon className="size-10 text-red-500" />
          <h1 className="text-center font-semibold text-4xl">
            Le dernier projet
          </h1>
        </div>
        <div className="flex justify-center items-center mx-[15%]">
          <img
            src={`${images.image10}`}
            alt=""
            className="h-[60vh] w-full object-cover rounded-4xl"
          />
        </div>
        <div className="flex justify-between ">
          <div className="border-l-8 border-l-blue-900 ml-[15%] gap-5 p-5 w-1/2 h-fit">
            <i className="font-bold text-3xl">
              We<span className="text-amber-500">Buy</span>
            </i>
            <p className="text-2xl font-semibold">
              Votre nouveau plateforme{" "}
              <i className="font-semibold">
                <span className="text-4xl font-bold text-amber-500">E</span>
                commerce
              </i>
            </p>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis
              fugit, fuga nemo impedit ducimus omnis a sed eos magni minus esse
              inventore! Vel, vero? Aspernatur id eum soluta suscipit!
              Voluptatum tempora molestiae quos expedita nulla ipsum voluptas
              maiores modi cum natus, odit similique aut dicta obcaecati
              assumenda, consequuntur labore a aliquam iste praesentium numquam
              consectetur quaerat. Architecto, qui impedit. Laudantium adipisci
              quae dolorum nihil, nulla eum cupiditate cumque magnam recusandae
              hic rerum esse! Rem error harum aliquam dicta minus eligendi
              nostrum repudiandae consequuntur. Libero nisi quasi dolor odio ut.
              Autem inventore rerum consectetur dolore culpa unde, corporis
              veniam assumenda deserunt recusandae facere saepe laborum delectus
              officiis deleniti! Neque iste debitis voluptatem eligendi ut
              tenetur culpa dolorum modi architecto repellat. Quibusdam
              necessitatibus deserunt saepe nisi optio facilis vitae ea animi
              maxime neque nobis modi, voluptates rem debitis eaque iure non
              atque aliquid tenetur impedit libero unde eligendi maiores!
              Fugiat, ad?
            </p>
          </div>
          <div className="grid grid-cols-2 w-1/2 gap-5 p-10">
            <div className="overflow-hidden rounded-4xl">
              <img
                src={`${images.image10}`}
                alt=""
                className="size-80 object-cover rounded-4xl hover:scale-110 transition-all ease-linear "
              />
            </div>

            <div className="overflow-hidden rounded-4xl">
              <img
                src={`${images.image1}`}
                alt=""
                className="size-80 object-cover rounded-4xl hover:scale-110 transition-all ease-linear "
              />
            </div>
            <div className="overflow-hidden rounded-4xl">
              <img
                src={`${images.image2}`}
                alt=""
                className="size-80 object-cover rounded-4xl hover:scale-110 transition-all ease-linear "
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={`${images.image4}`}
                alt=""
                className="size-35 object-cover rounded-2xl hover:scale-110 transition-all ease-linear overflow-hidden"
              />
              <img
                src={`${images.image3}`}
                alt=""
                className="size-35 object-cover rounded-2xl hover:scale-110 transition-all ease-linear overflow-hidden"
              />
              <img
                src={`${images.image8}`}
                alt=""
                className="size-35 object-cover rounded-2xl hover:scale-110 transition-all ease-linear overflow-hidden"
              />
              <div className="size-35 grid place-items-center bg-[rgba(0,0,6,0.2)] rounded-2xl text-white">
                <button className="text-2xl font-semibold">Voir plus...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center m-15 ">
          <AxeIcon className="size-10 text-blue-900" />
          <h1 className="text-center font-semibold text-4xl">
            Tous nos projets
          </h1>
        </div>
        <div className="flex  items-center mx-20 my-20">
          <div className="w-1/2 h-120">
            <img src={`${images.image9}`} alt="" className="w-full h-full" />
          </div>
          <div className="text-gray-600 h-100 ml-[-100px] z-10 bg-white p-10 w-1/2 border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)]">
            <p className="text-3xl mb-2">
              nom: <span>BeautySaloon</span>
            </p>
            <p className="text-2xl">Developpe par: MILTON, EDDY et JACQUES </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              facilis minima quisquam adipisci omnis temporibus alias iure est
              vel quis dolor nisi explicabo non velit inventore nihil, ullam ab
              voluptates! Quo sunt soluta corrupti eligendi alias eius ea
              consequuntur consequatur! Itaque facere doloribus repellat
              veritatis quos architecto, corporis vero alias saepe quae quidem
              mollitia ab quia totam distinctio natus unde. Cumque amet deserunt
              voluptatibus fugit perspiciatis expedita ad provident excepturi
              esse. Molestiae corporis, numquam totam quos, non provident sit,
              ducimus et voluptate impedit quo. Aliquam veniam corporis expedita
              deleniti officiis.
            </p>
            <a
              href=""
              className="link text-blue-800 underline font-semibold italic"
            >
              Lorem ipsum dolor sit amet,
            </a>
          </div>
        </div>
        <div className="flex  items-center mx-20 my-20">
          <div className="w-1/2 h-120">
            <img src={`${images.image10}`} alt="" className="w-full h-full" />
          </div>
          <div className="text-gray-600 h-100 ml-[-100px] z-10 bg-white p-10 w-1/2 border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)]">
            <p className="text-3xl mb-2">
              nom: <span>BeautySaloon</span>
            </p>
            <p className="text-2xl">Developpe par: MILTON, EDDY et JACQUES </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              facilis minima quisquam adipisci omnis temporibus alias iure est
              vel quis dolor nisi explicabo non velit inventore nihil, ullam ab
              voluptates! Quo sunt soluta corrupti eligendi alias eius ea
              consequuntur consequatur! Itaque facere doloribus repellat
              veritatis quos architecto, corporis vero alias saepe quae quidem
              mollitia ab quia totam distinctio natus unde. Cumque amet deserunt
              voluptatibus fugit perspiciatis expedita ad provident excepturi
              esse. Molestiae corporis, numquam totam quos, non provident sit,
              ducimus et voluptate impedit quo. Aliquam veniam corporis expedita
              deleniti officiis.
            </p>
            <a
              href=""
              className="link text-blue-800 underline font-semibold italic"
            >
              Lorem ipsum dolor sit amet,
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
