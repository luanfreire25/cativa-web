import Image from "next/image";
import style from "@/components/styles_components/Title.module.css";
import Word from "../logo/Word";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSizeScreen } from "@/hooks/useSizeScreen";

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
  const { width, height } = useSizeScreen();

  return (
    <>
      <Card
        sx={{
          width: 380,
          borderRadius: "30px",
          background: `${background}`,
          color: `${color2}`,
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))",
        }}
      >
        <Image
          placeholder="blur"
          width={width <= 375 ? 300 : width <= 414 ? 340 : 380}
          height={width <= 375 ? 180 : width <= 414 ? 200 : 220}
          src={foto}
          alt="integrante"
        />
        <CardContent>
          <div
            className={style.integrantesNameDesc}
            style={{ textAlign: "start", padding: "10px 30px" }}
          >
            <span
              style={{ fontSize: "30px", color: `${color1}`, fontWeight: 600 }}
            >
              {nome}
            </span>
            <br />
            <span style={{ fontWeight: 600 }}>{profissao}</span>
            <br />
            <br />
            <span>{descricao}</span>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Word size={sizeLogo} color={color1} colorShadow={colorShadow} />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Integrante;
