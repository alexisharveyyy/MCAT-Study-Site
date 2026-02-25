"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { mcatSections, getAllTopicIds } from "@/lib/mcat-data";
import {
  BookOpen,
  BotMessageSquare,
  LogOut,
  BarChart3,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { getCompletionPercentage } = useProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const allIds = getAllTopicIds();
  const overallProgress = getCompletionPercentage(allIds);

  if (!user) return null;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-blue-600" />
              <span className="text-lg font-bold text-gray-900 hidden sm:block">
                MCAT Prep
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {mcatSections.map((section) => (
                <Link
                  key={section.id}
                  href={`/section/${section.id}`}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {section.shortTitle}
                </Link>
              ))}
              <Link
                href="/ask"
                className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors flex items-center gap-1.5"
              >
                <BotMessageSquare className="w-4 h-4" />
                Ask AI
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BarChart3 className="w-4 h-4" />
              <span>{overallProgress}% complete</span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {user.name}
              </span>
            </div>
            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {mcatSections.map((section) => (
              <Link
                key={section.id}
                href={`/section/${section.id}`}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                {section.shortTitle}
              </Link>
            ))}
            <Link
              href="/ask"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              <BotMessageSquare className="w-4 h-4" />
              Ask AI
            </Link>
            <div className="border-t border-gray-100 mt-2 pt-2">
              <div className="px-3 py-2 text-sm text-gray-500">
                {user.name} - {overallProgress}% complete
              </div>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
