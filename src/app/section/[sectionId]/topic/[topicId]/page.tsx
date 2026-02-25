"use client";

import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { mcatSections } from "@/lib/mcat-data";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TopicStatusButton from "@/components/TopicStatusButton";
import {
  ArrowLeft,
  ChevronRight,
  Play,
  FileText,
  ExternalLink,
  BookOpen,
  Search,
} from "lucide-react";

function getYouTubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function getKhanAcademySearchUrl(query: string): string {
  return `https://www.khanacademy.org/search?referer=%2F&page_search_query=${encodeURIComponent(query)}`;
}

export default function TopicPage() {
  const { user, isLoading } = useAuth();
  const { getTopicStatus } = useProgress();
  const router = useRouter();
  const params = useParams();
  const sectionId = params.sectionId as string;
  const topicId = params.topicId as string;

  const [activeTab, setActiveTab] = useState<"overview" | "resources">("overview");

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  const { section, fc, category, topic, topicIndex, allTopics } = useMemo(() => {
    const s = mcatSections.find((s) => s.id === sectionId);
    if (!s) return { section: null, fc: null, category: null, topic: null, topicIndex: -1, allTopics: [] as { id: string; title: string }[] };

    const allT: { id: string; title: string }[] = [];
    let foundFc = null;
    let foundCat = null;
    let foundTopic = null;

    for (const f of s.foundationalConcepts) {
      for (const c of f.categories) {
        for (const t of c.topics) {
          allT.push({ id: t.id, title: t.title });
          if (t.id === topicId) {
            foundFc = f;
            foundCat = c;
            foundTopic = t;
          }
        }
      }
    }

    const idx = allT.findIndex((t) => t.id === topicId);

    return {
      section: s,
      fc: foundFc,
      category: foundCat,
      topic: foundTopic,
      topicIndex: idx,
      allTopics: allT,
    };
  }, [sectionId, topicId]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!section || !topic || !category || !fc) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Topic not found</h1>
          <Link
            href={`/section/${sectionId}`}
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Return to section
          </Link>
        </div>
      </>
    );
  }

  const prevTopic = topicIndex > 0 ? allTopics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1] : null;

  const searchQuery = `MCAT ${topic.title}`;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-6 flex-wrap">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/section/${sectionId}`} className="hover:text-gray-700">
            {section.shortTitle}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-400">{category.code}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium">{topic.title}</span>
        </div>

        {/* Topic Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="px-2 py-0.5 rounded text-xs font-bold text-white"
                  style={{ backgroundColor: section.color }}
                >
                  {category.code}
                </div>
                {topic.course && (
                  <span className="text-xs text-gray-400">{topic.course}</span>
                )}
              </div>
              <h1 className="text-xl font-bold text-gray-900">{topic.title}</h1>
              <p className="text-sm text-gray-500 mt-1">{category.title}</p>
            </div>
            <TopicStatusButton topicId={topic.id} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Overview
            </span>
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "resources"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Play className="w-4 h-4" />
              Videos & Resources
            </span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Category description */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-blue-900 mb-1">
                About This Content Category
              </h3>
              <p className="text-sm text-blue-800">{category.description}</p>
            </div>

            {/* Subtopics */}
            {topic.subtopics.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Subtopics to Study ({topic.subtopics.length})
                  </h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {topic.subtopics.map((sub) => (
                    <div
                      key={sub.id}
                      className="px-5 py-3 flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">
                          {sub.title}
                        </p>
                        {sub.details && sub.details.length > 0 && (
                          <ul className="mt-1.5 space-y-0.5">
                            {sub.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-xs text-gray-500 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:bg-gray-300 before:rounded-full"
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <TopicStatusButton topicId={sub.id} compact />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {topic.subtopics.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  This topic does not have specific subtopics listed. Review the
                  content category description above and use the resources tab
                  for study materials.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "resources" && (
          <div className="space-y-4">
            {/* Quick search links */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Find Study Materials
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Search for videos, articles, and practice problems related to{" "}
                <span className="font-medium text-gray-700">{topic.title}</span>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getKhanAcademySearchUrl(searchQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      Khan Academy
                    </p>
                    <p className="text-xs text-gray-500">
                      Free courses and practice
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-green-500" />
                </a>
                <a
                  href={getYouTubeSearchUrl(searchQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-red-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">YouTube</p>
                    <p className="text-xs text-gray-500">
                      Video lectures and explanations
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-red-500" />
                </a>
              </div>
            </div>

            {/* Recommended search queries */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Suggested Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  topic.title,
                  ...(topic.subtopics.length > 0
                    ? topic.subtopics.slice(0, 6).map((s) => s.title)
                    : []),
                ].map((query, i) => (
                  <a
                    key={i}
                    href={getYouTubeSearchUrl(`MCAT ${query}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    <Search className="w-3 h-3" />
                    {query}
                  </a>
                ))}
              </div>
            </div>

            {/* Helpful resources */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Additional MCAT Resources
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "AAMC MCAT Official Prep",
                    url: "https://students-residents.aamc.org/prepare-mcat-exam/prepare-mcat-exam",
                    desc: "Official AAMC preparation materials",
                  },
                  {
                    name: "Khan Academy MCAT Collection",
                    url: "https://www.khanacademy.org/test-prep/mcat",
                    desc: "Free comprehensive MCAT prep videos",
                  },
                  {
                    name: "MCAT Subreddit",
                    url: "https://www.reddit.com/r/Mcat/",
                    desc: "Community discussions and tips",
                  },
                ].map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {resource.name}
                      </p>
                      <p className="text-xs text-gray-500">{resource.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          {prevTopic ? (
            <Link
              href={`/section/${sectionId}/topic/${prevTopic.id}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevTopic.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          {nextTopic ? (
            <Link
              href={`/section/${sectionId}/topic/${nextTopic.id}`}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <span className="hidden sm:inline">{nextTopic.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href={`/section/${sectionId}`}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Back to {section.shortTitle}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
