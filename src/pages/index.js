import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HomeSection from "@/components/sections/principal_website/Home";
import ServicosSection from "@/components/sections/principal_website/Servicos";
import MotivosSection from "@/components/sections/principal_website/Motivos";
import IntegrantesSection from "@/components/sections/principal_website/Integrantes";
import FAQSection from "@/components/sections/principal_website/FAQ";
import DuvidasSection from "@/components/sections/principal_website/Duvidas";
import RodapeSection from "@/components/sections/principal_website/Rodape";
import { useSizeScreen } from "../hooks/useSizeScreen";

const Home = () => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <Head>
        <title>CativaWeb - A sua agência de sites!</title>
        <meta
          name="description"
          content="CativaWeb - A sua agência de sites!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <Navbar />
          <div
            style={{
              margin: `${
                width <= 585 ? "40px 40px 15px 40px" : "80px 80px 30px 80px"
              }`,
            }}
          >
            <HomeSection />
          </div>
          <ServicosSection />
          <MotivosSection />
          <div
            style={{
              margin: `${
                width <= 585 ? "40px 40px 15px 40px" : "80px 80px 30px 80px"
              }`,
            }}
          >
            <IntegrantesSection />
            <FAQSection />
            <DuvidasSection />
          </div>
          <RodapeSection />
        </>
      </main>
    </>
  );
};

export default Home;
