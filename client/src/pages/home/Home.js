import "./Home.css";
import React from "react";
import UserFilters from "../../components/userfilters/UserFilters";
import SearchInput from "../../components/searchInput/SearchInput";
import JobContent from "../../components/jobContent/JobContent";

const Home = () => {
  return (
    <main className="home">
      <h1>Jobs</h1>
      <UserFilters />
      <SearchInput />
      <article className="home-headings">
        <h2>Recommended Job Feed</h2>
        <h5>Based on your activity on Zaio</h5>
      </article>
      <JobContent />
    </main>
  );
};

export default Home;
