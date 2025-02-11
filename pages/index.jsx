import Head from 'next/head';
import Script from 'next/script';
import UseObserver from '../context/ObserverContext';
import { Toaster } from 'react-hot-toast';

//Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  const GA_TRACKING_ID = 'G-MNYDCMVBPH';
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
          content="I am Diover Rivero, a passionate programmer and web designer/developer, as well as the founder of Pogo AI Studio. I specialize in creating innovative solutions that combine technology and creativity to transform education and programming. Through my projects, I aim to provide interactive and functional experiences that optimize learning and interaction on the web."
        />
        <meta
          name="keywords"
          content="desarrollador, web, reactjs, nextjs, html, css, js, javascript, web developer, desarrollador web, maquetador, frontend, desarrollador frontend, developer, desarrollador backend, backend, backend developer, frontend developer, DioverDM, Diover Rivero, Diover, Rivero"
        />
        <meta name="msapplication-TileColor" content="#f53b57" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Diover Rivero, DioverDM" />
        <meta name="copyright" content="DioverDM" />
        <meta httpEquiv="expires" content="43200" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dioverdm" />
        <meta
          name="twitter:title"
          content="Desarrollador Frontend y Maquetador web - Mooenz"
        />
        <meta
          name="twitter:description"
          content="Maquetador Web en constante aprendizaje para lograr un puesto como Desarrollador Frontend. Me interesan tecnologías como React o Next js. Busco un lugar ameno donde me permitan seguir creciendo como Developer Frontend."
        />
        {/* open graph card */}
        <meta
          property="og:title"
          content="Diover Rivero | DioverDM | Frontend and backend developer"
        />
        <meta property="og:site_name" content="dioverdm.com" />
        <meta property="og:url" content="https://www.dioverdm.com/" />
        <meta
          property="og:description"
          content="I am Diover Rivero, a passionate programmer and web designer/developer, as well as the founder of Pogo AI Studio. I specialize in creating innovative solutions that combine technology and creativity to transform education and programming. Through my projects, I aim to provide interactive and functional experiences that optimize learning and interaction on the web."
        />
        <meta property="og:type" content="article" />
        <meta
          name="google-site-verification"
          content="qAWFc7fQ6Gcr1d5vlc-TKfYgqz3_Yl7wGAT_NDUUdBA"
        />
        <meta property="og:image" content="https://www.mooenz.me/image/jose-manuel.webp" />
        <link rel="icon" href="/favicon/favicon.webp" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/favicon/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/favicon/favicon-16x16.webp"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.webp"
          color="#f53b57"
        />
        <link rel="canonical" href="https://www.dioverdm.com/" />
        <title>Diover Rivero | DioverDM | Frontend and backend developer</title>
      </Head>
      <UseObserver>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
      </UseObserver>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
