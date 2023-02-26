import SectionTitle from "@/components/title/SectionTitle";
import luan_foto from "../../../../public/principal-website/integrantes/luan_foto.jpeg";
import duda_foto from "../../../../public/principal-website/integrantes/duda_foto.jpeg";
import IntegranteCard from "@/components/card/Integrante";
import global_colors from "@/styles/global_colors";

const Integrantes = () => {
  return (
    <>
      <div>
        <SectionTitle
          firstLine={"Olha que incrível!"}
          secondLine={"Conheça os integrantes"}
        />
        <div
          style={{
            margin: "25px 0px",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <IntegranteCard
            foto={luan_foto}
            nome={"Luan Freire"}
            profissao={"Software Developer"}
            descricao={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui tortor, euismod pharetra sollicitudin pharetra, tincidunt nec leo."
            }
            background={global_colors.BLACK}
            color1={global_colors.PRIMARY_COLOR}
            color2={global_colors.SECONDARY_COLOR}
            colorShadow={"rgba(0,0,0,0)"}
          />
          <IntegranteCard
            foto={duda_foto}
            nome={"Duda Cascaez"}
            profissao={"UI/UX Designer"}
            descricao={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui tortor, euismod pharetra sollicitudin pharetra, tincidunt nec leo."
            }
            background={global_colors.PRIMARY_COLOR}
            color1={global_colors.SECONDARY_COLOR}
            color2={global_colors.BLACK}
            colorShadow={"#C9C9C9"}
          />
        </div>
      </div>
    </>
  );
};

export default Integrantes;
