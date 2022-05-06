import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Titelscroll = (props) => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-9xl text-stone-300 font-semibold -z-10" >{props.titel}</h1>
    </div>
  );
};

/*
<Parallax translateX={["-50", "0"]} easing='easeInOut'>
        <h1 className="text-9xl text-stone-300 font-semibold bg-white" >{props.titel}</h1>
      </Parallax>
*/