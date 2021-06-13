import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({
      root:{
            backgroundColor:'white'
      },
      subHeadingGrid:{
            margin:'0px 30px'
      },
      headerBtn:{
            color:'#626262',
            '&:hover':{
                  backgroundColor:'transparent',
                  color:'black',
            },
            '&:active':{
                  fontWeight:'bold'
            }
      }
    }));

export default function Navbar() {
      const classes = useStyles();
      return (
            <AppBar color='default' elevation={1} className={classes.root}>
                  <Toolbar>
                        <Grid md={2}>

                        </Grid>
                        <IconButton>
                              <AcUnitRoundedIcon/>
                        </IconButton>
                        <Typography variant='h5'>
                                    BRILLIANT
                        </Typography>

                        <Grid container md={3} justify='space-evenly' className={classes.subHeadingGrid} wrap='nowrap'> 
                        <Grid item>                        
                              <Button color='default' size='small' className={classes.headerBtn} disableRipple>
                              TODAY
                              </Button>
                        </Grid>
                        <Grid item>
                              <Button color='default' size='small' className={classes.headerBtn} disableRipple>
                              COURSES
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button color='default' size='small' className={classes.headerBtn} disableRipple>
                              PRACTICE
                        </Button>
                        </Grid>
                       

                         
                        </Grid>
                        <Grid md={3} container
  direction="row"
  justify="flex-end"
  alignItems="center">
                              <Button variant='outlined' color='primary' size='medium'>
                                    Log In
                              </Button>
                              <Button>
                                    Sign Up
                              </Button>
                        </Grid>
                        <Grid md={2}>

                        </Grid>
                       
                  </Toolbar>   
            </AppBar>
      )
}
