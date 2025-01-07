import React from "react";
import { useParams } from "react-router-dom";
import { User as CurrentUser, Posts } from "../constants/posts";
const User = () => {
  const { id } = useParams();
  const currentUser = CurrentUser;
  const userPosts = Posts.filter((post) => post.userId === currentUser.id);

  return (
    <>
      <h3>{currentUser.name} posts</h3>
      {userPosts.map((post) => (
        <li>
          <h2>Post Id: {post.postId}</h2>
          <h3>Post Title: {post.title}</h3>
          <h4>Post Description: {post.description}</h4>
        </li>
      ))}
    </>
  );
};

export default User;
