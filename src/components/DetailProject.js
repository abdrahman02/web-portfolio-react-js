import React from "react";
import HandleLiveDemo from "../utils/HandleLiveDemo";
import { Carousel } from "primereact/carousel";
import { Dialog } from "primereact/dialog";

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
      onHide={onRequestInvisible}
      pt={{
        root: { className: "w-10/12" },
        header: { className: "p-5" },
      }}
    >
      <div className="flex flex-wrap flex-col items-center justify-center w-full h-full rounded-lg gap-8 lg:flex-row">
        <Carousel
          value={images}
          numVisible={1}
          numScroll={1}
          itemTemplate={itemTemplate}
          autoplayInterval={3000}
          circular
          pt={{
            root: { className: "lg:w-5/12" },
          }}
        />
        <div className="flex flex-col justify-evenly tracking-widest px-5 pb-5 lg:w-1/2">
          <h2 className="tex-xm font-bold mb-4 lg:text-xl">{title}</h2>
          <div className="grid grid-cols-2 ">
            <div className="">
              <p className="text-xs font-semibold mb-2 lg:text-base">
                Resource
              </p>
              <ul className="list-disc ps-6">
                {resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold mb-2 lg:text-base">
                Features
              </p>
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
    </Dialog>
  );
};

export default DetailProject;
