import Index from "@/components/headers/page";
import { TransitionProvider } from "./Transitioncontext";

export default function App({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <Index />
      <Component {...pageProps} />
    </TransitionProvider>
  );
}
