import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Image from '../images/climbingheroimage.jpg'

export const HeroImage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMobile)

    return (
        isMobile ? <p> Mobile yo</p> : 
        <Box>
            <Box sx={{ textAlign: 'center', paddingTop: 10, height: '600px', backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
                <Typography variant='h3' sx={{ fontWeight: '700', pt: 10, pr: 4, color: 'white'}}> Climbing Instructing and Coaching</Typography>

            </Box>
       </Box>


    )
}