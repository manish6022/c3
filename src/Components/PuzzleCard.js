import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyle = makeStyles(theme => ({
      root:{
            '&:hover':{
                  boxShadow: '16px 8px 16px 8px rgba(0,0,0,0.2)'
      },
      img:{
            flex: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '280px',
            height: '168px',
            marginBottom: '24px',
            backgroundColor: '#E7E7E9',
            color: 'rgba(0, 0, 0, 0.4)',
            fontSize: '18px',
            lineHeight: '24px'
      },
      imageContainer:{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            height: '100%',
            padding: '24px 24px',
            border: '2px solid rgba(0, 0, 0, 0.14)',
            background: '#FFFFFF',
            transition: 'border-color 100ms linear, box-shadow 100ms linear',
            zIndex: 1,
      }
}
}))

export default function PuzzleCard(props) {
      const classes = useStyle();
      const {img, heading,subtitle} = props
      return (
            <Card square className={classes.root}>
                  <div className={classes.imageContainer}>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="240px"
                        image={img}
                        title="Contemplative Reptile"
                        className={classes.img}
                        />
                  </div>
                  
                  
                        <CardContent>
                              <Typography gutterBottom variant="h6" >
                                   {heading}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                    {subtitle}
                              </Typography>                        
                        </CardContent>
                  
            </Card>
      )
}
