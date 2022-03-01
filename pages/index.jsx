import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Desarrollador Frontend y Maquetador web - Mooenz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Maquetador Web en constante aprendizaje para lograr un puesto como Desarrollador Frontend. Me interesan tecnologías como React o Next js. Busco un lugar ameno donde me permitan seguir creciendo como Developer Frontend.'/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#111"></meta>
        <meta name="robots" content="index,follow"></meta>  
      </Head>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
    </>
  );
}
