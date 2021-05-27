import React from "react";
import "./App.css";
import TopBar from "./components/Header/TopBar";
import NavBar from "./components/Header/navBar";

import SecondBar from "./components/Header/BottomBar";
import TopFooter from "./components/Footer/top-footer/TopFooterComponent";
import SecondFooter from "./components/Footer/second-footer/SecondFooterComponent";
import DropDownProvider from "./providers/DropDownProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-slider/assets/index.css";
// import TopNav from './components/Navbar/TopNav';
import Wine from "./components/WineCard/card";
import SideFilter from "./components/SideFilters/wineTypes";
import PriceRange from "./components/SideFilters/priceRange";
import UserRating from "./components/SideFilters/userRating";
import Grapes from "./components/SideFilters/Grapes";
import Regions from "./components/SideFilters/Regions";
import Countries from "./components/SideFilters/contries";
import WineStyles from "./components/SideFilters/wineStyles";
import FoodPairings from "./components/SideFilters/foodPairings";
import Sort from "./components/SortLayout/sort"
import { Grid, Hidden } from "@material-ui/core";
// import FilterDrawer from "./components/Filters/FilterDrawer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FAFAFA" }}>
      <DropDownProvider>
        {/* <TopBar /> */}
        <NavBar />
        {/* <SecondBar /> */}
        <Grid container direction="row" spacing={0} style={{  }}>
        <Hidden smDown>
          <Grid
            item
            container
            xl={10}
            lg={10}
            md={10}
            sm={12}
            xs={12}
            direction="column"
            style={{ background: "" }}
            spacing={7}
          >
            
          </Grid></Hidden>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
          <br/><br/>
            <Sort/>
            <br/><br/>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={0} style={{ paddingLeft: 80,paddingRight:40 }}>
        <Hidden smDown>
          <Grid
            item
            container
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            direction="column"
            style={{ background: "" }}
            spacing={0}
          >
            <Grid item  >
              <SideFilter />
            </Grid>
            <br/><br/>
            <Grid item>
              <PriceRange />
            </Grid><br/><br/>
            <Grid item>
              <UserRating />
            </Grid><br/><br/>
            <Grid item>
              <Grapes />
            </Grid><br/><br/>
            <Grid item>
              {" "}
              <Regions />
            </Grid><br/><br/>
            <Grid item>
              {" "}
              <Countries />
            </Grid><br/><br/>
            <Grid item>
              {" "}
              <WineStyles />
            </Grid><br/><br/>
            <Grid item>
              {" "}
              <FoodPairings />
            </Grid><br/><br/>
          </Grid></Hidden>
          <Grid     item xl={8} lg={8} md={8} sm={12} xs={12} >
            <Wine />
          </Grid>
        </Grid>

        <TopFooter />
        <SecondFooter />
      </DropDownProvider>
      {/* <FilterDrawer /> */}
    </div>
  );
}

export default App;
