
import React, { useContext } from "react";
import "../Css/Modal.css";
import { ThemeContext } from "./ThemeContext";

const Modal = ({ message, isLoading, isConfirmation, onConfirm, onClose }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const themeClass = isDarkMode === true ? "dark" : "light";
  const className = message.title
    ? `${message.title.toLowerCase()}-message ${themeClass}`
    : "default";

  if (!message || !onClose || (isConfirmation && !onConfirm)) {
    return <h1>Something went wrong</h1>;
  }

  // Determine text color based on message type

  const messageColor =
    message.title === "Success"
      ? "green" 
      : message.title === "Error"
      ? "red" 
      : "inherit"; 

  return (
    <div className={`modal-overlay ${themeClass}`}>
      <div className={`modal-content ${themeClass}`}>
        {isLoading ? (
          <h3>Sending...</h3>
        ) : isConfirmation ? (
          <div className={`confirm ${themeClass}`}>
            <h3>Please Confirm</h3>
            <p>{message}</p>
            <div className={`option-btn ${themeClass}`}>
              <button onClick={onConfirm}>Yes</button>
              <button onClick={onClose}>No</button>
            </div>
          </div>
        ) : (
          <>
            <h3 className={className} style={{ color: messageColor }}>
              {message.title}
            </h3>
            <p className={className} style={{ color: messageColor }}>
              {message.body}
            </p>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
