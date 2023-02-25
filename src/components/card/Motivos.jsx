import style from "@/components/styles_components/Title.module.css";
import global_colors from "@/styles/global_colors";

const Motivos = ({ numero, titulo, descricao }) => {
  return (
    <>
      <div
        className={style.reasonsText}
        style={{
          color: `${global_colors.BLACK}`,
          width: "300px",
        }}
      >
        <span
          style={{
            color: `${global_colors.PRIMARY_COLOR}`,
            fontSize: "90px",
            fontWeight: 500,
          }}
        >
          {numero}
        </span>
        <br />
        <span style={{ fontWeight: 600, fontSize: "22px" }}>{titulo}</span>
        <br />
        <br />
        <span style={{ fontSize: "16px" }}>{descricao}</span>
      </div>
    </>
  );
};

export default Motivos;
