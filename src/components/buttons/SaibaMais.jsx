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
          fontWeight: 600,
          fontSize: "17px",
          borderRadius: "10px",
          border: "none",
          transition: "all 0.3s ease",
          textTransform: "none",
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
