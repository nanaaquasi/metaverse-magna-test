import React from "react";

interface StreamCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
}

const StreamCard = (props: StreamCardProps) => {
  return (
    <div className="stream-card">
      <div className="stream-card__content">
        <div className="stream-card__content--title">
          <h2>{props.title}</h2>
        </div>
        <div className="stream-card__content--description">
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
        <div className="stream-card__content--author">
          <p className="stream-card__content--author-name">{props.author}</p>
          <span className="stream-card__content--author-seperator"></span>
          <p className="stream-card__content--author-date">
            {new Date(props.date).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
