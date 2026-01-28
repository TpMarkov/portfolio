"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useDesignMode } from "@/app/context/DesignContext";
import { Template } from "@/app/constants/templates";

interface TemplateCardProps {
  template: Template;
  onSelect?: (template: Template) => void;
  isSelected?: boolean;
  showSelectButton?: boolean;
}

const TemplateCard = ({
  template,
  onSelect,
  isSelected = false,
  showSelectButton = false,
}: TemplateCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { designMode } = useDesignMode();
  const isSap = designMode === "sap";

  return (
    <article
      className={`
        group flex flex-col relative overflow-hidden rounded-lg transition-all duration-300
        ${
          isSap
            ? "bg-sap-white border border-sap-border"
            : "bg-card border border-border"
        }
        ${isSelected ? "ring-2 ring-primary" : ""}
        ${
          isSap
            ? ""
            : "hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1"
        }
      `}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${isSap ? "bg-[#0070f2]" : "bg-primary"}
            `}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Template Image */}
      <Link
        href={template.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-[16/10] overflow-hidden"
      >
        <div
          className={`
            absolute inset-0 transition-opacity duration-300 z-10 flex items-center justify-center
            ${isSap ? "bg-sap-primary/0 opacity-0 group-hover:opacity-100" : "bg-black/40 opacity-0 group-hover:opacity-100"}
          `}
        >
          <span
            className={`
              font-medium text-sm px-4 py-2 border-2 border-white rounded-md backdrop-blur-sm
              ${isSap ? "bg-sap-primary/50" : "bg-black/20"}
              text-white
            `}
          >
            View Demo →
          </span>
        </div>
        <Image
          src={template.img}
          alt={`${template.title} - Template Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`
            object-cover transition-transform duration-500
            ${isSap ? "" : "group-hover:scale-105"}
          `}
        />
      </Link>

      {/* Template Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-2">
          <span
            className={`
              inline-block text-xs font-medium px-2.5 py-1 rounded-full
              ${isSap ? "bg-[#0070f2]/10 text-[#0070f2]" : "bg-primary/10 text-primary"}
            `}
          >
            {template.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            mb-2 line-clamp-1 transition-colors
            ${
              isSap
                ? "text-lg font-semibold text-foreground"
                : "text-xl font-bold text-foreground"
            }
          `}
        >
          {template.title}
        </h3>

        {/* Description */}
        {template.description && (
          <div className="mb-4 flex-grow">
            <p
              className={`
                leading-relaxed text-sm
                ${isSap ? "text-sap-text-secondary" : "text-muted-foreground"}
                ${!isExpanded ? "line-clamp-2" : ""}
              `}
            >
              {template.description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                mt-1 text-sm font-medium flex items-center gap-1 transition-colors
                ${
                  isSap
                    ? "text-sap-primary hover:text-sap-primary-dark"
                    : "text-primary hover:text-primary/80"
                }
              `}
            >
              {isExpanded ? (
                <>
                  Show Less <HiChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More <HiChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Features */}
        <div className="mb-4">
          <p
            className={`
              text-xs mb-2 tracking-wide
              ${
                isSap
                  ? "font-medium text-sap-text-tertiary"
                  : "font-semibold text-muted-foreground uppercase tracking-wider"
              }
            `}
          >
            Features
          </p>
          <div className="flex flex-wrap gap-1.5">
            {template.features.slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className={`
                  px-2 py-0.5 text-xs rounded
                  ${
                    isSap
                      ? "bg-sap-neutral-bg text-sap-text-secondary"
                      : "bg-secondary text-secondary-foreground"
                  }
                `}
              >
                {feature}
              </span>
            ))}
            {template.features.length > 4 && (
              <span
                className={`
                  px-2 py-0.5 text-xs rounded
                  ${
                    isSap
                      ? "bg-sap-neutral-bg text-sap-text-secondary"
                      : "bg-secondary text-secondary-foreground"
                  }
                `}
              >
                +{template.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Price */}
        <div
          className={`
            mt-auto pt-3 border-t
            ${isSap ? "border-sap-border" : "border-border"}
          `}
        >
          <div className="flex items-center justify-between">
            <span
              className={`
                font-semibold
                ${isSap ? "text-[#0070f2]" : "text-primary"}
              `}
            >
              {template.price}
            </span>
            {showSelectButton && onSelect && (
              <button
                onClick={() => onSelect(template)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all
                  ${
                    isSelected
                      ? isSap
                        ? "bg-[#0070f2] text-white"
                        : "bg-primary text-primary-foreground"
                      : isSap
                        ? "bg-sap-neutral-bg text-sap-text-secondary hover:bg-[#0070f2] hover:text-white"
                        : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }
                `}
              >
                {isSelected ? "Selected" : "Select Template"}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
