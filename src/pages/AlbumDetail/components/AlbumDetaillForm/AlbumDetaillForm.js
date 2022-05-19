import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";

import PageHeader from "../../../../components/PageHeader";
import IconTitle from "../../../../components/IconTtile";
import ActivityTable from "./components/ActivityTable";
import CustomTabs from "../../../../components/CustomTabs";
import CustomAccordion from "../../../../components/CustomAccordion/CustomAccordion";
import CustomAudioPlayer from "../../../../components/CustomAudioPlayer";

//import Profile from "../../../../assets/images/icons/profile-icn.svg";
import Album from "../../../../assets/images/icons/album.svg";
import Attach from "../../../../assets/images/icons/attach.svg";
//import Userxs from "../../../../assets/images/icons/user-xs.svg";
import Close from "../../../../assets/images/icons/card-close.svg";
import Activity from "../../../../assets/images/icons/activity.svg";
import Temp from "../../../../assets/images/temp3.png";

const AlbumDetaillForm = ({ isCard }) => {
  const [profileData, setProfileData] = useState([]); //Profile information
  const [userData, setUserData] = useState([]); //User information
  const [serviceData, setServiceData] = useState([]); //Service table

  const breadcrumbData = [
    {
      name: "Music Data",
      link: "/albums",
    },
    {
      name: "Album",
      link: "/albums",
    },
    {
      name: "Album Details",
    },
  ];

  useEffect(() => {
    // dummy data
    setProfileData([
      {
        label: "User name",
        text: "Leslie001",
      },
      {
        label: "Action",
        text: "Resend",
      },
      {
        label: "User Pool",
        text: "User001",
      },
      {
        label: "Account",
        text: "Account1",
      },
      {
        label: "User Pool",
        text: "User001",
      },
      {
        label: "Account",
        text: "Account1",
      },
    ]);

    setUserData([
      {
        label: "User name",
        text: "Leslie001",
      },
      {
        label: "Action",
        text: "Resend",
      },
      {
        label: "User Pool",
        text: "User001",
      },
      {
        label: "Account",
        text: "Account1",
      },
      {
        label: "Account",
        text: "Account1",
      },
    ]);

    setServiceData([
      {
        services: "Match Service",
        actions: "Match, Data, Storage",
      },
      {
        services: "Data service",
        actions: "Match, Data, Storage, Delete",
      },
      {
        services: "Storage service",
        actions: "Match, Data, Storage, File, Delete",
      },
    ]);

    // dummy data
  }, []);

  // tabß
  const tabData = [
    {
      title: "Tracks",
      content: (
        <div>
          <CustomAccordion title="Real steel">
            <div className="label-text-grid">
              {userData.map((item, index) => (
                <div className="label-text-grid-item" key={index}>
                  <div className="label-text">
                    <h4 className="lt-label">{item.label}</h4>
                    <p className="lt-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CustomAccordion>
          <CustomAccordion title="Honeymoon suite">
            <div className="label-text-grid">
              {userData.map((item, index) => (
                <div className="label-text-grid-item" key={index}>
                  <div className="label-text">
                    <h4 className="lt-label">{item.label}</h4>
                    <p className="lt-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CustomAccordion>
        </div>
      ),
    },
    {
      title: "Artist",
      content: <div>tab2</div>,
    },
    {
      title: "Instruments",
      content: <div>tab3</div>,
    },
  ];

  return (
    <div className="user-detail-form-container">
      {!isCard && (
        <PageHeader
          breadCrumb={breadcrumbData}
          pageTitle="Album Details"
          pageSubText="Dashboard is Collection of Objects which are created..."
        />
      )}

      <div className={`paper ${isCard ? "paper-card" : ""}`}>
        <div>
          {isCard && (
            <div className="card-header-container">
              <img src={Album} alt="Album" className="tab-icon" />
              <span className="card-title-block">
                <h4 className="card-title">Dua Lipa</h4>
              </span>
              <span>
                <img src={Close} alt="Close" className="tab-icon" />
              </span>
            </div>
          )}
          <div>
            <Grid container spacing={isCard ? 0 : 2} columns={isCard ? 1 : 12}>
              <Grid item md={6}>
                <div className={`box ${!isCard ? "borderd" : ""}`}>
                  <IconTitle icon={Album} title="Album Details" />
                  <div className="label-text-grid">
                    {profileData.map((item, index) => (
                      <div className="label-text-grid-item" key={index}>
                        <div className="label-text">
                          <h4 className="lt-label">{item.label}</h4>
                          <p className="lt-text">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={`box ${!isCard ? "borderd" : ""}`}>
                  <div className="tab-with-collapse">
                    <CustomTabs tabData={tabData} />
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={`box ${!isCard ? "borderd" : ""}`}>
                  <IconTitle icon={Attach} title="Attached Files" />
                  <div className="attached-block">
                    <h4 class="lt-label">Audio</h4>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <CustomAudioPlayer />
                      </Grid>
                      <Grid item md={6}>
                        <CustomAudioPlayer />
                      </Grid>
                    </Grid>
                  </div>
                  <div className="attached-block">
                    <h4 class="lt-label">Images</h4>
                    <div className="image-flex">
                      <div className="image-flex-item">
                        <img
                          src={Temp}
                          alt="cover"
                          className="image-full-width"
                        />
                      </div>
                      <div className="image-flex-item">
                        <img
                          src={Temp}
                          alt="cover"
                          className="image-full-width"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className={`box ${!isCard ? "borderd" : ""}`}>
                  <IconTitle icon={Album} title="Related Items" />
                  <div className="related-container">
                    <h4 className="lt-label">Album</h4>
                    <ul className="related-links">
                      <li>
                        <button className="link-add">Three Night Dog</button>
                      </li>
                      <li>
                        <button className="link-add">Weekend</button>
                      </li>
                      <li>
                        <button className="link-add">Lonestar</button>
                      </li>
                    </ul>
                  </div>
                  <div className="related-container">
                    <h4 className="lt-label">Artist</h4>
                    <ul className="related-links">
                      <li>
                        <button className="link-add">Three Night Dog</button>
                      </li>
                      <li>
                        <button className="link-add">Weekend</button>
                      </li>
                      <li>
                        <button className="link-add">Lonestar</button>
                      </li>
                      <li>
                        <button className="link-add">Lonestar</button>
                      </li>
                    </ul>
                  </div>
                  <div className="related-container">
                    <h4 className="lt-label">Music</h4>
                    <ul className="related-links">
                      <li>
                        <button className="link-add">Three Night Dog</button>
                      </li>
                      <li>
                        <button className="link-add">Weekend</button>
                      </li>
                      <li>
                        <button className="link-add">Lonestar</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item md={12}>
                <div className={`box ${!isCard ? "borderd" : ""}`}>
                  <IconTitle icon={Activity} title="Activity Log" />
                  <ActivityTable serviceData={serviceData} isCard={isCard} />
                </div>
              </Grid>
            </Grid>
          </div>

          {/* <div className="divider-container">
            <Divider />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetaillForm;
