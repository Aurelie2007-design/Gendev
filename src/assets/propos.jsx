import React from "react";
import { images } from "./images/home/image";
import {
  BaggageClaimIcon,
  LucideAirplay,
  LucideOctagon,
  Phone,
} from "lucide-react";

const Propos = () => {
  return (
    <div className="">
      {/* presentation de la startup */}
      <div
        className="w-full border-[1px] border-blue-950 h-[90vh] bg-no-repeat bg-top bg-cover flex justify-between items-center overflow-hidden"
        style={{ backgroundImage: `url(${images.image10})` }}
      >
        <div className="flex justify-between items-center bg-[rgba(0,0,0,0.5)] h-full w-full ">
          <div className="flex   gap-5 rounded-3xl">
            <div className="h-70 w-10 rounded-1xl bg-blue-900 "></div>
            <div className="pt-10 w-[30vw]">
              <h1 className="bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent text-5xl font-semibold ] ">
                GENIUS DEVELOPPERS
              </h1>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veniam, amet voluptate unde suscipit labore molestias.
                Cupiditate consequatur expedita, quod accusantium ad labore unde
                iure ipsum minus at et molestiae delectus?
              </p>
            </div>
          </div>
          <div className=" bg-white h-full w-[50vw] mt-70 rounded-tl-[90px] p-20 gap-10">
            <h1 className="bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent text-7xl font-semibold mb-10">
              GENDEV
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae
              quidem reprehenderit, rem unde minus ad nulla quasi expedita
              asperiores impedit blanditiis vitae! Nisi quasi iusto beatae
              maxime dolor itaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus debitis repellendus mollitia beatae magnam nostrum
              dignissimos architecto? Minima, cumque eveniet quas rerum officiis
              ratione temporibus fuga dicta corrupti, nesciunt dolorem.
            </p>
          </div>
        </div>
      </div>
      {/* domaines d'expertises */}
      <div className="py-20 pb-0 bg-[rgba(200,200,200,0.1)]">
        <div className="">
          <h1 className="text-center text-5xl mb-3"> Domaines d'Expertise</h1>
          <div className=" mb-20 flex justify-center items-center ">
            <div className="flex gap-10 my-10 p-5   ">
              <div className="px-10 py-3 w-50 border-[rgba(100,100,100,0.1)] border-[1px] shadow-lg shadow-[rgba(100,100,100,0.3)]">
                <div className="flex justify-center items-center">
                  <LucideOctagon className="size-10 text-black" />
                </div>
                <p className="text-gray-300 text-center font-semibold">
                  Programmation web
                </p>
              </div>
              <div className="px-10 py-3 w-50 border-[rgba(100,100,100,0.1)] border-[1px] shadow-lg shadow-[rgba(100,100,100,0.3)]">
                <div className="flex justify-center items-center">
                  {" "}
                  <LucideAirplay className="size-10 text-black" />
                </div>
                <p className="text-gray-300 text-center font-semibold">
                  {" "}
                  Conception assistee par odinateur
                </p>
              </div>
              <div className="px-10 py-3 w-50 border-[rgba(100,100,100,0.1)] border-[1px] shadow-lg shadow-[rgba(100,100,100,0.3)]">
                <div className="flex justify-center items-center">
                  <BaggageClaimIcon className="size-10 text-black" />
                </div>
                <p className="text-gray-300 text-center font-semibold">
                  {" "}
                  Arduino + internet des objects
                </p>
              </div>
              <div className="px-10 py-3 w-50 border-[rgba(100,100,100,0.1)] border-[1px] shadow-lg shadow-[rgba(100,100,100,0.3)]">
                <div className="flex justify-center items-center">
                  <Phone className="size-10 text-black" />
                </div>
                <p className="text-gray-300 text-center font-semibold">
                  Welcome
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* histoire mission et vision */}
      <div className="mx-[5%] h-fit my-15 mt-25">
        <h1 className="text-center text-5xl mb-3">
          Histoire, Vision et mission
        </h1>
        <p className="text-center text-gray-400 font-medium mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div
          className=" bg-no-repeat bg-center bg-cover bg-fixed border-[1px] border-blue-950"
          style={{ backgroundImage: `url(${images.image9})` }}
        >
          <div className="grid grid-cols-2 bg-[rgba(0,0,0,0.6)]  h-[90vh]">
            <div className=" bg-white rounded-r-[200px] flex justify-center items-center h-full">
              <div className="">
                <h1 className="text-3xl font-semibold m-4 ml-15">
                  Notre histoire
                </h1>
                <div className=" border-l-[15px] border-l-blue-900">
                  <p className="text-gray-400 font-medium ml-3 m-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque mollitia facere obcaecati, iusto rerum voluptatem at
                    iste id laborum maiores nostrum voluptatum vel dicta
                    exercitationem minima sit repellat. Sed, dolorem? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Cumque
                    mollitia facere obcaecati, iusto rerum voluptatem at iste id
                    laborum maiores nostrum voluptatum vel dicta exercitationem
                    minima sit repellat. Sed, dolorem?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-15 pl-5 flex justify-center items-center">
              <div className="">
                <div className=" text-white flex justify-center items-center my-15">
                  <div className="bg-blue-800 w-150">
                    <h1 className="text-3xl font-semibold m-4 w-fit ">
                      Notre Vision
                    </h1>
                  </div>

                  <div className=" border-l-8 border-l-blue-900">
                    <h1 className=" m-3 text-2xl">
                      VOUS OFFRIR LES MEILLEURS SERVICES
                    </h1>
                    <p className="text-gray-400 font-medium ml-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque mollitia facere obcaecati, iusto rerum voluptatem
                      at iste id laborum maiores nostrum voluptatum vel dicta
                      exercitationem minima sit repellat. Sed, dolorem?
                    </p>
                  </div>
                </div>
                <div className=" text-white flex justify-center items-center my-15">
                  <div className="bg-blue-800 w-150">
                    <h1 className="text-3xl font-semibold m-4 w-fit ">
                      Notre Mission
                    </h1>
                  </div>

                  <div className=" border-l-8 border-l-blue-900">
                    <h1 className=" m-3 text-2xl">
                      VOUS OFFRIR LES MEILLEURS SERVICES
                    </h1>
                    <p className="text-gray-400 font-medium ml-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque mollitia facere obcaecati, iusto rerum voluptatem
                      at iste id laborum maiores nostrum voluptatum vel dicta
                      exercitationem minima sit repellat. Sed, dolorem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* notre equipe */}
      <div className="mx-[5%] h-fit my-15 mt-25">
        <h1 className="text-center text-5xl mb-10"> Notre Equipe</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image5}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image4}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image4}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.1)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image4}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image4}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.1)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
            <div className="flex border-[rgba(200,200,200,0.1)] border-[1px]  shadow-lg shadow-[rgba(200,200,200,0.4)] w-150 left-0 rounded-2xl">
              <div className=" w-150 h-full  flex justify-center items-center">
                <img
                  src={`${images.image4}`}
                  alt=""
                  className="object-cover border-[1px] border-[rgba(0,0,0,0.2)] rounded-full  "
                />
              </div>
              <div className="p-5">
                <h1 className="text-3xl font-semibold pb-2 text-blue-900">
                  John Doe
                </h1>
                <h1 className="text-2xl pb-1 text-gray-600">
                  Developpeur front-end
                </h1>
                <div className="font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati odit fuga optio ipsa praesentium eaque quod sint.
                  Beatae assumenda atque ad possimus omnis doloribus? Vitae ad
                  ullam eius esse consequuntur!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;
