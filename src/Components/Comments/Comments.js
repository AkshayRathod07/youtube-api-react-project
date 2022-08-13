import React from "react";
import Comment from "../Comment/Comment";
import "./_Comments.scss";



const Comments = ({video :{statistics}, videoId}) => {

  const {commentCount} = statistics;

    const handleComment = () =>{

    }

  return (
    <div className="comments">
      <p>{commentCount}</p>
      <div className="comment__form d-flex w-100 my-2">
        <img
          src="/img/avatar.png"
          alt="avatar-comment"
          className="rounded-circle mr-3"
          width='50px'
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1" >
            <input type="text" className="flex-grow-1" placeholder="write a comment..." />
            <button className="border-0 p-2 ">Comment</button>
        </form>
        
      </div>
      <div className="comment__list">
            {[...Array(15)].map(()=>(
                <Comment  />
            ))}
        </div>
    </div>
  );
};

export default Comments;
