import React, { useState } from "react";
//import Button from "../../components/Button";
//import { useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import MatchStatusTable from "./components/MatchStatusTable";
import FilterModal from "../../components/FilterModal";

import Search from "../../assets/images/icons/search-btn-icon.svg";
import FilterIcon from "../../assets/images/icons/filterIcon.svg";

const MatchStatus = () => {
  const [search, setSearch] = useState("");
  //const navigate = useNavigate();

  const [openFilter, setOpenFilter] = useState(false);

  const handleClickOpen = () => {
    setOpenFilter(true);
  };

  const handleClose = () => {
    setOpenFilter(false);
  };

  const breadcrumbData = [
    {
      name: "Playlist Data",
    },
  ];

  const actionControls = () => {
    return (
      <>
        <div className="input-with-button-front">
          <button className="icon-btn">
            <img src={Search} alt="Search" />
          </button>
          <Input
            placeholder="Search Albums "
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="icon-btn-filter" onClick={handleClickOpen}>
            <img src={FilterIcon} alt="Search" />
          </button>
        </div>

        {/* <Button
          buttonText="Add new"
          onClick={() => navigate("/new-account")}
          buttonIcon={<AddIcon />}
        /> */}
      </>
    );
  };

  const filterControls = () => {
    return (
      <>
        <div className="table-actions">
          <Select
            value=""
            placeholder="Saved Search and Filters"
            options={[
              {
                id: "Playlist-SR-matching",
                optionText: "Playlist-SR-matching",
              },
              {
                id: "Playlist-SR-matching",
                optionText: "Playlist-SR-matching",
              },
            ]}
          />
        </div>
      </>
    );
  };

  return (
    <div className="object-container">
      <PageHeader
        breadCrumb={breadcrumbData}
        pageTitle="Match Status"
        pageSubText="Dashboard is Collection of Objects which are created..."
      />
      <div className="paper">
        <MatchStatusTable
          search={search}
          actionControls={actionControls()}
          filterControls={filterControls()}
        />
      </div>
      <FilterModal
        open={openFilter}
        title="Do you want to delete it?"
        subtext=" Are you sure you want to delete this object ?"
        handleClose={handleClose}
        handleConfirm={() => {}}
      />
    </div>
  );
};

export default MatchStatus;
