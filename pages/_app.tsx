import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import PageProvider from "../src/Components/helpers/pageProvider";

export interface MUIAppProps extends AppProps {
      emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
      <PageProvider emotionCache={emotionCache}>
            <Component {...pageProps} />
      </PageProvider>
);

export default App;
