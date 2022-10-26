import "./BackArrow.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <section className="back-arrow-container">
      <span
        className="material-symbols-outlined back-arrow"
        onClick={() => {
          navigate(-1);
        }}
      >
        arrow_back_ios_new
      </span>
    </section>
  );
};

export default BackArrow;
