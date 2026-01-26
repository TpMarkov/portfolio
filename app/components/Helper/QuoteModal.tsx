"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoMdClose, IoMdCheckmarkCircle } from "react-icons/io";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { sendQuoteAction } from "../../actions/sendQuote";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

type FormStatus = "idle" | "loading" | "success" | "error";
const QuoteModal = ({ isOpen, onClose }: Props) => {

    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const [status, setStatus] = useState<FormStatus>("idle");


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
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
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
                className="relative w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
                {/* Decorative Side - Asymmetry */}
                <div className="hidden md:flex md:w-[35%] bg-primary p-12 flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10 text-primary-foreground">
                        <Image
                            src="/images/webdevstudiohq-logo.png"
                            alt="webdevstudioHQ"
                            width={80}
                            height={80}
                            className="brightness-0 invert opacity-80 mb-6"
                        />
                        <h2 className="text-3xl font-black uppercase tracking-tighter leading-none italic">
                            Build <br />
                            Something <br />
                            <span className="opacity-60 text-xl font-medium not-italic">Amazing</span>
                        </h2>
                    </div>

                    <div className="relative z-10 text-primary-foreground/60 text-[10px] uppercase font-bold tracking-widest">
                        webdevstudioHQ &copy; 2026
                    </div>

                    {/* Faded ornament for the side */}
                    <div className="absolute inset-x-0 bottom-0 h-full opacity-20 pointer-events-none">
                        <Image
                            src="/background-ornaments/1.png"
                            alt="Ornament"
                            fill
                            className="object-cover brightness-0 invert"
                        />
                    </div>
                </div>

                {/* Form Content */}
                <div className="flex-1 p-8 md:p-12 bg-card relative flex flex-col justify-center">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-full z-20"
                    >
                        <IoMdClose size={24} />
                    </button>

                    {status === "success" ? (
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    <IoMdCheckmarkCircle className="text-primary w-16 h-16" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter italic mb-4">
                                Thank <span className="text-primary not-italic">You!</span>
                            </h3>
                            <p className="text-muted-foreground font-semibold leading-relaxed">
                                Your request has been received. <br />
                                We'll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-8 px-8 py-3 bg-secondary text-foreground font-bold rounded-xl hover:bg-muted transition-colors uppercase tracking-widest text-xs"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter italic">
                                    Request a <span className="text-primary not-italic">Quote</span>
                                </h3>
                                <p className="text-muted-foreground text-sm mt-2 font-semibold">
                                    Share your vision, and we'll bring it to life.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
                                        Email Address <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="example@email.com"
                                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="project" className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
                                        Message & Project Description <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        id="project"
                                        name="project_description"
                                        required
                                        rows={3}
                                        placeholder="Briefly describe your project or request..."
                                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none text-sm"
                                        disabled={status === "loading"}
                                    ></textarea>
                                </div>

                                <div>
                                    <label htmlFor="additional" className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
                                        Additional Information (optional)
                                    </label>
                                    <textarea
                                        id="additional"
                                        name="additional_information"
                                        rows={2}
                                        placeholder="Any extra details you'd like to share..."
                                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none text-sm"
                                        disabled={status === "loading"}
                                    ></textarea>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-tighter italic rounded-xl transition-all duration-300 hover:opacity-90 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group disabled:opacity-70 disabled:cursor-not-allowed"
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
