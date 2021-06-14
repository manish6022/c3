import { AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({
      root:{
            backgroundColor:'white'
      },
      headerBtn:{
            color:'#626262',
            margin:'0 15px',
            '&:hover':{
                  backgroundColor:'transparent',
                  color:'black',
            },
            '&:active':{
                  fontWeight:'bold'
            }
      },
      accountBtn:{
            display:'inline-block',
            margin:'0px 10px',
            textTransform:'none',
            minWidth:'150px',
            whiteSpace:'nowrap',
            '&:hover':{
                  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
            },
            '@media (max-width: 1000px)':{
                  minWidth:'80px'
            }
      },
      loginBtn:{
            color:'#039BE5',
            border:'solid 1px #039BE5',
            '&:hover':{
                 backgroundColor:'transparent'
            }
      },
      signupBtn:{
            backgroundColor:'#039BE5',
            '&:hover':{
                  backgroundColor:'#0c61bf'
             }
      },
      divBlock:{
           display:'inline-block',
           width:'300px',
           '@media (max-width: 1170px)':{
                 display:'flex',
                 width:'150px'
           },
           '@media (max-width: 820px)':{
            maxWidth:'50px'
      },

      },
      firstTextBtn:{
            marginLeft:'5vw'
      }

    }));

export default function Navbar() {
      const classes = useStyles();
      return (
            <AppBar position='sticky' color='default' elevation={1} className={classes.root} style={{alignItems:'center'}}>
                  <Toolbar >
                  

                        <IconButton disableRipple>
                              <AcUnitRoundedIcon/>
                        </IconButton>
                        <Typography variant='h5'>BRILLIANT</Typography>
                                    <Button color='default' size='small' className={`${classes.headerBtn} ${classes.firstTextBtn}`} disableRipple>
                                    TODAY
                                    </Button>
                                    <Button color='default' size='small' className={classes.headerBtn} disableRipple>
                                          COURSES
                                    </Button>
                                    <Button color='default' size='small' className={classes.headerBtn} disableRipple>
                                          PRACTICE
                                    </Button>
                                    <div className={classes.divBlock}>

                                    </div>
                                    <Button variant='outlined' className={`${classes.accountBtn} ${classes.loginBtn}`}>
                                          Log In
                                          </Button>
                                          <Button className={`${classes.accountBtn} ${classes.signupBtn}`} color='primary' variant='contained'>
                                                Sign Up
                                          </Button>  

                  </Toolbar>   
            </AppBar>
      )
}
