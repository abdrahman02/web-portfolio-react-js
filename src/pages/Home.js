import React from "react";
import Cta from "../components/Cta";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import { ScrollTop } from "primereact/scrolltop";
// import DialogStillDeploy from "../components/DialogStillDeploy";

const Home = () => {
  // const [visible, setVisible] = useState(true);
  // <DialogStillDeploy visible={visible} setVisible={setVisible} />
  return (
    <div>
      <main>
        <Cta />
        <Experience />
        <Certificates />
        <Skills />
        <ScrollTop
          pt={{
            root: {
              className: "w-2rem h-2rem animate-bounce bg-teal-600 rounded-lg",
            },
            icon: { className: "w-1rem h-1rem animate-bounce" },
          }}
        />
      </main>
    </div>
  );
};

export default Home;
