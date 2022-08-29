import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Flee-mark</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main className="">{children}</main>
    </>
  );
}

export default MainLayout;
