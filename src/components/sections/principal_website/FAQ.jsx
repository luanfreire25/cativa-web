import SectionTitle from "@/components/title/SectionTitle";
import FAQAcordeao from "@/components/accordion/FAQ";

const FAQ = () => {
  return (
    <>
      <div>
        <SectionTitle
          firstLine={"Aproveite agora!"}
          secondLine={"Leia sobre algumas dúvidas gerais"}
        />
        <FAQAcordeao/>
      </div>
    </>
  );
};

export default FAQ;
