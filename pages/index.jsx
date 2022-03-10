import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

//Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
        />
        <meta
          name="description"
          content="Maquetador Web en constante aprendizaje para lograr un puesto como Desarrollador Frontend. Me interesan tecnologías como React o Next js. Busco un lugar ameno donde me permitan seguir creciendo como Developer Frontend."
        />
        <meta
          name="keywords"
          content="desarrollador, web, reactjs, nextjs, html, css, js, javascript, web developer, desarrollador web, maquetador, frontend, desarrollador frontend"
        />
        <meta name="msapplication-TileColor" content="#f53b57" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Jose Manuel Montaño Saenz, Mooenz" />
        <meta name="copyright" content="Mooenz" />
        <meta httpEquiv="expires" content="43200" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#f53b57"
        />
        <link rel="canonical" href="https://www.mooenz.me/" />
        <title>Desarrollador Frontend y Maquetador web - Mooenz</title>
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
