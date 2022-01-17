import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import samplePosts from "../../libs/postData";

import { LandingPage } from "../LandingPage";
import PostDisplay from "../PostDisplay";

function App() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<PostDisplay posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
