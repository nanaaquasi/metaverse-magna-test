import React from "react";

import "./Dashboard.scss";
import useWebSocket from "react-use-websocket";

import HeroImage from "../../assets/images/dashboard-hero.png";
import PostCard from "../../components/shared/PostCard";
import StreamCard from "../../components/shared/StreamCard";
import Logo from "../../components/shared/Logo";
import HomeIcon from "../../assets/icons/HomeIcon";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import PenIcon from "../../assets/icons/PenIcon";
import jwtService from "../../services/jwt.service";
import { fetchAllPosts } from "../../services/data.service";
import { Post } from "../../utils/types";
import PostCardShimmer from "../../components/shared/PostCardShimmer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeLink, setActiveLink] = React.useState<string>("home");
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [postStreams, setPostStreams] = React.useState<Post[]>([]);

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState<string>("1");

  const token = jwtService.getItem("token");

  const WSS_FEED_URL = `wss://frontend-test-api.mvm-tech.xyz/ws?token=${token}`;

  const handleLoadStreams = (event: WebSocketEventMap["message"]) => {
    const data = JSON.parse(event.data);
    setPostStreams((prevPosts) => [data, ...prevPosts].slice(0, 5));
  };

  useWebSocket(WSS_FEED_URL, {
    onOpen: () => console.log("WebSocket connection opened."),
    onClose: () => console.log("WebSocket connection closed."),
    onMessage: (event: WebSocketEventMap["message"]) =>
      handleLoadStreams(event),
  });

  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetchAllPosts();
        setAllPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="dashboard">
      {/* SIDEBAR LEFT */}
      <div className="sidebar-left">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer sidebar-left__header"
        >
          <Logo />
        </div>

        <div className="sidebar-left__cta">
          <button className="button button--primary">
            <PenIcon />
            <p>Start Writing</p>
          </button>
        </div>

        <div className="sidebar-left__nav">
          <ul className="sidebar-left__nav-links">
            <li
              className={`${activeLink === "home" && "active"}`}
              onClick={() => setActiveLink("home")}
            >
              <HomeIcon color={activeLink === "home" ? "#8311F9" : ""} />
              Home
            </li>
            <li
              className={`${activeLink === "dashboard" && "active"}`}
              onClick={() => setActiveLink("dashboard")}
            >
              <DashboardIcon
                color={activeLink === "dashboard" ? "#8311F9" : ""}
              />{" "}
              Dashboard
            </li>
            <li
              className={`${activeLink === "publications" && "active"}`}
              onClick={() => setActiveLink("publications")}
            >
              <MessageIcon
                color={activeLink === "publications" ? "#8311F9" : ""}
              />
              Publications
            </li>
          </ul>
        </div>
      </div>

      {/* CONTENT PANE */}
      <div className="content-pane">
        <div className="content-pane__header">
          <h1>Top Picks</h1>
          <p>Experience the best of Breach</p>
        </div>
        <div className="content-pane__hero">
          <div className="content-pane__hero__image">
            <img src={HeroImage} alt="" />
          </div>
          <div className="content-pane__hero__content">
            <h2 className="heading-2">
              How to succeed at long-term investments
            </h2>
            <p className="p-body">
              I recently started contemplating how to apply my carefree
              mentality to my financial planning. I’ve mainly been considering
              looking at my crypto wallets whenever I feel
            </p>
          </div>
        </div>

        <div className="content-pane__posts">
          <div className="content-pane__posts--header-tab">
            <ul className="nav">
              <li
                onClick={() => setActiveTab("1")}
                className={`
                ${activeTab === "1" && "active"}
              `}
              >
                Featured
              </li>
              <li
                onClick={() => setActiveTab("2")}
                className={`
                ${activeTab === "2" && "active"}
              `}
              >
                Popular
              </li>
              <li
                onClick={() => setActiveTab("3")}
                className={`
                ${activeTab === "3" && "active"}
              `}
              >
                Recent
              </li>
            </ul>
          </div>
          <div className="content-pane__posts--list">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <PostCardShimmer key={index} />
              ))
            ) : allPosts.length > 0 ? (
              allPosts.map((post, index) => (
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
              <p>No posts found.</p>
            )}
          </div>
        </div>
      </div>

      {/* SIDEBAR RIGHT */}
      <div className="sidebar-right">
        <div className="sidebar-right__header">
          <h1 className="heading-1">Streams</h1>
          <p className="p-body">
            Discover trending content from topics you care about in real time
          </p>
        </div>
        <div className="sidebar-right__posts">
          <div className="sidebar-right__posts--list">
            {postStreams.length > 0 ? (
              postStreams.map((post, index) => (
                <StreamCard
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
              <p className="p-body">
                No streams yet. Live posts will show here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
