import {
  ArrowBigLeft,
  ArrowBigRight,
  BookHeartIcon,
  ListStart,
  LucideAccessibility,
  LucideActivitySquare,
  LucideAlignHorizontalDistributeStart,
  LucideMonitorCog,
  PackageSearchIcon,
  ParkingMeterIcon,
  SortAsc,
} from "lucide-react";
import React from "react";
import { images } from "./images/home/image";
import Slider from "react-slick";

const Accueil = () => {
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white  shadow-lg p-1 "
      onClick={onClick}
    >
      <ArrowBigRight className="size-4" />
    </button>
  );

  // Flèche précédente
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white   shadow-lg p-1 "
      onClick={onClick}
    >
      <ArrowBigLeft className="size-4" />
    </button>
  );

  const settings = {
    dots: false, // navigation dots
    infinite: true, // infinite loop
    speed: 1000, // transition speed
    slidesToShow: 1, // number of slides to show
    slidesToScroll: 1, // number of slides to scroll
    autoplay: true, // enable autoplay
    autoplaySpeed: 5000, // autoplay interval
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="m-[0] mt-0 ">
      <div
        className="pb-20 bg-linear-30 from-blue-800 to-black h-[70vh] w-full"
        // style={{ backgroundImage: `url(${images.bgImage})` }}
      >
        <div className="w-full  h-full">
          <div className="flex justify-center items-center w-full m-1">
            <BookHeartIcon className="size-10 p-2  text-cyan-700" />
          </div>
          <div className="text-center">
            <h1 className="text-6xl bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent m-5">
              GENIUS DEVELOPPERS
            </h1>
            <div className="flex justify-center items-center">
              <img
                src={`${images.image17}`}
                alt=""
                className="size-35 m-5 rounded-full"
              />
            </div>
            {/* <p className="text-5xl text-gray-200">
              Your best choice for web development, mobile app development, and{" "}
              software solutions
            </p> 
            <div className="text-center m-15 mt-8 text-gray-400 font-semibold">
              <p>
                We specialize in creating innovative and user-friendly digital
                experiences that drive success for your business. Our team of
                experts is dedicated to delivering high-quality solutions
                tailored to your unique needs. Let's build something great
                together!
              </p>
            </div>*/}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-[-150px] mb-30">
        <div
          className=" m-0 w-200 bg-cover bg-center  h-80 border-4 border-white "
          style={{ backgroundImage: `url(${images.image16})` }}
        >
          <Slider {...settings}>
            <div className="h-80 bg-no-repeat bg-cover bg-center flex justify-center items-center ">
              <div className="m-15">
                <h1 className="text-4xl bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent m-5 font-semibold">
                  Transforming Ideas into Reality with Cutting-Edge Technology
                </h1>
                <p className="text-white font-semibold m-5">
                  At GENIUS DEVELOPPERS, we are passionate about turning your
                  visions into innovative digital solutions.
                </p>
              </div>
            </div>
            <div className="h-80">
              <div className="m-15">
                <h1 className="text-3xl bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent m-5 font-semibold">
                  Transforming Ideas into Reality with Cutting-Edge Technology
                </h1>
                <p className="text-white font-semibold m-5">
                  At GENIUS DEVELOPPERS, we are passionate about turning your
                  visions into innovative digital solutions.
                </p>
              </div>
            </div>
            <div className="h-80">
              <div className="m-15">
                <h1 className="text-3xl bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent m-5 font-semibold">
                  Transforming Ideas into Reality with Cutting-Edge Technology
                </h1>
                <p className="text-white font-semibold m-5">
                  At GENIUS DEVELOPPERS, we are passionate about turning your
                  visions into innovative digital solutions.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* pourquoi nous choisir */}
      <div className="m-15 mt-[-100px]">
        <h1 className="text-5xl text-center ">Pourquoi nous choisir ?</h1>
        <div className="flex justify-center items-center m-10">
          <div className="grid grid-cols-2 m-10 gap-10">
            <div className="w-120 h-35 flex justify-between items-center border-2 border-blue-900 px-5 gap-5 py-0">
              <div className="size-12">
                <ListStart className="size-10 text-blue-800 " />
              </div>
              <div className="py-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum sint asperiores aperiam magni sunt eligendi ratione.
                  Vel quisquam officia sunt nobis delectus harum incidunt nisi,
                  excepturi vitae animi, non porro?
                </p>
                {/* PackageSearchIcon */}
              </div>
            </div>
            <div className="w-120 h-35 flex justify-between items-center border-2 border-blue-900 px-5 gap-5 py-0">
              <div className="size-12">
                <PackageSearchIcon className="size-10 text-blue-800 " />
              </div>
              <div className="py-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum sint asperiores aperiam magni sunt eligendi ratione.
                  Vel quisquam officia sunt nobis delectus harum incidunt nisi,
                  excepturi vitae animi, non porro?
                </p>
                {/* SortAsc */}
              </div>
            </div>
            <div className="w-120 h-35 flex justify-between items-center border-2 border-blue-900 px-5 gap-5 py-0">
              <div className="size-12">
                <SortAsc className="size-10 text-blue-800 " />
              </div>
              <div className="py-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum sint asperiores aperiam magni sunt eligendi ratione.
                  Vel quisquam officia sunt nobis delectus harum incidunt nisi,
                  excepturi vitae animi, non porro?
                </p>
                {/* ParkingMeterIcon */}
              </div>
            </div>
            <div className="w-120 h-35 flex justify-between items-center border-2 border-blue-900 px-5 gap-5 py-0">
              <div className="size-12">
                <ParkingMeterIcon className="size-10 text-blue-800 " />
              </div>
              <div className="py-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum sint asperiores aperiam magni sunt eligendi ratione.
                  Vel quisquam officia sunt nobis delectus harum incidunt nisi,
                  excepturi vitae animi, non porro?
                </p>
                {/* ParkingMeterIcon */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
