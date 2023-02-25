import SaibaMais from "../buttons/SaibaMais";
import global_colors from "@/styles/global_colors";
import style from "@/components/styles_components/Title.module.css";

const Servicos = ({ icone, titulo, descricao }) => {
  return (
    <>
      <div
        style={{
          background: `${global_colors.SECONDARY_COLOR}`,
          textAlign: "center",
          padding: "20px 50px",
          borderRadius: "30px",
          height: "auto",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          width: "250px",
          alignSelf: "center"
        }}
      >
        {icone}
        <br /><br/>
        <span className={style.serviceText} style={{ fontSize: "20px", fontWeight: 500 }}>
          {titulo}
        </span>
        <br />
        <br />
        <span className={style.serviceText} style={{fontSize: "14px"}}>{descricao}</span>
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
