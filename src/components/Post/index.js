//PLAN
// Build the <Post/> component using HTML elements in JSX.
// Choose the most semantic html tag for each property that makes up the post.
// Use img tag for the avatar, h2 tag for author, p tag for text.
// Import Avatar component to display the avatar picture alongside the text.

import Avatar from "../Avatar";
import CommentBox from "../CommentBox";

import "./post.css";

function Post({ text, image, user, commentThread }) {
  return (
    <section className="post-body">
      <section>
        <figure className="post-avatar">
          <Avatar classed="post-avatar" name={user} />
          <span>
            <h4>{user}</h4>
          </span>
        </figure>
        <br />

        <figure className="image-container">
          <img src={image} alt="post" className="post-main-image" />
        </figure>

        <article id="post-text">
          <h5>{user}</h5>
          <p>{text}</p>
        </article>
        <hr id="text-splitter" />
      </section>
      <article>
        <CommentBox user={user} commentThread={commentThread} />
      </article>
    </section>
  );
}

export default Post;
