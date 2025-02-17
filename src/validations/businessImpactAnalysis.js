// Validation rules for Business Impact Analysis form
const validationRules = {
  // Rule for organization name
  organizationNameRules: [
    { required: true, message: "Organization Name is required" },
  ],

  // Rule for division/department
  divisionRules: [
    { required: true, message: "Division/Department is required" },
  ],

  // Rule for BIA date
  biaDateRules: [
    { required: true, message: "BIA Date is required" },
    {
      validator: (_, value) =>
        value && value.isSame(new Date(), "day")
          ? Promise.resolve()
          : Promise.reject("BIA Date must be the current date"),
    },
  ],

  // Rule for next review due date
  reviewDateRules: [
    { required: true, message: "Next Review Due Date is required" },
    {
      validator: (_, value, form) =>
        value &&
        form.getFieldValue("biaDate") &&
        value.isSame(
          form.getFieldValue("biaDate").clone().add(1, "year"),
          "day"
        )
          ? Promise.resolve()
          : Promise.reject("Next Review Due Date must be 1 year from BIA Date"),
    },
  ],

  // Rule for business process name
  processNameRules: [
    { required: true, message: "Business Process Name is required" },
    {
      pattern: /^[a-zA-Z0-9\s]{2,255}$/,
      message:
        "Business Process Name must be alphanumeric and 2-255 characters long",
    },
  ],

  // Rule for business process description
  descriptionRules: [
    { required: true, message: "Business Process Description is required" },
    {
      min: 20,
      max: 1000,
      message: "Description must be between 20 and 1000 characters long",
    },
  ],

  // Rule for headcount
  headcountRules: [
    { required: true, message: "Headcount is required" },
    {
      type: "number",
      min: 0,
      message: "Headcount must be a positive number",
    },
  ],

  // Rule for critical headcount
  criticalHeadcountRules: [
    { required: true, message: "Critical Headcount is required" },
    {
      type: "number",
      min: 0,
      message: "Critical Headcount must be a positive number",
    },
  ],

  // Rule for alternate work location
  locationRules: [
    { required: true, message: "Alternate Work Location is required" },
  ],

  // Rule for BIA responder name
  responderNameRules: [
    { required: true, message: "BIA Responder Name is required" },
    {
      pattern: /^[a-zA-Z\s]{2,255}$/,
      message: "Responder Name must be alphanumeric and 2-255 characters long",
    },
  ],

  // Rule for responder email
  responderEmailRules: [
    { required: true, message: "Responder Email ID is required" },
    { type: "email", message: "Enter a valid email address" },
  ],

  // Rule for responder contact number
  responderContactRules: [
    { required: true, message: "Responder Contact Number is required" },
    {
      pattern: /^[0-9]{10,15}$/,
      message: "Contact Number must be numeric and 10-15 digits long",
    },
  ],

  // Rule for impact over timeframe
  impactTimeframeRules: [
    { required: true, message: "Impact Over Timeframe is required" },
  ],

  // Rule for impact type
  impactTypeRules: [{ required: true, message: "Impact Type is required" }],

  // Rule for recovery time objective (RTO)
  rtoRules: [
    { required: true, message: "Recovery Time Objective (RTO) is required" },
    {
      type: "number",
      min: 0,
      message: "RTO must be a positive number and less than MTPD",
    },
  ],

  // Rule for recovery point objective (RPO)
  rpoRules: [
    { required: true, message: "Recovery Point Objective (RPO) is required" },
    { type: "number", min: 0, message: "RPO must be a positive number" },
  ],

  // Rule for maximum tolerable period of disruption (MTPD)
  mtpdRules: [
    {
      required: true,
      message: "Maximum Tolerable Period of Disruption (MTPD) is required",
    },
    { type: "number", min: 0, message: "MTPD must be a positive number" },
  ],

  // Rule for upstream dependency
  upstreamDependencyRules: [
    { required: false, message: "Upstream Dependency is optional" },
    {
      pattern: /^[a-zA-Z0-9\s,]+$/,
      message: "Upstream Dependency must reference existing business processes",
    },
  ],

  // Rule for downstream dependency
  downstreamDependencyRules: [
    { required: false, message: "Downstream Dependency is optional" },
    {
      pattern: /^[a-zA-Z0-9\s,]+$/,
      message:
        "Downstream Dependency must reference existing business processes",
    },
  ],

  // Rule for third-party vendor dependency
  vendorDependencyRules: [
    { required: false, message: "Third-Party Vendor Dependency is optional" },
  ],

  // Rule for regulatory compliance requirements
  complianceRules: [
    {
      required: false,
      message: "Regulatory Compliance Requirements are optional",
    },
    {
      min: 20,
      max: 1000,
      message:
        "Regulatory Compliance must be between 20 and 1000 characters long",
    },
  ],

  // Rule for application/system dependency
  appDependencyRules: [
    { required: true, message: "Application/System Dependency is required" },
    {
      pattern: /^[a-zA-Z0-9\s,]+$/,
      message:
        "Application/System Dependency must reference existing organizational applications/systems",
    },
  ],
};

export default validationRules;
