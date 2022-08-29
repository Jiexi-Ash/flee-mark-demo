import React from "react";

function Loader({ position = "center" }) {
  return (
    <div
      className={`flex items-center ${
        position === "center" ? "justify-center" : ""
      }`}
    >
      <div className=" w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
