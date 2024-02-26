import React from "react";
import HandleLiveDemo from "../utils/handleLiveDemo";
import { Carousel } from "primereact/carousel";
import { Dialog } from "primereact/dialog";
import "../assets/css/detail-project.css";

const DetailProject = ({ isVisible, onRequestInvisible, project }) => {
  const { images, title, resources, features, liveDemo } = project || {};

  if (!project) {
    return null;
  }

  const itemTemplate = (sertifikat) => {
    return <img src={sertifikat} alt="Certificate" />;
  };

  return (
    <Dialog
      className="custom-dialog"
      header="Details of my project"
      visible={isVisible}
      style={{ width: "80vw", height: "80vh" }}
      onHide={onRequestInvisible}
    >
      <div className="flex items-center w-full h-full rounded-lg ps-8 -mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Carousel
              value={images}
              numVisible={1}
              numScroll={1}
              itemTemplate={itemTemplate}
              autoplayInterval={3000}
              circular
            />
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
              className={`max-w-32 flex justify-center items-center font-thin tracking-normal mt-2 p-2 rounded-md shadow-lg bg-teal-600 text-white  transition-all ${
                liveDemo ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={() => HandleLiveDemo(liveDemo)}
            >
              <p>Live Demo</p>
              &nbsp;
              <i className="pi pi-external-link"></i>
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DetailProject;
