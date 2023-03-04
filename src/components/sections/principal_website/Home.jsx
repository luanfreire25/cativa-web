import FalarComEspecialista from "@/components/buttons/FalarComEspecialista";
import Image from "next/image";
import Img from "../../../../public/principal-website/home/image_home.svg";
import style from "@/components/styles_components/Home.module.css";
import global_colors from "@/styles/global_colors";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap-reverse",
        }}
      >
        <div
          style={{ alignSelf: "center", color: `${global_colors.BLACK}` }}
          className={style.homeText}
        >
          <span style={{ fontSize: "45px", lineHeight: "50px" }}>
            Atraia e encante
            <br />
            os seus clientes na <br />
            <b>primeira visita!</b>
          </span>
          <p style={{ fontSize: "17px" }}>
            Do projeto ao desenvolvimento,
            <br />
            gerenciamos sites de alto impacto que
            <br />
            geram <span style={{ fontWeight: 500 }}>novos clientes</span>,
            escalam as <span style={{ fontWeight: 500 }}>vendas</span>
            <br />
            da sua empresa e <span style={{ fontWeight: 500 }}>
              cativam
            </span>{" "}
            quem visita.
          </p>
          <FalarComEspecialista
            background={global_colors.PRIMARY_COLOR}
            color={global_colors.SECONDARY_COLOR}
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Image
            src={Img}
            alt="people image"
            quality={100}
            width={436}
            height={366}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
