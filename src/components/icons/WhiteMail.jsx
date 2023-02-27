import Image from "next/image";
import mail_icon from "../../../public/principal-website/rodape/mail.svg";

const WhiteMail = () => {
  return (
    <>
      <Image width={20} height={20} src={mail_icon} alt="mail icon" />
    </>
  );
};

export default WhiteMail;