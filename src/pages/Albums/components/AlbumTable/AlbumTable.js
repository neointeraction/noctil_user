import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import CustomTable from "../../../../components/CustomTable";
import ConfirmationModal from "../../../../components/ConfirmationModal/ConfirmationModal";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "../../../../assets/images/icons/edit.svg";
import DeleteIcon from "../../../../assets/images/icons/delete.svg";

import More from "../../../../assets/images/icons/more.svg";
import Delete from "../../../../assets/images/icons/delete-xl.svg";

const AlbumTable = ({ actionControls, filterControls }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpen = () => {
    setOpenConfirm(true);
  };

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const colStyle = useMemo(
    () => ({
      minWidth: 30,
      width: 200,
    }),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Album",
        accessor: "Album",
        Cell: (row) => {
          return (
            <Link className="table-link" to="/album-detail">
              {row.row.original.Album}
            </Link>
          );
        },
        ...colStyle,
      },
      {
        Header: "Artist",
        accessor: "Artist",
        ...colStyle,
      },
      {
        Header: "Title",
        accessor: "Title",
        ...colStyle,
      },
      {
        Header: "Local ID",
        accessor: "Local ID",
        ...colStyle,
      },
      {
        Header: "ISRC",
        accessor: "ISRC",
        ...colStyle,
      },
      {
        Header: "Title1",
        accessor: "Title1",
        ...colStyle,
      },
      {
        Header: "Title2",
        accessor: "Title2",
        ...colStyle,
      },
      {
        id: "action",
        Header: "Action",
        accessor: "Action",
        Cell: (row) => {
          const [anchorEl, setAnchorEl] = React.useState(null);
          const open = Boolean(anchorEl);
          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
          const handleClose = () => {
            setAnchorEl(null);
          };

          return (
            <>
              <a href onClick={handleClick} className="more-btn-table">
                <img src={More} alt="More" />
              </a>
              <Menu
                id="basic-menu-table"
                className="menu-table"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <img
                    src={EditIcon}
                    alt="EditIcon"
                    className="table-action-icons"
                  />
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleClickOpen();
                  }}
                  disableRipple
                >
                  <img
                    src={DeleteIcon}
                    alt="DeleteIcon"
                    className="table-action-icons"
                  />
                  Delete
                </MenuItem>
              </Menu>
            </>
          );
        },
        // maxWidth: 10,
        disableSortBy: true,
        ...colStyle,
      },
    ],
    []
  );

  useEffect(() => {
    // dummy data
    setData([
      {
        Album: "Match IQ A",
        Artist: "Artist",
        Title: "Title",
        "Local ID": "Local ID",
        ISRC: "ISRC",
        Title1: "Title1",
        Title2: "Title2",
      },
      {
        Album: "Match IQ A",
        Artist: "Artist",
        Title: "Title1 ",
        "Local ID": "Local ID",
        ISRC: "ISRC",
        Title1: "Title1",
        Title2: "Title2",
      },
    ]);
    setLoading(false);
    // dummy data
  }, []);

  return (
    <div className="table-container">
      <CustomTable
        columns={columns}
        data={data}
        isLoading={loading}
        actionControls={actionControls}
        filterControls={filterControls}
      />
      <ConfirmationModal
        open={openConfirm}
        icon={Delete}
        title="Do you want to delete it?"
        subtext=" Are you sure you want to delete this object ?"
        handleClose={handleClose}
        handleConfirm={() => {}}
      />
    </div>
  );
};

export default AlbumTable;
