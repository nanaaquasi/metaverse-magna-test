import React from "react";
import Logo from "../../components/shared/Logo";
import "./Home.scss";

import HeroGif from "../../assets/images/hero-gif.gif";
import PostCard from "../../components/home/PostCard";
import CategoryCard from "../../components/shared/CategoryCard";

const Home = () => {
  return (
    <div className="home">
      <div className="container top-nav">
        <div className="brand-logo">
          <Logo />
        </div>

        <div className="actions">
          <button className="button button--secondary log-in">Log In</button>
          <button className="button button--primary">Join Breach</button>
        </div>
      </div>

      <section className="hero">
        <div className="hero__content">
          <div className="hero__content__title">
            <h1>
              Find <span>Great</span> Ideas
            </h1>
          </div>
          <div className="hero__content__description">
            <p>
              Subscribe to your favourite creators and thinkers. Support work
              that matters
            </p>
          </div>
          <div className="hero__content__actions">
            <button className="button button--primary--alt">Join Breach</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={HeroGif} alt="" />
        </div>
      </section>

      <main className="container main-content">
        <div className="main-content__posts">
          <div className="main-content__posts--header-tab">
            <ul className="nav">
              <li className="active">Featured</li>
              <li>Popular</li>
              <li>Recent</li>
            </ul>
          </div>
          <div className="main-content__posts--list">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="main-content__categories">
          <h1 className="main-content__categories--title">Categories</h1>
          <p className="main-content__categories--description">
            Discover content from topics you care about
          </p>
          <ul className="main-content__categories--list">
            {[
              "All",
              "Work in Progress",
              "Design",
              "Technology",
              "Culture",
              "Work in Progress",
              "Design",
              "Technology",
              "Culture",
            ].map((category, index) => (
              <CategoryCard key={index} title={category} image="" />
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container flex footer__wrapper">
          <div className="footer__logo">
            <Logo />
          </div>

          <ul className="footer__links flex">
            <li>support@breach.example</li>
            <li>About Breach</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>

      {/* floating button click to the top */}

      {/* <button className="floating-button">+</button> */}
    </div>
  );
};

export default Home;
