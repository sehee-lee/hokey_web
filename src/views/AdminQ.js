import { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const AdminQ = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      adminQ
                    </h6>
                    <h2 className="mb-0">행정사법인 호경</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                하는일~!!
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      adminQ
                    </h6>
                    <h2 className="mb-0">행정사법인 호경 소속 행정사</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                소속 행정사 profile~~
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      adminQ
                    </h6>
                    <h2 className="mb-0">행정사법인 호경 연락</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                How To Contect???
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminQ;
