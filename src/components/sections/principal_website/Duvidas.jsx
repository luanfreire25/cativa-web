import Image from "next/image";
import chat_icon from "../../../../public/principal-website/duvidas/chat_laranja.svg";
import global_colors from "@/styles/global_colors";
import style from "@/components/styles_components/Title.module.css";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const Duvidas = () => {
  const { height, width } = useSizeScreen();

  return (
    <>
      <div
        className={style.duvidas}
        style={{
          textAlign: "center",
          background: `${global_colors.SECONDARY_COLOR}`,
          color: `${global_colors.BLACK}`,
          margin: "30px none",
          padding: "25px",
          borderRadius: "20px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))",
        }}
      >
        <Image width={70} height={70} src={chat_icon} alt="chat icon" />
        <br />
        <span
          style={{
            fontSize: `${
              width <= 375 ? "16.5px" : width <= 425 ? "18px" : "23px"
            }`,
            fontWeight: 700,
          }}
        >
          Tem alguma dúvida?
        </span>
        <br />
        <br />
        <span
          style={{
            fontWeight: 400,
            fontSize: `${
              width <= 375 ? "12.5px" : width <= 425 ? "14px" : "16px"
            }`,
          }}
        >
          Tem mais alguma outra dúvida que não foi respondida? Entre em contato
          com a nossa equipe clicando no botão de WhatsApp!
        </span>
      </div>
    </>
  );
};

export default Duvidas;
