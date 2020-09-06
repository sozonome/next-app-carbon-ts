import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const Layout = ({ children }) => {
  return (
    <Grid>
      <Row>
        <Column>Header</Column>
      </Row>
      {children}
      <Row>
        <Column>Footer</Column>
      </Row>
    </Grid>
  );
};

export default Layout;
