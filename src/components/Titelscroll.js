import React from "react";

export const Titelscroll = (props) => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-9xl text-stone-300 font-semibold ml-3" >{props.titel}</h1>
    </div>
  );
};

/*
<Parallax translateX={["-50", "0"]} easing='easeInOut'>
        <h1 className="text-9xl text-stone-300 font-semibold bg-white" >{props.titel}</h1>
      </Parallax>
*/