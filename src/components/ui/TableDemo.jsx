"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"; // relative path from TableDemo.jsx

const invoices = [
  { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
  { id: "#1284", pname: "Add Payment Gateway API", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
  { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
  { id: "#1284", pname: "Add Payment Gateway API", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
  { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
  { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
    { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
      { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },
        { id: "#1284", pname: "Refactor Auth Middleware", score: "High Risk", lines: "420", status: "Needs Review" , files:"4" },

];

export function TableDemo() {
  return (
    <Table className="shadow-lg overflow x-auto">
      <TableHeader className="bg-black text-white">
        <TableRow className="bg-black text-white">
          <TableHead className="bg-black text-center text-white">Pull Request ID</TableHead>
          <TableHead className="text-center text-white">PR Name</TableHead>
          <TableHead className="text-center text-white">Risk Score</TableHead>
          <TableHead className="text-center text-white">Lines Changed</TableHead>
          <TableHead className="text-center text-white">Status</TableHead>
          <TableHead className="text-center text-white">Files Affected</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium text-center">{invoice.id}</TableCell>
            <TableCell className="text-center">{invoice.pname}</TableCell>
            <TableCell className="text-center">{invoice.score}</TableCell>
            <TableCell className="text-center">{invoice.lines}</TableCell>
            <TableCell className="text-center">{invoice.status}</TableCell>
            <TableCell className="text-center">{invoice.files}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo; // optional: lets you import it as default
