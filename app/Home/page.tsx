import React from "react";
import Scene from "@/components/IgrisScene";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#393E46] text-white overflow-hidden">
      <section className="flex items-center justify-between w-full h-screen px-12 gap-16">

        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-12">

            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-800">Himanshu</span>
            </h1>
            <p className="text-2xl text-gray-300 font-light">
              Building intuitive, high-performance web applications
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              I build intuitive, high-performance web applications. My focus is on modern technologies like 
              <span className="font-semibold text-blue-400"> LLMs</span> and 
              <span className="font-semibold text-purple-400"> DevOps</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Passionate about solving real-world problems with elegant code, Data Structures, and Algorithms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-violet-300 rounded-full border border-blue-500/30 hover:border-blue-500 transition">
              DSA Enthusiast
            </span>
            <span className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-blue-300 rounded-full border border-purple-500/30 hover:border-purple-500 transition">
              AI & ML Explorer
            </span>
            <span className="px-4 py-2 text-sm bg-gradient-to-r from-pink-600/20 to-blue-500/20 text-pink-300 rounded-full border border-pink-500/30 hover:border-pink-500 transition">
              Open Source
            </span>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-violet-900 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
        

        <div className="flex-1 h-full rounded-lg overflow-hidden">
          <Scene />
        </div>
      </section>
    </main>
  );
}
