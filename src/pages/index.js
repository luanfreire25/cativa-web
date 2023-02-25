import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import HomeSection from "@/components/sections/principal_website/Home";
import ServicosSection from "@/components/sections/principal_website/Servicos";
import MotivosSection from "@/components/sections/principal_website/Motivos";

const Home = () => {
  return (
    <>
      <Head>
        <title>CativaWeb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <Navbar />
          <div style={{ margin: "80px" }}>
            <HomeSection />
            <ServicosSection />
            <MotivosSection />
          </div>
        </>
      </main>
    </>
  );
};

export default Home;
