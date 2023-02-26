import RedeSocial from "@/components/buttons/RedeSocial";
import WhiteFb from "@/components/icons/WhiteFb";
import WhiteInsta from "@/components/icons/WhiteInsta";
import WhiteMail from "@/components/icons/WhiteMail";
import Word from "@/components/logo/Word";
import global_colors from "@/styles/global_colors";
import style from "@/components/styles_components/Title.module.css";

const Rodape = () => {
  return (
    <>
      <div
        style={{
          background: `${global_colors.BLACK}`,
          textAlign: "center",
          padding: "15px 0px",
        }}
      >
        <Word
          size={"35px"}
          color={global_colors.SECONDARY_COLOR}
          colorShadow={"#C9C9C9"}
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            margin: "15px 0px",
          }}
        >
          <RedeSocial icone={<WhiteFb />} />
          <RedeSocial icone={<WhiteInsta />} />
          <RedeSocial icone={<WhiteMail />} />
        </div>
        <span
          className={style.footer}
          style={{ color: `${global_colors.SECONDARY_COLOR}` }}
        >
          CativaWeb 2023 - Todos os direitos reservados
        </span>
      </div>
    </>
  );
};

export default Rodape;
