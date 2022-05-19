import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import Grid from "@mui/material/Grid";

import PageHeader from "../../components/PageHeader";
import IconTitle from "../../components/IconTtile";
import Input from "../../components/Input";

import Company from "../../assets/images/icons/Company.svg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const AddAlbum = () => {
  const navigate = useNavigate();

  const breadcrumbData = [
    {
      name: "Music Data",
      link: "/albums",
    },
    {
      name: "Add Album",
    },
  ];

  const [file, setFile] = useState(null);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="object-container">
      <PageHeader
        breadCrumb={breadcrumbData}
        pageTitle="Add Album"
        pageSubText="Dashboard is Collection of Objects which are created..."
      />
      <div className="paper">
        <div className="box">
          <IconTitle icon={Company} title="Album Information" />
          <div className="form-grid-block">
            <Grid container spacing={4} alignItems="flex-end">
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Album name"
                  name="aname"
                  placeholder="Enter album name"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Artist"
                  name="aname"
                  placeholder="Enter artist"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Title"
                  name="aname"
                  placeholder="Enter title "
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Local ID"
                  name="aname"
                  placeholder="Enter local ID"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="ISRC"
                  name="aname"
                  placeholder="Enter ISRC"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Label"
                  name="aname"
                  placeholder="Enter label"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Version"
                  name="aname"
                  placeholder="Enter version"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Duration"
                  name="aname"
                  placeholder="Enter duration"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Genre"
                  name="aname"
                  placeholder="Enter genre"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="Source"
                  name="aname"
                  placeholder="Enter source"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="RM"
                  name="aname"
                  placeholder="Enter RM"
                />
              </Grid>
              <Grid item xs={3}>
                <Input
                  type="text"
                  label="ISWC"
                  name="aname"
                  placeholder="Enter ISWC"
                />
              </Grid>
              <Grid item xs={6}>
                <h4 className="input-label">Upload Media</h4>
                <div className="upload-block">
                  <input
                    style={{ display: "none" }}
                    id="upload-file"
                    type="file"
                    onChange={fileHandler}
                  />
                  <div className="upload-flex">
                    <label htmlFor="upload-file">
                      <div>
                        <span className="custom-button upload-btn">
                          <DriveFolderUploadOutlinedIcon />
                          <span>{file ? file?.name : "Attach File"}</span>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="action-btn-flex">
            <Button
              buttonText="Cancel"
              btnType="secondary"
              onClick={() => navigate("/albums")}
            />
            <Button buttonText="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAlbum;
