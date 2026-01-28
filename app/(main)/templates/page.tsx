import Link from "next/link";
import Templates from "../../components/Templates/Templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Templates | webdevstudioHQ",
  description:
    "Browse our collection of professionally designed website templates. Choose from portfolio, SaaS, restaurant, e-commerce, and more.",
};

const TemplatesPage = () => {
  //TODO : When ready isrendering should be deleted and conditional rendering should be deleted too
  const isrendering = false;

  if (!isrendering) {
    return (
      <div
        className={`
          min-h-screen
          ${
            process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
              ? "bg-sap-base-bg"
              : "bg-background"
          }
        `}
      >
        <div className="pt-32 pb-12 px-4">
          <div className="w-[90%] xl:w-[80%] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              <span className="text-primary">Under construction</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        min-h-screen
        ${
          process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
            ? "bg-sap-base-bg"
            : "bg-background"
        }
      `}
    >
      {/* Page Header */}
      <div className="pt-32 pb-12 px-4">
        <div className="w-[90%] xl:w-[80%] mx-auto text-center">
          {process.env.NEXT_PUBLIC_DESIGN_MODE === "sap" ? (
            <>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                Website <span className="text-sap-primary">Templates</span>
              </h1>
              <p className="text-sap-text-secondary text-lg max-w-2xl mx-auto">
                Choose from our collection of professionally designed website
                templates. Each template is fully customizable and ready to
                deploy.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic leading-none mb-4">
                Website{" "}
                <span className="text-primary not-italic">Templates</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                Choose from our collection of professionally designed website
                templates. Each template is fully customizable and ready to
                deploy.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Templates Component */}
      <Templates />

      {/* CTA Section */}
      <section className="py-20">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div
            className={`
              p-12 rounded-3xl text-center
              ${
                process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
                  ? "bg-[#0070f2]"
                  : "bg-primary"
              }
            `}
          >
            <h2
              className={`
                text-3xl md:text-4xl font-bold mb-4
                ${
                  process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
                    ? "text-white"
                    : "text-primary-foreground"
                }
              `}
            >
              Don't See What You're Looking For?
            </h2>
            <p
              className={`
                text-lg mb-8 max-w-2xl mx-auto
                ${
                  process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
                    ? "text-white/80"
                    : "text-primary-foreground/80"
                }
              `}
            >
              We can create a custom template tailored to your specific needs.
              Get in touch and let's build something amazing together.
            </p>
            <Link
              href="/#footer"
              className={`
                inline-block px-8 py-4 font-bold uppercase tracking-wider transition-all
                ${
                  process.env.NEXT_PUBLIC_DESIGN_MODE === "sap"
                    ? "bg-white text-[#0070f2] rounded-md hover:bg-white/90"
                    : "bg-primary-foreground text-primary rounded-xl hover:bg-white hover:shadow-xl"
                }
              `}
            >
              Request Custom Template
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage;
