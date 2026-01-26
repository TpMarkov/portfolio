import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaUserLock, FaDatabase, FaGavel, FaEnvelope } from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-0">
            <div className="w-[90%] xl:w-[60%] mx-auto">
                <Link
                    href="/#home"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-bold uppercase tracking-widest text-xs mb-12"
                >
                    <FaArrowLeft /> Back to Home
                </Link>

                <div className="space-y-12">
                    {/* Header */}
                    <div className="border-b border-border pb-12">
                        <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                            <FaShieldAlt className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl font-semibold italic">
                            Effective Date: January 26, 2026. This policy outlines how we handle your personal data across EU, Canada, and the USA jurisdictions.
                        </p>
                    </div>

                    {/* Section 1: Introduction */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaUserLock className="text-primary text-xl" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">1. Introduction</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Welcome to <strong>webdevstudioHQ</strong>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    {/* Section 2: Data Collection */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaDatabase className="text-primary text-xl" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">2. Data We Collect</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic mb-4">
                            "Safely collecting your email addresses is our priority."
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li><span className="font-bold text-foreground uppercase text-xs tracking-widest">Identity Data:</span> includes first name, last name.</li>
                            <li><span className="font-bold text-foreground uppercase text-xs tracking-widest">Contact Data:</span> includes email address and telephone numbers.</li>
                            <li><span className="font-bold text-foreground uppercase text-xs tracking-widest">Technical Data:</span> includes IP address, browser type and version, time zone setting and location.</li>
                        </ul>
                    </section>

                    {/* Section 3: Legal Basis */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaGavel className="text-primary text-xl" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">3. Global Compliance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            {/* Bulgaria / EU */}
                            <div className="bg-secondary p-6 rounded-2xl border border-border">
                                <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Bulgaria & EU (GDPR)</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Compliant with the General Data Protection Regulation (GDPR) and the Bulgarian Personal Data Protection Act. We process your data based on <strong>Consent</strong> (Art. 6(1)(a) GDPR) when you submit a form. You have the right to lodge a complaint with the Commission for Personal Data Protection (CPDP).
                                </p>
                            </div>

                            {/* Canada */}
                            <div className="bg-secondary p-6 rounded-2xl border border-border">
                                <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Canada (PIPEDA)</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA). We ensure your information is collected for specified purposes and with your knowledge and consent. We handle your data with the highest standards of accountability.
                                </p>
                            </div>

                            {/* USA */}
                            <div className="bg-secondary p-6 rounded-2xl border border-border">
                                <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">USA (CCPA/CPRA)</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We respect the California Consumer Privacy Act (CCPA). We do not "sell" or "share" your personal information for outbound marketing to third parties without your explicit opt-in. US residents have the right to request deletion of their data.
                                </p>
                            </div>

                            {/* International */}
                            <div className="bg-secondary p-6 rounded-2xl border border-border">
                                <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Data Transfers</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Your data may be stored on servers located outside your home country (e.g., Vercel's global infrastructure). We ensure adequate safeguards are in place for all international transfers.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Your Rights */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-black uppercase tracking-tight">4. Your Rights</h2>
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <p>You have the following rights regarding your personal data:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Right to access your data",
                                    "Right to rectification (correction)",
                                    "Right to erasure (to be forgotten)",
                                    "Right to withdraw consent at any time",
                                    "Right to data portability",
                                    "Right to object to processing"
                                ].map((right, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        <span className="text-sm font-semibold">{right}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Contact */}
                    <section className="bg-primary/5 p-8 rounded-3xl border-2 border-primary/10">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="p-6 bg-primary rounded-2xl">
                                <FaEnvelope className="w-10 h-10 text-primary-foreground" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Contact for Data Requests</h2>
                                <p className="text-muted-foreground font-semibold mb-4">
                                    If you have any questions about this policy or want to exercise your rights, please contact us at:
                                </p>
                                <Link
                                    href="mailto:webdevstudiohq@gmail.com"
                                    className="text-primary text-xl font-black tracking-widest hover:underline"
                                >
                                    webdevstudiohq@gmail.com
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-20 pt-8 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                        © 2026 webdevstudioHQ • Designed for global digital safety
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
