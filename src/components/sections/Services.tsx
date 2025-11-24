import { FC } from "react";
import {
  Cloud,
  Code,
  Brain,
  Shield,
  GitBranch,
  Headphones,
} from "lucide-react";

// Define the props for a single service item
interface ServiceItemProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

// Data for the services
const services: ServiceItemProps[] = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Scalable, secure, and reliable cloud infrastructure to support your business goals.",
  },
  {
    icon: Code,
    title: "Application Development",
    description:
      "Custom web and mobile applications built with modern technologies to deliver great user experiences.",
  },
  {
    icon: Brain,
    title: "Data & AI Engineering",
    description:
      "Unlock the power of your data with our AI and machine learning solutions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Comprehensive security services to protect your data and ensure regulatory compliance.",
  },
  {
    icon: GitBranch,
    title: "DevOps & SRE",
    description:
      "Automate your development pipeline and improve reliability with our DevOps and SRE services.",
  },
  {
    icon: Headphones,
    title: "Managed Services & Support",
    description:
      "24/7 monitoring and support to keep your systems running smoothly.",
  },
];

// The simplified ServiceItem component
const ServiceItem: FC<ServiceItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-brand-blue-500 text-white rounded-full p-4">
        <Icon className="w-8 h-8" />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

// The new, simplified Services component
const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-800">Our </span>
            <span className="text-brand-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600">
            We offer a comprehensive suite of services to meet your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
