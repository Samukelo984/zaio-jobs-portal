import "./Home.css";
import React from "react";
import UserFilters from "../../components/userfilters/UserFilters";
import SearchInput from "../../components/searchInput/SearchInput";

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
    </main>
  );
};

export default Home;
