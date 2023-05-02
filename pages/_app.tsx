import "@/styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { useSSR } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  const myDarkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        // brand colors
        background: "#343434",
        text: "#fff",
        // you can also create your own color
        myDarkColor: "black",
        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });
  return (
    isBrowser && (
      <NextUIProvider theme={myDarkTheme}>
        <Component {...pageProps} />
      <Analytics />
      </NextUIProvider>
    ) 
  );
}
