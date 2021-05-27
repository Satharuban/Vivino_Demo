import React from "react";
import { Grid, Typography } from '@material-ui/core';

function TopFooterComponent() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{padding:50}}
    >
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={12} sm={12} md={12} lg={12}
      >

        <Typography style={{fontWeight:700, fontSize:24, paddingBottom:20}}>
          Trusted by millions to discover and buy the right wine every time.
        </Typography>

      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={12} sm={6} md={6} lg={3}
      >
        <Grid xs={2} sm={4} md={2} lg={2}>
          <img src="./images/footer-element-one.svg" />
        </Grid>
        <Grid xs={10} sm={8} md={10} lg={10}>
          <Typography>Shop the world’s largest wine marketplace</Typography>
        </Grid>

      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12} sm={6} md={6} lg={3}
      >

        <Grid xs={2} sm={4} md={2} lg={2}>
          <img src="./images/footer-element-two.svg" />
        </Grid>
        <Grid xs={10} sm={8} md={10} lg={10}>
          <Typography>Our support team is always here to help</Typography>
        </Grid>

      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12} sm={6} md={6} lg={3}
      >

        <Grid xs={2} sm={4} md={2} lg={2}>
          <img src="./images/footer-element-three.svg" />
        </Grid>
        <Grid xs={10} sm={8} md={10} lg={10}>
          <Typography>Careful delivery right to your doorstep</Typography>
        </Grid>

      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12} sm={6} md={6} lg={3}
      >

        <Grid xs={2} sm={4} md={2} lg={2}>
          <img src="./images/footer-element-four.svg" />
        </Grid>
        <Grid xs={10} sm={8} md={10} lg={10}>
          <Typography>Check honest reviews of any wine before purchase</Typography>
        </Grid>

      </Grid>

    </Grid>
    // <div className="col-md-12">
    //   <div className="row">
    //     <div className="footer-main-div">
    //       <div className="footer-main-text">
    //         Trusted by millions to discover and buy the right wine every time.
    //       </div>
    //       <div className="row footer-elements">
    //         <div className="col-md-3">
    //           <TopFooterOneElement
    //             photo_icon="./images/footer-element-one.svg"
    //             one_element_text="Shop the world’s largest wine marketplace"
    //           ></TopFooterOneElement>
    //         </div>
    //         <div className="col-md-3">
    //           <TopFooterOneElement
    //             photo_icon="./images/footer-element-two.svg"
    //             one_element_text="Our support team is always here to help"
    //           ></TopFooterOneElement>
    //         </div>
    //         <div className="col-md-3">
    //           <TopFooterOneElement
    //             photo_icon="./images/footer-element-three.svg"
    //             one_element_text="Careful delivery right to your doorstep"
    //           ></TopFooterOneElement>
    //         </div>
    //         <div className="col-md-3">
    //           <TopFooterOneElement
    //             photo_icon="./images/footer-element-four.svg"
    //             one_element_text="Check honest reviews of any wine before purchase"
    //           ></TopFooterOneElement>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default TopFooterComponent;