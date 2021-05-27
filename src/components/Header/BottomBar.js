import {forwardRef, useState, useContext } from 'react';
import {Dropdown, Collapse} from 'react-bootstrap';

import {DrawerContext}  from '../../providers/DrawerProvider';
import {DropDownContext}  from '../../providers/DropDownProvider';
import {Grid,Link} from '@material-ui/core';

function BottomBar() {

    const { setIsOpen, isOpen } = useContext(DrawerContext);

    const { show } = useContext(DropDownContext);

    const [offersCollapse, setOffersCollapse] = useState(false);

    const [grapesCollapse, setGrapesCollapse] = useState(false);

    const [pairingsCollapse, setPairingsCollapse] = useState(false);

    const [winesCollapse, setWinesCollapse] = useState(false);

    const [regionsCollapse, setRegionsCollapse] = useState(false);

    const [shipCollapse, setShipCollapse] = useState(false);

    const onClickWineFilter = function(){ 
       setIsOpen(true);
    }

    const secondNavBarLink = forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
    ));

    return (
      <div className="second_navbar">
         <div className="container">
           <ul className="nk-menu">
              <li className="nk-menu-item">
                  <Link href="#">Wines</Link>
              </li>
              <li className="nk-menu-item">
                <Dropdown>
                  <Dropdown.Toggle as={secondNavBarLink} id="dropdown-basic">
                      Pairings
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <h1>hello world</h1>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nk-menu-item">
                <Link href="#">Grapes</Link>
              </li>
              <li className="nk-menu-item">
                <Link href="#">Regions</Link>
                <div>
                    <h5>hellow rold</h5>
                </div>
              </li>
              <li className="nk-menu-item">
                <Link href="#">Awards</Link>
              </li>
            </ul>

            <Collapse in={show}>
              <div id="main-dropdown-collapse" className="app_mobile_dropdown">
                <div className="dropdown_wrapper">
                    <div className="app_mobile_navbar">
                          <Grid container xs={12} sm={12} style={{paddingTop:20}}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Wines</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="wines-collapse" style={{paddingLeft:100}} onClick={() => setWinesCollapse(!winesCollapse)}  aria-expanded={winesCollapse} className="col-md-9" ><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={winesCollapse}>
                        <div className="row" id="wines-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                                <div className="mt-3 sub_header">
                                  <a href="#">Red</a>
                                </div>
                                <li><a href="#">Australian Shiraz</a></li>
                                <li><a href="#">Top-notch Italian Barolo</a></li>
                                <li><a href="#">Burgundy Côte de Nuits Red</a></li>
                                <li><a href="#">Australian Pinot Noir</a></li>
                                <li><a href="#">Australian Bordeaux Blend</a></li>
                            </ul>
                            <ul className="list-unstyled offer_list">
                                <div className="mt-3 sub_header">
                                  <a href="#">White</a>
                                </div>
                                <li><a href="#">Australian Chardonnay</a></li>
                                <li><a href="#">Burgundy Côte de Beaune White</a></li>
                                <li><a href="#">Australian Sauvignon Blanc</a></li>
                                <li><a href="#">New Zealand Sauvignon Blanc</a></li>
                                <li><a href="#">Australian Riesling</a></li>
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Offers</Grid>
                            <Grid container xs={2} sm={2} href="#" className="text-muted" style={{paddingLeft:100}} aria-controls="offers-collapse" onClick={() => setOffersCollapse(!offersCollapse)}  aria-expanded={offersCollapse}><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={offersCollapse}>
                        <div className="row" id="offers-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                              <li><a href="#">Less than $15</a></li>
                              <li><a href="#">From $15 to $25</a></li>
                              <li><a href="#">From $25 to 450</a></li>
                              <li><a href="#">Over $50</a></li>
                              <li><a href="#">Reds on offer</a></li>
                              <li><a href="#">Whites on offer</a></li>
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Pairings</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="pairings-collapse" style={{paddingLeft:100}} onClick={() => setPairingsCollapse(!pairingsCollapse)}  aria-expanded={pairingsCollapse} className="text-muted"><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={pairingsCollapse}>
                        <div className="row" id="pairings-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                              <li><a href="#">Beef</a></li>
                              <li><a href="#">Lamb</a></li>
                              <li><a href="#">Veal</a></li>
                              <li><a href="#">Pork</a></li>
                              <li><a href="#">Game(deer, vension)</a></li>
                              <li><a href="#">Poultry</a></li>
                              <li><a href="#">Mushrooms</a></li>
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Grapes</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="grapes-collapse" style={{paddingLeft:100}} onClick={() => setGrapesCollapse(!grapesCollapse)} aria-expanded={grapesCollapse} className="text-muted"><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={grapesCollapse}>
                        <div className="row" id="grapes-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                              <li><a href="#">Cabernet Sauvignon</a></li>
                              <li><a href="#">Montepulciano</a></li>
                              <li><a href="#">Chardonnay</a></li>
                              <li><a href="#">Pinot Noir</a></li>
                              <li><a href="#">Malbec</a></li>
                              <li><a href="#">Sauvignon Blanc</a></li>
                              <li><a href="#">Shiraz/Syrah</a></li>
                              <li><a href="#">Zinfandel</a></li>
                              <li><a href="#">Nebbiolo</a></li>
                              <li><a href="#">Sangiovese</a></li>
                              <li><a href="#">Pinot Grigio</a></li>
                              <li><a href="#">Riesling</a></li>
                              <li><a href="#">Grauburgunder</a></li>
                              <li><a href="#">Tempranillo</a></li>
                              <li><a href="#">Primitivo</a></li>
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Regions</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="regions-collapse" style={{paddingLeft:100}} onClick={() => setRegionsCollapse(!regionsCollapse)} aria-expanded={regionsCollapse} className="text-muted"><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={regionsCollapse}>
                        <div className="row" id="regions-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                                  <div className="mt-3 sub_header">
                                    <a href="#">Germany</a>
                                  </div>
                                  <li><a href="#">Mosel</a></li>
                                  <li><a href="#">Pfalz</a></li>
                                  <li><a href="#">Rheingau</a></li>
                              </ul>
                              <ul className="list-unstyled offer_list">
                                  <div className="mt-3 sub_header">
                                    <a href="#">Italy</a>
                                  </div>
                                  <li><a href="#">Lugana</a></li>
                                  <li><a href="#">Piemonte</a></li>
                                  <li><a href="#">Tuscany</a></li>
                                  <li><a href="#">Puglia</a></li>
                              </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Awards</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="ship-collapse" style={{paddingLeft:100}}  className="text-muted"><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                    </div>
                    <div className="app_mobile_navbar">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Ship to</Grid>
                            <Grid container xs={2} sm={2} href="#" aria-controls="ship-collapse" style={{paddingLeft:100}} onClick={() => setShipCollapse(!shipCollapse)} aria-expanded={shipCollapse} className="text-muted"><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                      <Collapse in={shipCollapse}>
                        <div className="row" id="ship-collapse">
                          <div className="col-md-12">
                            <ul className="list-unstyled offer_list">
                              <li><a href="#">Australia</a></li>
                              <li><a href="#">Belgium</a></li>
                              <li><a href="#">Canada</a></li>
                              <li><a href="#">Denmark Noir</a></li>
                              <li><a href="#">France</a></li>
                              <li><a href="#">Germany</a></li>
                              <li><a href="#">Hong Kong</a></li>
                              <li><a href="#">Ireland</a></li>
                              <li><a href="#">Italy</a></li>
                              <li><a href="#">Monaco</a></li>
                              <li><a href="#">Netherlands</a></li>
                              <li><a href="#">Singapore</a></li>
                              <li><a href="#">Spain</a></li>
                              <li><a href="#">Sweden</a></li>
                              <li><a href="#">Switzerland</a></li>
                              <li><a href="#">United Kingdom</a></li>
                              <li><a href="#">United States</a></li>
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div className="app_mobile_navbar">
                      <div className="app_mobile_navbar_header">
                        <div className="clearfix">
                        <Grid container xs={12} sm={12}>
                            <Grid container xs={8} sm={8} className="col-md-9" >Language : <span className="text-muted">English</span></Grid>
                            <Grid container xs={2} sm={2} href="#" className="text-muted" style={{paddingLeft:100}}><i className="fa fa-chevron-down fa-lg"></i></Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </Collapse>

            <div className="row mobile_btn_group">
                <div className="col mb-3 mt-3">
                    <a href="#"  className="link float-left" onClick={() => onClickWineFilter()} style={{textDecoration:"none"}}><i class="fas fa-wine-glass-alt"></i> Wines</a>
                </div>
                <div className="col mb-3 mt-3">
                  <a  href="#" className="link float-right" style={{textDecoration:"none"}} >
                  <i class="fas fa-award"></i>
                    Awards
                    </a>
                </div>
            </div>
        </div>

      </div>
    );
}

export default BottomBar;