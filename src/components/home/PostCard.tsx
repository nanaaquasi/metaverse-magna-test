import React from "react";
import testImage from "../../assets/images/img-1.png";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card__image">
        <img src={testImage} alt="" />
      </div>
      <div className="post-card__content">
        <div className="post-card__content--category">
          <p>Work in Progress</p>
        </div>
        <div className="post-card__content--title">
          <h2>On migration and maintaining friendships</h2>
        </div>
        <div className="post-card__content--description">
          <p>
            I went to boarding school and left pretty early, so I had some
            experience with losing friends to relocation long before the
          </p>
        </div>
        <div className="post-card__content--author">
          <p className="post-card__content--author-name">Lota Anidi</p>
          <span className="post-card__content--author-seperator"></span>
          <p className="post-card__content--author-date">Aug 4, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
