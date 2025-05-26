"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useScaffoldReadContract } from "~~/hooks/scaffold-stark/useScaffoldReadContract";
import { useAccount } from "~~/hooks/useAccount";

const emotionData = [
  { time: "01", Joy: 0.2, Gratitude: 0.1, Hope: 0.15, Stress: 0.12, Sadness: 0.08, Anger: 0.07 },
  { time: "02", Joy: 0.3, Gratitude: 0.2, Hope: 0.18, Stress: 0.15, Sadness: 0.09, Anger: 0.09 },
  { time: "03", Joy: 0.25, Gratitude: 0.18, Hope: 0.17, Stress: 0.13, Sadness: 0.1, Anger: 0.08 },
  { time: "04", Joy: 0.28, Gratitude: 0.22, Hope: 0.19, Stress: 0.14, Sadness: 0.07, Anger: 0.1 },
  { time: "05", Joy: 0.22, Gratitude: 0.15, Hope: 0.16, Stress: 0.11, Sadness: 0.09, Anger: 0.06 },
  { time: "06", Joy: 0.32, Gratitude: 0.25, Hope: 0.2, Stress: 0.16, Sadness: 0.08, Anger: 0.09 },
  { time: "07", Joy: 0.27, Gratitude: 0.19, Hope: 0.18, Stress: 0.13, Sadness: 0.1, Anger: 0.07 },
];

const aiInsights = [
  "You tend to feel more joy and gratitude on weekends.",
  "Stress levels are higher at the beginning of the week.",
  "Hope and gratitude often increase together.",
  "Anger and sadness are at their lowest on Saturdays.",
];

const DashboardDetails = () => {
  const [activeTab, setActiveTab] = useState("Trends");
  const [calendarValue, setCalendarValue] = useState(new Date());
  const { address: connectedAddress } = useAccount();

  const { data: emotionCount } = useScaffoldReadContract({
    contractName: "EmotionJournal",
    functionName: "get_emotion_count",
    args: []
  });

  const { data: userEmotionCount } = useScaffoldReadContract({
    contractName: "EmotionJournal",
    functionName: "get_user_emotion_count",
    args: [connectedAddress || "0x0"]
  });

  // Calculate metrics
  const totalEntries = Number(emotionCount || 0);
  const userEntries = Number(userEmotionCount || 0);
  const avgWordsPerEntry = totalEntries > 0 ? Math.round(1000 / totalEntries) : 0;
  const streak = Math.min(7, totalEntries); // Simulated streak

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5EFF5] via-[#E6D5E6] to-[#9CE0DB] p-8">
      {/* Título y descripción */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-[#81638B]">Professional Analytics Dashboard</h1>
        <p className="text-lg text-[#4B5563]">Advanced emotional intelligence insights powered by AI</p>
      </div>
      {/* Tarjetas de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#81638B]">{totalEntries}</span>
          <span className="text-gray-600">Total Entries</span>
          <span className="text-xs text-gray-400 mt-2">Goal: 30 entries</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#5DC1B9]">{userEntries}</span>
          <span className="text-gray-600">Your Entries</span>
          <span className="text-xs text-gray-400 mt-2">Goal: 10 entries</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#81638B]">{avgWordsPerEntry}</span>
          <span className="text-gray-600">Avg Words/Entry</span>
          <span className="text-xs text-gray-400 mt-2">Target: 500 words</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#FFD600]">{streak}</span>
          <span className="text-gray-600">Streak</span>
          <span className="text-xs text-gray-400 mt-2">Best: 10 days</span>
        </div>
      </div>
      {/* Emotional Intelligence Analytics con barra superior y tabs */}
      <div className="bg-white rounded-2xl shadow p-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#81638B] mb-1">Emotional Intelligence Analytics</h2>
            <p className="text-sm text-[#4B5563]">Advanced AI analysis of your emotional patterns with blockchain verification</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#5DC1B9] text-sm font-medium">⚡ Real-time Analysis</span>
            <button className="px-4 py-2 bg-gradient-to-r from-[#81638B] to-[#5DC1B9] text-white rounded-xl font-medium text-sm shadow">View Blockchain Proof</button>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["Trends", "Calendar", "AI Insights"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                activeTab === tab
                  ? "bg-[#E6D5E6] text-[#81638B]"
                  : "bg-gray-100 text-gray-500 hover:bg-[#F5EFF5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Contenido de cada tab */}
        <div className="h-64 flex items-center justify-center text-gray-400 w-full">
          {activeTab === "Trends" && (
            <div className="w-full text-center">
              <p className="text-lg text-[#81638B]">Start recording your emotions to see trends</p>
              <p className="text-sm text-gray-500 mt-2">Your emotional patterns will be analyzed here</p>
            </div>
          )}
          {activeTab === "Calendar" && (
            <div className="w-full flex justify-center">
              <Calendar value={calendarValue} onChange={setCalendarValue} className="border-none" />
            </div>
          )}
          {activeTab === "AI Insights" && (
            <div className="w-full flex flex-col items-center text-center text-[#81638B]">
              <h4 className="text-lg font-semibold mb-4">AI Insights</h4>
              <p className="text-sm text-gray-500">Start recording your emotions to get personalized insights</p>
            </div>
          )}
        </div>
      </div>
      {/* Distribución y patrones semanales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-xl font-semibold text-[#81638B] mb-4">Emotion Distribution</h3>
          <div className="text-center py-8">
            <p className="text-gray-500">Start recording your emotions to see distribution</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-xl font-semibold text-[#81638B] mb-4">Weekly Patterns</h3>
          <div className="text-center py-8">
            <p className="text-gray-500">Start recording your emotions to see patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails; 