import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, Grid, Paper } from "@material-ui/core/";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ borderRadius: 20 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column">
            <Paper style={{ padding: 20, borderRadius: 10 }}>
              <Typography
                className={classes.heading}
                style={{ fontSize: 17, fontWeight: 600, color: "black" }}
              >
                Sort:
              </Typography>
              <button
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "black",
                  border: " 0px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
                Highest User Rating
              </button>
              <button
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "black",
                  border: " 0px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
                 Discount 
              </button>
              <button
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "black",
                  border: " 0px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
                Price: Low to High
              </button>
              <button
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "black",
                  border: " 0px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
               Price: High to
                Low 
              </button>
              <button
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "black",
                  border: " 0px solid transparent",
                  backgroundColor: "transparent",
                }}
              >
                Popular
              </button>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
