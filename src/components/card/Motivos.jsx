import style from "@/components/styles_components/Title.module.css";
import global_colors from "@/styles/global_colors";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const Motivos = ({ numero, titulo, descricao }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <div
        className={style.motivosText}
        style={{
          color: `${global_colors.SECONDARY_COLOR}`,
          width: `${width <= 320 ? "250px" : width <= 375 ? "280px" : "350px"}`,
          padding: `${
            width <= 320 ? "10px 15px" : width <= 425 ? "10px 30px" : "10px"
          }`,
        }}
      >
        <span
          style={{
            color: `${global_colors.PRIMARY_COLOR}`,
            fontSize: `${width <= 320 ? "90px" : "120px"}`,
            fontWeight: 800,
          }}
        >
          {numero}
        </span>
        <br />
        <span
          style={{
            fontWeight: 700,
            fontSize: `${width <= 320 ? "21px" : "25px"}`,
          }}
        >
          {titulo}
        </span>
        <br />
        <br />
        <span style={{ fontSize: `${width <= 320 ? "14px" : "16px"}` }}>
          {descricao}
        </span>
      </div>
    </>
  );
};

export default Motivos;
