import React, { useEffect } from "react";
import ContenidoVisitas from "../components/ContenidoVisitas/ContenidoVisitas";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";
import Bubble from "../components/BubbleContainer/Bubble";

const Visitas = () => {
  //GO TOP
  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 250);
  }, []);

  return (
    <div className="page-wrapper">
      <BubbleContainer content={<ContenidoVisitas />}>
        <Bubble height="160px" top="-1" left="-1%" amarillo />
        <Bubble height="100px" top="40%" left="1%" naranja />
        <Bubble height="160px" top="50%" right="5%" celeste />
        <Bubble height="90px" top="80%" right="40%" rosa />
        <Bubble height="90px" top="1%" right="5%" rosa />
      </BubbleContainer>
    </div>
  );
};

export default Visitas;
