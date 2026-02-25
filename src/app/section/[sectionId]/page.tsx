"use client";

import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { mcatSections, ContentCategory, FoundationalConcept } from "@/lib/mcat-data";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProgressRing from "@/components/ProgressRing";
import TopicStatusButton from "@/components/TopicStatusButton";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  GraduationCap,
} from "lucide-react";

function getCategoryTopicIds(cat: ContentCategory): string[] {
  const ids: string[] = [];
  for (const topic of cat.topics) {
    ids.push(topic.id);
    for (const sub of topic.subtopics) {
      ids.push(sub.id);
    }
  }
  return ids;
}

function getFcTopicIds(fc: FoundationalConcept): string[] {
  const ids: string[] = [];
  for (const cat of fc.categories) {
    ids.push(...getCategoryTopicIds(cat));
  }
  return ids;
}

export default function SectionPage() {
  const { user, isLoading } = useAuth();
  const { getCompletionPercentage, getCompletedCount } = useProgress();
  const router = useRouter();
  const params = useParams();
  const sectionId = params.sectionId as string;

  const [expandedFc, setExpandedFc] = useState<string | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  const section = mcatSections.find((s) => s.id === sectionId);

  useEffect(() => {
    if (section && section.foundationalConcepts.length > 0) {
      setExpandedFc(section.foundationalConcepts[0].id);
    }
  }, [section]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!section) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Section not found</h1>
          <Link href="/dashboard" className="text-blue-600 hover:underline mt-4 inline-block">
            Return to dashboard
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: section.color }}
                />
                <span className="text-sm font-medium text-gray-500">
                  {section.shortTitle}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {section.title}
              </h1>
              <p className="text-gray-500 mt-2 max-w-3xl">{section.description}</p>
            </div>
          </div>
        </div>

        {/* Section info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {section.questionCount} Questions
              </p>
              <p className="text-xs text-gray-500">{section.timeMinutes} minutes</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {section.foundationalConcepts.length}{" "}
                {section.id === "cars" ? "Skill Areas" : "Foundational Concepts"}
              </p>
              <p className="text-xs text-gray-500">
                {section.foundationalConcepts.reduce(
                  (acc, fc) => acc + fc.categories.length,
                  0
                )}{" "}
                content categories
              </p>
            </div>
          </div>
          {section.disciplines && (
            <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Disciplines</p>
                <p className="text-xs text-gray-500">
                  {section.disciplines.map((d) => d.name).join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Discipline breakdown */}
        {section.disciplines && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Question Distribution by Discipline
            </h3>
            <div className="space-y-3">
              {section.disciplines.map((d) => (
                <div key={d.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{d.name}</span>
                    <span className="font-medium text-gray-900">{d.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${d.percentage}%`,
                        backgroundColor: section.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Foundational Concepts */}
        <div className="space-y-4">
          {section.foundationalConcepts.map((fc) => {
            const fcIds = getFcTopicIds(fc);
            const fcProgress = getCompletionPercentage(fcIds);
            const fcCompleted = getCompletedCount(fcIds);
            const isExpanded = expandedFc === fc.id;

            return (
              <div
                key={fc.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFc(isExpanded ? null : fc.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <ProgressRing
                      percentage={fcProgress}
                      size={48}
                      strokeWidth={4}
                      color={section.color}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-0.5">
                        {fc.number > 0
                          ? `Foundational Concept ${fc.number}`
                          : "Skills Overview"}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {fc.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {fcCompleted}/{fcIds.length} topics completed
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100">
                    <div className="p-5 bg-gray-50 text-sm text-gray-600">
                      {fc.description}
                    </div>
                    <div className="divide-y divide-gray-100">
                      {fc.categories.map((cat) => {
                        const catIds = getCategoryTopicIds(cat);
                        const catProgress = getCompletionPercentage(catIds);
                        const catCompleted = getCompletedCount(catIds);
                        const isCatExpanded = expandedCat === cat.id;

                        return (
                          <div key={cat.id}>
                            <button
                              onClick={() =>
                                setExpandedCat(isCatExpanded ? null : cat.id)
                              }
                              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                                  style={{ backgroundColor: section.color }}
                                >
                                  {cat.code}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-gray-900">
                                    {cat.title}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {catCompleted}/{catIds.length} topics |{" "}
                                    {catProgress}% complete
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-24 bg-gray-100 rounded-full h-1.5 hidden sm:block">
                                  <div
                                    className="h-1.5 rounded-full transition-all"
                                    style={{
                                      width: `${catProgress}%`,
                                      backgroundColor: section.color,
                                    }}
                                  />
                                </div>
                                {isCatExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-gray-400" />
                                )}
                              </div>
                            </button>

                            {isCatExpanded && (
                              <div className="bg-gray-50 px-5 pb-4">
                                <p className="text-xs text-gray-500 mb-3 pl-11">
                                  {cat.description}
                                </p>
                                <div className="space-y-1 pl-11">
                                  {cat.topics.map((topic) => (
                                    <Link
                                      key={topic.id}
                                      href={`/section/${sectionId}/topic/${topic.id}`}
                                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-all group"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                                          {topic.title}
                                        </p>
                                        {topic.course && (
                                          <p className="text-xs text-gray-400">
                                            {topic.course}
                                          </p>
                                        )}
                                        {topic.subtopics.length > 0 && (
                                          <p className="text-xs text-gray-400">
                                            {topic.subtopics.length} subtopics
                                          </p>
                                        )}
                                      </div>
                                      <TopicStatusButton
                                        topicId={topic.id}
                                        compact
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
