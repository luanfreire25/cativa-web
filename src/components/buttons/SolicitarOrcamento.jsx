import Button from "@mui/material/Button";
import Heart from "../icons/Heart";

const SolicitarOrcamento = () => {
  return (
    <>
      <Button variant="outlined" startIcon={<Heart />}>
        Solicitar Orçamento
      </Button>
    </>
  );
};

export default SolicitarOrcamento;
