import SaibaMais from "../buttons/SaibaMais";
import global_colors from "@/styles/global_colors";
import style from "@/components/styles_components/Title.module.css";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const Servicos = ({ icone, titulo, descricao }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          color: `${global_colors.SECONDARY_COLOR}`,
          textAlign: "center",
          padding: `${width <= 375 ? "13px 25px" : "20px 50px"}`,
          borderRadius: "30px",
          height: "auto",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "250px",
          alignSelf: "center",
        }}
      >
        {icone}
        <br />
        <br />
        <span
          className={style.serviceText}
          style={{
            fontSize: `${width <= 320 ? "18px" : "20px"}`,
            fontWeight: 600,
          }}
        >
          {titulo}
        </span>
        <br />
        <br />
        <span
          className={style.serviceText}
          style={{ fontSize: `${width <= 320 ? "12px" : "14px"}` }}
        >
          {descricao}
        </span>
        <br />
        <br />
        <SaibaMais
          background={global_colors.PRIMARY_COLOR}
          color={global_colors.SECONDARY_COLOR}
        />
      </div>
    </>
  );
};

export default Servicos;
