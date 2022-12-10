import React from "react";
import "./style/imageList.css";

const ImageShow = ({ image }) => {
  return (
    <>
      <div className="container">
        <a href={image.urls.full} target="_blank" rel="noopener noreferrer">
          <img src={image.urls.regular} alt={image.alt_description} />
          <div className="textU"> {image.alt_description}</div>
          <div className="overlay">
            <div className="text">{image.alt_description}</div>
          </div>
        </a>
      </div>

      <div className="tags">
        <ul>
          <li>Alt description: {image.alt_description}</li>
          <li>Color: {image.color}</li>
          <li>Height: {image.height}</li>
          <li>Id: {image.id}</li>
          {/* <li>Title: {image.tags.title}</li>
          <li>Type: {image.tags.type}</li> */}
        </ul>
      </div>
    </>
  );
};

export default ImageShow;
