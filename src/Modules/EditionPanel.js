import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "Components/Icon/Icon";

import { 
  setModalSubOptions, 
  setModalView, 
  setShowModal, 
  setShowConfirmationModal, 
  setConfirmationModalText, 
} from "Store/Features/navigationSlice";

import "./EditionPanel.css";

const EditionPanel = (props) => {

  const dispatch = useDispatch();

  const view = useSelector((state) => (state.navigation.view));
  const myThreadsSelection = useSelector((state) => (state.navigation.myThreadsSelection));
  const pinnedThreadsSelection = useSelector((state) => (state.navigation.pinnedThreadsSelection));
  const fellowsSelection = useSelector((state) => (state.navigation.fellowsSelection));
  const groupsSelection = useSelector((state) => (state.navigation.groupsSelection));
  const groupOwner = useSelector((state) => (state.navigation.groupOwner));
  const selectedThread = useSelector((state) => (state.navigation.selectedThread));

  const options = {
    myThreads: {
      selection: [
        {
          name: "New thread", 
          viewName: "newThread", 
          subOption: ["New thread"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Add bookmark", 
          viewName: "addBookmark", 
          subOption: ["Add bookmark", "Add multiple bookmarks"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Import/Export", 
          viewName: "importExport", 
          subOption: ["Import", "Export"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Manage sharing", 
          viewName: "manageSharing", 
          subOption: ["Group subscription", "Fellow sharing", "Revoked subscription", "Revoked sharing"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Delete PHP thread",
          viewName: "deleteThread",
          subOption: [],
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: null,
        },
      ],
      noSelection: [
        {
          name: "New thread", 
          viewName: "newThread", 
          subOption: ["New thread"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Add bookmark", 
          viewName: "addBookmark", 
          subOption: ["Add bookmark", "Add multiple bookmarks"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Import/Export", 
          viewName: "importExport", 
          subOption: ["Import", "Export"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: `Delete ${selectedThread.title}`,
          viewName: 'deleteThread',
          subOption: [],
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: () => {
            dispatch(setConfirmationModalText(`Are you sure you want to delete "${selectedThread.title}" thread ?`));
            dispatch(setShowConfirmationModal(true));
          },
        },
      ],
    },
    pinnedThreads: {
      selection: [
        {
          name: "Pin a thread", 
          viewName: "pinThread", 
          subOption: [],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Delete Global:JavaScript pin", 
          viewName: "deletePin", 
          subOption: [],
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: null,
        },
      ],
      noSelection: [
        {
          name: "Pin a thread", 
          viewName: "pinThread", 
          subOption: [],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Delete pins", 
          viewName: "deletePins", 
          subOption: [],
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: null,
        },
      ],
    },
    fellows: {
      selection: [
        {
          name: "Send fellow request", 
          viewName: "sendFellowReq", 
          subOption: [],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Pending demands", 
          viewName: "pendingDemands", 
          subOption: ["Pending demands - IN", "Pending demands - OUT", "Fellow Request history - IN", "Fellow Request history - OUT"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Revoke Scripty~Gurlz", 
          viewName: "revokeFellow", 
          subOption: [],
          icon: "", 
          color: "#882E2E",
          isLast: true,
          action: null,
        },
      ],
      noSelection: [
        {
          name: "Send fellow request", 
          viewName: "sendFellowReq", 
          subOption: [],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
        {
          name: "Pending demands", 
          viewName: "pendingDemands", 
          subOption: ["Pending demands - IN", "Pending demands - OUT", "Fellow Request history - IN", "Fellow Request history - OUT"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
      ],
    },
    groups: {
      selection: {
        owner: [
          {
            name: "New group", 
            viewName: "newGroup", 
            subOption: ["New group"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Send subscription invit", 
            viewName: "sendSubInvit", 
            subOption: ["Send subscription invitation"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Pending subscription req (2)", 
            viewName: "pendingSubReq", 
            subOption: ["Pending subscription request", "Subscription requests history"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Manage MyGroup", 
            viewName: "manageGroup", 
            subOption: ["Manage subscribed user", "Manage contribution thread", "Subscribed user history", "Contibution thread history"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Leave MyGroup", 
            viewName: "leaveGroup", 
            subOption: [],
            icon: "", 
            color: "#882E2E",
            isLast: true,
            action: null,
          },
        ],
        notOwner: [
          {
            name: "New group", 
            viewName: "newGroup", 
            subOption: ["New group"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Send invit suggestion", 
            viewName: "sendInvitSuggestion", 
            subOption: ["Send invitation suggestion"],
            icon: "", 
            color: "#3650AB",
            isLast: false,
            action: null,
          },
          {
            name: "Leave Gr4ph15m", 
            viewName: "leaveGroup", 
            subOption: [],
            icon: "", 
            color: "#882E2E",
            isLast: true,
            action: null,
          },
        ],
      },
      noSelection: [
        {
          name: "New group", 
          viewName: "newGroup", 
          subOption: ["New group"],
          icon: "", 
          color: "#3650AB",
          isLast: false,
          action: null,
        },
      ],
    },
  };

  const getOptions = (view) => {
    switch (view) {
      case "myThreads" :
        return myThreadsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];
      case "pinnedThreads" :
        return pinnedThreadsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];
      case "fellows" :
        return fellowsSelection ?
          options[view]["selection"] :
          options[view]["noSelection"];            
      case "groups" :
        return groupsSelection ?
          groupOwner ? 
            options[view]["selection"]["owner"] :
            options[view]["selection"]["notOwner"] :
          options[view]["noSelection"];
      default :
        return [];
    }
  }

  const buildOptionsComponents = (options) => {
    return options.map(function (option) {
      return (
        <div 
          onClick={() => {
            if (option.viewName != "deleteThread") {
              dispatch(setShowModal(true));
              dispatch(setModalView(option.viewName));
              dispatch(setModalSubOptions(option.subOption));
            }
            if (option.action != null) {
              option.action();
            }
          }}
          className={option.isLast ? "edition-panel-container edition-panel-container-last" : "edition-panel-container"}
          style={{
            display: option.viewName === "deleteThread" ? (Object.keys(selectedThread).length === 0) ? 'none' : null : null,
          }}
        >
          <div className="edition-panel-icon-container">
            <Icon icon="Plus" iconColor={option.color} />
          </div>
          <p style={{color: option.color}}>
            {option.name}
          </p>
        </div>
      );
    });
  }

  return (
    <div className="edition-panel">
      { 
        !props.isSubPanelStatic &&
        <div className="edition-panel-title">
          <div className="edition-panel-title-logo-container">
            <Icon icon="Threads" iconColor="#3650AB" />
          </div>
          <h1 className="edition-panel-title-header">{props.title}</h1>
        </div>
      }
      <div className="edition-panel-bottom">
        {buildOptionsComponents(getOptions(view))}
      </div>
    </div>
  );
};

export default EditionPanel;