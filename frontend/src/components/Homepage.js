import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1fbcf0',
      },
    },
  });

export default function Homepage({startRentOnClick, startReturnOnClick, startSearchOnClick}) {
  
    const setRentOnClick = () => {
        startRentOnClick()
    }
    const setReturnOnClick = () => {
        startReturnOnClick()
    }
    const SearchOnClick = () => {
        startSearchOnClick()
    }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '80vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage: 'url(https://i.imgur.com/nrBA0OV.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4} elevation={6} sx={{
              backgroundColor: 'transparent',
        }}>
          <Box component={Paper} 
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <Avatar sx={{ mt: 4, bgcolor: 'error.main' }}>
              <ThumbUpIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{mb: 4}}>
              請選擇想要的操作
            </Typography>
            <Box sx={{ m: 3, width: "60%"}}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    margin="normal"
                    color="primary"
                    sx={{ mt: 3, mb: 2}}
                    style={{fontSize: '25px', color: 'white'}}
                    onClick={setRentOnClick}
                >
                    租借座位
                </Button>
            </Box>
            <Box sx={{ m: 3, width: "60%"}}>
                <Button
                    type="submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="primary"
                    style={{fontSize: '25px', color: 'white'}}
                    onClick={setReturnOnClick}
                >
                    歸還座位
                </Button>
            </Box>
            <Box sx={{ m: 3, width: "60%"}}>
                <Button
                    type="submit"
                    margin="normal"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                    color="primary"
                    style={{fontSize: '25px', color: 'white'}}
                    onClick={SearchOnClick}
                >
                    查詢座位
                </Button>
            </Box>
            <Box sx={{ m: 6, width: "90%"}}></Box>
            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}