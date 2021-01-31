import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const allImages = props.images.map((img) => {
    // const allImages = props.images.map(({ description, id, urls }) => {
    return <ImageCard key={img.id} img={img} />;
    // return <img alt={description} key={id} src={urls.regular} />;
  });
  //   console.log(props.images);
  return <div className="image-list">{allImages}</div>;
};

export default ImageList;
