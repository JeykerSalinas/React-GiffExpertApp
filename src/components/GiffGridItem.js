import React from "react";

export const GiffGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <p>{title}</p>
      <div
        style={{
          height: "300px",
          width: "100%",
          backgroundImage: "url(" + url + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default GiffGridItem;
