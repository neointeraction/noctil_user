import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PageHeader from "../../components/PageHeader";

import { chartOptions } from "./config/chartConfig";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend); //chart js initialization

  const breadcrumbData = [
    {
      name: "Dashboard",
    },
  ];

  const data = {
    labels: ["Sound Recordings", "Playlist Results", "Playlist"],
    datasets: [
      {
        data: [16920, 12920, 22920],
        backgroundColor: [
          "rgba(255, 0, 127, 0.9)",
          "rgba(23, 139, 189, 0.9)",
          "rgba(9, 49, 96, 0.89)",
        ],
        borderColor: [
          "rgba(255, 0, 127, 1)",
          "rgba(23, 139, 189, 1)",
          "rgba(9, 49, 96, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <PageHeader
        breadCrumb={breadcrumbData}
        pageTitle="Dashboard"
        pageSubText="Dashboard is Collection of Objects which are created..."
      />
      <div className="dashboard-charts">
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <div className="box chart-box">
              <h4 className="dashboard-card-title">Data Distribution</h4>
              <div className="chart-container">
                <Pie
                  width={300}
                  height={300}
                  data={data}
                  options={chartOptions}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="box chart-box">
              <h4 className="dashboard-card-title">Match Percentage</h4>
              <div className="chart-container">
                <Pie
                  width={300}
                  height={300}
                  data={data}
                  options={chartOptions}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="box count-box">
              <h4 className="dashboard-card-title">Data Count</h4>
              <div className="count-block-container">
                <div className="count-block">
                  <h5 className="count-label">REQUEST</h5>
                  <p className="count-text">80495</p>
                </div>
                <div className="divider-container">
                  <Divider />
                </div>
                <div className="count-block">
                  <h5 className="count-label">MASTER</h5>
                  <p className="count-text">189200</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
