import React, { useState, useEffect } from "react";

import axios from "../../axios";
import DataCard from "../data-card/DataCard";
import SearchInput from "../search-input/SearchInput";
import "./DataCardGroup.css";

const DataCardGroup = () => {
  const [info, setInfo] = useState([]);
  const [cont, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("/summary")
      .then((res) => {
        const recData = res.data.Global;
        setInfo(recData);

        const countryData = res.data.Countries;
        const countryInfo = [];

        for (const key in countryData) {
          countryInfo.push(countryData[key]);
        }
        setCountry(countryInfo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const searchCountryHandler = (value) => {
    console.log(value);
    setCountry(cont.filter(item=>{
      return item.Country.toLowerCase().includes(value.toLowerCase())
    }));
  };

  return (
    <div className="DataCardGroup">
      <DataCard
        type="info"
        heading="Newly confirmed"
        data={new Intl.NumberFormat().format(info.NewConfirmed)}
      />
      <DataCard
        type="info"
        heading="Total confirmed"
        data={new Intl.NumberFormat().format(info.TotalConfirmed)}
      />
      <DataCard
        type="danger"
        heading="New Deaths"
        data={new Intl.NumberFormat().format(info.NewDeaths)}
      />
      <DataCard
        type="danger"
        heading="Total Deaths"
        data={new Intl.NumberFormat().format(info.TotalDeaths)}
      />
      <DataCard
        type="success"
        heading="New recovered"
        data={new Intl.NumberFormat().format(info.NewRecovered)}
      />
      <DataCard
        type="success"
        heading="Total recovered"
        data={new Intl.NumberFormat().format(info.TotalRecovered)}
      />

      <SearchInput search={(e)=>searchCountryHandler(e.target.value)} /><br/>
      <table id="#countries">
        <thead>
          <tr>
            <th className="th-head">Country</th>
            <th className="th-head">Total Cases</th>
            <th className="th-head">New Cases</th>
            <th className="th-head">Total Deaths</th>
            <th className="th-head">New Deaths</th>
            <th className="th-head">Total Recovered</th>
            <th className="th-head">New Recovered</th>
          </tr>
        </thead>
        <tbody>
          {cont.map((item) => (
            <tr key={Math.random()}>
              <td className="td-data-country">{item.Country}</td>
              <td className="td-data total-confirmed">{item.TotalConfirmed}</td>
              <td className="td-data new-confirmed">
                {item.NewConfirmed > 0 ? "+" + item.NewConfirmed : ""}
              </td>
              <td className="td-data">
                {item.TotalDeaths > 0 ? "+" + item.TotalDeaths : ""}
              </td>
              <td className="td-data new-deaths">
                {item.NewDeaths > 0 ? "+" + item.NewDeaths : ""}
              </td>
              <td className="td-data">
                {item.TotalRecovered > 0 ? "+" + item.TotalRecovered : ""}
              </td>
              <td className="td-data new-recovered">
                {item.NewRecovered > 0 ? "+" + item.NewRecovered : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default React.memo(DataCardGroup);
