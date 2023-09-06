import EmployeesDashboard from "@/app/hr/employees/page";
import CreateEmployee from "@/app/hr/employees/create/page";
import {Col, Row} from 'antd';

export default function HrDashboard() {
  return (
      <main>
        <Row>
          <Col span={12}> <EmployeesDashboard/></Col>
          <Col span={12}><CreateEmployee/></Col>
        </Row>


      </main>
  )
}
