import { Dialog } from "primereact/dialog";
import React from "react";

const DialogStillDeploy = ({ visible, setVisible }) => {
  return (
    <Dialog
      header="Hello Bro 👋👋"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
      pt={{
        root: { className: "text-bold text-slate-700" },
        header: { className: "text-md p-5" },
        content: { className: "px-5 pt-5 pb-10 text-center" },
      }}
    >
      <p className="m-0 text-2xl font-bold uppercase mb-3">
        🙇‍♂️🙇‍♂️ Still Under Development 🙇‍♂️🙇‍♂️
      </p>
      <p className="m-0 font-light tracking-widest">
        🙏 Please understand if you find any bugs 🙏
      </p>
    </Dialog>
  );
};
export default DialogStillDeploy;
