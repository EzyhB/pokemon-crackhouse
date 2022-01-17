import Post from "../Post/index.js";
import sampleComments from "../../libs/commentData.js";

import "./postDisplay.css";
import NavBar from "../navBar/index.js";

function PostDisplay({ posts }) {
  return (
    <div className="main">
      <NavBar classed="" />
      <section className="body">
        {posts.map(function (item, index) {
          return (
            <Post
              key={item.text}
              user={item.author}
              text={item.text}
              image={item.image}
              commentThread={sampleComments[index]}
            />
          );
        })}
      </section>
    </div>
  );
}

export default PostDisplay;
