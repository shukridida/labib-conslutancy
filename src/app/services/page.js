"use client";

import React from "react";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <ul className="text-lg space-y-4">
        
        <li>💰 Payroll Services</li>
        <li>📑 Financial Statements</li>
        <li>📊 BOOK KEEPING SERVICES
            <ul className="list-disc ml-6 space-y-2">
              <li>Bank reconciliation</li>
              <li>Inventory management</li>
              <li>Payroll processing</li>
              <li>Financial statements</li>
              <li>Accounts payable and receivable management</li>
            </ul>
        
        </li>
        <li>📝 TAX SERVICES
            <ul className="list-disc ml-6 space-y-2">
              <li>Tax filing</li>
              <li>Tax registration and amendment</li>
              <li>Tax advisory</li>
              <li>Tax compliance certificate application</li>
              <li>Company registration</li>
              <li>E-citizen service</li>
            </ul>
          </li>
        
      </ul>
    </div>
  );
}
