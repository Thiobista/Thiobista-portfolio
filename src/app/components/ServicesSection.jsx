"use client";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="text-white section-container">
      <h2 className="section-heading text-center mb-12">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card">
          <h3 className="section-subheading mb-4">
            Custom Web Application Development
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-muted">
            <li>Backend API using Go (Gin, Fiber, or Echo)</li>
            <li>Frontend SPA or SSR app using Vue/Nuxt or React/Next</li>
            <li>Authentication (JWT, OAuth)</li>
            <li>Responsive UI with Tailwind CSS or similar</li>
            <li>Database integration (PostgreSQL, MongoDB)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="section-subheading mb-4">
            API Design and Integration
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-muted">
            <li>RESTful or GraphQL APIs in Go</li>
            <li>API documentation (Swagger/Postman)</li>
            <li>Integration with frontend (Vue/Nuxt or React/Next)</li>
            <li>Authentication middleware</li>
            <li>Rate limiting and error handling</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="section-subheading mb-4">
            Modernization &amp; Migration of Legacy Systems
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-muted">
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

