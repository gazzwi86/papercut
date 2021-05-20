import React, { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Head from "next/head";

interface MainLayoutProps {
  children?: ReactNode;
  title?: string;
};

const links = [
  {
    text: 'Home',
    href: '/',
  },
]

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Welcome to Papercut",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header links={links} />
    
    {children}

    <Footer />
  </div>
);

export default MainLayout;
