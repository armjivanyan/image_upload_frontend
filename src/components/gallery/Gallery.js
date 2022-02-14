import React from "react";
import Image from "../image/Image";

const Gallery = ({ urls }) => {
  const renderGallery = (urls) =>
    urls.map((cur) => <Image url={cur} key={cur}></Image>);

  return (
    <div className="row">{!urls ? "Loading..." : renderGallery(urls)}</div>
  );
};

export default Gallery;
