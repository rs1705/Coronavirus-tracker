import React, { useState, useEffect } from "react";
import axios from "../../axios";

const DataTable = (props) => {

  useEffect(() => {
    axios
      .get("/summary")
      .then((res) => {
        const countryData = res.data.Countries;
        const countryInfo = [];

        for (const key in countryData) {
          countryInfo.push(countryData[key]);
        }

        for (const key in countryInfo) {
          console.log(key);
          console.log(countryInfo[key].Country);
          console.log(countryInfo[key].NewConfirmed);
          console.log(countryInfo[key].NewDeaths);
        }
      })
      .catch();
  });
  return (
    <div>
      Hey there!
      <table></table>
    </div>
  );
};
export default DataTable;
