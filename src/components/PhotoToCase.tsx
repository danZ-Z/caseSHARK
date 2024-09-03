import React from "react";
interface PhotoToCaseProps {
    imgSrc: string;
    className:string;
  }

const PhotoToCase : React.FC<PhotoToCaseProps> = ({ imgSrc, className }) => {
const backgroundImg = {
    backgroundImage: `url(${imgSrc})`,
};


    return (
        <div>
            <img 
            src="/case_template_white_edges.png" 
            alt="case_template_white_edges"
            className={className}
            style={backgroundImg}/>
        </div>
    )
}

export default PhotoToCase