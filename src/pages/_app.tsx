import { DefaultLayout } from '@/layouts/DefaultLayout'
import { css, Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import { LSDThemeProvider } from '../containers/LSDThemeProvider'

type NextLayoutComponentType<P = {}> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppLayoutProps<P = {}> = AppProps & {
  Component: NextLayoutComponentType
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <LSDThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Logos Ordianals</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Global
          styles={css`
            :root {
              --grey-900: #141414;
              --grey-800: #1f1f1f;
              --grey-700: #2b2b2b;
              --grey-600: #373737;
              --grey-500: #434343;
              --grey-400: #4f4f4f;
              --grey-300: #5b5b5b;
              --grey-200: #676767;
              --grey-100: #737373;

              --orange: #fe740c;
              --dark-orange: #321504;
            }

            -ms-overflow-style: none;
            scrollbar-width: none;

            &::-webkit-scrollbar {
              width: 0;
              display: none;
            }

            html,
            body {
              background: rgb(var(--lsd-surface-primary));
              margin: 0;
              width: 100%;
              height: 100%;

              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;

              font-family: 'Inter', sans-serif;
            }

            * {
              box-sizing: border-box;
            }

            #__next {
              margin-left: auto;
              margin-right: auto;
            }

            a,
            a:visited,
            a:hover,
            a:active,
            a:focus {
              color: black;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p {
              margin: 0;
              padding: 0;
              word-break: keep-all;
            }

            ul,
            li {
              margin: 0;
              padding: 0;
              list-style-type: none;
            }

            button {
              padding: 0;
            }
          `}
        />
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </LSDThemeProvider>
  )
}
