import { Link, useLocation } from "wouter";
import { BarChart2, Award, FileText } from "lucide-react";

export default function Sidebar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black" >WhatBytes</h1>
      </div>

      <nav className="space-y-2">
        <Link href="/">
          <a className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            isActive("/") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}>
            <BarChart2 className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </Link>
        <Link href="/skill-test">
          <a className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            isActive("/skill-test") ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
          }`}>
            <Award className="w-5 h-5" />
            <span>Skill Test</span>
          </a>
        </Link>
        <Link href="/internship">
          <a className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            isActive("/internship") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
          }`}>
            <FileText className="w-5 h-5" />
            <span>Internship</span>
          </a>
        </Link>
      </nav>
    </div>
  );
}