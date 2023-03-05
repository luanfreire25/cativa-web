import style from "@/components/styles_components/Title.module.css";
import global_colors from "@/styles/global_colors";

const Motivos = ({ numero, titulo, descricao }) => {
  return (
    <>
      <div
        className={style.motivosText}
        style={{
          color: `${global_colors.SECONDARY_COLOR}`,
          width: "350px",
          padding: "10px"
        }}
      >
        <span
          style={{
            color: `${global_colors.PRIMARY_COLOR}`,
            fontSize: "120px",
            fontWeight: 800,
          }}
        >
          {numero}
        </span>
        <br />
        <span style={{ fontWeight: 700, fontSize: "25px" }}>{titulo}</span>
        <br />
        <br />
        <span style={{ fontSize: "16px" }}>{descricao}</span>
      </div>
    </>
  );
};

export default Motivos;
