import { Button, css, Typography } from '@mui/material';
import type { NextPage } from 'next';
import CodeBlock from '../src/components/CodeBlock';
import PageTitle from '../src/components/PageTitle';
import ThemeUpdater from '../src/components/ThemeUpdater';
import AppBar from '@mui/material/AppBar';
import Header from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        `}
      >
        <Typography variant="h1">Time Complexity Calculator</Typography>
        <CodeBlock />
      </main>
    </>
  );
};

export default Home;
