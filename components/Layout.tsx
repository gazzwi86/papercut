import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
};

const links = [
  {
    text: 'Home',
    href: '/',
  },
]

const Layout: React.FC<LayoutProps> = ({
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

export default Layout;
