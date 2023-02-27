import Image from "next/image";
import pages_icon from "../../../public/principal-website/section/WindowStack.svg";

const Pages = () => {
  return (
    <>
      <Image width={70} height={70} src={pages_icon} alt="pages icon" />
    </>
  );
};

export default Pages;
