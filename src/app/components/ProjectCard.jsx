import React from "react";

const ProjectCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <div className="w-[100%] ml-[5%]">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-primary-400 font-semibold mb-2">{title}</h5>
        <p className="text-detail-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;