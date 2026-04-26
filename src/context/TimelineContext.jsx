"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("timeline_interactions");
    if (saved) {
      try {
        setInteractions(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse timeline interactions", e);
      }
    }
  }, []);

  const addInteraction = (interaction) => {
    setInteractions((prev) => {
      const newInteractions = [interaction, ...prev];
      localStorage.setItem("timeline_interactions", JSON.stringify(newInteractions));
      return newInteractions;
    });
  };

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}
