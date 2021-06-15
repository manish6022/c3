import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles (theme => ({
  root:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '460px',
    padding: '44px 32px',
    border: '2px solid rgba(0, 0, 0, 0.14)',
    background: '#FFFFFF',
    '&:hover':{
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
},
  },
  img:{
    display: 'inline-block',
    width: '95%',
    height: '95%',
    backgroundPosition: 'center',
    backgroundeRepeat:' no-repeat',
    backgroundSize: 'contain',
    '&:hover':{
      color:'#ffffff',
      cursor:'default'
      
    }
    
  },
  imageDiv:{
    display: 'block',
    width: '254px',
    height: '244px',
    marginBottom: '44px',
    '&:hover':{
      color:'#ffffff',
      cursor:'default'
      
    }   
  },
  btnCourse:{
    width:'400px',
    height:'50px',
    backgroundColor:'black',
    color:'white',
    '&:hover':{
      backgroundColor:'#5D5D5D'
    }
  },
  divCardContentContainer:{
    display: 'flex',
    flexDirection: 'column-reverse',
    width: '50%'
  },
  cardContent:{
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  }
  
}))

export default function CourseCard() {
  const classes = useStyles();
      return (
            <Card className={classes.root} square>
            <CardActionArea className={classes.imageDiv} disableTouchRipple>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="240px"
                image='https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254'
                title="Contemplative Reptile"
                className={classes.img}
              />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <div className={classes.divCardContentContainer}>
              <Typography variant='subtitle1' color='textSecondary'>
              Interactive quizzes
              </Typography>
              <Typography variant="h4" color="textPrimary">
              30
              </Typography>
              </div>
              <div className={classes.divCardContentContainer}>
              <Typography variant="subtitle1" color="textSecondary">
              Concepts and exercises
              </Typography>
              <Typography variant="h4" color="textPrimary">
                270+
              </Typography>
              </div>
             
      </CardContent>
            <CardActions>
              <Button className={classes.btnCourse}>
                <Typography variant='subtitle2'>
                Start Course
                </Typography>
              </Button>
              
            </CardActions>
          </Card>
      )
}
