"use client";

import { ChitThread } from "@/components/ChitThread";
import { Navigation } from "@/components/Navigation";
import { time } from "console";
import React, { useState } from "react";

interface Chit {
  id: number;
  parentId: number | null;
  user: string;
  content: string;
  referenda: string;
  time: string;
  audioUrl?: string;
  avatar: string;
}

export default function Home() {
  const [chits, setChits] = useState<Chit[]>([
    {
      id: 1,
      parentId: null,
      user: "Brian Norgard",
      content:
        "A man who needs no introduction, welcome Theo Vaughn to AirChat.",
      time: "14h",
      avatar: "/placeholder-user.jpg",
      referenda:
        "#490 Funding Development Costs for Expanding Dot Code School — Interactive Coding School — Bridging the Gap Between Online Learning and Real-World Web3 Development with Local Coding Environments",
    },
    {
      id: 2,
      parentId: 1,
      user: "JT",
      content:
        "Until I hear his voice, or until I see his mullet, I do not believe this is Theo Von.",
      time: "20m",
      avatar: "/placeholder-user2.jpg",
      referenda:
        "#490 Funding Development Costs for Expanding Dot Code School — Interactive Coding School — Bridging the Gap Between Online Learning and Real-World Web3 Development with Local Coding Environments",
    },
    {
      id: 5,
      parentId: 1,
      user: "Batman",
      content: "I am Batman. I am the Dark Knight.",
      time: "20m",
      avatar: "/placeholder-user2.jpg",
      referenda:
        "#490 Funding Development Costs for Expanding Dot Code School — Interactive Coding School — Bridging the Gap Between Online Learning and Real-World Web3 Development with Local Coding Environments",
    },
    {
      id: 3,
      parentId: null,
      user: "Brian Norgard",
      content:
        "I'm of the belief that generative AI is going to usher in the most creative time in human history. That's because all we'll have left is taste.",
      time: "8h",
      avatar: "/placeholder-user.jpg",
      referenda:
        "#490 Funding Development Costs for Expanding Dot Code School — Interactive Coding School — Bridging the Gap Between Online Learning and Real-World Web3 Development with Local Coding Environments",
    },
    {
      id: 4,
      parentId: 3,
      user: "Andrew Gleave",
      content:
        "Agree 100%. We should see a creative explosion if we can automate as much of the drudgery and suffering as possible through the use of AI. When we solve a new problem, we should then try and automate that. Constantly i... Show more",
      time: "2h",
      avatar: "/placeholder-user3.jpg",
      referenda:
        "#490 Funding Development Costs for Expanding Dot Code School — Interactive Coding School — Bridging the Gap Between Online Learning and Real-World Web3 Development with Local Coding Environments",
    },
  ]);

  const handleNewRecording = (audioBlob: Blob, transcript: string) => {
    const newPost = {
      id: Date.now(),
      audio: URL.createObjectURL(audioBlob),
      transcript,
    };
    setChits((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <main className="flex h-screen flex-col items-center p-4 sm:p-24 overflow-hidden">
      <div className="z-10 w-full max-w-md">
        <div className="h-full max-h-screen snap-y overflow-auto pb-8">
          <ChitThread chits={chits} parentId={1} />
          <ChitThread chits={chits} parentId={3} />
          <ChitThread chits={chits} parentId={2} />
          <ChitThread chits={chits} parentId={1} />
          <ChitThread chits={chits} parentId={3} />
          <ChitThread chits={chits} parentId={1} />
          <ChitThread chits={chits} parentId={4} />
          <ChitThread chits={chits} parentId={3} />
          <ChitThread chits={chits} parentId={1} />
          <ChitThread chits={chits} parentId={1} />
          <ChitThread chits={chits} parentId={4} />
          <ChitThread chits={chits} parentId={3} />
          <ChitThread chits={chits} parentId={1} />
        </div>
        <Navigation />
      </div>
    </main>
  );
}
