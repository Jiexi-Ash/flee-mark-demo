import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Flee-mark</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main className="max-w-8xl px-8 py-6 container mx-auto min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
