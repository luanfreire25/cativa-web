import Button from "@mui/material/Button";
import Heart from "../icons/Heart";
import "../../styles/Button.css";

const SolicitarOrcamento = () => {
  return (
    <>
      <Button
        style={{
          background: "#FF4F55",
          color: "#fff",
          boxShadow: "0px 0px 20px #FF4F55",
          margin: "20px",
          padding: "5px 20px",
          border: "none",
          borderRadius: "15px",
          textTransform: "none",
          fontSize: "17px"
        }}
        variant="outlined"
        startIcon={<Heart />}
      >
        Solicitar Orçamento
      </Button>
    </>
  );
};

export default SolicitarOrcamento;
