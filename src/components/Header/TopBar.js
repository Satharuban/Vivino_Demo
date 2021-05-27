import { useState, forwardRef, useContext } from "react";
import {
  Popover,
  Button,
  OverlayTrigger,
  Modal,
  Dropdown,
} from "react-bootstrap";
import { Grid, InputBase,Typography } from "@material-ui/core";

import { DropDownContext } from "../../providers/DropDownProvider";

import login_image from "../../assests/images/login.jpg";
import logo from "../../assests/images/logo.png";
import "../../App.css";

function TopBar() {
  const { show, setShow } = useContext(DropDownContext);

  const [visibility, setVisibility] = useState(false);

  const [searchBarvisibility, setSearchBarVisibility] = useState(false);

  const [loginModeVisibilityl, setLoginModeVisibilityl] = useState(false);

  const handleClose = () => setLoginModeVisibilityl(false);
  const handleShow = () => setLoginModeVisibilityl(true);

  const onClickUserFilter = function () {
    setVisibility(!visibility);
  };

  const onClickUserFilterClose = function () {
    setVisibility(false);
  };

  const onClickSearchBar = function () {
    setSearchBarVisibility(true);
  };

  const onClickSearchBarClose = function () {
    setSearchBarVisibility(false);
  };

  const onClickDropDown = function () {
    setShow(true);
  };

  const shipping_popover = (
    <Popover className="ship_popover">
      <Popover.Content>
        <div className="ship_popover_container">
          <ul className="ship_popover_list">
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Australia
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Belgium
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Brazil
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Canada
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Denmark
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                France
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Germany
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Hong Kong
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Ireland
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Italy
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Monaco
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Netherlands
              </a>
            </li>
          </ul>
        </div>
      </Popover.Content>
    </Popover>
  );

  const language_popover = (
    <Popover className="ship_popover">
      <Popover.Content>
        <div className="ship_popover_container">
          <ul className="ship_popover_list">
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Dansk
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Deutsch
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                English
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Español
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Français
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Italiano
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Nederlands
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Português
              </a>
            </li>
            <li className="ship_popover_item">
              <a className="ship_popover_item_link" href="#">
                Svenska
              </a>
            </li>
          </ul>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <Grid>
      
      <nav
        className="navbar navbar-expand-md navbar-light bg-white fixed-top col-lg-12"
        style={{ marginTop: "0px" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => onClickDropDown()}
            aria-controls="main-dropdown-collapse"
            aria-expanded={show}
          >
            <div
              className={
                show ? "hamburger-menu-icon open" : "hamburger-menu-icon"
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <a
            className="navbar-brand col-lg-3"
            href="#"
            style={{ fontSize: 30, fontWeight: 700, color: "#BA1628" }}
          >
            VIVINO
          </a>
          <div className="form-group has-search col-lg-6">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search any wine"
            />
          </div>
          <div className="navbar_right">
            <ul className="navbar-nav ml-auto col-lg-3">
              <li className="nav-item dropdown">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  rootClose
                  overlay={shipping_popover}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ fontSize: "13px" }}
                  >
                    Ship to
                  </a>
                </OverlayTrigger>
              </li>

              <li className="nav-item dropdown">
                <div className="dropdown_container">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    rootClose
                    overlay={language_popover}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      style={{ fontSize: "13px", padding: "0px 1rem" }}
                    >
                      Language
                    </a>
                  </OverlayTrigger>
                  <span className="selected_option">English</span>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleShow()}>
                  <i class="far fa-user"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar_right_mobile">
            <div className="ml-auto col-xs-3" style={{ paddingLeft: 150 }}>
              <button type="button" className="btn btn-default col-xs-12">
                <span className="far fa-user"></span>
              </button>
              <button type="button" className="btn btn-default col-xs-3">
                <span className="fa fa-search fa-lg"></span>
              </button>
            </div>

            <form
              role="search"
              className={searchBarvisibility ? "top-nav-search" : "collapse"}
            >
              <div className="input-group">
                <input
                  type="text"
                  name="example-input1-group2"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    onClick={() => onClickSearchBarClose()}
                    className="btn btn-default"
                  >
                    <i className="fa fa-remove fa-36x"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <br />
        </div>
      </nav>

      
    </Grid>
  );
}

export default TopBar;
