import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Posts } from "../constants/posts";
import NotFound from "./NotFound";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const post = Posts.find((post) => post.id == id);
  if (!post) {
    return <NotFound />;
  }
  const { id: postId, description, title } = post;

  return (
    <>
      <h2>Post Id: {postId}</h2>
      <h3>Post Title: {title}</h3>
      <h4>Post Description: {description}</h4>
      <button onClick={handleClick}>Go back</button>
    </>
  );
};

export default Post;
