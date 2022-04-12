import React from "react";
import Icon from "Components/Icon/Icon";
import LineInput from "Components/Input/LineInput";
import { Dispatch } from "react";
import ThreadDot from "Components/Svg/ThreadDot";
import ThreadLine from "Components/Svg/ThreadLine";
import { setExpandSearchPanel, setExpandUserPanel } from "Store/Features/navigationSlice";


import "./GlobalTopBar.css";
import { useDispatch, useSelector } from "react-redux";

const GlobalTopBar = () => {

  const dispatch = useDispatch();
  const selectedView = useSelector((state) => (state.navigation.view));
  const browseThread = useSelector((state) => (state.navigation.browseThread));

  const getImageModule = (image) => {
    try {
      return require(`../Ressources/Images/Avatars/${image}`);
    } catch (error) {
      return require("../Ressources/Images/Avatars/default.png");
    }
  };

  return (
    <div className="global-top-bar">
      <div className="global-top-bar-title">
        {
          selectedView !== "threadBrowser" &&
          <>
            <div className="global-top-bar-icon-container">
                <Icon icon="Global" iconColor="#3650AB"/>
            </div>
            <h1>Global</h1> 
          </>
        }
      </div>
      <div className="global-top-bar-right-container">
        <div className="global-top-bar-search">
            <div className="global-top-bar-magnifier">
              <Icon icon="Magnifier" iconColor="#3650AB" />
            </div>
            <div className="global-top-bar-advanced">
              <LineInput hasLeftIcon hasRightIcon/>
              <div 
                className="global-top-bar-search-advanced"
                onClick={() => {
                  dispatch(setExpandSearchPanel(true));
                }}
              >
                <div className="global-top-bar-search-advanced-icon">
                  <Icon icon="ChevronCircle" iconColor="#3650AB"/>
                </div>
                <p>Open advanced search panel</p>
              </div>
            </div>
        </div>
        <div className="global-top-bar-avatar">
          <img 
            src={`http://localhost:8000/api/${sessionStorage.getItem('stmn_image_url')}`}
            width="100%"
            height="100%"
            onClick={() => {
              dispatch(setExpandUserPanel(true));
            }}
          />
        </div>
      </div>

      {
        selectedView === "threadBrowser" &&
        <div className="thread-title">
          <div className="thread-title-dot-container">
            <ThreadDot
              dotDiameter={66}
              dotRadius={33}
              threadColor={`#${browseThread.color}`}
            />
            <h1
              style={{
                color: `#${browseThread.color}`,
              }}
            >
              {browseThread.title}
            </h1>
          </div>
          <div className="thread-title-line-container">
            <ThreadLine
              dotDiameter={66}
              lineTotalHeight={150}
              dotRadius={33}
              lineBottomY={150}
              threadColor={`#${browseThread.color}`}
              threadStrokeWidth={12}
              bottomDropGap={0}
              bottomDropLength={0}
            />
          </div>
        </div>
      }

    </div>
  );
}

export default GlobalTopBar;