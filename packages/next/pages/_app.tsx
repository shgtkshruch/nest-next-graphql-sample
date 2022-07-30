import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo-client';
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
