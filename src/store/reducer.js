import * as actionTypes from "./action";
import moment from "moment";
import jsonData from "./jsonFile";

const WEEKDAYS = 7;
const extractYear = (inputYear = "") => {
  return jsonData.filter(obj => {
    let year = moment(obj.birthday, "DD/MM/YYYY").format("YYYY");
    return year === inputYear;
  });
};

const extractDays = (yearArray = "") => {
  let daysObj = {};

  yearArray.map(obj => {
    let day = moment(obj.birthday, "DD/MM/YYYY").days();

    if (!daysObj[day]) {
      let arr = [];
      arr.push(obj.name);
      daysObj[day] = arr;
    } else {
      daysObj[day] = daysObj[day].concat(obj.name);
    }
  });

  return daysObj;
};

const InitialStore = {};
const reducer = (state = InitialStore, action) => {
  switch (action.type) {
    case actionTypes.INPUTCHANGE:
      return {
        ...state,
        inputYear: action.payload
      };
    case actionTypes.UPDATEBUTTONCLICKED:
      let yearArray = extractYear(state.inputYear);
      let daysObj = extractDays(yearArray);
      for (let i = 0; i < WEEKDAYS; i++) {
        if (!daysObj[i]) {
          daysObj[i] = [];
        }
      }
      return {
        ...state,
        daysObj
      };
    default:
      return state;
  }
};

export default reducer;
