import React from "react";
import { Row } from "reactstrap";

import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Policy from "./Policy";
import ManagementTable from "./ManagementTable";
import GlobalView from "./GlobalView";

const Dashboard = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Row1 />
          <Row2 />
          <Row3 />
        </Row>
        <Row>
          <Policy />
          <ManagementTable />
          <GlobalView />
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
