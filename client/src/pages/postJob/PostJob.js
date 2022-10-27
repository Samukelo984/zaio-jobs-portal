import "./PostJob.css";
import React from "react";
import BackArrow from "../../components/backArrow/BackArrow";
import PostForm from "../../components/postForm/PostForm";

const PostJob = () => {
  return (
    <main className="post-job">
      <BackArrow />
      <h1>Post A Job</h1>
      <PostForm />
    </main>
  );
};

export default PostJob;
