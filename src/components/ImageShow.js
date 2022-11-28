import React from "react";

const ImageShow = ({image}) => {
    return (
    <div>
        <img src={image.urls.regular} alt=""/>
    </div>
    );
    
    }

export default ImageShow;
