import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Brightness4Rounded from '@mui/icons-material/Brightness4Rounded';
import Brightness7Rounded from '@mui/icons-material/Brightness7Rounded';
import { useTheme } from 'next-themes';

function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI

  useEffect(() => setMounted(true), []);

  const Root = styled.div`
    display: flex;
    flex-grow: 1;
  `;

  const MenuButton = styled.div`
    margin-right: 16px;
  `;

  const Title = styled.div`
    flex-grow: 1;
  `;

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title>
            <Typography variant="h6">The Big O</Typography>
          </Title>
          <MenuButton>
            <IconButton
              onClick={() =>
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
              }
              color="inherit"
            >
              {theme === 'dark' ? (
                <Brightness4Rounded />
              ) : (
                <Brightness7Rounded />
              )}
            </IconButton>
          </MenuButton>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default Header;
