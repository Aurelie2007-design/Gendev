import React from "react";
import { images } from "./images/home/image";

const Services = () => {
  return (
    <div className="m-[0%]">
      <div className="bg-linear-30 from-blue-700 to-blue-950 h-[70vh]">
        <div className="flex justify-between items-center text-gray-200 h-full  ">
          <div className="text-center m-30">
            <h1 className="text-5xl m-5">
              Solutions pour entreprises (sites web, applications, systèmes
              embarqués, etc.)
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quibusdam officiis fuga dignissimos maiores unde ducimus,
            praesentium quis qui minus eveniet consequuntur deserunt quam
            delectus beatae, eum obcaecati corrupti cupiditate.
          </div>
        </div>
      </div>
      <div className="m-50">
        <div className="flex justify-center items-center">
          <div className="border-[rgba(150,150,150,0.1)] border-[1px]  shadow-lg shadow-[rgba(100,100,100,0.3)] p-5 h-90 w-90">
            <img
              src={`${images.image15}`}
              alt=""
              className="size-80 rotate-10"
            />
          </div>
          <div className="w-150 p-10 gap-5">
            <h1 className="text-4xl font-semibold py-5">Sites webs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis tempora recusandae error quod cum, obcaecati eaque
              dolor consectetur expedita quam natus rem sit doloribus quae,
              fugit quasi, ratione nemo quidem!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis fugit illum minima consequuntur sunt beatae quod vel
              in facilis! Culpa doloremque ullam delectus veniam eos est nihil
              voluptatibus, eligendi nesciunt.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center m-30">
        <div className="w-100 h-fit bg-[rgba(0,0,150,0.4)] rounded-2xl p-10">
          <h1 className="text-4xl font-semibold">Application</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            sapiente suscipit saepe sint quam eveniet officia voluptatibus iusto
            exercitationem quas, corrupti tempora, ea beatae a facere molestias
            maiores aspernatur! Quibusdam?
          </p>
          <img src={`${images.image9}`} alt="" className="" />
        </div>
        <div className="w-150 text-end border-r-8 border-r-blue-900 pr-5">
          <h1 className="text-4xl font-semibold">Application</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            sapiente suscipit saepe sint quam eveniet officia voluptatibus iusto
            exercitationem quas, corrupti tempora, ea beatae a facere molestias
            maiores aspernatur! Quibusdam? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ducimus odit fugit fuga obcaecati
            nostrum alias impedit vitae consequatur ad voluptatibus sint
            officiis explicabo, earum id enim eligendi necessitatibus quaerat
            atque!
          </p>
        </div>
      </div>
      <div className="flex  justify-end items-center m-30 h-fit mb-40">
        <div className="w-150 border-l-8 border-l-blue-900 pl-5">
          <h1 className="text-4xl font-semibold">Application</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            sapiente suscipit saepe sint quam eveniet officia voluptatibus iusto
            exercitationem quas, corrupti tempora, ea beatae a facere molestias
            maiores aspernatur! Quibusdam? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ducimus odit fugit fuga obcaecati
            nostrum alias impedit vitae consequatur ad voluptatibus sint
            officiis explicabo, earum id enim eligendi necessitatibus quaerat
            atque!
          </p>
        </div>
        <div className="w-100 h-fit bg-[rgba(0,0,250,0.4)] rounded-2xl p-10 ">
          <h1 className="text-4xl font-semibold">Application</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            sapiente suscipit saepe sint quam eveniet officia voluptatibus iusto
            exercitationem quas, corrupti tempora, ea beatae a facere molestias
            maiores aspernatur! Quibusdam?
          </p>
          <img src={`${images.image9}`} alt="" className="" />
        </div>
      </div>
      <div className="">
        <h1 className="text-5xl text-center m-10">Nos services</h1>
        <div className="flex justify-center items-center h-fit ">
          <div className=" grid grid-cols-3 gap-10 m-10">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <div className="h-70 w-90 bg-[rgba(100,100,100,0.3)] rounded-[60px]">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center">
                <div className="h-70 w-90 bg-[rgba(40,40,40,0.1)] rounded-[60px]">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center">
                <div className="h-70 w-90 bg-[rgba(100,100,100,0.2)] rounded-[60px]">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
