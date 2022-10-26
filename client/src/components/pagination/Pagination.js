import "./Pagination.css";
import React from "react";

const Pagination = () => {
  return (
    <article className="pagination">
      <span className="material-symbols-outlined page-icon">
        arrow_back_ios
      </span>
      <span className="page-nr">1</span>
      <span className="page-nr">2</span>
      <span className="page-nr">3</span>
      <span className="page-nr">4</span>
      <span className="page-nr">5</span>
      <span className="page-nr">6</span>
      <span className="page-nr">7</span>
      <span className="page-nr">...</span>
      <span className="material-symbols-outlined page-icon">
        arrow_forward_ios
      </span>
    </article>
  );
};

export default Pagination;
