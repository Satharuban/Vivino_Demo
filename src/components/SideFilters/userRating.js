import React from "react";
import { Grid, Typography,Radio ,RadioGroup , FormControlLabel,  } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import './useRating.css'
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
    },
   
]

function WineType() {
    const [value, setValue] = React.useState('female');

   
    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
          Vivino User Rating
        </Typography>
      </Grid>
      <Grid item>
      {Ratings.map((r) => (    <label  class="container" >
        <Grid
          container
          direction="row"
          spacing={2}
          style={{
            fontSize: 20,
            fontWeight: 700,
            padding: "0px 0px 0px 38px",
            color: "black",
          }}
        >
     
     
         
          <input type="radio" checked={r.number} name="radio"
          
        
          />
              <Rating
                name="size-small"
                defaultValue={r.number}
                precision={0.5}
                size="small"
                readOnly
                style={{
                  padding: "0px 0px 0px 0px",
                  margin: "0px 0px 0px -30px",
                  color: "#A61A30",
                  fontSize:16
                }}
              />
              <Typography
                variant="caption"
                display=""
                gutterBottom
                style={{
                  fontSize: 14,
                  fontWeight: 550,
                  padding: "0px 0px 0px 12px",
                }}
              >
                {r.number}
              </Typography>

              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  padding: "0px 0px 0px 12px",
                  color: "",
                }}
              >
                {r.rating}
              </Typography> 
            
 
              <span class="checkmark"></span>
        </Grid></label>
      ))}
       <label  class="container" >
       <input type="radio" checked={"a"} name="radio"/> <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  padding: "0px 0px 0px 2px",
                  color: "",
                }}
              >
                Any rating
              </Typography>   <span class="checkmark"></span></label>
      </Grid>
    </Grid>
  );
}

export default WineType;
