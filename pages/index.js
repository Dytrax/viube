import React, { useEffect, useState, useRef } from 'react';
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
import { gsap } from "gsap";

//Modal Imports
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import Logo from "../src/assets/Logo.png";


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

const useHover = (state) => {
  
  const [isHover, setHover] = useState(false);

  function toggleHover(state) {
    setHover(state);
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
      <DialogActions >
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
    height: 35,
    padding: '0 30px',
    margin: '10px'
  },
  blueButton: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 35,
    padding: '0 30px',
  },
  containerBar: {
    flexDirection: 'row',
    display: 'flex',
    marginRight: '2%'
  },
  bar: {
    backgroundColor: 'rgb(0,0,0)',
  },
  textTitle:{
    color: 'rgb(255,112,56)',
    textShadow:['0 0 7px rgb(155,112,56)',
      '0 0 10px rgb(200,112,56)',
      '0 0 21px rgb(0,0,0)',
      '0 0 42px rgb(0,0,0)',
      '0 0 82px rgb(0,0,0)',
      '0 0 92px rgb(0,0,0)',
      '0 0 102px rgb(0,0,0)',
      '0 0 151px rgb(255,112,56)'],
      
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
    color:'rgb(0,0,0)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    //marginTop: '10%',
    backgroundColor:'rgb(0,0,0)'
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
   boxShadow:'0 0 11px rgba(33,33,33,.9)',
   borderRadius: 3, 
  },
  noHover:{
    

  }
  
}));

const cards2 = [1];
const cards = [
  {
    id: 0,
    productName: 'Burguer Dante',
    price: 12000,
    urlVideo: 'https://www.youtube.com/watch?v=gTPz3J-BlLQ',
    urlWhatsApp: 'https://wa.link/vvnjo7',
    info:{
      title:'Burguer Dante',
      description:'Convencente que no has probado la mejor burgue del infierno mundo de dante, tu lengua seguro se derretira con el queso y nuestra salsa especial.'
    }
  },  
  {
    id: 1,
    productName: 'Protector Facial Rojo',
    price: 12000,
    urlVideo: 'https://www.youtube.com/watch?v=vvnja9dkvXw',
    urlWhatsApp: 'https://wa.link/vvnjo7',
    info:{
      title:'Bioseguridad Facial',
      description:'Este producto no se empaña, el amarre a su cabeza es simple y comodo, es un dispositivo para aumentar la seguridad en contacto cercano con personas.'
    }
  },
  {
    id: 2,
    productName: 'Protector Facial Rojo',
    price: 20000,
    urlVideo: 'https://www.youtube.com/watch?v=vvnja9dkvXw',
    urlWhatsApp: 'https://wa.link/vvnjo7',
    info:{
      title:'Bioseguridad Facial',
      description:'Este producto no se empaña, el amarre a su cabeza es simple y comodo, es un dispositivo para aumentar la seguridad en contacto cercano con personas.'
    }
  },
  {
    id: 3,
    productName: 'Protector Facial Rojo',
    price: 20000,
    urlVideo: 'https://www.youtube.com/watch?v=vvnja9dkvXw',
    urlWhatsApp: 'https://wa.link/vvnjo7',
    info:{
      title:'Bioseguridad Facial',
      description:'Este producto no se empaña, el amarre a su cabeza es simple y comodo, es un dispositivo para aumentar la seguridad en contacto cercano con personas.'
    }
  }
]

