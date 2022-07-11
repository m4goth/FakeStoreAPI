import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import "../../components/Login/Login";
import { Divider } from '@mui/material';
import Products from '../Produtos/Produtos';
import ProdutosList from '../ProdutosList/ProdutosList';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://github.com/m4goth/FakeStoreAPI">
//         M4goth and Andersou
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* cabeçalho */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Fake Store
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Produtos
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Suporte
            </Link>
          </nav>
          {/* botão login, fazer o router para o botão ser interagivel, component Login.jsx */}
          <Button href="./Login/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Entrar
          </Button>
        </Toolbar>
      </AppBar>
      {/* Conteúdo do site */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        {/* titulo e biografia */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Store
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Blá blá blá
        </Typography>
      </Container>

      <Divider />

      {/* conteudo da api */}

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src={Products.image}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Products.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Price: ${Products.price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );

      {/* linhda da interface */}
      {/* <Container maxWidth="md" component="main">
      </Container> */}

      {/* container copyright */}
      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container> */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}