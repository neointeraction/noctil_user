import React, { useEffect } from "react";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useSortBy,
  useExpanded,
  useRowSelect,
  usePagination,
} from "react-table";
import "./table.css";

import Loader from "../Loader";
import Input from "../Input";
import Select from "../Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Menu from "@mui/material/Menu";

import SortIcon from "../../assets/images/icons/sort.svg";
import LeftStart from "../../assets/images/icons/LeftArrow.svg";
import RightEnd from "../../assets/images/icons/RightArrow.svg";
import Left from "../../assets/images/icons/left.svg";
import Right from "../../assets/images/icons/right.svg";
import Nodata from "../../assets/images/icons/file-nodata.svg";
import More from "../../assets/images/icons/more.svg";

const IndeterminateToggleCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Checkbox
        className="custom-checkbox"
        disableRipple
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);

const CustomTable = ({
  columns,
  data,
  isLoading,
  setSelectedRow,
  hidePagination,
  actionControls,
  filterControls,
  isColumnFixed,
  hideColumnControl,
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      //  maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        pageSize: hidePagination ? 100 : 5,
        hiddenColumns: [],
      },
    },
    useResizeColumns,
    useFlexLayout,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    let selectedRowList = selectedFlatRows.map((d) => d.original);
    setSelectedRow && setSelectedRow(selectedRowList);
  }, [selectedFlatRows, setSelectedRow]);

  const headerProps = (props, { column }) => getStyles(props, column.align);

  const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

  const getStyles = (props, align = "left") => [
    props,
    {
      style: {
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        alignItems: "flex-start",
        display: "flex",
      },
    },
  ];

  // expanded row content
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <div className="table-sub-container">
        {row.allCells
          .filter((item) => item.column.Header !== "#")
          .map((item) => (
            <div className="object-flex">
              <h4>{item.column.Header}</h4>
              <p>{item.value}</p>
            </div>
          ))}
      </div>
    ),
    []
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="custom-table">
      <div className="table-actions-inner">
        <div>{filterControls}</div>
        <div className="table-actions-controls">
          {actionControls}
          {!hideColumnControl && (
            <div className="table-show-hide">
              <button className="icon-btn" onClick={handleClick}>
                <img src={More} alt="More" />
              </button>
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
                <div className="table-col-panel">
                  <div className="select-all-block">
                    <IndeterminateToggleCheckbox
                      {...getToggleHideAllColumnsProps()}
                    />
                    Toggle All
                  </div>
                  {allColumns
                    .filter((x) => x.id !== "action" && x.id !== "selection")
                    .map((column) => (
                      <div key={column.id}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                className="custom-checkbox"
                                disableRipple
                                {...column.getToggleHiddenProps()}
                              />
                            }
                            label={column.id}
                          />
                        </FormGroup>
                      </div>
                    ))}
                  <br />
                </div>
              </Menu>
            </div>
          )}
        </div>
      </div>

      <div
        {...getTableProps()}
        className={`table ${isColumnFixed ? "table-fixed" : ""}`}
      >
        <div>
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div
                  {...column.getHeaderProps(
                    column.getSortByToggleProps(),
                    headerProps
                  )}
                  className="th"
                >
                  {column.render("Header")}
                  {/* Use column.getResizerProps to hook up the events correctly */}
                  {column.canResize && (
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                    />
                  )}
                  <span className="sort-icon">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <img src={SortIcon} alt="SortIcon" />
                      ) : (
                        <img src={SortIcon} alt="SortIcon" />
                      )
                    ) : (
                      <img
                        src={SortIcon}
                        alt="SortIcon"
                        style={{ visibility: "hidden" }}
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tbody">
          {isLoading ? (
            <Loader />
          ) : page.length === 0 ? (
            <div className="empty-table">
              <div className="empty-table-content">
                <img src={Nodata} alt="Nodata" />
                <span className="no-data-text">no data</span>
              </div>
            </div>
          ) : (
            <>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <>
                    <div {...row.getRowProps()} className="tr">
                      {row.cells.map((cell) => {
                        return (
                          <div
                            {...cell.getCellProps(cellProps)}
                            className={`td ${
                              row.isSelected ? "highlight" : ""
                            }`}
                          >
                            {cell.render("Cell")}
                          </div>
                        );
                      })}
                    </div>
                    {row.isExpanded ? (
                      <div className="tr">
                        <div
                          className="td inner-td"
                          colSpan={visibleColumns.length}
                        >
                          {/* subrow content */}
                          {renderRowSubComponent({ row })}
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
      {hidePagination ? null : (
        <div className="pagination-custom">
          <div className="pagination-flex">
            <div className="table-input">
              <p className="table-label">Go to page:</p>
              <Input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </div>
            <div className="table-select">
              <p className="table-label">Row per page:</p>
              <Select
                tableSelect
                value={pageSize}
                options={[
                  { id: 5, optionText: 5 },
                  { id: 10, optionText: 10 },
                  { id: 20, optionText: 20 },
                ]}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              />
            </div>
            <div className="page-count-info">
              <span className="page-count">
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </div>
            <span className="pagination-controls">
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className="pagination-btn"
              >
                <img src={LeftStart} alt="LeftStart" />
              </button>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="pagination-btn"
              >
                <img src={Left} alt="Left" />
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="pagination-btn"
              >
                <img src={Right} alt="Right" />
              </button>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="pagination-btn"
              >
                <img src={RightEnd} alt="RightEnd" />
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
