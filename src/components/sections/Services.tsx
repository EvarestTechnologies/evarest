import { useState } from "react";
import type { FC } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  Code,
  Paintbrush,
  Network,
  Database,
  Shield,
  Cpu,
  Headphones,
  Cloud,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Layers,
  Settings,
  Users,
  UserPlus,
  Briefcase,
} from "lucide-react";

// Define the props for a single service item
interface ServiceItemProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

// Define service categories
interface ServiceCategory {
  id: string;
  name: string;
  services: ServiceItemProps[];
}

// Data for the services organized by categories
const serviceCategories: ServiceCategory[] = [
  {
    id: "development",
    name: "DEVELOPMENT",
    services: [
      {
        icon: Monitor,
        title: "WEB DEVELOPMENT",
        description:
          "At Evarest, we build effective web solutions designed for your specific business requirements. Our engineering team creates custom web development services that strengthen your online presence.",
      },
      {
        icon: Smartphone,
        title: "MOBILE APP DEVELOPMENT",
        description:
          "Evarest specializes in high-quality mobile app development. Our engineering agency helps you apply proven mobile development practices and deliver an exceptional user experience.",
      },
      {
        icon: Server,
        title: "BACKEND DEVELOPMENT",
        description:
          "We improve your software's performance with our backend development services. As a trusted engineering firm, Evarest provides reliable and adaptable workflows for your digital products.",
      },
      {
        icon: Code,
        title: "FRONTEND DEVELOPMENT",
        description:
          "Evarest builds visually appealing and intuitive customer-facing interfaces. We ensure that the front-end component is tuned for performance across all devices and addresses the target users' needs.",
      },
      {
        icon: Paintbrush,
        title: "UI/UX DESIGN",
        description:
          "Our engineering company creates intuitive and user-friendly UI/UX designs for software products. We help keep customers engaged and make their user journey straightforward.",
      },
      {
        icon: Network,
        title: "SOLUTION ARCHITECTURE",
        description:
          "Evarest designs adaptable systems that grow with your business needs. Our solution architecture services ensure your software can meet changing requirements effectively.",
      },
    ],
  },
  {
    id: "implementation",
    name: "IMPLEMENTATION",
    services: [
      {
        icon: Network,
        title: "DEVOPS & AUTOMATION",
        description:
          "Evarest implements automated pipelines that accelerate deployment cycles. We set up CI/CD workflows that reduce manual tasks and boost team productivity.",
      },
      {
        icon: Shield,
        title: "SECURITY IMPLEMENTATION",
        description:
          "We deploy security measures that protect your applications and data. Evarest implements encryption, access controls, and monitoring to prevent breaches.",
      },
      {
        icon: Cpu,
        title: "AI & MACHINE LEARNING",
        description:
          "Evarest integrates AI capabilities into your products to automate tasks. We implement machine learning models that improve decision-making and user experiences.",
      },
      {
        icon: Headphones,
        title: "SUPPORT & MAINTENANCE",
        description:
          "We provide ongoing support to keep your systems running without interruption. Evarest monitors infrastructure, fixes issues, and updates software regularly.",
      },
      {
        icon: Cloud,
        title: "INFRASTRUCTURE DEPLOYMENT",
        description:
          "Evarest builds reliable infrastructure that supports your applications at scale. We configure servers, networks, and databases for optimal uptime and speed.",
      },
      {
        icon: CheckCircle,
        title: "QUALITY ASSURANCE",
        description:
          "We implement testing frameworks that catch bugs before they reach production. Evarest performs automated and manual testing to ensure software quality.",
      },
    ],
  },
  {
    id: "improvement",
    name: "IMPROVEMENT",
    services: [
      {
        icon: Code,
        title: "LEGACY CODE REFACTORING",
        description:
          "Evarest transforms outdated code into maintainable, modern solutions. We restructure legacy systems to reduce technical debt and improve long-term reliability without disrupting operations.",
      },
      {
        icon: Database,
        title: "DATA MIGRATION",
        description:
          "We safely transfer your data between systems with zero loss. Evarest plans and executes migrations that maintain data integrity while minimizing downtime for your business.",
      },
      {
        icon: Sparkles,
        title: "DIGITAL TRANSFORMATION",
        description:
          "Evarest guides your organization through technology adoption that drives growth. We modernize workflows, tools, and systems to increase efficiency and competitive advantage.",
      },
      {
        icon: MessageSquare,
        title: "TECHNICAL CONSULTANCY",
        description:
          "We analyze your technical challenges and recommend practical solutions. Evarest provides expert advice on architecture, technology choices, and strategy to achieve your goals.",
      },
      {
        icon: Layers,
        title: "TECHNOLOGY STACK UPGRADE",
        description:
          "Evarest updates your tech stack to current versions and frameworks. We plan migrations that reduce risk while bringing performance gains and new capabilities.",
      },
      {
        icon: Settings,
        title: "PROCESS OPTIMIZATION",
        description:
          "We identify inefficiencies in your development and operations workflows. Evarest implements improvements that accelerate delivery cycles and reduce costs without sacrificing quality.",
      },
    ],
  },
  {
    id: "collaboration",
    name: "COLLABORATION MODELS",
    services: [
      {
        icon: UserPlus,
        title: "STAFF AUGMENTATION",
        description:
          "Evarest provides skilled engineers who integrate with your existing team. Our specialists join your projects quickly, filling skill gaps and accelerating development without long-term commitments.",
      },
      {
        icon: Users,
        title: "DEDICATED TEAMS",
        description:
          "We provide a dedicated team from Evarest that integrates with your company to work on your projects long-term. Our team collaborates closely with your staff while you maintain full control over priorities and deliverables.",
      },
      {
        icon: Briefcase,
        title: "PROJECT-BASED ENGAGEMENT",
        description:
          "Hire part of our team for specific short-term initiatives with defined scope. Evarest delivers complete projects from planning to deployment, allowing your team to focus on core business.",
      },
    ],
  },
];

// The ServiceItem component
const ServiceItem: FC<ServiceItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-white border border-brand-blue-100 rounded-lg p-8 hover:shadow-card-hover transition-all duration-300 shadow-card">
    <div className="flex items-start gap-4 mb-4">
      <div className="text-brand-blue-500 flex-shrink-0">
        <Icon className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-wide">
          {title}
        </h3>
      </div>
    </div>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// The Services component with tabs
const Services = () => {
  const [activeCategory, setActiveCategory] = useState("development");

  const activeCategoryData = serviceCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-800">Enterprise </span>
            <span className="text-brand-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600">
            We offer a comprehensive suite of services to meet your needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-brand-gray-200">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 font-semibold tracking-wide transition-all duration-300 relative ${
                activeCategory === category.id
                  ? "text-brand-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategoryData?.services.map((service, index) => (
            <ServiceItem key={`${service.title}-${index}`} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
