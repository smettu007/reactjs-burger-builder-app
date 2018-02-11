import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.css';
import {withRouter} from 'react-router-dom';
const checkoutSummary = (props) => {
  console.log(props);
  return (
 
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>

      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default withRouter(checkoutSummary);
