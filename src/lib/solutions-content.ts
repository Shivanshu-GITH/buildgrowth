import {
  UserPlus,
  CalendarCheck,
  ReceiptText,
  GraduationCap,
  CalendarRange,
  MessagesSquare,
  Wallet,
  BarChart3,
  Stethoscope,
  ClipboardList,
  Pill,
  Boxes,
  BellRing,
  ScanLine,
  Store,
  Truck,
  Users,
  Factory,
  PackageCheck,
  ClipboardCheck,
  Coins,
  type LucideIcon,
} from "lucide-react";
import { type FAQ } from "./services-content";

export interface SolutionModule {
  title: string;
  body: string;
  icon: LucideIcon;
}

export interface SolutionContent {
  slug: string;
  title: string;
  h1: string;
  sub: string;
  industry: string;
  modules: SolutionModule[];
  benefits: { title: string; body: string }[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const solutionsContent: Record<string, SolutionContent> = {
  "school-management-system": {
    slug: "school-management-system",
    title: "School ERP",
    h1: "The complete management system for modern schools.",
    sub: "Admissions, attendance, fees, exams, timetables and parent communication — one platform, accessible from anywhere.",
    industry: "schools",
    modules: [
      { title: "Admissions", body: "Online enquiry to enrolment, with documents and approvals tracked in one place.", icon: UserPlus },
      { title: "Attendance", body: "Daily student and staff attendance with instant absence alerts to parents.", icon: CalendarCheck },
      { title: "Fees & GST billing", body: "Automated fee schedules, online payments, receipts and reminders.", icon: ReceiptText },
      { title: "Exams & report cards", body: "Marks entry, grading and printable report cards generated automatically.", icon: GraduationCap },
      { title: "Timetable", body: "Class and teacher scheduling with clash detection.", icon: CalendarRange },
      { title: "Parent app & WhatsApp", body: "Keep parents updated on attendance, fees, results and notices.", icon: MessagesSquare },
      { title: "Staff & payroll", body: "Manage staff records, leave and salary in the same system.", icon: Wallet },
      { title: "Reports", body: "Live dashboards for management — admissions, collections and performance.", icon: BarChart3 },
    ],
    benefits: [
      { title: "Cut admin work", body: "Automate fee collection, attendance and report cards so staff focus on teaching." },
      { title: "Happier parents", body: "Real-time updates over an app and WhatsApp build trust and reduce calls." },
      { title: "One source of truth", body: "Every department works from the same live data — no more scattered registers." },
    ],
    faqs: [
      { q: "Can you migrate our existing student data?", a: "Yes. We import your current records from spreadsheets or your old system as part of setup." },
      { q: "Is there a parent app?", a: "Yes — parents get updates on attendance, fees, results and notices via an app and WhatsApp." },
      { q: "Can it handle multiple branches?", a: "Absolutely. The system supports multiple branches with consolidated reporting for management." },
      { q: "How long to go live?", a: "A typical school is up and running within a few weeks, including data migration and staff training." },
    ],
    metaTitle: "School Management System / School ERP",
    metaDescription:
      "A complete school management system — admissions, attendance, fees, exams, timetables and a parent app. Book a free demo with Brandforge.",
  },

  "clinic-management-system": {
    slug: "clinic-management-system",
    title: "Clinic Management",
    h1: "Run your clinic without the paperwork.",
    sub: "Appointments, patient records, billing and prescriptions in one secure system — built for clinics and small hospitals.",
    industry: "clinics",
    modules: [
      { title: "Appointments", body: "Online and front-desk booking with a clear daily schedule for every doctor.", icon: CalendarCheck },
      { title: "Patient records (EMR)", body: "Secure digital history, notes and documents for every patient.", icon: ClipboardList },
      { title: "Billing & GST", body: "Fast invoicing, payments and GST-ready receipts at checkout.", icon: ReceiptText },
      { title: "Prescriptions", body: "Generate and print clean, professional prescriptions in seconds.", icon: Stethoscope },
      { title: "Pharmacy & inventory", body: "Track medicine stock, expiry and reorder levels automatically.", icon: Pill },
      { title: "WhatsApp reminders", body: "Cut no-shows with automated appointment reminders and follow-ups.", icon: BellRing },
      { title: "Inventory", body: "Manage consumables and equipment across the clinic.", icon: Boxes },
      { title: "Reports", body: "See revenue, footfall and doctor-wise performance at a glance.", icon: BarChart3 },
    ],
    benefits: [
      { title: "Fewer no-shows", body: "Automated WhatsApp reminders keep your schedule full and predictable." },
      { title: "Faster front desk", body: "Booking, records and billing in one place means shorter queues." },
      { title: "Secure & compliant", body: "Patient data is encrypted, access-controlled and backed up." },
    ],
    faqs: [
      { q: "Is patient data secure?", a: "Yes. Records are encrypted, access is role-based, and data is backed up regularly on secure infrastructure." },
      { q: "Can multiple doctors use it?", a: "Yes — each doctor gets their own schedule and login, with the front desk managing everything centrally." },
      { q: "Does it handle pharmacy stock?", a: "Yes, including medicine inventory, expiry tracking and low-stock alerts." },
      { q: "Can patients book online?", a: "Yes — you can enable online booking that syncs straight into your clinic schedule." },
    ],
    metaTitle: "Clinic & Hospital Management System",
    metaDescription:
      "A secure clinic management system — appointments, patient records, billing, prescriptions and WhatsApp reminders. Book a free demo with Brandforge.",
  },

  "retail-inventory-system": {
    slug: "retail-inventory-system",
    title: "Retail & Inventory",
    h1: "Sell faster and never lose track of stock.",
    sub: "A point-of-sale and inventory system that handles billing, stock, GST and reporting — across one shop or many.",
    industry: "retail businesses",
    modules: [
      { title: "POS billing", body: "Fast, simple checkout with barcode scanning and multiple payment modes.", icon: Store },
      { title: "Inventory & stock", body: "Live stock levels with low-stock and reorder alerts.", icon: Boxes },
      { title: "GST invoicing", body: "Compliant invoices and returns-ready reports out of the box.", icon: ReceiptText },
      { title: "Barcode & labels", body: "Generate barcodes and print price labels in bulk.", icon: ScanLine },
      { title: "Suppliers & purchases", body: "Track purchase orders, suppliers and payments.", icon: Truck },
      { title: "Customer loyalty", body: "Capture customers and run points or discount programs.", icon: Users },
      { title: "Multi-store", body: "Manage several outlets with consolidated stock and sales.", icon: Store },
      { title: "Reports", body: "Know your best sellers, margins and daily cash at a glance.", icon: BarChart3 },
    ],
    benefits: [
      { title: "No more stockouts", body: "Real-time inventory and reorder alerts keep shelves and sales healthy." },
      { title: "Faster checkout", body: "Barcode billing speeds up queues and reduces errors." },
      { title: "Clear numbers", body: "See sales, margins and stock value across every outlet, live." },
    ],
    faqs: [
      { q: "Does it work for multiple shops?", a: "Yes — manage multiple outlets with separate stock and consolidated reporting for the owner." },
      { q: "Is it GST compliant?", a: "Yes, invoices and reports are GST-ready, making filing straightforward." },
      { q: "Can it run on existing hardware?", a: "It works with standard barcode scanners, printers and any modern computer or tablet." },
      { q: "Can I track supplier payments?", a: "Yes — purchase orders, suppliers and outstanding payments are all tracked in the system." },
    ],
    metaTitle: "Retail POS & Inventory Management System",
    metaDescription:
      "A retail POS and inventory system with GST billing, barcode, multi-store stock and reporting. Book a free demo with Brandforge.",
  },

  "manufacturing-erp": {
    slug: "manufacturing-erp",
    title: "Manufacturing",
    h1: "From raw material to dispatch, fully tracked.",
    sub: "A manufacturing ERP that ties production, inventory, orders and costing into one clear, real-time system.",
    industry: "manufacturers",
    modules: [
      { title: "Production planning", body: "Plan and schedule production runs against orders and capacity.", icon: Factory },
      { title: "Raw material inventory", body: "Track raw materials, work-in-progress and finished goods.", icon: Boxes },
      { title: "Order & dispatch", body: "Manage sales orders through to packing and dispatch.", icon: PackageCheck },
      { title: "Bill of materials", body: "Define BOMs so material needs and costs are calculated automatically.", icon: ClipboardList },
      { title: "Procurement", body: "Raise purchase orders and track suppliers and deliveries.", icon: Truck },
      { title: "Quality checks", body: "Record quality checks at each stage and flag rejections.", icon: ClipboardCheck },
      { title: "Costing", body: "See true cost per unit across material, labour and overheads.", icon: Coins },
      { title: "Reports", body: "Live dashboards on output, inventory value and order status.", icon: BarChart3 },
    ],
    benefits: [
      { title: "Full visibility", body: "Know exactly where every order and material stands, in real time." },
      { title: "Lower waste", body: "Accurate BOMs and inventory cut over-ordering and shortages." },
      { title: "Know your costs", body: "Real costing per unit means you price with confidence." },
    ],
    faqs: [
      { q: "Can it match our production process?", a: "Yes — we map your specific process and build the workflow around it, not the other way around." },
      { q: "Does it handle bill of materials?", a: "Yes, including multi-level BOMs with automatic material and cost calculation." },
      { q: "Can it connect to accounting?", a: "We can integrate with your accounting tools so invoices and costs flow through automatically." },
      { q: "How long does implementation take?", a: "It varies with complexity, but we work in phases so you see value early rather than waiting months." },
    ],
    metaTitle: "Manufacturing ERP Software",
    metaDescription:
      "A manufacturing ERP covering production, inventory, BOM, procurement, quality and costing in one system. Book a free demo with Brandforge.",
  },
};

export const solutionSlugs = Object.keys(solutionsContent);
