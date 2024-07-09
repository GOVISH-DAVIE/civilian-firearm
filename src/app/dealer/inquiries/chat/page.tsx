import { Send } from "@mui/icons-material";
import { Box, OutlinedInput, Card, CardActions, CardContent, Grid, IconButton, ListItemText, Typography } from "@mui/material";

export default function DealerChat (){
    return <Box p={1}>
              <Typography variant="h6">
                Request for Trad-In 
            </Typography> 
            <Typography variant="body2" >
                G3 - <b>Srn:</b> 1234556 - <b>KSH</b> 40,0000
            </Typography>
        <Grid container>
        <Card sx={{p:1}}>
        <Grid container>
          <Grid item sm={12}>
            <Grid item sm={6}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  I offer KSH 300,000
                </CardContent>
                <CardActions>
                  <ListItemText primary="@Jane wanjiku"
                    secondary="12-01-2024 3:00pm" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container mt={1} sm={12}>
            <Grid item sm={6} />
            <Grid item sm={6}>
              <Card sx={{
                backgroundColor:"white"
              }}>
                <CardContent sx={{ p: 3 }}>
                  Kindly Update your documents
                </CardContent>
                <CardActions>
                  <ListItemText primary="@you"
                    secondary="12-01-2024 3:00pm" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container mt={1} sm={12}>
            <OutlinedInput multiline
              maxRows={10}
              id="address1"
              name="address1"
              type="address1"
              endAdornment={
                <IconButton aria-label="delete">
                  <Send />
                </IconButton>
              }
              placeholder="Write a response"
              required
            />

          </Grid>

        </Grid>
      </Card>
      


        </Grid>



    </Box>
}