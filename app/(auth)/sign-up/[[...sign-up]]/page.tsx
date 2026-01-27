import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden text-foreground">
            {/* Background Ornaments */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
                <Image src="/background-ornaments/1.png" alt="ornament" fill className="object-contain -rotate-90" />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                <Image src="/background-ornaments/1.png" alt="ornament" fill className="object-contain rotate-90" />
            </div>

            <div className="w-full max-w-md z-10 space-y-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Image width={50} height={50} src="/images/webdevstudiohq-logo.png" alt="webdevstudioHQ logo" className="object-contain" />
                        <h1 className="text-3xl font-black uppercase tracking-tighter italic">
                            webdevstudio<span className="text-primary">HQ</span>
                        </h1>
                    </Link>
                    <p className="text-muted-foreground font-semibold italic max-w-xs">
                        "Join the club of digital excellence."
                    </p>
                </div>

                <SignUp
                    appearance={{
                        elements: {
                            formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm font-bold uppercase tracking-tighter italic shadow-lg shadow-primary/20",
                            card: "bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl",
                            headerTitle: "text-foreground font-black uppercase tracking-tighter italic",
                            headerSubtitle: "text-muted-foreground font-semibold",
                            socialButtonsBlockButton: "bg-secondary border border-border hover:bg-muted transition-all text-foreground text-foreground",
                            socialButtonsBlockButtonText: "font-semibold text-foreground",
                            formFieldLabel: "text-foreground font-bold uppercase tracking-widest text-[10px]",
                            formFieldInput: "bg-background/50 border-border focus:border-primary transition-all",
                            footerActionLink: "text-primary hover:text-primary/80 font-bold",
                            dividerLine: "bg-border",
                            dividerText: "text-muted-foreground font-bold text-xs uppercase"
                        }
                    }}
                />
            </div>
        </div>
    );
}
