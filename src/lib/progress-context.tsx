"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useAuth } from "./auth-context";

export type TopicStatus = "not_started" | "in_progress" | "completed";

interface ProgressData {
  [topicId: string]: TopicStatus;
}

interface ProgressContextType {
  progress: ProgressData;
  setTopicStatus: (topicId: string, status: TopicStatus) => void;
  getTopicStatus: (topicId: string) => TopicStatus;
  getCompletionPercentage: (topicIds: string[]) => number;
  getCompletedCount: (topicIds: string[]) => number;
  getInProgressCount: (topicIds: string[]) => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: {},
  setTopicStatus: () => {},
  getTopicStatus: () => "not_started",
  getCompletionPercentage: () => 0,
  getCompletedCount: () => 0,
  getInProgressCount: () => 0,
  resetProgress: () => {},
});

function getStorageKey(email: string) {
  return `mcat-progress-${email}`;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressData>({});

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(getStorageKey(user.email));
      if (stored) {
        try {
          setProgress(JSON.parse(stored));
        } catch {
          setProgress({});
        }
      } else {
        setProgress({});
      }
    } else {
      setProgress({});
    }
  }, [user]);

  const saveProgress = useCallback(
    (data: ProgressData) => {
      if (user) {
        localStorage.setItem(getStorageKey(user.email), JSON.stringify(data));
      }
    },
    [user]
  );

  const setTopicStatus = useCallback(
    (topicId: string, status: TopicStatus) => {
      setProgress((prev) => {
        const next = { ...prev, [topicId]: status };
        saveProgress(next);
        return next;
      });
    },
    [saveProgress]
  );

  const getTopicStatus = useCallback(
    (topicId: string): TopicStatus => {
      return progress[topicId] || "not_started";
    },
    [progress]
  );

  const getCompletedCount = useCallback(
    (topicIds: string[]): number => {
      return topicIds.filter((id) => progress[id] === "completed").length;
    },
    [progress]
  );

  const getInProgressCount = useCallback(
    (topicIds: string[]): number => {
      return topicIds.filter((id) => progress[id] === "in_progress").length;
    },
    [progress]
  );

  const getCompletionPercentage = useCallback(
    (topicIds: string[]): number => {
      if (topicIds.length === 0) return 0;
      const completed = getCompletedCount(topicIds);
      return Math.round((completed / topicIds.length) * 100);
    },
    [getCompletedCount]
  );

  const resetProgress = useCallback(() => {
    setProgress({});
    if (user) {
      localStorage.removeItem(getStorageKey(user.email));
    }
  }, [user]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        setTopicStatus,
        getTopicStatus,
        getCompletionPercentage,
        getCompletedCount,
        getInProgressCount,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
