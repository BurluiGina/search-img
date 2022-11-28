import React from "react";
import ImageShow from "./ImageShow";
import "./style/imageList.css";

const ImageList = ({images}) => {
    const rederedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    });

    return (<div className="image-list">{rederedImages}</div>);
    }

export default ImageList;
