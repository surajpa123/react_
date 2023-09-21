import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
    <div style={{width:"80%", margin:"auto"}}>
      <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={2} gap={20} />
      </div>
    </>
  );
};

export default Shimmer;
