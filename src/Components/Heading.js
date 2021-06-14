import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Heading(props) {
      const{number,title,subTitle} = props
      return (
            <>
               <Grid container alignItems='center' justify='center' spacing={3}>
                     <Grid item>
                        
                              <Typography variant="h5" color="primary" >{number}</Typography>
                        
                           </Grid>
                     <Grid item xs container direction='column'>
                     <Grid item>                             
                        <Typography variant="h5" color="textPrimary" >{title}</Typography>
                        </Grid>
                     <Grid item>
                     <Typography variant="h6" color="textSecondary" >{subTitle}</Typography>
                     </Grid>
                     </Grid>
               </Grid>   
            </>
      )
}
