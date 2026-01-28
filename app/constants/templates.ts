export interface Template {
  id: string;
  title: string;
  url: string;
  img: string;
  description: string;
  category: string;
  features: string[];
  price: string;
}

export const templates: Template[] = [
  {
    id: "portfolio-minimal",
    title: "Portfolio Minimal",
    url: "https://portfolio-minimal-demo.vercel.app",
    img: "/images/portfolio-minimal.png",
    description:
      "A clean, minimal portfolio template perfect for designers, photographers, and creatives. Features smooth animations and a focus on visual content.",
    category: "Portfolio",
    features: [
      "Responsive Design",
      "GSAP Animations",
      "Dark Mode",
      "Contact Form",
      "Project Gallery",
    ],
    price: "Starting at $299",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    url: "https://saas-landing-demo.vercel.app",
    img: "/images/saas-landing.png",
    description:
      "A high-converting landing page template for SaaS products. Includes pricing tables, feature sections, and testimonials.",
    category: "SaaS",
    features: [
      "Conversion Optimized",
      "Pricing Tables",
      "Feature Sections",
      "Testimonials",
      "CTA Buttons",
    ],
    price: "Starting at $399",
  },
  {
    id: "restaurant",
    title: "Restaurant & Cafe",
    url: "https://restaurant-demo.vercel.app",
    img: "/images/restaurant.png",
    description:
      "An elegant restaurant website template with menu display, table reservations, and online ordering capabilities.",
    category: "Restaurant",
    features: [
      "Menu Display",
      "Table Reservation",
      "Online Ordering",
      "Gallery",
      "Reviews",
    ],
    price: "Starting at $449",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    url: "https://ecommerce-store-demo.vercel.app",
    img: "/images/ecommerce-store.png",
    description:
      "A full-featured e-commerce template with product listings, cart functionality, and checkout integration.",
    category: "E-commerce",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout Flow",
      "User Accounts",
      "Order Tracking",
    ],
    price: "Starting at $699",
  },
  {
    id: "blog-magazine",
    title: "Blog & Magazine",
    url: "https://blog-magazine-demo.vercel.app",
    img: "/images/blog-magazine.png",
    description:
      "A modern blog and magazine template with multiple layout options, categories, and newsletter integration.",
    category: "Blog",
    features: [
      "Multiple Layouts",
      "Categories",
      "Newsletter Signup",
      "Social Sharing",
      "SEO Optimized",
    ],
    price: "Starting at $349",
  },
  {
    id: "business-corporate",
    title: "Business Corporate",
    url: "https://business-corporate-demo.vercel.app",
    img: "/images/business-corporate.png",
    description:
      "A professional corporate website template for businesses. Includes team pages, services, and case studies.",
    category: "Corporate",
    features: [
      "Team Pages",
      "Services Section",
      "Case Studies",
      "Testimonials",
      "Contact Forms",
    ],
    price: "Starting at $399",
  },
  {
    id: "event-landing",
    title: "Event Landing Page",
    url: "https://event-landing-demo.vercel.app",
    img: "/images/event-landing.png",
    description:
      "A striking event landing page template for conferences, workshops, and webinars with registration functionality.",
    category: "Events",
    features: [
      "Event Schedule",
      "Speaker Profiles",
      "Registration Form",
      "Countdown Timer",
      "FAQ Section",
    ],
    price: "Starting at $299",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    url: "https://real-estate-demo.vercel.app",
    img: "/images/real-estate.png",
    description:
      "A comprehensive real estate website template with property listings, search filters, and agent profiles.",
    category: "Real Estate",
    features: [
      "Property Listings",
      "Search Filters",
      "Agent Profiles",
      "Map Integration",
      "Inquiry Forms",
    ],
    price: "Starting at $499",
  },
];

export const categories = [
  "All",
  "Portfolio",
  "SaaS",
  "Restaurant",
  "E-commerce",
  "Blog",
  "Corporate",
  "Events",
  "Real Estate",
];
