import SectionTitle from "@/components/title/SectionTitle";
import ServiceCard from "@/components/card/Servicos";
import Laptop from "@/components/icons/Laptop";
import Grafico from "@/components/icons/Grafico";
import Pages from "@/components/icons/Pages";

const Servicos = () => {
  return (
    <>
      <div style={{ margin: "50px 0px" }}>
        <SectionTitle
          firstLine={"Sua melhor opção!"}
          secondLine={"Qual é o seu objetivo digital hoje?"}
        />
        <div
          style={{
            margin: "30px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <ServiceCard
            icone={<Laptop />}
            titulo={"Sites para empresas"}
            descricao={
              "Criação de websites institucionais com várias páginas e funcionalidades com todas as informações da sua empresa."
            }
          />
          <ServiceCard
            icone={<Grafico />}
            titulo={"Página de vendas"}
            descricao={
              "Criação de página única e objetiva para apresentação e venda de serviços para conquistar novos clientes."
            }
          />
          <ServiceCard
            icone={<Pages />}
            titulo={"Página de infoprodutos"}
            descricao={
              "Desenvolvimento de lading pages de alta conversão com incrível design para venda de infoprodutos."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Servicos;
