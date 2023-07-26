import type { AppProps } from "next/app";
import "@/styles/globals.css";
import RootLayout from "@/components/RootLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" font-bodyFont">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
