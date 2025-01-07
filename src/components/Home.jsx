import React from "react";
import { Posts } from "../constants/posts";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        {Posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
