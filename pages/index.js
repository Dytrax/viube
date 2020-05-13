import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Health from '@material-ui/icons/LocalHospital';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ReactPlayer from "react-player"
//Modal Imports
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Viube
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}
function Modal({ isShowing, hide }) {
  const classes = useStyles();
  return (
    <Dialog
      open={isShowing}
      onClose={hide}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Registrarme</DialogTitle>
      <DialogContent>
        <DialogContentText color={"error"}>{}</DialogContentText>
        <DialogContentText>
          Datos de venta al por mayor
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
        >Registrarme</Button>
        <Button className={classes.blueButton} onClick={hide}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles((theme) => ({
  colorRed: { color: 'rgb(195,195,50)' },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  redButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '10px'
  },
  blueButton: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  containerBar: {
    flexDirection: 'row',
    display: 'flex',
    marginRight: '2%'
  },
  bar: {
    backgroundColor: 'rgb(255,255,255)'
  },
  icon: {
    marginRight: theme.spacing(2),
    color: 'rgb(113,175,228)'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    //padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),

  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginTop: '10%'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards2 = [1];
const cards = [
  {
    id: 0,
    productName: 'Bioseguridad Facial',
    price: '$12K',
    urlVideo: 'https://www.youtube.com/watch?v=gTPz3J-BlLQ',
    urlWhatsApp: 'https://wa.link/vvnjo7'
  },
  {
    id: 1,
    productName: 'Protector Facial Rojo',
    price: '$12K',
    urlVideo: 'https://www.youtube.com/watch?v=vvnja9dkvXw',
    urlWhatsApp: 'https://wa.link/vvnjo7'
  }
]

export default function MeCuidoHoy() {
  const { isShowing, toggle } = useModal();
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar className={classes.bar}>
          {/* <div  className={classes.containerBar}> */}
          <Health className={classes.icon} />
          <Typography variant="h6" color='primary' noWrap>
            Te cuidamos hoy.
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <div >
                    <ReactPlayer
                      width={'100%'}
                      height={'200px'}
                      url={card.urlVideo}
                      controls={true}
                    />
                  </div>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.productName}
                    </Typography>
                    <Typography>
                      {card.price}

                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://wa.link/vvnjo7">
                      Lo quiero
                    </Button>
                    <Button size="small" color="primary" onClick={toggle}>
                      Info al por mayor
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Viube, vive la experiencia
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}