export default function MeCuidoHoy() {
  const { isShowing, toggle } = useModal();
  const { isHover, toggleHover } = useHover();
  const {idElement, toggleId} = useElementId();
 //console.log(isHover)
  /* var linkStyle;
  console.log(isHover)
   if (isHover) {
     linkStyle = {
       shadow:10
     }
   } else {
     linkStyle = {}
   } */
   // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
   /*  gsap.to(boxRef.current, { rotation: "+=360" }); */
  });
  const classes = useStyles();
  return (
    <React.Fragment >
     
      <CssBaseline />
      {/* <AppBar  style={{backgroundColor:'rgb(0,0,0)'}}>
        <Toolbar style={{backgroundColor:'rgb(0,0,0)'}} className={classes.bar}>
          <div  className={classes.containerBar}>
          <Typography variant="h4" ref={boxRef} className={classes.textTitle}>
                Mi) domi
          </Typography>
          <Health className={classes.icon} />
          <img src="/logo.png" alt="my image" style={{height:'40px'}}/>
          <Typography variant="h5" style={{color:'rgb(112,175,240)'}} noWrap>
            Viube #Salud
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div style={{backgroundColor:'rgb(255,0,0)',width:'100%',heigth:'200px'}}>
        d
        dddm
      </div>
      {/* <main style={{backgroundColor:'rgb(0,0,0)'}}> */}
        {/* <Modal
          isShowing={isShowing}
          hide={toggle}
        />
         */}
        <Container style={{backgroundColor:'rgb(0,0,0)'}} className={classes.cardGrid} /* maxWidth="md" */>
          
          <Grid container spacing={4}>
            {cards.map((card,index) => {
              return(
              <Grid item key={card.id.toString()} xs={12} sm={6} md={4}>
                <h1  className={classes.textTitle}>
                  {card.productName}
                </h1>
                <Card  //className={classes.card}
                className={isHover && idElement===card.id ? classes.hover : classes.noHover}
                /* onMouseOver={()=>{toggleHover(true)
                  toggleId(index)}} */
                /* onMouseOverCapture={()=>{toggleHover()
                  toggleId(index)}} */
                /* onMouseEnter={()=>{toggleHover()
                  toggleId(index)}} */
                  /* onClickCapture={()=>{toggleHover()
                    toggleId(index)}} */
                    /* onMouseLeave={()=>{toggleHover(false)}} */
                >
                  <div >
                    <div
                      width={'100%'}
                      height={'1000px'}
                      //url={card.urlVideo}
                      //controls={true}
                    />
                  </div>

                  <CardContent className={classes.cardContent} style={{
                    backgroundColor: 'rgb(40,44,54)',

                  }}
                  
                  >
                    
                    <Typography style={{ color: 'rgb(255,255,255)' }} //gutterBottom variant="h6" component="h1"
                   
                    >
                      {card.productName}
                    </Typography>
                    <div style={{ height: '2px', width: '100%', background: 'rgb(196,197,199)', marginBottom: '4px', marginTop: '4px' }}></div>
                    <Typography style={{ color: 'rgb(255,255,255)',fontSize:11.27 }} //gutterBottom variant="h6" component="h1"
                    
                    >
                      {card.info.description}
                    </Typography>
                    {isHover && idElement===card.id ? (<Typography 
                    style={{ color: 'rgb(163,252,241)',textDecoration:'line-through' }} //className={classes.colorIwant}
                   
                    >
                      {`Antes $ ${card.price + 9000}`}

                    </Typography>) : null}
                    
                    <Typography style={{ color: 'rgb(163,252,241)',fontSize:16.1}} //className={classes.colorIwant}
                  
                    >
                      {`Ahora $ ${card.price}`}

                    </Typography>

                  </CardContent>
                  <CardActions 
                  style={{ backgroundColor: 'rgb(40,44,54)',justifyContent:'center', alignItems:'center'}}
                 
                  >
                    <Button size="small" color="primary" href="https://wa.link/vvnjo7"
                      className={classes.blueButton}>
                      Conseguir
                    </Button>
                    {/* <Button className={classes.redButton}  color="primary" onClick={toggle}>
                    Informacion 
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            )})}
          </Grid>
        </Container>
{/*       </main>
 */}      <footer  style={{backgroundColor:'rgb(0,0,0)'}} className={classes.footer}>
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