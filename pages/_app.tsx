import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="px-3 py-5 lg:px-6 lg:py-10">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
