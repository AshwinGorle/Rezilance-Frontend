import {
  DashboardOutlined,
  CrownOutlined,
  UserAddOutlined,
  CheckSquareOutlined,
  AlertOutlined, // For emergency-response
  SafetyOutlined, // For crisis-management
  ClusterOutlined, // For business-continuity
  BarChartOutlined, // For business-impact-analysis
  FileProtectOutlined, // For risk-assessment
  RedoOutlined, // For IT disaster recovery
} from "@ant-design/icons";

import { MdOutlineCircle } from "react-icons/md";

export const resources = [
  {
    key: "live-reports",
    label: "Live Reports",
    icon: <DashboardOutlined />,
  },
  {
    key: "emergency-response",
    label: "Emergency Response",
    icon: <AlertOutlined />, // Suggests urgency or alerting
  },
  {
    key: "crisis-management",
    label: "Crisis Management",
    icon: <SafetyOutlined />, // Implies protection and security
  },
  {
    key: "business-continuity",
    label: "Business Continuity",
    icon: <ClusterOutlined />, // Represents structure and organization
    children: [
      {
        key: "business-continuity/business-impact-analysis",
        label: "Business Impact Analysis",
        icon: <BarChartOutlined />, // For analytics and impact measurement
      },
      {
        key: "business-continuity/risk-assessment",
        label: "Risk Assessment",
        icon: <FileProtectOutlined />, // Indicates evaluation and safeguarding
      },
    ],
  },
  {
    key: "it-disaster-recovery",
    label: "IT Disaster Recovery",
    icon: <RedoOutlined />, // Symbolizes recovery or retry actions
  },
  {
    key: "user",
    label: "Team",
    icon: <UserAddOutlined />,
  },
  {
    key: "task",
    label: "Task",
    icon: <CheckSquareOutlined />,
  },
  {
    key: "admin",
    label: "Admin",
    icon: <CrownOutlined />,
  },
];
