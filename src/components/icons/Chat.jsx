import Image from "next/image";
import chat_icon from "../../../public/principal-website/home/chat_icon.svg";

const Chat = () => {
  return (
    <>
      <Image src={chat_icon} alt="chat icon" />
    </>
  );
};

export default Chat;
