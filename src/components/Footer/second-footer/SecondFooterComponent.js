import React from "react";
// import "./styles.css";
import { Grid } from '@material-ui/core';

const Elements = [
  { elem: "App" },
  { elem: "About" },
  { elem: "Contact" },
  { elem: "Press" },
  { elem: "Wine News" },
  { elem: "Wine Style Awards" },
  { elem: "Merchants" },
  { elem: "Sponsorships" },
  { elem: "Become an Affiliate" },
  { elem: "Jobs" },
  { elem: "Terms of Use" },
  { elem: "Privacy Policy" },
  { elem: "Content Policy" },
  { elem: "Terms of Sale" },
  { elem: "Sitemap" },
]

function SecondFooterComponent() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#eae0da", padding: 30 }}
    >
      <Grid item container xs={12} sm={4} direction="row"
        justify="center"
        alignItems="center">
        <img src="./images/app-store.svg" className="image-show" alt="" style={{ paddingRight: 10 }} />
        <img src="./images/google-play.svg" className="image-show" />
      </Grid>

      <Grid item container xs={12} sm={4}>

      </Grid>

      <Grid item container xs={12} sm={4} direction="row"
        justify="flex-start"
        alignItems="flex-start">
        <Grid xs={12} sm={12}>
          <img src="./images/visa-icon.svg" className="image-show" style={{ paddingRight: 5 }} alt="" />
          <img
            src="./images/american-express-icon.svg"
            className="image-show"
            style={{ paddingRight: 5 }} alt=""
          />
          <img
            src="./images/master-card-icon.svg"
            className="image-show"
            style={{ paddingRight: 5 }} alt=""
          />
          <img
            src="./images/discover-icon.svg"
            className="image-show"
            style={{ paddingRight: 5 }} alt=""
          />
          <img src="./images/ipay-icon.svg" className="image-show" style={{ paddingRight: 5 }} alt="" />
          <img
            src="./images/google-pay-icon.svg"
            className="image-show"
            style={{ paddingRight: 5 }} alt=""
          />
          <img src="./images/paypal-icon.svg" className="image-show" style={{ paddingRight: 5 }} alt="" />
        </Grid>
        <Grid item container direction="row"
          justify="flex-end"
          alignItems="center" xs={12} sm={12}
          style={{ paddingRight: 90 }}
        >
          Payment options will vary by merchant
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
        xs={12} sm={12}
        style={{ paddingTop: 30 }}
      >
        <Grid items container justify="center" direction="row"
          alignItems="flex-start" xs={1} sm={1}>
          <img src="./images/footer-sitemap.svg" className="image-sitemap" style={{ width: 22 }} />
        </Grid>

        <Grid items container direction="row" justify="flex-start"
          alignItems="flex-start" xs={9} sm={9}>
          {Elements.map(e => (
            <Grid items xs={5} sm="auto" style={{ paddingRight: 20 }}>
              {e.elem}
            </Grid>
          ))}
        </Grid>

        <Grid items container justify="flex-start" direction="row"
          alignItems="flex-start" xs={12} sm={2}>
          <img src="./images/instagram.svg" className="image-show" alt="" style={{ paddingRight: 15 }} />
          <img src="./images/facebook.svg" className="image-show" alt="" style={{ paddingRight: 15 }} />
          <img src="./images/twitter.svg" className="image-show" alt="" />
        </Grid>

      </Grid>

      {/* <div >
        <div>
          <div >
            <div>
              <div>
                <img src="./images/app-store.svg" className="image-show" />
                <img src="./images/google-play.svg" className="image-show" />
              </div>
            </div>
            <div >
              <div>
                <div>
                  <img src="./images/visa-icon.svg" className="image-show" />
                  <img
                    src="./images/american-express-icon.svg"
                    className="image-show"
                  />
                  <img
                    src="./images/master-card-icon.svg"
                    className="image-show"
                  />
                  <img
                    src="./images/discover-icon.svg"
                    className="image-show"
                  />
                  <img src="./images/ipay-icon.svg" className="image-show" />
                  <img
                    src="./images/google-pay-icon.svg"
                    className="image-show"
                  />
                  <img src="./images/paypal-icon.svg" className="image-show" />
                </div>
                <div>
                  Payment options will vary by merchant
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="./images/footer-sitemap.svg" className="image-sitemap" />
            <div>
              <a className="sitemap-one-element" title="App">
                App
              </a>
              <a className="sitemap-one-element" title="About">
                About
              </a>
              <a className="sitemap-one-element" title="Contact">
                Contact
              </a>
              <a className="sitemap-one-element" title="Press">
                Press
              </a>
              <a className="sitemap-one-element" title="Wine News">
                Wine News
              </a>
              <a className="sitemap-one-element" title="Wine Style Awards">
                Wine Style Awards
              </a>
              <a className="sitemap-one-element" title="Merchants">
                Merchants
              </a>
              <a className="sitemap-one-element" title="Sponsorships">
                Sponsorships
              </a>
              <a className="sitemap-one-element" title="Become an Affiliate">
                Become an Affiliate
              </a>
              <a className="sitemap-one-element" title="Jobs">
                Jobs
              </a>
              <a className="sitemap-one-element" title="Terms of Use">
                Terms of Use
              </a>
              <a className="sitemap-one-element" title="Privacy Policy">
                Privacy Policy
              </a>
              <a className="sitemap-one-element" title="Content Policy">
                Content Policy
              </a>
              <a className="sitemap-one-element" title="Terms of Sale">
                Terms of Sale
              </a>
              <a className="sitemap-one-element" title="Sitemap">
                Sitemap
              </a>
            </div>
            <div>
              <img src="./images/instagram.svg" className="image-show" />
              <img src="./images/facebook.svg" className="image-show" />
              <img src="./images/twitter.svg" className="image-show" />
            </div>
          </div>
        </div>
      </div> */}
    </Grid>
  );
}

export default SecondFooterComponent;