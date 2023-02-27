import Image from "next/image";
import style from "@/components/styles_components/Title.module.css";
import Word from "../logo/Word";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Integrante = ({
  foto,
  nome,
  profissao,
  descricao,
  background,
  color1,
  color2,
  sizeLogo,
  colorShadow,
}) => {
  return (
    <>
      <Card
        sx={{
          width: 290,
          borderRadius: "30px",
          background: `${background}`,
          color: `${color2}`,
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))"
        }}
      >
        <Image placeholder="blur" width={290} height={240} src={foto} alt="integrante" />
        <CardContent>
          <div className={style.integrantesNameDesc}>
            <span
              style={{ fontSize: "25px", color: `${color1}`, fontWeight: 600 }}
            >
              {nome}
            </span>
            <br />
            <span style={{fontWeight: 600}}>{profissao}</span>
            <br />
            <br />
            <span>{descricao}</span>
            <br />
            <br />
            <Word size={sizeLogo} color={color1} colorShadow={colorShadow} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Integrante;
