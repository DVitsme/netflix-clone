import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {
      //<link rel="stylesheet" type="text/css" href="/static/nprogress.css" /> Dont Forget Me Set Me up Later
    }
    <link rel="shortcut icon" href="/images/favicon/nficon2016.ico" />
    <link
      rel="preload"
      href="/fonts/fonts/NetflixSans_W_Rg.woff2"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/fonts/NetflixSans_W_Md.woff2"
      as="font"
      crossOrigin=""
    />

    <title>Netflix Clone || </title>
  </Head>
);

export default Meta;
