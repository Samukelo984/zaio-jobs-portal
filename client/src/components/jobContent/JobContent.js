import "./JobContent.css";
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const JobContent = () => {
  return (
    <section className="jobs">
      <article className="job-info-pills">
        <span>Page 1 of 78 jobs</span>
        <span>Sort by: Relevance</span>
        <span>Saved Jobs</span>
      </article>
      <article className="jobs-container">
        <aside className="mini-job-container">
          <div className="mini-job">
            <h4>Junior Software Developer</h4>
            <span>Zaio</span>
            <span>Sandton City</span>
            <span>Remote | Full-Time</span>
            <span>Post 3 days ago</span>
          </div>
          <div className="mini-job">
            <h4>Junior Software Developer</h4>
            <span>Zaio</span>
            <span>Sandton City</span>
            <span>Remote | Full-Time</span>
            <span>Post 3 days ago</span>
          </div>
          <div className="mini-job">
            <h4>Junior Software Developer</h4>
            <span>Zaio</span>
            <span>Sandton City</span>
            <span>Remote | Full-Time</span>
            <span>Post 3 days ago</span>
          </div>
          <div className="mini-job">
            <h4>Junior Software Developer</h4>
            <span>Zaio</span>
            <span>Sandton City</span>
            <span>Remote | Full-Time</span>
            <span>Post 3 days ago</span>
          </div>
        </aside>
        <aside className="full-job">
          <span className="material-symbols-outlined full-icon">bookmark</span>
          <img
            src="https://marketplace.canva.com/EAFL9aXcaQY/1/0/1600w/canva-blue-modern-software-company-logo-v4d1DB6H0Dk.jpg"
            alt=""
          />
          <Link to="/singlejob/:id" style={{ alignSelf: "center" }}>
            <h2>Junior Software Developer</h2>
          </Link>
          <div className="full-job-info">
            <span>Zaio</span>
            <span>5 *****</span>
            <span>See reviews</span>
          </div>
          <div className="full-job-pills">
            <span>Entry Level</span>
            <span>Sandton, Jhb</span>
            <span>R25 000p.m. </span>
          </div>
          <div className="full-job-btns">
            <button>
              <Link>Apply</Link>
            </button>
            <button>
              <Link>See More</Link>
            </button>
          </div>
          <h3>Job Description</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum magnam
            hic dignissimos culpa quaerat fuga doloribus, autem minus
            perferendis accusamus exercitationem! Expedita at molestiae odio
            excepturi esse aliquam magni culpa impedit non, delectus facere
            voluptates aliquid rerum necessitatibus sit sapiente similique
            veritatis ut distinctio officiis quasi. Nobis itaque eligendi amet?
            Fugiat corrupti impedit dolorum distinctio modi mollitia voluptates
            commodi aliquid illo reiciendis consectetur at ratione, fugit quo
            iste itaque laborum non cumque. Enim, fugiat magni molestias culpa
            reprehenderit repellat voluptates nesciunt officia id veniam natus,
            quos libero mollitia odit incidunt beatae totam. Quos vero assumenda
            laboriosam soluta unde praesentium doloremque.
          </p>
        </aside>
      </article>
      <Pagination />
    </section>
  );
};

export default JobContent;
