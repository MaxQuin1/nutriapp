import React from "react";
import fondo from "../img/fondo.jpg";

export default function Home() {
  return (
    <>
      <div
        className="relative bg-cover h-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      ></div>
    </>
  );
}
