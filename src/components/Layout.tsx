import Head from "next/head";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>AlgoTest - Leg Builder</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">{children}</main>

      {/* <footer>
      </footer> */}
    </div>
  );
};

export default Layout;
