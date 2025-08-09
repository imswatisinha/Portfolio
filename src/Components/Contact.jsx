import React, { useState , useContext} from "react";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "../Css/Contact.css";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const {isDarkMode} = useContext(ThemeContext)
  const themeClass = isDarkMode ? "dark" : "light"
  const [modalData, setModalData] = useState({
    show: false,
    isLoading: false,
    isConfirmation: false,
    message: "",
  });

  const handleModalOpen = (data) => {
    setModalData({ ...data, show: true });
  };

  const handleModalUpdate = (data) => {
    setModalData((prev) => ({ ...prev, ...data }));
  };

  const handleModalClose = () => {
    setModalData({ show: false, isLoading: false, isConfirmation: false, message: "" });
  };

  return (
    <Fade duration={1500} cascade>
      <div className={`contact-container ${themeClass}`}>
        <h2>Contact & Collaborate</h2>

        <div className={`form-section ${themeClass}`}>
          <h3>Send a Message</h3>
          <ContactForm
            onModalOpen={handleModalOpen}
            onModalClose={handleModalClose}
            onModalUpdate={handleModalUpdate}
          />
        </div>

        <div className={`info-section ${themeClass}`}>
          <h3>Contact Information</h3>
          <p>
            <FaEnvelope /> <strong>Email:</strong> surabhisinha514@gmail.com
          </p>
          <p>
            <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
            <a href= "https://linkedin.com/in/thisissurabhisinha" target="_blank" rel="noreferrer">
              <strong>thisissurabhisinha</strong>
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> <strong>Address:</strong> Uttar Pradesh , India
          </p>
        </div>

        {modalData.show && (
          <Modal
            message={modalData.message}
            isLoading={modalData.isLoading}
            isConfirmation={modalData.isConfirmation}
            onConfirm={modalData.onConfirm}
            onClose={handleModalClose}
          />
        )}
      </div>
    </Fade>
  );
};

export default Contact;
