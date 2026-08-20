export interface ApiEndpoint {
  id: string;
  title: string;
  method: "GET" | "POST";
  endpoint: string;
  description: string;
  parameters: {
    name: string;
    type: string;
    required: boolean;
    description: string;
    example: string;
  }[];
  snippets: {
    language: string;
    label: string;
    code: string;
  }[];
  responseSample: {
    status: number;
    body: string;
  };
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: "send-sms-india",
    title: "Send SMS (India Route)",
    method: "POST",
    endpoint: "https://api.smsindiahub.in/api/mt/SendSMS",
    description: "Dispatches transactional, OTP, or promotional SMS to Indian mobile numbers with DLT parameters.",
    parameters: [
      { name: "Account.APIKey", type: "string", required: true, description: "Your unique authentication API Key", example: "your_api_key_here" },
      { name: "SenderId", type: "string", required: true, description: "Approved 6-character DLT Sender Header", example: "SMSHUB" },
      { name: "Message", type: "string", required: true, description: "DLT approved message text with variables", example: "Your OTP is 482910 for login. Valid for 10 mins. - SMSIndiaHub" },
      { name: "Channel", type: "string", required: true, description: "Channel type: '2' for OTP/Transactional, '1' for Promotional", example: "2" },
      { name: "DCS", type: "string", required: false, description: "Data Coding Scheme ('0' for English, '8' for Unicode/Hindi)", example: "0" },
      { name: "FlashSMS", type: "string", required: false, description: "'0' for normal, '1' for pop-up flash SMS", example: "0" },
      { name: "Number", type: "string", required: true, description: "10-digit Indian recipient mobile number", example: "919876543210" },
      { name: "Route", type: "string", required: true, description: "Route identifier ('1' or '2')", example: "1" },
      { name: "PEId", type: "string", required: true, description: "Principal Entity ID registered on DLT portal", example: "1101234567890123456" },
      { name: "TemplateId", type: "string", required: true, description: "Approved Content Template ID on DLT", example: "1107123456789012345" },
    ],
    snippets: [
      {
        language: "javascript",
        label: "Node.js",
        code: `const axios = require('axios');

async function sendSms() {
  const payload = {
    "Account.APIKey": "YOUR_API_KEY",
    "SenderId": "SMSHUB",
    "Message": "Your OTP is 482910 for login. Valid for 10 mins. - SMSIndiaHub",
    "Channel": "2",
    "DCS": "0",
    "FlashSMS": "0",
    "Number": "919876543210",
    "Route": "1",
    "PEId": "1101234567890123456",
    "TemplateId": "1107123456789012345"
  };

  const res = await axios.post('https://api.smsindiahub.in/api/mt/SendSMS', payload);
  console.log('Response:', res.data);
}

sendSms();`,
      },
      {
        language: "python",
        label: "Python",
        code: `import requests

url = "https://api.smsindiahub.in/api/mt/SendSMS"
payload = {
    "Account.APIKey": "YOUR_API_KEY",
    "SenderId": "SMSHUB",
    "Message": "Your OTP is 482910 for login. Valid for 10 mins. - SMSIndiaHub",
    "Channel": "2",
    "DCS": "0",
    "FlashSMS": "0",
    "Number": "919876543210",
    "Route": "1",
    "PEId": "1101234567890123456",
    "TemplateId": "1107123456789012345"
}

response = requests.post(url, json=payload)
print(response.status_code, response.json())`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl -X POST "https://api.smsindiahub.in/api/mt/SendSMS" \\
  -H "Content-Type: application/json" \\
  -d '{
    "Account.APIKey": "YOUR_API_KEY",
    "SenderId": "SMSHUB",
    "Message": "Your OTP is 482910 for login. Valid for 10 mins. - SMSIndiaHub",
    "Channel": "2",
    "DCS": "0",
    "FlashSMS": "0",
    "Number": "919876543210",
    "Route": "1",
    "PEId": "1101234567890123456",
    "TemplateId": "1107123456789012345"
  }'`,
      },
      {
        language: "php",
        label: "PHP",
        code: `<?php
$curl = curl_init();

$payload = [
    "Account.APIKey" => "YOUR_API_KEY",
    "SenderId" => "SMSHUB",
    "Message" => "Your OTP is 482910 for login. Valid for 10 mins. - SMSIndiaHub",
    "Channel" => "2",
    "DCS" => "0",
    "FlashSMS" => "0",
    "Number" => "919876543210",
    "Route" => "1",
    "PEId" => "1101234567890123456",
    "TemplateId" => "1107123456789012345"
];

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.smsindiahub.in/api/mt/SendSMS",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
]);

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`,
      },
    ],
    responseSample: {
      status: 200,
      body: JSON.stringify(
        {
          ErrorCode: "000",
          ErrorMessage: "Success",
          JobId: "JOB_987654321098",
          MessageData: [
            {
              Number: "919876543210",
              MessageId: "MSG_5678901234",
              Status: "Submitted",
            },
          ],
        },
        null,
        2
      ),
    },
  },
];
