import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CourseCard from '../Components/CourseCard'
import Heading from '../Components/Heading'
import PuzzleCard from '../Components/PuzzleCard'

const useStyles = makeStyles(theme =>({
      root:{
            backgroundColor:'#F8F8F8',
            height:'70vh'
      },
      container:{
            padding:'4vw 20vw'
      },
      textMarginBottom:{
            marginBottom:'25px'
      },
      textMarginTop:{
            marginTop:'20px'
      },
      sectionCourse:{
            backgroundColor:'#ffffff'
      }
}))



export default function Course() {
      const classes = useStyles();

      return (<>
            <section className={classes.root}>
            <div className={classes.container}>
                        <Grid container direction='row' justify='center' spacing={5}>
                        <Grid item md={7} >
                        <Typography variant='h2' className={`${classes.textMarginBottom} ${classes.textMarginTop}`} style={{fontWeight:'bold'}}>
                              Logic
                        </Typography>
                        <Typography variant='h5' component='p' className={classes.textMarginBottom}>
                        Stretch your analytic muscles with knights, knaves, logic gates, and more!
                        </Typography>
                        <Typography variant='h6' color="textSecondary" component='p' className={classes.textMarginBottom}>
                        The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component='p' className={classes.textMarginBottom}>
                        You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!
                        </Typography>
                        
                  </Grid>
                  <Grid item md={5}>
                        <CourseCard />
                  </Grid>
            </Grid>
            </div>

            </section>
            <section className={`${classes.sectionCourse} ${classes.container}`}>
                  <Heading number='1' title='Introduction' subTitle='Put your logic to the test with these warmups!'/>
                  <PuzzleCard img='https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png' heading='Warmup Puzzles' subtitle='Get started with some logic warmups.'/>
            </section>
            </>
            
      )
}
