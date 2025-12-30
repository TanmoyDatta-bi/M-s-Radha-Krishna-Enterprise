
import React from 'react';
import { 
  Shield, 
  Settings, 
  Calendar, 
  Award, 
  Building2, 
  Zap, 
  Cpu, 
  FileText, 
  BarChart3, 
  Wrench, 
  Lightbulb, 
  Factory,
  Hammer,
  Drill,
  MonitorCheck,
  Thermometer,
  Layers,
  FlameKindling,
  Video
} from 'lucide-react';
import { Service, Project, ClientProject, ToolCategory } from './types';

export const SERVICES: Service[] = [
  {
    title: "PCC, MCC & LT Panel Execution",
    description: "Supply, erection, and commissioning for diverse industrial applications.",
    icon: "Cpu"
  },
  {
    title: "Panel Design & Manufacturing",
    description: "Custom PCC/MCC/APFC panels built to exact industrial specifications.",
    icon: "FileText"
  },
  {
    title: "APFC Panels (LT & MV)",
    description: "Expert design and commissioning for power factor correction systems.",
    icon: "Zap"
  },
  {
    title: "Fire Protection & Detection Systems",
    description: "Comprehensive fire safety solutions including smoke detection and alarm systems.",
    icon: "FlameKindling"
  },
  {
    title: "CCTV Surveillance Systems",
    description: "High-definition security monitoring and surveillance for industrial assets.",
    icon: "Video"
  },
  {
    title: "Power Factor Consultancy",
    description: "Professional consultancy services to optimize energy costs and efficiency.",
    icon: "BarChart3"
  },
  {
    title: "AMC of APFC Panels",
    description: "Comprehensive annual maintenance to keep PF consistently above 0.99.",
    icon: "Shield"
  },
  {
    title: "Panel Retrofitting Services",
    description: "Upgrading legacy panels for improved safety, reliability, and efficiency.",
    icon: "Wrench"
  },
  {
    title: "Industrial & Commercial Works",
    description: "Complete electrical wiring and installation for malls and factories.",
    icon: "Factory"
  },
  {
    title: "Interior & Office Lighting",
    description: "High-efficiency LED lighting design and expert execution.",
    icon: "Lightbulb"
  },
  {
    title: "Electrical Maintenance",
    description: "On-site system modification and support for active running plants.",
    icon: "Settings"
  }
];

export const PROJECTS: Project[] = [
  { title: "Process Plants", category: "Industrial Automation", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { title: "Automation Plants", category: "System Integration", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { title: "Anode Handling Systems", category: "Heavy Electrical", imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
  { title: "Automated Foundries", category: "Factory Automation", imageUrl: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&q=80&w=800" },
  { title: "UHT & Dairy Plants", category: "Plant Electricals", imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bcadc65f?auto=format&fit=crop&q=80&w=800" },
  { title: "Sand Plant Systems", category: "Infrastructure", imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" }
];

export const CLIENT_LOGOS = [
  "TCS Ltd", "Keventer Agro", "Coca-Cola (Bengal Beverage)", "Nicco Park", "ITC Ltd", "Ambuja Neotia", "Wevin Pvt Ltd"
];

export const CLIENT_PROJECTS: ClientProject[] = [
  { name: "CESC Ltd (Sub-vendor)", value: "₹75 Crore" },
  { name: "Metro Dairy Ltd", value: "₹90 Lac" },
  { name: "Baidyabati Municipality", value: "₹70 Lac" },
  { name: "TCS Ltd", value: "₹42 Lac" },
  { name: "Keventer Agro", value: "₹35 Lac" },
  { name: "Nicco Park", value: "₹28 Lac" },
  { name: "ITC Ltd", value: "₹15 Lac" }
];

export const TOOLS: ToolCategory[] = [
  {
    title: "Welding & Cutting",
    icon: "Hammer",
    items: [{ name: "Welding sets" }, { name: "Power saws" }, { name: "Angle grinders" }]
  },
  {
    title: "Drilling",
    icon: "Drill",
    items: [{ name: "Hammer drills" }, { name: "Machinery drills" }]
  },
  {
    title: "Testing Equipment",
    icon: "MonitorCheck",
    items: [
      { name: "Megger (1000V & 2500V)" },
      { name: "Earth Resistance Tester" },
      { name: "Clamp & Capacitance Meters" },
      { name: "Temperature Gun" },
      { name: "Airflow Meter" }
    ]
  },
  {
    title: "Installation Tools",
    icon: "Layers",
    items: [{ name: "Crimping Tools (Up to 400 sq mm)" }]
  }
];

export const STATUTORY = [
  "PAN / GST Registered",
  "PF & ESI Compliant",
  "Professional Tax Registered",
  "MSME Registered",
  "Electrical Contractor License"
];
