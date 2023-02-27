import SectionTitle from "@/components/title/SectionTitle";
import MotivosCard from "@/components/card/Motivos";
import { useState } from "react";

const Motivos = () => {
  const [motivosLib] = useState([
    {
      id: "01",
      titulo: "Serviço de qualidade",
      descricao:
        "Se você está em busca de uma agência de sites que possa oferecer um serviço de qualidade e com um atendimento personalizado, a CativaWeb é a escolha certa para você.",
    },
    {
      id: "02",
      titulo: "Soluções completas",
      descricao:
        "Oferecemos soluções, desde o desenvolvimento do layout até a implementação de recursos avançados no site, tudo com a preocupação constante em atender às necessidades específicas de cada cliente.",
    },
    {
      id: "03",
      titulo: "Profissionais qualificados",
      descricao:
        "Estamos sempre prontos para entender suas demandas e encontrar as melhores soluções para a sua empresa. Além disso, garantimos um atendimento personalizado e uma comunicação clara e transparente durante todo o processo.",
    },
  ]);

  return (
    <>
      <div>
        <SectionTitle
          firstLine={"Não há lenga-lenga por aqui."}
          secondLine={"Principais motivos para nos escolher"}
        />
        <div
          style={{
            margin: "30px 0px",
            display: "flex",
            justifyContent: "space-around",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {motivosLib.map((motivo) => (
            <div key={motivo.id} style={{ alignSelf: "flex-start" }}>
              <MotivosCard
                numero={motivo.id}
                titulo={motivo.titulo}
                descricao={motivo.descricao}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Motivos;
