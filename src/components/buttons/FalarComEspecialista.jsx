import Button from "@mui/material/Button";
import Chat from "../icons/Chat";
import style from "@/components/styles_components/Button.module.css";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const FalarComEspecialista = ({ background, color }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <Button
        className={style.BtnFalarCEsp}
        style={{
          background: `${background}`,
          color: `${color}`,
          fontSize: `${width <= 375 ? "14px" : width <= 375 ? "15px" : "18px"}`,
          padding: "7px 25px",
          borderRadius: "15px",
          border: "none",
          transition: "all 0.3s ease",
          textTransform: "none",
        }}
        variant="outlined"
        startIcon={<Chat />}
      >
        Falar com especialista
      </Button>
    </>
  );
};

export default FalarComEspecialista;
