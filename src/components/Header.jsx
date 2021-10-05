import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="flex-header light-theme">
      <Link to="/">
        <h1 className="logo">Where in the world?</h1>
      </Link>
      <button
        onClick={props.onThemeToggle}
        className="theme-btn flex-vertical-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <rect
            id="backgroundrect"
            width="100%"
            height="100%"
            x="0"
            y="0"
            fill="none"
            stroke="none"
          />
          <g className="currentLayer">
            <title>Layer 1</title>
            <path
              d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0012.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              id="svg_1"
              fill="#ffffff"
              fillOpacity="1"
            />
          </g>
        </svg>
        Dark mode
      </button>
    </header>
  );
};

export default Header;
