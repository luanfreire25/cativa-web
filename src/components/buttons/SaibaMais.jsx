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
          padding: "5px 25px",
          fontSize: "17px",
          borderRadius: "10px",
          border: "none",
          transition: "all 0.3s ease",
          textTransform: "none",
          filter: "none",
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
