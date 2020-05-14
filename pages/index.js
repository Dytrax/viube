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

const useHover = () => {
  
  const [isHover, setHover] = useState(false);

  function toggleHover() {
    setHover(!isHover);
  }

  return {
    isHover,
    toggleHover
  }
}
const useElementId = (id) => {
 
  const [idElement, setId] = useState('');

  function toggleId(id) {
    setId(id);
  }

  return {
    idElement,
    toggleId,
  }
}

/*  :hover: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    }, */
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
        ></Button>
        <Button className={classes.blueButton} onClick={hide}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles((theme) => ({
  colorBar: { height: '3px', width: '100%', color: '216,106,42' },
  colorIwant: { color: '#ff6f00' },
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
  hover:{
   boxShadow:'0 0 11px rgba(33,33,33,.9)'

  },
  noHover:{
    

  }
  
}));

const cards2 = [1];
const cards = [
  {
    id: 0,
    productName: 'Bioseguridad Facial',
    price: '$ 12K',
    urlVideo: 'https://www.youtube.com/watch?v=gTPz3J-BlLQ',
    urlWhatsApp: 'https://wa.link/vvnjo7'
  },
  {
    id: 1,
    productName: 'Protector Facial Rojo',
    price: '$ 12K',
    urlVideo: 'https://www.youtube.com/watch?v=vvnja9dkvXw',
    urlWhatsApp: 'https://wa.link/vvnjo7'
  }
]

export default function MeCuidoHoy() {
  const { isShowing, toggle } = useModal();
  const { isHover, toggleHover } = useHover();
  const {idElement, toggleId} = useElementId();
 
  /* var linkStyle;
  console.log(isHover)
   if (isHover) {
     linkStyle = {
       shadow:10
     }
   } else {
     linkStyle = {}
   } */
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar className={classes.bar}>
          {/* <div  className={classes.containerBar}> */}
          <Health className={classes.icon} />
          <Typography variant="h5" color='primary' noWrap>
            Cuidamos de tu salud
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
            {cards.map((card,index) => {
              return(
              <Grid item key={card.id.toString()} xs={12} sm={6} md={4}>
                <Card  //className={classes.card}
                className={isHover && idElement===card.id ? classes.hover : classes.noHover}
                
                onMouseEnter={()=>{toggleHover()
                  toggleId(index)}}
                onMouseLeave={()=>{toggleHover()}}
                >
                  <div >
                    <ReactPlayer
                      width={'100%'}
                      height={'200px'}
                      url={card.urlVideo}
                      controls={true}
                    />
                  </div>

                  <CardContent className={classes.cardContent} style={{
                    backgroundColor: 'rgb(40,44,54)',

                  }}>
                    <Typography style={{ color: 'rgb(255,255,255)' }} //gutterBottom variant="h6" component="h1"
                    >
                      {card.productName}
                    </Typography>
                    <div style={{ height: '2px', width: '100%', background: 'rgb(196,197,199)', marginBottom: '4px', marginTop: '4px' }}></div>
                    <Typography style={{ color: 'rgb(163,252,241)' }} //className={classes.colorIwant}
                    >
                      {card.price}

                    </Typography>

                  </CardContent>
                  <CardActions style={{ backgroundColor: 'rgb(40,44,54)' }}>
                    <Button size="small" color="primary" href="https://wa.link/vvnjo7"
                      className={classes.blueButton}>
                      Comprar
                    </Button>
                    <Button className={classes.redButton} size="small" color="primary" onClick={toggle}>
                      Más info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )})}
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