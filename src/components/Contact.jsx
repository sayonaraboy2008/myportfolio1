import React, { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: false,
    surname: false,
    email: false,
    message: false,
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const errors = {
      name: !name.trim(),
      surname: !surname.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((v) => v)) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields!",
        text: "Please fill in all the fields.",
      });
      return;
    }

    const token = "7568550046:AAEZrb5IP-03NEjrzlcpa96BvlU6n5N0Euc";
    const chatId = "@messagesfromu";
    const text = `📨 New Submission:\n👤 Name: ${name} ${surname}\n📧 Email: ${email}\n📝 Message: ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Message sent successfully.",
        });
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
        setFormErrors({
          name: false,
          surname: false,
          email: false,
          message: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Message was not sent. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "There was a problem sending the message.",
      });
    }
  };

  // 🔁 Error border funksiyasi
  const inputClass = (hasError) =>
    `firali text-white bg-transparent border ${
      hasError ? "border-red-500" : "border-gray-400"
    } p-3 rounded-md w-full outline-none`;

  return (
    <div className="px-4 py-8 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="urbanistli text-[clamp(28px,5vw,44px)] text-[#ccd6f6] font-semibold text-center mb-6">
          Contact Me
        </h2>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSendMessage}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (formErrors.name) {
                  setFormErrors((prev) => ({ ...prev, name: false }));
                }
              }}
              className={inputClass(formErrors.name)}
            />
            <input
              type="text"
              placeholder="Enter Your Surname"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
                if (formErrors.surname) {
                  setFormErrors((prev) => ({ ...prev, surname: false }));
                }
              }}
              className={inputClass(formErrors.surname)}
            />
          </div>
          <input
            type="email"
            placeholder="Enter Your Mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (formErrors.email) {
                setFormErrors((prev) => ({ ...prev, email: false }));
              }
            }}
            className={inputClass(formErrors.email)}
          />
          <textarea
            rows={5}
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (formErrors.message) {
                setFormErrors((prev) => ({ ...prev, message: false }));
              }
            }}
            className={inputClass(formErrors.message)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition w-full sm:w-[200px] mx-auto sm:mx-0">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
