import Button from "@mui/material/Button";
import style from "@/components/styles_components/Button.module.css";
import WhiteWpp from "../icons/WhiteWpp";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const SaibaMais = ({ background, color }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5521991547929&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20saber%20mais%20sobre%20os%20sites%20da%20Cativa."
        target="_blank"
        style={{ textDecoration: "none !important" }}
      >
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
      </a>
    </>
  );
};

export default SaibaMais;
