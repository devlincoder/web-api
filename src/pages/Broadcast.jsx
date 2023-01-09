import { useEffect, useState } from "react";

const Broadcast = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const bc = new BroadcastChannel("abc");
    bc.addEventListener("message", (e) => {
      setTitle(e.data);
    });
    bc.postMessage(input);
  }, [input]);

  return (
    <div className="wrapper">
      <h1>Gửi dữ liệu sang tab khác</h1>
      <h1>Hãy mở thêm một tab nữa và gõ vào Input</h1>
      <h1>{title}</h1>
      <input
        style={{ padding: "20px", width: "100%", fontSize: "25px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <img
        src="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API/broadcastchannel.png"
        alt="Broadcast"
      />
    </div>
  );
};

export default Broadcast;
