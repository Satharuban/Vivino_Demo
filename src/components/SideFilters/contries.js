import React from "react";
import { Grid, Typography,InputBase,Input } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const Ratings=[
    {
        number:"4.5",
        rating:"Rare & extraordinary"
    },
    {
        number:"4.0",
        rating:"Very good stuff"
    },
    {
        number:"3.5",
        rating:"Good stuff"
    },
    {
        number:"3.0",
        rating:"Average"
    },  {
        number:"4.5",
        rating:"Rare & extraordinary"
    },
    {
        number:"4.0",
        rating:"Very good stuff"
    },
    {
        number:"3.5",
        rating:"Good stuff"
    },
    {
        number:"3.0",
        rating:"Average"
    },
]

function WineType() {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{
            fontSize: 20,
            fontWeight: 700,
            padding: "12px 0px 0px 12px",
            color: "black",
          }}
        >
         Contries
        </Typography>
        
          <span className="fa fa-search form-control-feedback"  style={{
            color:"grey"
          }}></span>
            <InputBase
      
        placeholder="Search countries"
        inputProps={{ 'aria-label': 'naked' }}
        style={{
            fontSize: 14,
            fontWeight: 300,
            padding: "12px 0px 0px 12px",
            color: "black",
          }}
      />
        
      

      </Grid>

      <Grid item> <Grid
          container
          direction="row"
          spacing={1}
          
        >
      {Ratings.map((r) => (   
       
         <Grid item>
         <button
              style={{
                padding: "2px 10px 2px 10px",
                fontSize: 13,
                fontWeight: 400,
                border: " 1px solid #BA1628",
                color: "#BA1628",
                backgroundColor: "white",
                borderRadius: 25,
                height: 35,
                width: "auto",
              }}
            >
              {r.rating}
            </button>
        </Grid>
        
      ))}</Grid>
      </Grid>
    </Grid>
  );
}

export default WineType;
