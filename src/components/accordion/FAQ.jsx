import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQ = () => {
  const [itensFAQ] = useState([
    {
      id: 1,
      titulo: "Qual a importância de um site para minha empresa?",
      descricao:
        "O objetivo principal de um web site é tornar-se uma filial de sua empresa, com capacidade de conseguir clientes e realizar serviços mesmo enquanto você está dormindo e sua empresa está fechada. Além de você divulgar seus produtos e serviços, poderá trabalhar o marketing da empresa com um melhor custo-benefício.",
    },
    {
      id: 2,
      titulo: "Preciso de um domínio e hospedagem?",
      descricao:
        "Sim, você vai precisar de um domínio e uma hospedagem para ter o seu site funcionando na internet, mas não se preocupe, caso você tenha alguma dificuldade, a nossa equipe irá te ajudar a fazer a contratação do seu domínio e da sua hospedagem.",
    },
    {
      id: 3,
      titulo: "Quais os gastos eu tenho para manter um site?",
      descricao:
        "Dentro os gastos que envolve a manutenção de um site podemos citar: O valor pago anualmente referente ao domínio do site + O valor mensal correspondente a hospedagem do site.",
    },
    {
      id: 4,
      titulo: "Meu site irá aparecer no sistema de busca do google?",
      descricao:
        "O Google é atualmente o site de busca mais utilizado no Brasil, devido a sua simplicidade e eficiência nas pesquisas de informações na internet. Após a conclusão do site, nós faremos o registro no motor de busca do Google, e o seu site aparecerá nas buscas.",
    },
    {
      id: 5,
      titulo: "Quanto cobramos pelo desenvolvimento dos sites?",
      descricao:
        "Os valores variam de acordo com o tipo e o tamanho do projeto. Por isso, preparamos um orçamento personalizado para cada cliente. Dessa forma, conseguimos entregar um site que realmente atende as suas necessidades.Finalize o formulário ou nos envie uma mensagem direta para que a nossa equipe possa entrar em contato com você e te informar os valores para o desenvolvimento do seu projeto.",
    },
    {
      id: 6,
      titulo: "Eu terei controle do site quando o projeto terminar?",
      descricao:
        "Sim! Não gostamos de deixar nenhum cliente refém do nossos trabalho. No final do projeto iremos te enviar todos os dados de acesso do seu site e você terá total controle para editar as suas páginas.",
    },
    {
      id: 7,
      titulo: "Eu terei o contato direto com vocês?",
      descricao:
        "Sim. Você estará em contato com a nossa equipe durante todo o projeto. Nesse período enviaremos atualizações do seu site e também faremos algumas reuniões para te apresentar o andamento do projeto, ou seja, você terá todo o suporte da nossa equipe e também irá acompanhar o projeto de perto.",
    },
  ]);

  return (
    <>
      <div style={{ margin: "30px 0px" }}>
        {itensFAQ.map((item) => (
          <div style={{ margin: "5px 0px" }} key={item.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span>{item.titulo}</span>
              </AccordionSummary>
              <AccordionDetails>
                <span>{item.descricao}</span>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
