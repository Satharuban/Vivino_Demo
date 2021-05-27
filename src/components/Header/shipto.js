import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import {Typography} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: "12px 25px 5px 35px",
    '&:hover': {
       color: "#BA1628",
      },
      fontSize:12
  },
}));
const country=[{
    country:"Australia"
},
{
    country:"Belgium"
},{
    country:"Canada"
},{
    country:" Denmark"
},{
    country:"France"
},{
    country:"Germany"
},{
    country:" Hong Kong"
},{
    country:"Ireland"
},{
    country:"AustralItaly"
},{
    country:"Monaco"
},{
    country:"Netherlands"
},{
    country:"Singapore"
},{
    country:"Spain"
},
{
    country:"Sweden"
},{
    country:"Switzerland"
},{
    country:"United Kingdomia"
},
]

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} variant="contained" color="primary" onClick={handleClick} style={{ fontSize: 13, fontWeight: 400, color:"grey", border: " 0px solid transparent",backgroundColor:"transparent" }}>
        ship to<ExpandMoreIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
           {country.map((c) => (
        <Typography className={classes.typography}>{c.country}</Typography>
           ))}
      </Popover>
    </div>
  );
}
