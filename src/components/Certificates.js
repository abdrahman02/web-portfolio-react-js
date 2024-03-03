import React from "react";
import { Carousel } from "primereact/carousel";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";
import Sertifikat from "../utils/Sertifikat";

const Certificates = () => {
  const itemTemplate = (sertifikat) => {
    return (
      <div className="flex justify-center">
        <img
          src={sertifikat}
          alt="Certificate"
          className="w-full h-auto md:max-h-96 md:w-auto"
        />
      </div>
    );
  };

  return (
    <section
      id="certificates"
      className="container px-8 mx-auto pt-16 flex flex-col justify-center items-center lg:pt-24 xl:pt-20"
    >
      <h2 className="tracking-widest text-2xl font-bold mb-3 bg-gradient-to-r from-teal-600 via-lime-900 to-teal-900 text-transparent bg-clip-text">
        CERTIFICATES
      </h2>

      <div className="flex flex-wrap justify-center items-center">
        <Accordion activeIndex={0} pt={{ root: { className: "lg:w-1/2" } }}>
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full justify-center items-center">
                <span className="font-bold white-space-nowrap p-5">
                  Participate as a speaker
                </span>
                <Badge
                  value="2023"
                  pt={{
                    root: { className: "text-wrap w-auto h-auto ml-auto px-3" },
                  }}
                />
              </span>
            }
            pt={{ headerAction: { className: "px-5" } }}
          >
            <p className="m-0 ps-8 pb-5 text-justify">
              Certificate as Speaker in Basic Training for the Information
              Systems Student Association of Malikussaleh University
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full justify-center items-center">
                <span className="font-bold white-space-nowrap p-5">
                  Participate as a chairman
                </span>
                <Badge
                  value="2022-2023"
                  pt={{
                    root: { className: "text-wrap w-auto h-auto ml-auto px-3" },
                  }}
                />
              </span>
            }
            pt={{ headerAction: { className: "px-5" } }}
          >
            <p className="m-0 ps-8 pb-5 text-justify">
              Certificate Malikussaleh University Information Systems Student
              Association Malikussaleh University Information Systems Study
              Program
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full justify-center items-center">
                <span className="font-bold white-space-nowrap p-5">
                  Participate as a deputy chairman
                </span>
                <Badge
                  value="2021-2022"
                  pt={{
                    root: { className: "text-wrap w-auto h-auto ml-auto px-3" },
                  }}
                />
              </span>
            }
            pt={{ headerAction: { className: "px-5" } }}
          >
            <p className="m-0 ps-8 pb-5 text-justify">
              Certificate Malikussaleh University Information Systems Student
              Association Malikussaleh University Information Systems Study
              Program
            </p>
          </AccordionTab>
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full justify-center items-center">
                <span className="font-bold white-space-nowrap p-5">
                  Participate as a participant
                </span>
                <Badge
                  value="2023"
                  pt={{
                    root: { className: "text-wrap w-auto h-auto ml-auto px-3" },
                  }}
                />
              </span>
            }
            pt={{ headerAction: { className: "px-5" } }}
          >
            <p className="m-0 ps-8 pb-5 text-justify">
              Certificate Workshop From Anywhere PT. Solusi Data Madani
            </p>
          </AccordionTab>
        </Accordion>

        <Carousel
          value={Sertifikat}
          numVisible={1}
          numScroll={1}
          itemTemplate={itemTemplate}
          autoplayInterval={3000}
          circular
          pt={{
            root: { className: "px-5 lg:w-1/2" },
            itemsContainer: {
              className: "flex items-center",
            },
          }}
        />
      </div>
    </section>
  );
};
export default Certificates;
