import { FC } from 'react';
import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import PageProvider from '../src/components/helpers/PageProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient();

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </PageProvider>
);

export default App;
