import React, { useState } from "react";
import Swal from "sweetalert2";

function SendMessage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!name || !surname || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields!",
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
        // Clear form
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Message was not sent. Please check and try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server error!",
        text: "There was a problem sending the message.",
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Last Name"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <br />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default SendMessage;
