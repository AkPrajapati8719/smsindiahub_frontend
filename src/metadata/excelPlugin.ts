import type { Metadata } from "next";
import { BASE_URL } from "./site";

export const excelPluginMetadata: Metadata = {
  title: "Excel Bulk SMS Plugin Download | Send SMS via Excel",
  description:
    "Download free Microsoft Excel SMS add-in. Send personalized bulk SMS directly from Excel sheets with custom column mapping & DLT templates.",
  alternates: {
    canonical: `${BASE_URL}/excel-plugin/`,
  },
  openGraph: {
    title: "Free Microsoft Excel Bulk SMS Plugin Download | SMSIndiaHub",
    description: "Send personalized bulk SMS campaigns directly from Microsoft Excel spreadsheets.",
    url: `${BASE_URL}/excel-plugin/`,
  },
};
