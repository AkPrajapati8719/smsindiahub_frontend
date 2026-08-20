export interface DltPortal {
  id: string;
  name: string;
  telecomOperator: string;
  portalUrl: string;
  telemarketerId: string;
  telemarketerName: string;
  chainBindingSteps: string[];
}

export const DLT_PORTALS_DATA: DltPortal[] = [
  {
    id: "jio",
    name: "Jio DLT (TrueConnect)",
    telecomOperator: "Reliance Jio Infocomm Ltd.",
    portalUrl: "https://trueconnect.jio.com",
    telemarketerId: "1102453220000010001",
    telemarketerName: "CLOUD WIRELESS TECHNOLOGIES (I) PVT. LTD.",
    chainBindingSteps: [
      "Login to your Jio TrueConnect DLT portal with your Principal Entity (PE) credentials.",
      "Navigate to the 'Campaign / Telemarketer' tab in the left sidebar menu.",
      "Click on 'Add New Telemarketer / PE-TM Chain Binding'.",
      "Enter the SMSIndiaHub Telemarketer ID (1102453220000010001) and search.",
      "Select 'Cloud Wireless Technologies (I) Pvt. Ltd.' and click 'Submit'.",
      "Confirm the binding request. Once accepted, your DLT headers & templates will route seamlessly through SMSIndiaHub.",
    ],
  },
  {
    id: "airtel",
    name: "Airtel DLT Portal",
    telecomOperator: "Bharti Airtel Ltd.",
    portalUrl: "https://www.airtel.in/commercial-communication",
    telemarketerId: "1002598369214785236",
    telemarketerName: "CLOUD WIRELESS TECHNOLOGIES (I) PVT. LTD.",
    chainBindingSteps: [
      "Access the Airtel Commercial Communication portal using your registered enterprise login.",
      "Go to 'Telemarketer Relationship Management' section.",
      "Click on 'Create Telemarketer Binding Chain'.",
      "Search for 'Cloud Wireless Technologies' or input TM ID: 1002598369214785236.",
      "Define chain priority and authorize transmission permissions.",
      "Click 'Approve & Bind'. The status will reflect 'Active' within 1 hour.",
    ],
  },
  {
    id: "vodafone",
    name: "Vi / VilPower DLT",
    telecomOperator: "Vodafone Idea Ltd. (Vi)",
    portalUrl: "https://www.vilpower.in",
    telemarketerId: "1202568741236589654",
    telemarketerName: "CLOUD WIRELESS TECHNOLOGIES (I) PVT. LTD.",
    chainBindingSteps: [
      "Sign in to VilPower DLT portal with your registered PE account.",
      "Click on 'Telemarketer Management' in the main navigation.",
      "Select 'Add Telemarketer Request'.",
      "Enter TM ID: 1202568741236589654 (Cloud Wireless Technologies).",
      "Accept terms and click 'Confirm Chain Association'.",
    ],
  },
  {
    id: "bsnl",
    name: "BSNL DLT Portal",
    telecomOperator: "Bharat Sanchar Nigam Ltd. (BSNL)",
    portalUrl: "https://www.ucc-bsnl.co.in",
    telemarketerId: "1302854789652145896",
    telemarketerName: "CLOUD WIRELESS TECHNOLOGIES (I) PVT. LTD.",
    chainBindingSteps: [
      "Log into the BSNL UCC DLT portal.",
      "Navigate to 'Entity Telemarketer Mapping'.",
      "Click 'New Telemarketer Addition'.",
      "Input Telemarketer ID: 1302854789652145896 and verify name.",
      "Submit for automated association verification.",
    ],
  },
  {
    id: "tata",
    name: "Tata Tele Business DLT",
    telecomOperator: "Tata Teleservices Ltd.",
    portalUrl: "https://telemarketer.tatateleservices.com",
    telemarketerId: "1402365897412589632",
    telemarketerName: "CLOUD WIRELESS TECHNOLOGIES (I) PVT. LTD.",
    chainBindingSteps: [
      "Log in to Tata DLT telemarketer management console.",
      "Select 'Telemarketer Chains' from dashboard menu.",
      "Click 'Bind Telemarketer'.",
      "Select 'Cloud Wireless Technologies (I) Pvt. Ltd.' from verified TM list.",
      "Click 'Authorize' to activate the binding.",
    ],
  },
];
