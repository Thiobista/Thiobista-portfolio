"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  ShieldCheckIcon,
  CircleStackIcon,
  CreditCardIcon,
  QrCodeIcon,
  ChartBarIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const HIGHLIGHTS = [
  {
    icon: BuildingOffice2Icon,
    title: "Multi-tenant by design",
    text: "Every query is scoped to the tenant from the auth context; composite foreign keys stop data from leaking between organizations.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Role-based access control",
    text: "JWT access and refresh tokens with granular permissions for Owner, Manager, Receptionist, Trainer and Accountant roles.",
  },
  {
    icon: QrCodeIcon,
    title: "Attendance & check-in",
    text: "Manual, QR, kiosk and API check-ins, validated against the active membership. A partial unique index prevents double check-ins.",
  },
  {
    icon: CreditCardIcon,
    title: "Memberships & payments",
    text: "Membership plans with visit limits, renewals and cancellations, plus payments and refunds in several currencies (ETB, USD, EUR, GBP, KES).",
  },
  {
    icon: ChartBarIcon,
    title: "Reporting dashboard",
    text: "Revenue, membership and attendance reports for owners and managers across all branches.",
  },
  {
    icon: CircleStackIcon,
    title: "Production-minded data layer",
    text: "PostgreSQL 17 with versioned migrations, pgx/v5, soft deletes and constraint-level invariants, covered by Go tests.",
  },
];

const STACK = [
  "Go",
  "Gin",
  "PostgreSQL",
  "pgx/v5",
  "golang-migrate",
  "Docker",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Zod",
  "Tailwind CSS",
];

const FeaturedProject = () => {
  return (
    <section id="featured" className="section-container">
      <p className="text-primary-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 text-center">
        Featured case study
      </p>
      <h2 className="section-heading text-center">GymERP: SaaS ERP for Gyms</h2>
      <p className="body-text text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        A multi-tenant SaaS platform that lets gyms run their whole business in
        one place: members, membership plans, check-ins, payments and
        reporting, across multiple branches.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start"
      >
        <div className="lg:col-span-3 min-w-0">
          <div className="rounded-xl overflow-hidden border border-[#33353F] shadow-2xl">
            <Image
              src="/images/gym-erp.svg"
              alt="GymERP dashboard"
              width={800}
              height={500}
              unoptimized
              className="w-full h-auto"
            />
          </div>

          <div className="card mt-6">
            <h3 className="section-subheading mb-3">Architecture</h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              A modular monolith in Go with a clean{" "}
              <span className="text-white">Handler → Service → Repository</span>{" "}
              layering on PostgreSQL, with no ORM. It exposes a versioned REST API
              (<code className="text-primary-400">/api/v1</code>) with a
              consistent response and error envelope. The Next.js App Router
              frontend uses TanStack Query for server state, React Hook Form
              with Zod for validated forms, and Zustand for session state.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-3 min-w-0">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="info-card">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-400" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  {title}
                </h4>
                <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="https://github.com/Thiobista/GYM-ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <CodeBracketIcon className="w-5 h-5" />
              View Source
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Request a Demo
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
