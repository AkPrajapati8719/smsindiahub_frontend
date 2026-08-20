"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Bot, CheckCheck, Send, Sparkles, Phone, Video, MoreVertical, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  time: string;
  buttons?: string[];
}

export function WhatsAppSimulator() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "👋 Welcome to SMSIndiaHub! How can we accelerate your business communication today?",
      time: "10:30 AM",
      buttons: ["⚡ Test Free OTP", "📊 Calculate Pricing", "🤖 Build WhatsApp Bot"],
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [typing, setTyping] = useState(false);

  const handleButtonClick = (option: string) => {
    // Add user message
    const userMsg: ChatMessage = { sender: "user", text: option, time: "10:31 AM" };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    setTimeout(() => {
      let reply: ChatMessage;
      if (option.includes("OTP")) {
        reply = {
          sender: "bot",
          text: "🚀 Great choice! Our OTP gateway delivers in sub-2.5 seconds with 99.99% uptime. Would you like a free API sandbox key?",
          time: "10:31 AM",
          buttons: ["🔑 Get Sandbox Key", "📞 Talk to Engineer"],
        };
      } else if (option.includes("Pricing")) {
        reply = {
          sender: "bot",
          text: "💰 Promotional SMS starts from ₹0.10/SMS and OTP routes from ₹0.11/SMS with unlimited validity. How many messages do you send monthly?",
          time: "10:31 AM",
          buttons: ["50,000 to 1 Lakh", "5 Lakh+ (Enterprise)"],
        };
      } else {
        reply = {
          sender: "bot",
          text: "🤖 Our AI Chatbots support automated lead capture, catalogue showcase, and 24/7 customer support on WhatsApp. Let's schedule a 5-min demo!",
          time: "10:31 AM",
          buttons: ["📅 Book Live Demo", "💬 WhatsApp Our Team"],
        };
      }
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 1000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userText = inputVal;
    setInputVal("");
    handleButtonClick(userText);
  };

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900/50" id="whatsapp-bot-simulator">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="green" size="md">
              Official Meta Cloud API Partner
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Turn WhatsApp into Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                #1 Revenue & Support Channel
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Engage customers where they already spend their time. With SMSIndiaHub&apos;s official WhatsApp Business Platform, deploy automated lead qualification chatbots, send rich media brochures, recover abandoned carts, and provide 24/7 instant support.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Official Green Tick Badge</strong> verification setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Interactive Buttons & Quick Replies</strong> for 3x higher response rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-100 p-1.5 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span><strong>Multi-Agent Shared Inbox</strong> with round-robin lead allocation</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/whatsapp-business-api" variant="radiant" size="md">
                Get WhatsApp API Now
              </Button>
              <Button href="/whatsapp-chatbot" variant="outline" size="md">
                View Pre-Built Industry Bots
              </Button>
            </div>
          </div>

          {/* Right Live WhatsApp Simulator Device */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[36px] border-8 border-slate-800 bg-slate-950 p-2 shadow-2xl">
              {/* Smartphone Top Speaker & Camera Notch */}
              <div className="mx-auto mb-2 h-4 w-32 rounded-full bg-slate-800" />

              {/* WhatsApp Screen Body */}
              <div className="overflow-hidden rounded-[26px] bg-[#EFEAE2] dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col h-[480px]">
                {/* Header bar */}
                <div className="bg-[#075E54] dark:bg-slate-800 text-white px-4 py-3 flex items-center justify-between shrink-0 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 rounded-full bg-emerald-400 flex items-center justify-center font-bold text-xs">
                      S
                    </div>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1">
                        SMSIndiaHub Verified <CheckCircle2 className="h-3 w-3 fill-emerald-400 text-[#075E54]" />
                      </div>
                      <div className="text-[10px] text-emerald-200">Official Business Account</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <Phone className="h-4 w-4 cursor-pointer" />
                    <Video className="h-4 w-4 cursor-pointer" />
                    <MoreVertical className="h-4 w-4 cursor-pointer" />
                  </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                          m.sender === "user"
                            ? "bg-[#D9FDD3] dark:bg-emerald-950 text-slate-900 dark:text-emerald-100 rounded-tr-none"
                            : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-tl-none"
                        }`}
                      >
                        <div>{m.text}</div>
                        <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400">
                          <span>{m.time}</span>
                          {m.sender === "user" && <CheckCheck className="h-3 w-3 text-blue-500" />}
                        </div>
                      </div>

                      {/* Interactive Buttons */}
                      {m.buttons && (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {m.buttons.map((btn, bIdx) => (
                            <button
                              key={bIdx}
                              onClick={() => handleButtonClick(btn)}
                              className="rounded-full bg-white dark:bg-slate-800 px-3 py-1 text-[11px] font-bold text-emerald-600 border border-emerald-300 dark:border-emerald-700 shadow-sm hover:bg-emerald-50 transition-colors"
                            >
                              {btn}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {typing && (
                    <div className="flex items-center gap-1 rounded-full bg-white dark:bg-slate-800 px-3 py-1.5 w-max text-[10px] text-slate-500 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>

                {/* Bottom Typing Bar */}
                <form onSubmit={handleSend} className="bg-white dark:bg-slate-800 p-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 shrink-0">
                  <input
                    type="text"
                    placeholder="Type message or click a button..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 rounded-full bg-slate-100 dark:bg-slate-700 px-4 py-1.5 text-xs outline-none focus:ring-1 focus:ring-emerald-500 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
