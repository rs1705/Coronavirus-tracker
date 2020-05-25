import React, { useState, useEffect } from "react";
import axios from "../../axios";
import DataCard from "../data-card/DataCard";

const DataCardGroup = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/summary")
      .then((res) => {
        console.log("Data fetched");
        setData(res.data.Global);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },[]);

  return (
    <div className="DataCardGroup">
      <DataCard type="info" heading="New confirmed" data={new Intl.NumberFormat().format(data.NewConfirmed)} />
      <DataCard type="info" heading="Total confirmed" data={new Intl.NumberFormat().format(data.TotalConfirmed)} />
      <DataCard type="danger" heading="New Deaths" data={new Intl.NumberFormat().format(data.NewDeaths)} />
      <DataCard type="danger" heading="Total Deaths" data={new Intl.NumberFormat().format(data.TotalDeaths)} />
      <DataCard type="success" heading="New recovered" data={new Intl.NumberFormat().format(data.NewRecovered)} />
      <DataCard type="success" heading="Total recovered" data={new Intl.NumberFormat().format(data.TotalRecovered)} />
    </div>
  );
};
export default DataCardGroup;
