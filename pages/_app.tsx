import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>ONE World</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
