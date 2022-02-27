import React, { useState } from "react";
import { motion } from "framer-motion";

import Thread from "./Thread";
import Icon from "Components/Icon/Icon";
import BulletNav from "Components/Layout/BulletNav";

import "./ThreadsCarousel.css";

const ThreadCarousel = (props) => {
  
  const [selectedThread, setSelectedThread] = useState(1);

  const style = {
    multipleBookmarksThread: {
      nameSize: 20,
      dotRadius: 13,
      threadStrokeWidth: 5,
      bottomExtraLine: 10,
      bottomDropLength: 12,
      bottomDropGap: 15,
      pigtailWidth: 25,
      pigtailHeight: 25,
      bookmarksTop: 50,
      bookmarkTitleSize: 14,
      compactBookmark: true,
      noMenu: true,
    },
  }

  const getMultipleBookmarksThread = (threads) => {
    return threads.map((value, index) => {
      return (
        <motion.div
          style={{opacity: 0.4}}
          animate={{opacity: index === selectedThread - 1 ? 1 : 0.4}}
        >
          <Thread
            bookmarks={value.bookmarks}
            threadColor={value.color}
            title={value.name}
            nameColor={value.color}
            {...style.multipleBookmarksThread}
          />
        </motion.div>
      )
    })
  }

  return (
    <>
      <motion.div 
        className="threads-carousel-container"
        animate={{x: -350 * (selectedThread - 1)}}
        transition={{duration: 0.6}}
      >
        {getMultipleBookmarksThread(props.threads)}
      </motion.div>
      <div className="threads-carousel-bottom">
        <div 
          className="arrow-left-container"
          onClick={() => {
            if (selectedThread > 1) {
              setSelectedThread(selectedThread - 1);
            }
          }}
        >
          <Icon icon="ArrowLeftCircle" iconColor="rgba(255, 255, 255, 0.5)"/>
        </div>
        <BulletNav 
          bulletNumber={props.threads.length}
          pxSize={20}
          pxGap={10}
          selected={selectedThread}
        />
        <div 
          className="arrow-right-container"
          onClick={() => {
            if (selectedThread < props.threads.length) {
              setSelectedThread(selectedThread + 1);
            }
          }}
        >
          <Icon icon="ArrowLeftCircle" iconColor="rgba(255, 255, 255, 0.5)" /> 
        </div>
      </div>
    </>
  );
};

export default ThreadCarousel;