import "./Companies.css";
import React from "react";
import BackArrow from "../../components/backArrow/BackArrow";
import BusinessCard from "../../components/businessCard/BusinessCard";
import Pagination from "../../components/pagination/Pagination";

const Companies = () => {
  return (
    <main className="companies">
      <BackArrow />
      <h1>Companies</h1>
      <BusinessCard />
      <Pagination />
    </main>
  );
};

export default Companies;
