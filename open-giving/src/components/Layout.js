import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, Container, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const Layout = ({ children, plain = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {!plain && (
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <IconButton
            color="primary"
            aria-label="github repository"
            component="a"
            href="https://github.com/Chimoney/non-profit-donations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      )}
      {children}
      {!plain && (
        <Container
          style={{
            textAlign: 'center',
            marginTop: '50px',
          }}
          maxWidth="xl"
        >
          <Button
            variant="text"
            disabled
            startIcon={<LockIcon sx={{ width: '0.5em' }} color="success" />}
            style={{
              color: theme.palette.common.black,
              margin: 'auto',
              position: 'fixed',
              left: 0,
              bottom: 0,
              width: '100%',
              background: theme.palette.background.paper,
              zIndex: '1000000',
            }}
            fullWidth
          >
            Built with ❤️ by Chimoney
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Layout;
