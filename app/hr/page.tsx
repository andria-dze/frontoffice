import EmployeesDashboard from "@/app/hr/employees/page";
import CreateEmployee from "@/app/hr/employees/create/page";
import {Col, Row} from 'antd';

export default function HrDashboard() {
    return (
        <main>
            <Row gutter={[32, 16]}>
                <Col span={{md: 12, xs: 24}}> <EmployeesDashboard/></Col>
                <Col span={{md: 12, xs: 24}}><CreateEmployee/></Col>
            </Row>


        </main>
    )
}
