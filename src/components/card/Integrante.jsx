import Image from "next/image";
import style from "@/components/styles_components/Title.module.css";
import Word from "../logo/Word";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Integrante = ({ foto, nome, descricao }) => {
  return (
    <>
      <Card sx={{ width: 380, borderRadius: "30px" }}>
        <Image width={380} height={240} src={foto} alt="integrante" />
        <CardContent>
          <span>{nome}</span>
          <br />
          <span>{descricao}</span>
        </CardContent>
      </Card>
    </>
  );
};

export default Integrante;
