import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝔂" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      <link rel="icon" href="/logo.jpg" />
    </Head>
  </>
);

export default SEO;