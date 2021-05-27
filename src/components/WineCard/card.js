import React from "react";
import { Grid, Paper, Typography, Avatar, Button,Hidden } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

function Card() {
  const Vines = [
    {
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },{
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },{
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },{
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },{
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },{
      img: "https://images.vivino.com/thumbs/9gx-TV5tTOivI0OUtcnO1w_pb_x600.png",
      name: "Vindana",
      title: "Keeper of the Stones Shiraz 2015",
      address: " Red wine from Barossa Valley · Australia",
      rating: 4.5,
      ratingCount: 25,
      amount: 79.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
    {
      img: "https://images.vivino.com/thumbs/DgA7-IECSF6gx7yxipE6JQ_pb_x600.png",
      name: "Taylors / Wakefield",
      title: " St. Andrews Shiraz 2017 ",
      address: " Red wine from Barossa Valley · Australia",
      rating: 3.5,
      ratingCount: 25,
      amount: 66.17,
      icon: 1,
      review: "Among top 3% of all wines in the world",
    },
   
  ];
  return (
    <Grid container>
      {Vines.map((v) => (
        <Paper
          elevation={0}
          style={{
            margin:"0px 0px 15px 0px",
            padding: 0,
            borderRadius: 5,
            boxShadow: "1px 1px 5px 1px #e3d9d8",
          }}
        >
          <Grid
            container
            direction="row"
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              
              item
              xl={2}
              lg={2}
              md={2}
              sm={12}
              xs={12}
             
             
              
            ><Hidden smDown>
              <Grid container alignItems="center"
              justify="flex-start" style={{
                borderRadius: 10,
                margin:"5px 5px 5px 5px", 
                              
              }}>
              <img src={v.img} height="240px" style={{
                background: "#E7DCD1",
                padding:"5px 25px 5px 25px",
                borderRadius: 10,
                               
              }}/></Grid></Hidden>
              <Hidden mdUp>
              <Grid container alignItems="center"
              justify="center" style={{
                borderRadius: 10,
                background: "#E7DCD1",

              }}>
              <img src={v.img} height="240px" style={{
                background: "#E7DCD1",
                padding:"5px 40px 5px 40px",
                borderRadius: 10,
                               
              }}/></Grid></Hidden>
            </Grid>
            <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
              <Grid
                container
                direction="column"
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  background: "",
                }}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid container direction="row">
                    <Grid 
                      item 
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      style={{
                        background: "",
                      }}
                    >
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                          padding: "12px 0px 0px 12px",
                          color: "grey",
                        }}
                      >
                        {v.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                        style={{
                          fontSize: 14,
                          fontWeight: 550,
                          padding: "0px 0px 0px 12px",
                          color: "black",
                        }}
                      >
                        {v.title}
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        style={{
                          padding: "0px 0px 0px 12px",
                        }}
                      >
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png"
                          />
                        </Grid>
                        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                          {" "}
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              paddingLeft: 20,
                              color: "",
                            }}
                          >
                            {v.address}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      style={{
                        background: "#FAFAFA",
                        margin: "20px 0px 20px 0px",
                        padding: "20px 20px 20px 20px",
                      }}
                      spacing={2}
                    >
                      <Grid
                        container
                        
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        direction="row"
                      >
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png"
                            style={{
                              background: "yellow",
                              height: 25,
                              width: 25,
                            }}
                          />
                        </Grid>
                        <Grid
                          
                          item
                          xl={11}
                          lg={11}
                          md={11}
                          sm={11}
                          xs zeroMinWidth
                        >
                          {" "}
                          <Typography 
                            variant="caption"
                            display="block"
                            gutterBottom
                            
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              paddingLeft: 20,
                              color: "",
                            }}
                          >
                            {v.review}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid container direction="row">
                    <Grid
                      item
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      style={{
                        background: "",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        style={{
                          padding: "0px 0px 0px 12px",
                        }}
                      >
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <Typography
                            variant="caption"
                            display=""
                            gutterBottom
                            style={{
                              fontSize: 45,
                              fontWeight: 0,
                              padding: "0px 0px 0px 12px",
                              marginTop: 50,
                            }}
                          >
                            {v.rating}
                          </Typography>
                          <Rating
                            name="size-small"
                            defaultValue={v.rating}
                            precision={0.5}
                            size="small"
                            readOnly
                            style={{
                              padding: "0px 0px 0px 12px",
                              color: "#A61A30",
                            }}
                          />
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              padding: "0px 0px 0px 12px",
                              color: "",
                              marginTop: -8,
                            }}
                          >
                            {v.ratingCount} ratings
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          item
                          alignItems="center"
                          justify="center"
                          xl={6}
                          lg={6}
                          md={6}
                          sm={6}
                          xs={6}
                        >
                          {" "}
                          <Button
                            style={{
                              fontSize: 22,
                              fontWeight: 600,
                              padding: "3px 12px 3px 12px",
                              color: "white",
                              background: "#02A78B",
                              borderRadius: 25,
                              height: 50,
                              width: 150,
                            }}
                          >
                            {" "}
                            $ {v.ratingCount}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xl={6}
                      lg={6}
                      md={6}
                      sm={6}
                      xs={12}
                      style={{
                        background: "",
                      }}
                    ></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Grid>
  );
}
export default Card;
