"use client";

import { useProgress, TopicStatus } from "@/lib/progress-context";
import { Circle, Clock, CheckCircle2 } from "lucide-react";

interface TopicStatusButtonProps {
  topicId: string;
  compact?: boolean;
}

const statusConfig: Record<
  TopicStatus,
  {
    label: string;
    next: TopicStatus;
    bgClass: string;
    textClass: string;
    borderClass: string;
  }
> = {
  not_started: {
    label: "Not Started",
    next: "in_progress",
    bgClass: "bg-gray-50 hover:bg-gray-100",
    textClass: "text-gray-500",
    borderClass: "border-gray-200",
  },
  in_progress: {
    label: "In Progress",
    next: "completed",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    textClass: "text-amber-700",
    borderClass: "border-amber-200",
  },
  completed: {
    label: "Completed",
    next: "not_started",
    bgClass: "bg-emerald-50 hover:bg-emerald-100",
    textClass: "text-emerald-700",
    borderClass: "border-emerald-200",
  },
};

const StatusIcon = ({ status }: { status: TopicStatus }) => {
  switch (status) {
    case "not_started":
      return <Circle className="w-4 h-4" />;
    case "in_progress":
      return <Clock className="w-4 h-4" />;
    case "completed":
      return <CheckCircle2 className="w-4 h-4" />;
  }
};

export default function TopicStatusButton({
  topicId,
  compact = false,
}: TopicStatusButtonProps) {
  const { getTopicStatus, setTopicStatus } = useProgress();
  const status = getTopicStatus(topicId);
  const config = statusConfig[status];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopicStatus(topicId, config.next);
  };

  if (compact) {
    return (
      <button
        onClick={handleClick}
        className={`p-1.5 rounded-full transition-colors ${config.bgClass} ${config.textClass}`}
        title={`${config.label} - Click to change`}
      >
        <StatusIcon status={status} />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${config.bgClass} ${config.textClass} ${config.borderClass}`}
      title={`Click to mark as ${statusConfig[config.next].label.toLowerCase()}`}
    >
      <StatusIcon status={status} />
      {config.label}
    </button>
  );
}
