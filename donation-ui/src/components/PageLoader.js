import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

function PageLoader(props) {
  const { style, children, height, message, ...otherProps } = props;

  const numbers = [7, 10, 13, 15, 17, 21, 23];

  return (
    <div
      bg="white"
      className="d-flex justify-content-center align-items-center"
      style={{
        ...style,
        height: height || '400px',
      }}
      {...otherProps}
    >
      <Container
        style={{
          height: '100%',
          textAlign: 'center',
        }}
      >
        {!props.children && (
          <div>
            <img
              src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/8cffed11-8184-4288-da7b-c4cd9d600300/public"
              style={{
                width: '200px',
                margin: 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: ' translate(-50%, -50%)',
                borderRadius: '200px',
              }}
            ></img>
            <Typography
              variant="h6"
              style={{ margin: 'auto', paddingTop: '300px' }}
            ></Typography>
          </div>
        )}

        {props.children && <>{props.children}</>}
      </Container>
    </div>
  );
}

export default PageLoader;
