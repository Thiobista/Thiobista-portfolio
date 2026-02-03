"use client";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="text-white py-16">
      <h2 className="text-center text-4xl font-bold mb-12">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
          <h3 className="text-2xl font-semibold mb-4">
            Custom Web Application Development
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-[#ADB7BE]">
            <li>Backend API using Go (Gin, Fiber, or Echo)</li>
            <li>Frontend SPA or SSR app using Vue/Nuxt or React/Next</li>
            <li>Authentication (JWT, OAuth)</li>
            <li>Responsive UI with Tailwind CSS or similar</li>
            <li>Database integration (PostgreSQL, MongoDB)</li>
          </ul>
        </div>
        <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
          <h3 className="text-2xl font-semibold mb-4">
            API Design and Integration
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-[#ADB7BE]">
            <li>RESTful or GraphQL APIs in Go</li>
            <li>API documentation (Swagger/Postman)</li>
            <li>Integration with frontend (Vue/Nuxt or React/Next)</li>
            <li>Authentication middleware</li>
            <li>Rate limiting and error handling</li>
          </ul>
        </div>
        <div className="bg-[#181818] rounded-xl p-6 border border-[#33353F]">
          <h3 className="text-2xl font-semibold mb-4">
            Modernization &amp; Migration of Legacy Systems
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-[#ADB7BE]">
            <li>Migrate legacy PHP/Node/Rails backend to Go</li>
            <li>
              Migrate jQuery or plain HTML/CSS frontend to Vue/Nuxt or
              React/Next
            </li>
            <li>Improve performance and maintainability</li>
            <li>Deploy to cloud (Docker, CI/CD pipelines)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

