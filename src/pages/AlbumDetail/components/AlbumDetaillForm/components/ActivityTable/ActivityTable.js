import React, { useEffect, useState } from "react";
import CustomTable from "../../../../../../components/CustomTable";

const ActivityTable = ({ serviceData, isCard }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: "Services",
        accessor: "services",
        maxWidth: isCard ? 90 : 50,
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  useEffect(() => {
    // dummy data
    setData(serviceData);
    setLoading(false);
    // dummy data
  }, [data, serviceData]);

  return (
    <div className={`table-container ${isCard ? "card-table" : ""}`}>
      <CustomTable
        columns={columns}
        data={data}
        isLoading={loading}
        hidePagination
        hideColumnControl
      />
    </div>
  );
};

export default ActivityTable;
