import React, { useCallback, useRef } from "react";
import './WebcamCapture.css';

import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { setCameraImage } from "../../features/cameraSlice";
import { useHistory } from "react-router-dom";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  // dispatched redux based actions to the project to perform actions for data layer(store).
  const dispatch = useDispatch();

  // the hooks gives the history of the webpage & can push the page to it. Redirect.
  const history = useHistory();

  // saves up the result of the callback function & returns the result when asked.
  // The fn fires the same result on condition of the dependency.
  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();

    dispatch(setCameraImage(imageSrc));
    history.push('./preview')
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
