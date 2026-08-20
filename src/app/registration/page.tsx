import type { Metadata } from "next";
import { REGISTRATION_METADATA } from "@/metadata/registration";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export const metadata: Metadata = REGISTRATION_METADATA;

export default function RegistrationPage() {
  return <RegistrationForm />;
}
