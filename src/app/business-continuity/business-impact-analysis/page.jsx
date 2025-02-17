"use client";
import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Button,
  Checkbox,
  Row,
  Col,
  Space,
} from "antd";
import validationRules from "../../../validations/businessImpactAnalysis";

const { TextArea } = Input;
const { Option } = Select;

const BusinessImpactAnalysis = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted: ", values);
  };

  return (
    <div style={{ margin: "24px" }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ impactTimeframe: { unit: "Hours" } }}
      >
        {/* Row 1: Organization Name, Division/Department, BIA Date */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="organizationName"
              label="Organization Name"
              rules={validationRules.organizationNameRules}
            >
              <Input placeholder="Enter organization name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="division"
              label="Division/Department"
              rules={validationRules.divisionRules}
            >
              <Input placeholder="Enter division/department name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="biaDate"
              label="BIA Date"
              rules={validationRules.biaDateRules}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2: Next Review Due Date, Business Process Name */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="reviewDate"
              label="Next Review Due Date"
              rules={validationRules.reviewDateRules}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="processName"
              label="Business Process Name"
              rules={validationRules.processNameRules}
            >
              <Input placeholder="Enter business process name" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 3: Business Process Description (full width) */}
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              name="processDescription"
              label="Business Process Description"
              rules={validationRules.descriptionRules}
            >
              <TextArea rows={4} placeholder="Enter a detailed description" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 4: Headcount, Critical Headcount, Alternate Work Location */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="headcount"
              label="Headcount"
              rules={validationRules.headcountRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter headcount"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="criticalHeadcount"
              label="Critical Headcount"
              rules={validationRules.criticalHeadcountRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter critical headcount"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="workLocation"
              label="Alternate Work Location"
              rules={validationRules.locationRules}
            >
              <Input placeholder="Enter alternate work location" />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 5: BIA Responder Name, Responder Email ID, Responder Contact Number */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="responderName"
              label="BIA Responder Name"
              rules={validationRules.responderNameRules}
            >
              <Input placeholder="Enter responder name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="responderEmail"
              label="Responder Email ID"
              rules={validationRules.responderEmailRules}
            >
              <Input type="email" placeholder="Enter responder email ID" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="responderContact"
              label="Responder Contact Number"
              rules={validationRules.responderContactRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter responder contact number"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 6: Impact Over Timeframe (Number + Unit), Impact Type, RTO */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Impact Over Timeframe">
              <Space.Compact block>
                <Form.Item
                  name={["impactTimeframe", "value"]}
                  noStyle
                  rules={validationRules.impactTimeframeRules}
                >
                  <InputNumber
                    placeholder="Enter timeframe"
                    style={{ width: "calc(100% - 120px)" }}
                  />
                </Form.Item>
                <Form.Item name={["impactTimeframe", "unit"]} noStyle>
                  <Select style={{ width: 120 }}>
                    <Option value="Hours">Hours</Option>
                    <Option value="Weeks">Weeks</Option>
                    <Option value="Months">Months</Option>
                  </Select>
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="impactType"
              label="Impact Type"
              rules={validationRules.impactTypeRules}
            >
              <Select placeholder="Select impact type">
                <Option value="low">Low</Option>
                <Option value="medium">Medium</Option>
                <Option value="high">High</Option>
                <Option value="critical">Critical</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="rto"
              label="Recovery Time Objective (RTO)"
              rules={validationRules.rtoRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter RTO in hours"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 7: RPO and MTPD */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="rpo"
              label="Recovery Point Objective (RPO)"
              rules={validationRules.rpoRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter RPO in hours"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="mtpd"
              label="Maximum Tolerable Period of Disruption (MTPD)"
              rules={validationRules.mtpdRules}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Enter MTPD in hours"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 8: Upstream Dependency, Downstream Dependency, Third-Party Vendor Dependency */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="upstreamDependency"
              label="Upstream Dependency"
              rules={validationRules.upstreamDependencyRules}
            >
              <TextArea rows={2} placeholder="List upstream dependencies" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="downstreamDependency"
              label="Downstream Dependency"
              rules={validationRules.downstreamDependencyRules}
            >
              <TextArea rows={2} placeholder="List downstream dependencies" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="vendorDependency"
              label="Third-Party Vendor Dependency"
              rules={validationRules.vendorDependencyRules}
              valuePropName="checked"
            >
              <Checkbox>Yes</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 9: Regulatory Compliance Requirements (full width) */}
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              name="compliance"
              label="Regulatory Compliance Requirements"
              rules={validationRules.complianceRules}
            >
              <TextArea
                rows={4}
                placeholder="Enter regulatory compliance requirements"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 10: Application/System Dependency (Multi-Select, full width) */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="appDependency"
              label="Application/System Dependency"
              rules={validationRules.appDependencyRules}
            >
              <Select
                mode="multiple"
                placeholder="Select application/system dependencies"
                allowClear
              >
                <Option value="appA">Application A</Option>
                <Option value="appB">Application B</Option>
                <Option value="appC">Application C</Option>
                <Option value="appD">Application D</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 11: Submit Button */}
        <Row gutter={24}>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button htmlType="submit">Cancel</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BusinessImpactAnalysis;
