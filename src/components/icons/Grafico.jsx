import Image from "next/image";
import grafico_icon from "../../../public/principal-website/section/GraphUpArrow.svg";

const Grafico = () => {
  return (
    <>
      <Image width={70} height={70} src={grafico_icon} alt="graph icon" />
    </>
  );
};

export default Grafico;
