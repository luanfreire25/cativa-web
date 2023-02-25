import Button from "@mui/material/Button";
import Chat from "../icons/Chat";
import style from "@/components/styles_components/Button.module.css"

const FalarComEspecialista = ({ background, color }) => {
  return (
    <>
      <Button
        className={style.BtnFalarCEsp}
        style={{ background: `${background}`, color: `${color}` }}
        variant="outlined"
        startIcon={<Chat />}
      >
        Falar com especialista
      </Button>
    </>
  );
};

export default FalarComEspecialista;
