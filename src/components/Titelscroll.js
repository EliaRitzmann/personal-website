import React from "react";

export const Titelscroll = (props) => {
  return (
    <div className="">
      <h1 className="text-5xl md:text-9xl text-stone-300 font-semibold ml-3 relative dark:text-stone-100" >{props.titel}</h1>
    </div>
  );
};

/*
<Parallax translateX={["-50", "0"]} easing='easeInOut'>
        <h1 className="text-9xl text-stone-300 font-semibold bg-white" >{props.titel}</h1>
      </Parallax>
*/