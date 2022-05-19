import React, { useEffect, useState, useMemo } from "react";
import Draggable from "react-draggable";

import CustomTable from "../../../../components/CustomTable";
import ConfirmationModal from "../../../../components/ConfirmationModal/ConfirmationModal";

// import EditIcon from "../../../../assets/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/images/icons/delete-btn.svg";
import { ReactComponent as Compare } from "../../../../assets/images/icons/compare.svg";
import { ReactComponent as Move } from "../../../../assets/images/icons/move.svg";
import { ReactComponent as Merge } from "../../../../assets/images/icons/merge.svg";
import Checkbox from "@mui/material/Checkbox";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Grid from "@mui/material/Grid";

import Delete from "../../../../assets/images/icons/delete-xl.svg";
import Check from "../../../../assets/images/icons/check-modal.svg";
import Close from "../../../../assets/images/icons/close.svg";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
//import AddIcon from "@mui/icons-material/Add";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox
          disableRipple
          className="custom-checkbox table-checkbox"
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

const MatchStatusTable = ({ actionControls, filterControls }) => {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]); //use selectedRow to get an array of checked rows
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [expandMaster, setExpandMaster] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);
  const [openReject, setOpenReject] = useState(false);

  const handleClickOpen = (type) => {
    return type === "delete"
      ? setOpenConfirm(true)
      : type === "approve"
      ? setOpenApprove(true)
      : type === "reject"
      ? setOpenReject(true)
      : null;
  };

  const handleClose = () => {
    setOpenConfirm(false);
    setOpenApprove(false);
    setOpenReject(false);
  };

  const handleMaster = () => {
    setExpandMaster(!expandMaster);
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
        id: "selection",
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
        ...colStyle,
        maxWidth: 70,
      },
      {
        Header: "Album",
        accessor: "Album",
        Cell: (row) => {
          return <span>{row.row.original.Album}</span>;
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
    <div>
      <div className="table-container">
        <CustomTable
          columns={columns}
          data={data}
          isLoading={loading}
          setSelectedRow={setSelectedRow}
          actionControls={actionControls}
          filterControls={filterControls}
          isColumnFixed
        />

        {/* delete confim modal  */}
        <ConfirmationModal
          open={openConfirm}
          icon={Delete}
          title="Do you want to delete it?"
          subtext=" Are you sure you want to delete this object ?"
          handleClose={handleClose}
          handleConfirm={() => {}}
        />
        {/* approve confirm  */}
        <ConfirmationModal
          open={openApprove}
          icon={Check}
          title="Are you sure you want to proceed?"
          subtext=" Are you sure you want to approve this?"
          handleClose={handleClose}
          handleConfirm={() => {}}
        />
        {/* reject confirm  */}
        <ConfirmationModal
          open={openReject}
          icon={Close}
          title="Are you sure you want to proceed?"
          subtext=" Are you sure you want to reject this?"
          handleClose={handleClose}
          handleConfirm={() => {}}
        />
      </div>
      {selectedRow.length > 0 && (
        <Draggable defaultPosition={{ x: 100, y: 20 }} handle="#handle">
          <div className="drag-box">
            <div className="drag-handle" id="handle">
              <DragIndicatorOutlinedIcon />
            </div>
            <div className="drag-card">
              <h4 className="drag-action-title">Actions</h4>
              <div className="drag-btn-flex">
                <div className="db-btn approve">
                  <Button
                    buttonText="Approve"
                    onClick={() => handleClickOpen("approve")}
                    buttonIcon={<CheckOutlinedIcon />}
                  />
                </div>
                <div className="db-btn reject">
                  <Button
                    buttonText="Reject"
                    onClick={() => handleClickOpen("reject")}
                    buttonIcon={<CloseOutlinedIcon />}
                  />
                </div>
                <div className="db-btn compare">
                  <Button
                    buttonText="Compare"
                    onClick={() => {}}
                    buttonIcon={<Compare />}
                  />
                </div>
                <div className="db-btn delete">
                  <Button
                    buttonText="Delete"
                    onClick={() => handleClickOpen("delete")}
                    buttonIcon={<DeleteIcon fill="#fff" />}
                  />
                </div>
              </div>
            </div>
            <div className="drag-card">
              <div className={`expand-card ${expandMaster ? "show" : "hide"}`}>
                <div className="expand-card-content">
                  <h4 className="modal-subtitle">Merge to Master</h4>
                  <div className="merge-form">
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={8}>
                        <Input
                          type="text"
                          label="Name"
                          name="merge"
                          placeholder="Enter Name"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <button className="link-add">Text Links</button>
                      </Grid>
                    </Grid>
                    <div className="action-btn-flex filter-modal-action">
                      <Button
                        buttonText="Cancel"
                        btnType="secondary"
                        onClick={handleMaster}
                      />
                      <Button buttonText="Save" onClick={handleMaster} />
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="drag-action-title">Master</h4>
              <div className="drag-btn-flex">
                <div className="db-btn master">
                  <Button
                    buttonText="Copy to"
                    onClick={() => {}}
                    buttonIcon={<ContentCopyOutlinedIcon />}
                  />
                </div>
                <div className="db-btn master">
                  <Button
                    buttonText="Move to"
                    onClick={() => {}}
                    buttonIcon={<Move />}
                  />
                </div>
                <div className="db-btn master">
                  <Button
                    buttonText="Merge to"
                    onClick={handleMaster}
                    buttonIcon={<Merge />}
                  />
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default MatchStatusTable;
