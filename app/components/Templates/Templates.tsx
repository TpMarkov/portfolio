"use client";

import React, { useState } from "react";
import Image from "next/image";
import { templates, categories, Template } from "@/app/constants/templates";
import TemplateCard from "./TemplateCard";
import { useDesignMode } from "@/app/context/DesignContext";

interface TemplatesProps {
  onSelectTemplate?: (template: Template) => void;
  selectedTemplateId?: string;
  showSelectButton?: boolean;
}

const Templates = ({
  onSelectTemplate,
  selectedTemplateId,
  showSelectButton = false,
}: TemplatesProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { designMode } = useDesignMode();
  const isSap = designMode === "sap";

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  const handleSelectTemplate = (template: Template) => {
    if (onSelectTemplate) {
      onSelectTemplate(template);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Asset - Hide in SAP mode */}
      {designMode !== "sap" && (
        <div
          className="absolute bottom-0 left-0 w-full lg:w-[50%] h-full lg:h-[120%] opacity-[0.05] lg:opacity-[0.1] dark:opacity-[0.1] lg:dark:opacity-20 pointer-events-none z-0"
          style={{
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        >
          <Image
            src="/background-ornaments/4.png"
            alt="Global Tech Background"
            fill
            className="object-contain object-center lg:object-left-bottom mix-blend-lighten dark:mix-blend-overlay -rotate-12"
          />
        </div>
      )}

      <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
        {/* Header */}
        {isSap ? (
          /* SAP Design Mode */
          <>
            <div className="max-w-xl mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Website <span className="text-sap-primary">Templates</span>
              </h2>
              <div className="h-1 w-16 bg-sap-primary mb-4"></div>
              <p className="text-sap-text-secondary text-lg">
                Choose from our collection of professionally designed website
                templates. Each template is fully customizable and ready to
                deploy.
              </p>
            </div>
          </>
        ) : (
          /* Original Design Mode */
          <>
            <div className="max-w-xl mb-20">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic leading-none">
                Website{" "}
                <span className="text-primary not-italic">Templates</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary mt-4"></div>
              <p className="text-muted-foreground text-lg mt-4 font-medium">
                Choose from our collection of professionally designed website
                templates. Each template is fully customizable and ready to
                deploy.
              </p>
            </div>
          </>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div
            className={`
              flex flex-wrap gap-2 p-2 rounded-xl
              ${isSap ? "bg-sap-neutral-bg" : "bg-card border border-border"}
            `}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-lg transition-all
                  ${
                    activeCategory === category
                      ? isSap
                        ? "bg-[#0070f2] text-white shadow-md"
                        : "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : isSap
                        ? "text-sap-text-secondary hover:bg-sap-white"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={handleSelectTemplate}
              isSelected={selectedTemplateId === template.id}
              showSelectButton={showSelectButton}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <p
              className={`
                text-lg
                ${isSap ? "text-sap-text-secondary" : "text-muted-foreground"}
              `}
            >
              No templates found in this category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        {showSelectButton && (
          <div
            className={`
              mt-12 p-8 rounded-2xl text-center
              ${isSap ? "bg-[#0070f2]" : "bg-primary"}
            `}
          >
            <h3
              className={`
                text-2xl font-bold mb-2
                ${isSap ? "text-white" : "text-primary-foreground"}
              `}
            >
              {selectedTemplateId
                ? "Template Selected!"
                : "Can't find what you're looking for?"}
            </h3>
            <p
              className={`
                mb-6
                ${isSap ? "text-white/80" : "text-primary-foreground/80"}
              `}
            >
              {selectedTemplateId
                ? "Fill out the quote form and we'll customize this template for you."
                : "We can create a custom template tailored to your specific needs."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Templates;
