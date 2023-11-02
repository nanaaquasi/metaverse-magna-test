import React from "react";

import "../../styles/shimmer.scss";
const PostCardShimmer = () => {
  return (
    <div className="post__shimmer-card">
      <div className="post__shimmer-image"></div>
      <div className="post__shimmer-content">
        <div className="post__shimmer-heading"></div>
        <div className="post__shimmer-body"></div>
        <div className="post__shimmer-author"></div>
      </div>
    </div>
  );
};

export default PostCardShimmer;
