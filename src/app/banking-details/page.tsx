import React from "react";
import { Metadata } from "next";
import { Landmark, ShieldCheck, ArrowRight, Copy, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import { bankingDetailsMetadata } from "@/metadata/bankingDetails";

export const metadata: Metadata = bankingDetailsMetadata;

export default function BankingDetailsPage() {
  const bank = COMPANY_INFO.bankingDetails;

  return (
    <div className="bg-white py-16 dark:bg-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center space-y-4 mb-10">
          <Badge variant="blue" size="md">
            Official Payment Desk
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Corporate Banking Details
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            For online bank transfers (NEFT / RTGS / IMPS), please transfer to our verified current account below.
          </p>
        </div>

        {/* Bank Detail Card */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="rounded-2xl bg-blue-600 p-3 text-white">
              <Landmark className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Bank Name</div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">{bank.bankName}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Account Beneficiary Name</span>
              <div className="font-bold text-slate-900 dark:text-white mt-1">{bank.accountName}</div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Account Number</span>
              <div className="font-mono font-bold text-lg text-blue-600 dark:text-blue-400 mt-1">{bank.accountNumber}</div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">IFSC Code</span>
              <div className="font-mono font-bold text-lg text-slate-900 dark:text-white mt-1">{bank.ifscCode}</div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Account Type</span>
              <div className="font-bold text-slate-900 dark:text-white mt-1">{bank.accountType}</div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">Branch Location</span>
              <div className="font-bold text-slate-900 dark:text-white mt-1">{bank.branch}</div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 uppercase">SWIFT Code (International)</span>
              <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">{bank.swiftCode}</div>
            </div>
          </div>

          <div className="rounded-2xl bg-amber-50 p-4 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-200 border border-amber-200 dark:border-amber-900">
            <strong>Important:</strong> {bank.note}
          </div>

          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Button
              href={`https://api.whatsapp.com/send?phone=919981188868&text=Hi%20SMSIndiaHub,%20I%20have%20made%20a%20bank%20transfer.%20Here%20is%20the%20screenshot.`}
              external
              variant="radiant"
              size="md"
            >
              Share UTR on WhatsApp (+91 9981188868)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
