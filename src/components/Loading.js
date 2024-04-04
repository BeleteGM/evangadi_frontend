import React from "react";
import { FadeLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      < FadeLoader color="rgb(0, 132, 2)" />
    </div>
  );
}

export default Loading;
