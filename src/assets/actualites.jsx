import React from "react";
import { images } from "./images/home/image";

const Actualites = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-5xl font-semibold m-5">Actualites</h1>
        <p className="text-3xl text-center m-2">
          Choisissez le programme qui vous plait
        </p>
        <p className="text-center text-gray-400 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab
          laudantium quo modi at dolore fugit vel voluptatum suscipit, eveniet
          minus sit fugiat quod quis perferendis natus quas porro incidunt!
        </p>
        <div className="flex justify-center items-center m-10 h-[70vh] ">
          <div
            className="bg-red-500 w-full m-10 h-[70vh] rounded-4xl bg-cover bg-no-repeat bg-top p-10"
            style={{ backgroundImage: `url(${images.image10})` }}
          >
            <div className="justify-between grid">
              <button className="bg-white w-20 h-10 bottom-0 rounded-2xl">
                salut
              </button>
              <div className="bg-white w-70 h-50 p-8 rounded-2xl mt-50">
                <div className="flex gap-5 border-b-[1px] border-b-gray-300 p-2">
                  <img
                    src={`${images.image4}`}
                    alt=""
                    className="object-cover size-10 rounded-full"
                  />
                  <img
                    src={`${images.image5}`}
                    alt=""
                    className="object-cover size-10 rounded-full"
                  />
                  <img
                    src={`${images.image6}`}
                    alt=""
                    className="object-cover size-10 rounded-full"
                  />
                </div>
                <div className="pb-5 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Explicabo qui doloribus quidem .
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-4xl">
          GENDEV Vous presente votre nouvelle plateforme Ecommerce a goma
        </h1>
        <p className="text-center mx-30 my-5 text-gray-400">
          Bientot chez Vous, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error nobis earum minima reiciendis ratione voluptates autem
          facilis, dolorum ab magnam dolores corporis ad labore alias sit!
          Quisquam deserunt fuga totam.
        </p>
        <div className="grid grid-cols-2 h-[80vh] mx-20 my-15 ">
          <div className="h-100">
            <img
              src={`${images.image15}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            cupiditate alias doloribus obcaecati repellat reprehenderit qui
            totam earum fugit, et id inventore! Repudiandae eius quidem
            recusandae veritatis. Molestias, esse illo.
          </div>
        </div>

        <div className="mx-20  mb-10">
          <h1 className="text-center text-5xl">Articles plus recent</h1>
          <div className="flex  items-center mx-20 my-20">
            <div className="w-1/2 h-120">
              <img src={`${images.image9}`} alt="" className="w-full h-full" />
            </div>
            <div className="text-gray-600 h-100 ml-[-100px] z-10 bg-white p-10 w-1/2 border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)]">
              <p className="text-3xl mb-2">Cloture de la formation gendev</p>
              <p className="text-2xl">Deuxieme promotion 2025</p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                facilis minima quisquam adipisci omnis temporibus alias iure est
                vel quis dolor nisi explicabo non velit inventore nihil, ullam
                ab voluptates! Quo sunt soluta corrupti eligendi alias eius ea
                consequuntur consequatur!
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
    </div>
  );
};

export default Actualites;
