import { Mail, MessageCircleHeart, User2Icon, UserLock } from "lucide-react";
import React from "react";
import { images } from "./images/home/image";

const Temoignages = () => {
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 bg-gray-100 my-20  rounded-4xl w-[80%]">
            <div className="rounded-l-4xl bg-blue-900 h-150 flex justify-center items-center rounded-r-[100px]">
              <div className="">
                <h1 className="text-center text-white text-4xl">
                  Votre temoignage
                </h1>
                <p className="text-center my-10 mx-20 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  est sapiente, aperiam maiores id eligendi soluta labore fugit
                  quisquam porro praesentium ducimus esse ipsam ut quaerat ipsum
                  impedit, eius molestias!
                </p>
                <div
                  className="flex justify-center items-center
                           "
                >
                  <button className=" text-white w-30 h-10 border-blue-800 border-2 rounded-2xl  bg-linear-30 bg-gradient-to-tr from-blue-600 to-cyan-500">
                    lire...
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="w-[70%]">
                <div className="text-center mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <MessageCircleHeart />
                  </div>
                  <h1 className="text-4xl font-bold  mt-3 ">
                    Ici votre commentaire
                  </h1>
                </div>
                {/* form */}
                <form action="" onSubmit="">
                  <div className="form-controls pb-3">
                    <label className="label">nom</label>
                    <div className="relative">
                      <div className="absolute m-3 mt-1">
                        <User2Icon />
                      </div>
                      <input
                        type="text"
                        className={`input w-full pl-10 p-1 border-[1px] border-[rgba(0,0,0,0.1)] bg-white rounded-[1px]`}
                        placeholder="Entrer votre nom"
                        name="name"
                        value=""
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                  <div className="form-controls pb-3">
                    <label className="label">email</label>
                    <div className="relative">
                      <div className="absolute m-3 mt-1">
                        <Mail />
                      </div>
                      <textarea
                        type="email"
                        className={`input w-full pl-10 p-1 border-[1px] border-[rgba(0,0,0,0.1)] rounded-[1px] bg-white`}
                        placeholder="Entrer votre email"
                        name="email"
                        value=""
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>{" "}
                  <button
                    type="submit"
                    className="w-full border-2 h-10 mt-7 border-none  bg-linear-30 bg-gradient-to-tr from-blue-500 to-blue-900 text-white"
                  >
                    "Envoyer un message"
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center m-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-100 h-fit left-0 rounded-2xl">
              <div className=" w-30 h-30  flex justify-center items-center">
                <img
                  src={`${images.image5}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full size-20 "
                />
              </div>
              <div className="p-2">
                <h1 className="text-2xl font-semibold pb-2 text-gray-700">
                  John Doe
                </h1>

                <div className="font-normal text-gray-400 h-auto w-70 pb-3 pr-3">
                  <p>
                    Lorem ipsum Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit rem porro, architecto adipisci
                    asperiores, sit fugiat accusamus nulla beatae aut ea, ipsum
                    veritatis numquam aliquid facere consequatur repudiandae
                    quibusdam ratione!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-100 h-fit left-0 rounded-2xl">
              <div className=" w-30 h-30  flex justify-center items-center">
                <img
                  src={`${images.image6}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full size-20 "
                />
              </div>
              <div className="p-2">
                <h1 className="text-2xl font-semibold pb-2 text-gray-700">
                  John Doe
                </h1>

                <div className="font-normal text-gray-400 h-auto w-70 pb-3 pr-3">
                  <p>
                    Lorem ipsum Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Fugit rem porro, architecto adipisci
                    asperiores, sit fugiat accusamus nulla beatae aut ea, ipsum
                    veritatis numquam aliquid facere consequatur repudiandae
                    quibusdam ratione!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
