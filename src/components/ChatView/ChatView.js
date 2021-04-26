import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSelectedImg } from "../../features/appSlice";
import "./ChatView.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const ChatView = () => {
  const selectedImg = useSelector(selectSelectedImg);
  const history = useHistory();

  useEffect(() => {
    if (!selectedImg) {
      exit();
    }
  }, [selectedImg]);

  const exit = () => {
    history.replace("/chats");
  };

  return (
    <div className="chatView">
      <img src={selectedImg} onClick={exit} alt="chat" />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#08ff29", 0.33],
            ["#a30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ChatView;
