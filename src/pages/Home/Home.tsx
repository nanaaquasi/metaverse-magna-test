import React from "react";
import Logo from "../../components/shared/Logo";
import "./Home.scss";

import HeroGif from "../../assets/images/hero-gif.gif";
import PostCard from "../../components/shared/PostCard";
import CategoryCard from "../../components/shared/CategoryCard";
import FloatingButton from "../../components/shared/FloatingButton";
import { Link } from "react-router-dom";
import jwtService from "../../services/jwt.service";
import {
  fetchAllCategories,
  filterPostsByCategory,
} from "../../services/data.service";
import PostCardShimmer from "../../components/shared/PostCardShimmer";
import { Category } from "../../utils/types";
import CategoryCardShimmer from "../../components/loaders/CategoryCardShimmer";

const Home = () => {
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [allCategories, setAllCategories] = React.useState<Category[]>([]);

  const token = jwtService.getItem("token");

  const filterPosts = async (category: Category) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(category);
  };

  React.useEffect(() => {
    const fetchCategories = async () => {
      setIsFetching(true);
      try {
        const response = await fetchAllCategories();
        setAllCategories(response.data);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
      }
    };

    fetchCategories();
  }, []);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        let categoryId;

        if (selectedCategory) {
          categoryId = selectedCategory.id.toString();
        } else {
          categoryId = "";
        }

        const filtered = await filterPostsByCategory(categoryId);
        setFilteredPosts(filtered.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  return (
    <div className="home">
      <div className="container top-nav">
        <div className="brand-logo">
          <Logo />
        </div>

        <div className="actions">
          {!token && (
            <>
              <button className="button button--secondary log-in">
                <Link to={`/login`}>Log In</Link>
              </button>
              <button className="button button--primary">
                <Link to={`/signup`}>Join Breach</Link>
              </button>
            </>
          )}
          {token && (
            <button className="button button--primary">
              <Link to={`/dashboard`}>Go to Dashboard</Link>
            </button>
          )}
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
            <button className="button button--primary--alt">
              <Link to={`/signup`}>Join Breach</Link>
            </button>
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
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <PostCardShimmer key={index} />
              ))
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <PostCard
                  key={index}
                  category={post.category.name}
                  title={post.title}
                  description={post.content}
                  author={post.author.name}
                  date={post.createdAt}
                  imageUrl={post.imageUrl}
                />
              ))
            ) : (
              <p>No posts found for selected category</p>
            )}
          </div>
        </div>
        <div className="main-content__categories">
          <h1 className="main-content__categories--title">Categories</h1>
          <p className="main-content__categories--description">
            Discover content from topics you care about
          </p>
          <ul className="main-content__categories--list">
            {isFetching
              ? Array.from({ length: 20 }).map((_, index) => (
                  <CategoryCardShimmer key={index} />
                ))
              : allCategories.map((category, index) => (
                  <CategoryCard
                    category={category}
                    key={index}
                    onSelectCategory={filterPosts}
                    selectedCategory={selectedCategory}
                  />
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

      <FloatingButton />
    </div>
  );
};

export default Home;
