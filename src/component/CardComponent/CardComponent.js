import React from "react";
import { connect } from "react-redux";
import "./CardComponent.css";

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getCardClass = cards => {
  switch (cards.length) {
    case 0:
      return "zero";
    case 1:
      return "single";
    case 2:
      return "double";
    case 3:
      return "tripple";
    default:
      return null;
  }
};

const cardContainer = ({ dayObj }) => {
  let allCards = null;

  if (dayObj) {
    allCards = Object.keys(dayObj).map(dayNumber => {
      let cards =
        dayObj[dayNumber] &&
        dayObj[dayNumber].map(name => {
          let shortName = name.split(" ").map(nm => {
            return nm.slice(0, 1).toUpperCase();
          });
          return (
            <span style={{ background: getRandomColor() }}>
              {shortName.join("")}
            </span>
          );
        });

      // Placing the appropiate className according to the units
      let classes = ["individual"];
      let myClass = getCardClass(cards);
      classes.push(myClass);

      switch (dayNumber) {
        case "0":
          return (
            <div className={classes.join(" ")}>
              <h4>Sunday</h4>
              {cards}
            </div>
          );
        case "1":
          return (
            <div className={classes.join(" ")}>
              <h4>Monday</h4>
              {cards}
            </div>
          );
        case "2":
          return (
            <div className={classes.join(" ")}>
              <h4>Tuesday</h4>
              {cards}
            </div>
          );
        case "3":
          return (
            <div className={classes.join(" ")}>
              <h4>Wednesday</h4>
              {cards}
            </div>
          );
        case "4":
          return (
            <div className={classes.join(" ")}>
              <h4>Thrusday</h4>
              {cards}
            </div>
          );
        case "5":
          return (
            <div className={classes.join(" ")}>
              <h4>Friday</h4>
              {cards}
            </div>
          );
        case "6":
          return (
            <div className={classes.join(" ")}>
              <h4>Saturday</h4>
              {cards}
            </div>
          );
        default:
          return null;
      }
    });
  }
  return (
    <div className="card-container">
      <h2>BirthDay Cards:</h2>
      <div className={"cardWrap"}>{allCards}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dayObj: state.daysObj
  };
};

export default connect(mapStateToProps)(cardContainer);
