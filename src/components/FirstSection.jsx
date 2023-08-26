import React from "react";
import pic from "../images/c5e5f722781315.5787cb9bb9569.jpg";


function FirstSection() {
  
  return (
    <>
      <div className="cover-container">
        <div className="desc">
          <h1>Prose Paradise.</h1>
          <p>
            Indulge in the beauty of prose and the art of storytelling at Prose
            Paradise, a sanctuary for literature enthusiasts seeking meaningful
            reads.
          </p>
          <button>{`Start Exploring`.toUpperCase()}</button>
        </div>
        <img src={pic} alt="" className="cover" />
      </div>
    </>
  );
}

export default FirstSection;
