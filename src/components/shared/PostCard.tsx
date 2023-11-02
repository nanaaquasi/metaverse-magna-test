import React from "react";

interface PostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
}

const PostCard = (props: PostCardProps) => {
  return (
    <div className="post-card cursor-pointer">
      <div className="post-card__image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="post-card__content">
        <div className="post-card__content--category">
          <p>{props.category}</p>
        </div>
        <div className="post-card__content--title">
          <h2>{props.title}</h2>
        </div>
        <div className="post-card__content--description">
          <p>
            {props.description.length > 100 ? (
              <span>
                {props.description.substring(0, 100)}...
                {/* <a href="#">Read more</a> */}
              </span>
            ) : (
              props.description
            )}
          </p>
        </div>
        <div className="post-card__content--author">
          <p className="post-card__content--author-name">{props.author}</p>
          <span className="post-card__content--author-seperator"></span>
          <p className="post-card__content--author-date">
            {new Date(props.date).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
