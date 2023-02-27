import Image from "next/image";
import laptop_icon from "../../../public/principal-website/section/Laptop.svg";

const Laptop = () => {
  return (
    <>
      <Image width={70} height={70} src={laptop_icon} alt="laptop icon" />
    </>
  );
};

export default Laptop;
