import React, { useState } from "react";
import { v4 } from "uuid";

import Avatar from "../Avatar";
import "./commentBox.css";

export default function CommentBox({ user, commentThread }) {
  const [comments, setComments] = useState(commentThread);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let createComment = {
      user: "nosepass",
      text: text,
      id: v4(),
    };
    setComments([...comments, createComment]);
    let formInput = document.getElementById("comment-input");
    formInput.value = "";
  }

  function handleDelete(commentID) {
    const newComments = comments.filter((c) => c.id != commentID);
    setComments(newComments);
  }

  function handleEdit(e, comment, text) {
    e.preventDefault();
    const index = comments.indexOf(comment);
    const newComments = [...comments];
    newComments[index].text = text;
    setComments(newComments);

    setText("");
  }
  return (
    <div>
      <ul>
        {comments.map((el) => {
          return (
            <li key={el.id} className="the-comment-section">
              <Avatar classed="comment-avatar" name={el.user} />
              <h5>{el.user}</h5> <span>{el.text}</span>
              <br />
              <button
                onClick={() => {
                  let form = document.getElementById(`${el.id}`);
                  form.classList.toggle("hidden-edit");
                }}
                className="comment-edit-button"
              >
                edit
              </button>
              <button
                onClick={() => handleDelete(el.id)}
                className="comment-edit-button"
              >
                delete
              </button>
              <form
                onSubmit={(e) => handleEdit(e, el, text)}
                id={el.id}
                className="hidden-edit"
              >
                <input
                  id="edit-input"
                  onChange={(e) => setText(e.target.value)}
                  placeholder="edit comment..."
                  value={text}
                />
                <button
                  type="submit"
                  onClick={() => {
                    let form = document.getElementById(`${el.id}`);
                    form.classList.toggle("hidden-edit");
                  }}
                >
                  Submit
                </button>
              </form>
              <hr id="comment-splitter" />
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          id="comment-input"
          onChange={(e) => setText(e.target.value)}
          placeholder="post a comment..."
        ></input>
        <button type="submit" id="comment-post-button">
          Send
        </button>
      </form>
    </div>
  );
}
