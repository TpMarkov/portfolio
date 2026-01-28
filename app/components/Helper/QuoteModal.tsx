"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoMdClose, IoMdCheckmarkCircle } from "react-icons/io";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { sendQuoteAction } from "../../actions/sendQuote";
import { useDesignMode } from "@/app/context/DesignContext";
import { templates, Template } from "@/app/constants/templates";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const QuoteModal = ({ isOpen, onClose }: Props) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const { designMode } = useDesignMode();
  const isSap = designMode === "sap";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const result = await sendQuoteAction(formData);

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
      });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
      });
      // Reset status when closing
      setTimeout(() => setStatus("idle"), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div
        ref={modalRef}
        className={`
                    relative w-full max-w-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]
                    ${
                      isSap
                        ? "bg-white border border-[#e5e7eb] rounded-xl shadow-xl"
                        : "bg-card border border-border rounded-3xl shadow-2xl"
                    }
                `}
      >
        {/* Decorative Side - SAP Design */}
        <div
          className={`
                    hidden md:flex md:w-[35%] flex-col justify-between relative overflow-hidden
                    ${isSap ? "bg-[#0070f2] p-8" : "bg-primary p-12"}
                `}
        >
          {/* SAP Design clean styling */}
          {isSap && (
            <>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border border-white/20 rounded-full" />
              </div>
            </>
          )}

          <div className="relative z-10">
            <Image
              src="/images/webdevstudiohq-logo.png"
              alt="webdevstudioHQ"
              width={80}
              height={80}
              className="object-contain mb-6 brightness-0 invert opacity-80"
            />
            {isSap ? (
              <h2 className="text-2xl font-semibold text-white leading-tight">
                Build <br />
                Something <br />
                <span className="text-white/80 text-lg font-normal">
                  Amazing
                </span>
              </h2>
            ) : (
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none italic text-primary-foreground">
                Build <br />
                Something <br />
                <span className="opacity-60 text-xl font-medium not-italic">
                  Amazing
                </span>
              </h2>
            )}
          </div>

          <div className="relative z-10 text-white/70 text-xs font-medium uppercase tracking-[0.2em]">
            webdevstudioHQ &copy; 2026
          </div>

          {/* Faded ornament for non-SAP mode */}
          {!isSap && (
            <div className="absolute inset-x-0 bottom-0 h-full opacity-20 pointer-events-none">
              <Image
                src="/background-ornaments/1.png"
                alt="Ornament"
                fill
                className="object-cover brightness-0 invert"
              />
            </div>
          )}
        </div>

        {/* Form Content */}
        <div
          className={`
                    flex-1 p-8 md:p-12 relative flex flex-col justify-center
                    ${isSap ? "bg-white" : "bg-card"}
                `}
        >
          <button
            onClick={onClose}
            className={`
                            absolute top-6 right-6 p-2 transition-colors hover:bg-gray-100 rounded-full z-20
                            ${
                              isSap
                                ? "text-[#6b7280]"
                                : "text-muted-foreground hover:text-primary"
                            }
                        `}
          >
            <IoMdClose size={24} />
          </button>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div
                  className={`
                                    p-4 rounded-full
                                    ${isSap ? "bg-[#0070f2]/10" : "bg-primary/10"}
                                `}
                >
                  <IoMdCheckmarkCircle
                    className={`
                                        w-16 h-16
                                        ${isSap ? "text-[#0070f2]" : "text-primary"}
                                    `}
                  />
                </div>
              </div>
              {isSap ? (
                <>
                  <h3 className="text-3xl font-bold text-[#11181c] mb-4 tracking-tight">
                    Thank <span className="text-[#0070f2]">You!</span>
                  </h3>
                  <p className="text-[#6b7280] font-medium leading-relaxed">
                    Your request has been received. <br />
                    We will get back to you within 24 hours.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter italic mb-4">
                    Thank <span className="text-primary not-italic">You!</span>
                  </h3>
                  <p className="text-muted-foreground font-semibold leading-relaxed">
                    Your request has been received. <br />
                    We will get back to you within 24 hours.
                  </p>
                </>
              )}
              <button
                onClick={onClose}
                className={`
                                    mt-8 px-8 py-3 font-medium rounded-lg transition-colors uppercase tracking-wider text-xs
                                    ${
                                      isSap
                                        ? "bg-[#0070f2] text-white hover:bg-[#0060d9]"
                                        : "bg-secondary text-foreground hover:bg-muted"
                                    }
                                `}
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                {isSap ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#11181c] tracking-tight">
                      Request a <span className="text-[#0070f2]">Quote</span>
                    </h3>
                    <p className="text-[#6b7280] text-sm mt-2 font-medium">
                      Share your vision, and we will bring it to life.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter italic">
                      Request a{" "}
                      <span className="text-primary not-italic">Quote</span>
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 font-semibold">
                      Share your vision, and we will bring it to life.
                    </p>
                  </>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Template Selection */}
                <div className="relative">
                  <label
                    className={`
                      block text-xs mb-2
                      ${
                        isSap
                          ? "text-[#6b7280] font-medium uppercase tracking-[0.15em]"
                          : "text-muted-foreground font-black uppercase tracking-widest"
                      }
                    `}
                  >
                    Select a Template (optional)
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setShowTemplateDropdown(!showTemplateDropdown)
                    }
                    className={`
                      w-full border rounded-xl px-4 py-3 transition-all font-medium flex items-center justify-between
                      ${
                        isSap
                          ? "bg-[#f5f5f5] border-[#e5e7eb] text-[#11181c] focus:outline-none focus:ring-2 focus:ring-[#0070f2]/50 focus:border-[#0070f2] rounded-md"
                          : "bg-secondary/50 border-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground italic rounded-none"
                      }
                    `}
                    disabled={status === "loading"}
                  >
                    <span>
                      {selectedTemplate
                        ? selectedTemplate.title
                        : "Choose a template from our collection..."}
                    </span>
                    {showTemplateDropdown ? (
                      <HiChevronUp className="w-5 h-5" />
                    ) : (
                      <HiChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {/* Dropdown */}
                  {showTemplateDropdown && (
                    <div
                      className={`
                        absolute z-50 w-full mt-2 max-h-60 overflow-y-auto rounded-xl shadow-lg
                        ${
                          isSap
                            ? "bg-white border border-[#e5e7eb]"
                            : "bg-card border border-border"
                        }
                      `}
                    >
                      {templates.map((template) => (
                        <button
                          key={template.id}
                          type="button"
                          onClick={() => {
                            setSelectedTemplate(template);
                            setShowTemplateDropdown(false);
                          }}
                          className={`
                            w-full text-left px-4 py-3 transition-colors hover:bg-secondary/50 flex items-center gap-3
                            ${
                              selectedTemplate?.id === template.id
                                ? isSap
                                  ? "bg-[#0070f2]/10 text-[#0070f2]"
                                  : "bg-primary/10 text-primary"
                                : ""
                            }
                          `}
                        >
                          <div className="flex-1">
                            <p
                              className={`font-medium text-sm ${
                                isSap ? "text-[#11181c]" : "text-foreground"
                              }`}
                            >
                              {template.title}
                            </p>
                            <p
                              className={`text-xs ${
                                isSap
                                  ? "text-[#6b7280]"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {template.category} - {template.price}
                            </p>
                          </div>
                          {selectedTemplate?.id === template.id && (
                            <IoMdCheckmarkCircle
                              className={`w-5 h-5 ${
                                isSap ? "text-[#0070f2]" : "text-primary"
                              }`}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hidden field for selected template */}
                <input
                  type="hidden"
                  name="selected_template"
                  value={
                    selectedTemplate ? JSON.stringify(selectedTemplate) : ""
                  }
                />

                <div>
                  <label
                    htmlFor="email"
                    className={`
                                        block text-xs mb-2
                                        ${
                                          isSap
                                            ? "text-[#6b7280] font-medium uppercase tracking-[0.15em]"
                                            : "text-muted-foreground font-black uppercase tracking-widest"
                                        }
                                    `}
                  >
                    Email Address{" "}
                    <span className={isSap ? "text-[#0070f2]" : "text-primary"}>
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className={`
                                            w-full border rounded-xl px-4 py-3 transition-all font-medium
                                            ${
                                              isSap
                                                ? "bg-[#f5f5f5] border-[#e5e7eb] text-[#11181c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0070f2]/50 focus:border-[#0070f2] rounded-md h-10"
                                                : "bg-secondary/50 border-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder-muted-foreground italic rounded-none h-10"
                                            }
                                        `}
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className={`
                                        block text-xs mb-2
                                        ${
                                          isSap
                                            ? "text-[#6b7280] font-medium uppercase tracking-[0.15em]"
                                            : "text-muted-foreground font-black uppercase tracking-widest"
                                        }
                                    `}
                  >
                    Message & Project Description{" "}
                    <span className={isSap ? "text-[#0070f2]" : "text-primary"}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="project"
                    name="project_description"
                    required
                    rows={3}
                    placeholder="Briefly describe your project or request..."
                    className={`
                                            w-full border rounded-xl px-4 py-3 transition-all font-medium resize-none
                                            ${
                                              isSap
                                                ? "bg-[#f5f5f5] border-[#e5e7eb] text-[#11181c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0070f2]/50 focus:border-[#0070f2] rounded-md text-sm"
                                                : "bg-secondary/50 border-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder-muted-foreground italic rounded-none"
                                            }
                                        `}
                    disabled={status === "loading"}
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="additional"
                    className={`
                                        block text-xs mb-2
                                        ${
                                          isSap
                                            ? "text-[#6b7280] font-medium uppercase tracking-[0.15em]"
                                            : "text-muted-foreground font-black uppercase tracking-widest"
                                        }
                                    `}
                  >
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="additional"
                    name="additional_information"
                    rows={2}
                    placeholder="Any extra details you would like to share..."
                    className={`
                                            w-full border rounded-xl px-4 py-3 transition-all font-medium resize-none
                                            ${
                                              isSap
                                                ? "bg-[#f5f5f5] border-[#e5e7eb] text-[#11181c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0070f2]/50 focus:border-[#0070f2] rounded-md text-sm"
                                                : "bg-secondary/50 border-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder-muted-foreground italic rounded-none"
                                            }
                                        `}
                    disabled={status === "loading"}
                  ></textarea>
                </div>

                {status === "error" && (
                  <p
                    className={`
                                        text-[10px] uppercase tracking-widest
                                        ${isSap ? "text-red-500 font-medium" : "text-red-500 font-black"}
                                    `}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`
                                        w-full py-4 font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed
                                        ${
                                          isSap
                                            ? "bg-[#0070f2] text-white rounded-md hover:bg-[#0060d9] shadow-md hover:shadow-lg"
                                            : "bg-primary text-primary-foreground rounded-xl transition-all hover:opacity-90 active:scale-95 shadow-xl shadow-primary/20 italic rounded-none tracking-tighter"
                                        }
                                    `}
                >
                  {status === "loading" ? (
                    <>
                      Sending...
                      <FaSpinner className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Request
                      <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
