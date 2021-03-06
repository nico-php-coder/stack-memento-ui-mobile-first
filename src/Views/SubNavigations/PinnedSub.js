import React from "react";

import { useSelector } from "react-redux";

import "./PinnedSub.css";

const PinnedSub = () => {

  const pinnedThreads = useSelector((state) => (state.user.pinnedThreads));

  const getThreads = (threads) => {
    return threads.map(function (thread) {
      return (
        <div className="pinned-sub-thread">
          <div className="pinned-sub-image-container">
            <img src={`${process.env.REACT_APP_API_DOMAIN}/${thread.user.image_url}`} />
          </div>
          <div>{thread.title}</div>
        </div>
      );
    });
  }

  return getThreads(pinnedThreads);
};

export default PinnedSub;