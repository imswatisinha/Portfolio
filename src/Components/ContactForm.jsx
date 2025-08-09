
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ onModalOpen, onModalUpdate }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormFilled, setIsFormFilled] = useState(false); // State to track if any field is filled

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if any field is filled to toggle the Reset button visibility
    setIsFormFilled(Object.values(formData).some((field) => field !== ""));
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsFormFilled(false); // Hide reset button after reset
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onModalOpen({
      isConfirmation: true,
      message: "Are you sure you want to send the message?",
      onConfirm: async () => {
        onModalUpdate({ isLoading: true });

        let sentEmails = 0; // Counter to track successfully sent emails

        try {
          const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          };

          // Send the first email to Surabhi
          await emailjs.send( "service_jlh8sf5",
                         "template_h7xt0ln",
                         templateParams,
                         "GMIcmFm0oikgPgsas").then(
            (response) => {
              if (response.status === 200 && response.text === "OK") {
                sentEmails++;
              }
            }
          );

          // Send the second email to visitors
          await emailjs.send( "service_jlh8sf5",
                        "template_fkpw8sa",
                        templateParams,
                        "GMIcmFm0oikgPgsas").then(
            (response) => {
              if (response.status === 200 && response.text === "OK") {
                sentEmails++;
              }
            }
          );

          // Check if both emails were sent successfully
          if (sentEmails === 2) {
            onModalUpdate({
              isLoading: false,
              isConfirmation: false,
              message: {
                title: "Success",
                body: "Your message has been sent successfully!",
              },
            });

            setFormData({ name: "", email: "", message: "" });
          } else {
            throw new Error("One or more emails failed to send");
          }
        } catch (error) {
          onModalUpdate({
            isLoading: false,
            isConfirmation: false,
            message: {
              title: "Error",
              body: "Something went wrong. Please try again.",
            },
          });
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full name"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Drop a message"
        />
      </div>

      <div  className="form-btns">
        <button type="submit">Send</button>
        {isFormFilled && (
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
