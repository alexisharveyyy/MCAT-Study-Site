"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { mcatSections, getAllTopicIds, ExamSection } from "@/lib/mcat-data";
import ProgressRing from "./ProgressRing";
import {
  ArrowRight,
  BookOpen,
  Circle,
  Clock,
  CheckCircle2,
  Target,
  Layers,
} from "lucide-react";

function getSectionTopicIds(section: ExamSection): string[] {
  const ids: string[] = [];
  for (const fc of section.foundationalConcepts) {
    for (const cat of fc.categories) {
      for (const topic of cat.topics) {
        ids.push(topic.id);
        for (const sub of topic.subtopics) {
          ids.push(sub.id);
        }
      }
    }
  }
  return ids;
}

export default function Dashboard() {
  const { user } = useAuth();
  const { getCompletionPercentage, getCompletedCount, getInProgressCount } =
    useProgress();

  const allIds = getAllTopicIds();
  const overallProgress = getCompletionPercentage(allIds);
  const totalCompleted = getCompletedCount(allIds);
  const totalInProgress = getInProgressCount(allIds);
  const totalTopics = allIds.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-500 mt-1">
          Track your MCAT preparation progress across all sections.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {overallProgress}%
              </p>
              <p className="text-xs text-gray-500">Overall Progress</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {totalCompleted}
              </p>
              <p className="text-xs text-gray-500">Topics Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {totalInProgress}
              </p>
              <p className="text-xs text-gray-500">In Progress</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalTopics}</p>
              <p className="text-xs text-gray-500">Total Topics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Overall Progress
          </h2>
          <span className="text-sm text-gray-500">
            {totalCompleted} of {totalTopics} topics
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* How to track progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8 flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5 text-gray-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            How to track your progress
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Open any section below, then expand a foundational concept and content
            category to see individual topics. Each topic and subtopic has a status
            button you can click to cycle through
            <span className="inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-500">
              <Circle className="w-3 h-3" /> Not Started
            </span>
            <span className="inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 bg-amber-50 border border-amber-200 rounded text-xs font-medium text-amber-700">
              <Clock className="w-3 h-3" /> In Progress
            </span>
            <span className="inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded text-xs font-medium text-emerald-700">
              <CheckCircle2 className="w-3 h-3" /> Completed
            </span>
            -- your progress is saved automatically.
          </p>
        </div>
      </div>

      {/* Section Cards */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Exam Sections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mcatSections.map((section) => {
          const sectionIds = getSectionTopicIds(section);
          const sectionProgress = getCompletionPercentage(sectionIds);
          const sectionCompleted = getCompletedCount(sectionIds);
          const sectionTotal = sectionIds.length;
          const conceptCount = section.foundationalConcepts.length;

          return (
            <Link
              key={section.id}
              href={`/section/${section.id}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: section.color }}
                  />
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {section.shortTitle}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 mt-1 leading-tight">
                    {section.title}
                  </h3>
                </div>
                <ProgressRing
                  percentage={sectionProgress}
                  size={56}
                  strokeWidth={5}
                  color={section.color}
                />
              </div>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {section.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {conceptCount}{" "}
                    {section.id === "cars"
                      ? "skill areas"
                      : "foundational concepts"}
                  </span>
                  <span>
                    {sectionCompleted}/{sectionTotal} topics
                  </span>
                  <span>
                    {section.questionCount} questions / {section.timeMinutes} min
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
