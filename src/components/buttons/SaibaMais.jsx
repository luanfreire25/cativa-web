import Button from "@mui/material/Button";
import style from "@/components/styles_components/Button.module.css";
import WhiteWpp from "../icons/WhiteWpp";

const SaibaMais = ({ background, color }) => {
  return (
    <>
      <Button
        className={style.BtnFalarCEsp}
        style={{
          background: `${background}`,
          color: `${color}`,
          fontWeight: 500,
          fontSize: "17px",
          borderRadius: "10px",
        }}
        variant="outlined"
        startIcon={<WhiteWpp />}
      >
        Saiba Mais
      </Button>
    </>
  );
};

export default SaibaMais;
