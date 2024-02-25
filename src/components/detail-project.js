import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandleLiveDemo from "../utils/handleLiveDemo";
Modal.setAppElement("*");

const DetailProject = ({ isOpen, onRequestClose, project }) => {
  const { images, title, resources, features, liveDemo } = project || {};
  if (!project) {
    return null;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Modal
      className="h-5/6 w-11/12 mt-5 fixed inset-16 flex justify-center items-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="flex items-center w-full h-full rounded-lg p-8 bg-teal-500">
        <button
          className="absolute top-0 right-0 m-4 text-2xl text-slate-600"
          onClick={onRequestClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col justify-evenly tracking-widest">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 ">
              <div className="">
                <p className="text-base font-semibold mb-2">Resource</p>
                <ul className="list-disc ps-6">
                  {resources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-base font-semibold mb-2">Features</p>
                <ul className="list-disc ps-6">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <span
              className={`max-w-40 font-semibold mt-2 p-2 border border-slate-800 rounded-md shadow-lg cursor-pointer hover:bg-teal-600 hover:border-none transition-all ${
                liveDemo ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={() => HandleLiveDemo(liveDemo)}
            >
              Live Demo &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailProject;
