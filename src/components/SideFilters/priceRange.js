import React from "react";
import { Grid, Slider, Typography } from "@material-ui/core";
function valuetext(value) {
    return `${value}°C`;
  }
function WineType() {
    const [value, setValue] = React.useState([20, 80]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Grid container direction="column" spacing={2}   >
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
             Price Range
            </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row"   justify="center"
  alignItems="center"  spacing={2}>
      {valuetext}
        <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        
        style={{
            fontSize: 20,
            fontWeight: 700,
            margin: "12px 20px 0px 20px",
            color: "#BA1628",
            
          }}
      />
        </Grid>
      </Grid>
      
    </Grid>
  );
}

export default WineType;
