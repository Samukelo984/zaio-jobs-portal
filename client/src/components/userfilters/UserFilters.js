import "./UserFilters.css";
import React from "react";

const UserFilters = () => {
  return (
    <section className="user-filters">
      <figure className="user-filter">
        <span className="material-symbols-outlined user-filter-icon">
          location_on
        </span>
        <figcaption>Location</figcaption>
      </figure>
      <figure className="user-filter">
        <span className="material-symbols-outlined user-filter-icon">work</span>
        <figcaption>Full-Time</figcaption>
      </figure>
      <figure className="user-filter">
        <span className="material-symbols-outlined user-filter-icon">
          payments
        </span>
        <figcaption>Salary</figcaption>
      </figure>
      <figure className="user-filter">
        <span className="material-symbols-outlined user-filter-icon">
          today
        </span>
        <figcaption>Date Posted</figcaption>
      </figure>
      <figure className="user-filter">
        <figcaption>More Filters</figcaption>
      </figure>
    </section>
  );
};

export default UserFilters;
