import React from "react";

import Thread from "Modules/Thread";

import { useSelector } from "react-redux";

import "./ThreadBrowser.css";

const ThreadBrowser = () => {

  const browseThread = useSelector((state) => (state.navigation.browseThread));

  const threadProps = {
    nameSize: 20,
    dotRadius: 33,
    pigtailWidth: 60,
    pigtailHeight: 60,
    bookmarksTop: 40,
    noMenu: true,
    bookmarksOnly: true,
    bookmarkImage: true, 
  }
  
  return (
    <>
      <div className="thread-browser-left-container">
        <Thread 
          {...browseThread}
          {...threadProps}
        />
      </div>
    </>
  );
};

export default ThreadBrowser;