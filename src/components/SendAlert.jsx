import React, { useState } from "react";
import Swal from "sweetalert2"; // 👈 Shu yerga yoziladi

function SendAlert() {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    const token = "7568550046:AAEZrb5IP-03NEjrzlcpa96BvlU6n5N0Euc";
    const chatId = "@messagesfromu";
    const text = message;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Send!",
          text: "Message sent successfully.",
        });
        setMessage(""); // 👈 Formani tozalash
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
        title: "Server xatosi!",
        text: "Xabar yuborishda muammo yuz berdi.",
      });
    }
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default SendAlert;
