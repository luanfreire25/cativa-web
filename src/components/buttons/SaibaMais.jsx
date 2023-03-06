import Button from "@mui/material/Button";
import style from "@/components/styles_components/Button.module.css";
import WhiteWpp from "../icons/WhiteWpp";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const SaibaMais = ({ background, color }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <Button
        className={style.BtnFalarCEsp}
        style={{
          background: `${background}`,
          color: `${color}`,
          fontWeight: 600,
          padding: "5px 25px",
          fontSize: `${width <= 320 ? "15px" : "17px"}`,
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
