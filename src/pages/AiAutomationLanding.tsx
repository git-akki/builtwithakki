import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Bot, 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Server, 
  Brain, 
  TrendingUp, 
  Sparkles, 
  Users, 
  LayoutDashboard, 
  GitBranch, 
  Database, 
  Network,
  HelpCircle,
  Power,
  Cpu,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar, Cell } from "recharts";

// Custom theme wrapper to enforce OpenClaw colors locally
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="openclaw-theme min-h-screen bg-background text-foreground selection:bg-orange-500/20 selection:text-orange-200 font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --font-sans: 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        .openclaw-theme {
          --primary: 16 96% 57%; /* #FF5722 */
          --primary-foreground: 0 0% 100%;
          --background: 240 10% 3.9%; /* Zinc 950 */
          --foreground: 0 0% 98%;
          --card: 240 10% 3.9%;
          --card-foreground: 0 0% 98%;
          --popover: 240 10% 3.9%;
          --popover-foreground: 0 0% 98%;
          --muted: 240 3.7% 15.9%;
          --muted-foreground: 240 5% 64.9%;
          --accent: 240 3.7% 15.9%;
          --accent-foreground: 0 0% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 0 0% 98%;
          --border: 240 3.7% 15.9%;
          --input: 240 3.7% 15.9%;
          --ring: 16 96% 57%;
          --radius: 0.75rem;
        }
        
        .font-sans { font-family: var(--font-sans); }
        .font-mono { font-family: var(--font-mono); }
        
        .glass-card {
            background: rgba(24, 24, 27, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card:hover {
            border-color: rgba(255, 87, 34, 0.2);
            background: rgba(24, 24, 27, 0.6);
        }
        
        .text-glow {
            text-shadow: 0 0 30px rgba(255, 87, 34, 0.3);
        }

        .grid-mask {
            mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }
      `}</style>
      {children}
    </div>
  );
};

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] grid-mask" />
    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-orange-500/5 opacity-40 blur-[120px]" />
  </div>
);

const WorkflowVisual = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md overflow-hidden shadow-2xl ring-1 ring-white/5 group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-zinc-900/50 border border-orange-500/30 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,87,34,0.2)] backdrop-blur-md">
        <div className="w-16 h-16 rounded-full bg-zinc-950 border border-orange-500/20 flex items-center justify-center animate-pulse relative z-10">
          <Cpu className="w-8 h-8 text-orange-500" />
        </div>
        {/* Orbiting particles */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-orange-500/30"
        />
      </div>

      {/* Connection Lines - Radiating from Center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <defs>
          <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
            <circle cx="2" cy="2" r="2" className="fill-orange-500" />
          </marker>
        </defs>
        {/* Top Line */}
        <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="currentColor" className="text-orange-500/50" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        {/* Bottom Line */}
        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="currentColor" className="text-orange-500/50" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        {/* Left Line */}
        <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="currentColor" className="text-orange-500/50" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        {/* Right Line - Ensuring perfect alignment with the node dot */}
        <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" className="text-orange-500/50" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        
        {/* Center Glow */}
        <circle cx="50%" cy="50%" r="80" stroke="currentColor" className="text-orange-500/10" fill="none" />
      </svg>

      {/* Connected Nodes */}
      {[
        { icon: Server, label: "Data", pos: { top: '15%', left: '50%' }, dotPos: 'bottom' },
        { icon: LayoutDashboard, label: "Admin", pos: { top: '85%', left: '50%' }, dotPos: 'top' },
        { icon: Users, label: "Teams", pos: { top: '50%', left: '15%' }, dotPos: 'right' },
        { icon: TrendingUp, label: "Scale", pos: { top: '50%', left: '85%' }, dotPos: 'left' }
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center z-10 shadow-xl group/node hover:border-orange-500/50 transition-colors"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          style={{
            top: item.pos.top,
            left: item.pos.left,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <item.icon className="w-6 h-6 text-zinc-400 group-hover/node:text-orange-400 transition-colors" />
          
          {/* Connection Dot */}
          <div className="absolute w-2 h-2 rounded-full bg-orange-500 border border-zinc-950 z-20 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
               style={{
                 top: item.dotPos === 'bottom' ? '100%' : item.dotPos === 'top' ? '0%' : '50%',
                 left: item.dotPos === 'right' ? '100%' : item.dotPos === 'left' ? '0%' : '50%',
                 transform: 'translate(-50%, -50%)'
               }}
          />
        </motion.div>
      ))}

      {/* Floating Status Badge */}
      <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-zinc-400 flex items-center gap-2 z-30">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        SYSTEM_ACTIVE
      </div>
    </div>
  );
}

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
    <BackgroundGrid />
    
    <div className="container relative z-10 px-4 mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer as any}
          className="text-left space-y-8 max-w-2xl"
        >
          <motion.div variants={fadeInUp as any}>
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-400 backdrop-blur-xl ring-1 ring-inset ring-orange-500/10">
              <span className="tracking-wide">Enterprise-Grade AI Automation</span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp as any}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Stop Burning Budget.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 text-glow">Start Scaling Operations.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp as any}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-lg"
          >
            Enterprise AI automation that actually works. We fix the <span className="text-zinc-200 font-normal">$1M token mistakes</span> and build systems that scale.
          </motion.p>

          <motion.div variants={fadeInUp as any} className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 text-base rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]" 
              onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Automating
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all backdrop-blur-sm" 
              onClick={() => document.getElementById('mistakes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See The Mistakes
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <WorkflowVisual />
        </motion.div>
      </div>
    </div>
  </section>
);

const Mistake = () => (
  <section id="mistakes" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-red-500/5 z-0" />
    <div className="container px-4 mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full opacity-50 pointer-events-none" />
          <SpotlightCard className="bg-black/80 border-red-500/20 backdrop-blur-md overflow-hidden" spotlightColor="rgba(239, 68, 68, 0.15)">
            {/* Terminal Header */}
            <div className="h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] font-mono text-zinc-500">root@server:~/logs</div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs space-y-3 h-[320px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
              
              <div className="text-zinc-500">
                <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> tail -f /var/log/openai-usage.log
              </div>
              
              <div className="space-y-1 opacity-80">
                <div className="flex gap-2 text-zinc-400">
                  <span className="text-zinc-600">[10:42:01]</span>
                  <span>Initiating request...</span>
                </div>
                <div className="flex gap-2 text-red-400">
                  <span className="text-zinc-600">[10:42:02]</span>
                  <span>WARNING: Context window exceeded (128k)</span>
                </div>
                <div className="flex gap-2 text-red-400">
                  <span className="text-zinc-600">[10:42:03]</span>
                  <span>ERROR: Rate limit near capacity</span>
                </div>
                <div className="flex gap-2 text-zinc-400">
                  <span className="text-zinc-600">[10:42:03]</span>
                  <span>Retrying with full history upload...</span>
                </div>
                <div className="flex gap-2 text-red-400">
                  <span className="text-zinc-600">[10:42:05]</span>
                  <span>CRITICAL: Cost spike detected ($12.50/req)</span>
                </div>
                {/* Simulated scrolling text */}
                 {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex gap-2 text-red-400/80">
                     <span className="text-zinc-600">[{10 + i}:42:{10+i}]</span>
                     <span>Auth_Error: Token leakage detected in plain text</span>
                  </div>
                 ))}
              </div>

              {/* Floating Alert */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-red-950/90 border border-red-500/30 p-4 rounded-lg backdrop-blur-md z-20 shadow-2xl"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <h4 className="text-red-200 font-bold mb-1">Critical System Failure</h4>
                    <p className="text-red-400/80 text-[10px] leading-relaxed">
                      Unoptimized architecture detected. Immediate shutdown recommended to prevent budget depletion.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-400 mb-6 tracking-wide">
            <AlertTriangle className="mr-2 h-3.5 w-3.5" />
            <span>System Alert</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
            Is Your AI Investment <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Bleeding Money?</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
            We recently onboarded a client who burned <strong className="text-white font-medium">$1 million in tokens</strong> before their system even connected to Telegram.
          </p>

          <div className="space-y-4">
             <ul className="space-y-3">
                {[
                  "Zero security protocols (exposing sensitive data)",
                  "Single LLM handling everything (no cost optimization)",
                  "Loading 2-3 million tokens per heartbeat",
                  "Entire session histories uploaded with every prompt",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <XCircle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const InefficiencyTax = () => {
  return (
    <section className="py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container px-4 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Visual Side (Left) */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative">
                        {/* Main Card - Cost Monitor */}
                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
                             {/* Header */}
                             <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-sm font-mono text-zinc-400">Live Cost Monitor</span>
                                </div>
                                <div className="text-xs font-mono text-zinc-500">ID: #TAX-92</div>
                             </div>

                             {/* Body */}
                             <div className="p-8">
                                <div className="mb-8">
                                    <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Current Burn Rate</span>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-4xl lg:text-5xl font-bold text-white">$2,400.00</span>
                                        <span className="text-red-500 font-mono text-sm">/mo</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-red-400 text-xs bg-red-500/10 w-fit px-2 py-1 rounded border border-red-500/20">
                                        <ArrowUpRight className="w-3 h-3" />
                                        <span>+1233% vs Optimized</span>
                                    </div>
                                </div>

                                {/* Progress Bars */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-zinc-400">Token Wasted</span>
                                            <span className="text-red-400">92%</span>
                                        </div>
                                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[92%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-zinc-400">Redundant Calls</span>
                                            <span className="text-orange-400">85%</span>
                                        </div>
                                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-[85%]" />
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>

                        {/* Floating Card - Alert */}
                         <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 -bottom-8 bg-zinc-950 border border-red-500/30 p-4 rounded-xl shadow-2xl max-w-[200px]"
                        >
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                <div>
                                    <div className="text-red-200 text-sm font-bold mb-1">Inefficiency Detected</div>
                                    <div className="text-zinc-500 text-xs">System running at 8% efficiency.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Text Side (Right) */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                     <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-400 mb-6 tracking-wide">
                        <AlertTriangle className="mr-2 h-3.5 w-3.5" />
                        <span>The Hidden Cost</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Inefficiency Tax</span><br/>
                        On Your Business
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                        Most businesses are paying a <strong className="text-white font-medium">92% premium</strong> on every AI operation. It's not just money—it's speed, reliability, and scalability burning away.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Unoptimized Context", desc: "Sending entire chat history for simple 'yes/no' questions." },
                            { title: "Model Mismatch", desc: "Using GPT-4 ($30/1M) for tasks requiring GPT-3.5 ($0.50/1M)." },
                            { title: "Zero Caching", desc: "Paying to regenerate the same answer 100 times a day." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <XCircle className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-200 font-bold mb-1">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const OptimizationFramework = () => (
  <section id="framework" className="py-32 relative overflow-hidden bg-zinc-950">
     {/* Background Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50" />
    
    <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Side (Left) */}
             <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-sm font-medium text-orange-400 mb-6 backdrop-blur-md">
                    <GitBranch className="w-4 h-4 mr-2" />
                    Our Solution
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Smart Routing <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Architecture</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                    We don't just "hook up an API". We build an intelligent layer that routes every request to the perfect model for the job.
                </p>

                <div className="space-y-4">
                    {[
                        { icon: Brain, title: "Intent Recognition", text: "AI analyzes the complexity of every prompt before processing." },
                        { icon: GitBranch, title: "Dynamic Routing", text: "Simple tasks go to fast models. Complex reasoning goes to smart models." },
                        { icon: Database, title: "Smart Caching", text: "Instant answers for repeated questions, zero cost." }
                    ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-zinc-800 group-hover:bg-orange-500/10 transition-colors">
                                    <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-200 font-bold mb-1">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

            {/* Visual Side (Right) - Routing Diagram */}
            <div className="w-full lg:w-1/2">
                <div className="relative">
                     {/* Diagram Card */}
                     <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden min-h-[500px] flex items-center justify-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                        <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-12">
                            {/* Input Node */}
                            <div className="relative z-20 w-48 p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-center shadow-lg">
                                <div className="text-xs text-zinc-500 mb-1">Incoming Request</div>
                                <div className="text-zinc-200 font-mono text-sm">User Prompt</div>
                                {/* Packet Origin Point */}
                                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-transparent" id="packet-start" />
                            </div>

                            {/* Router Node */}
                            <div className="relative z-20">
                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] relative">
                                    <GitBranch className="w-8 h-8 text-white" />
                                    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                                </div>
                            </div>

                            {/* Connecting Lines (SVG Layer) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
                                {/* Vertical Line: Input -> Router */}
                                <line x1="50%" y1="60" x2="50%" y2="120" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                                
                                {/* Branching Lines: Router -> Models */}
                                <path d="M 50% 180 C 50% 250, 15% 250, 15% 320" fill="none" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                                <path d="M 50% 180 C 50% 250, 50% 250, 50% 320" fill="none" stroke="#3f3f46" strokeWidth="2" strokeOpacity="0.5" />
                                <path d="M 50% 180 C 50% 250, 85% 250, 85% 320" fill="none" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />

                                {/* Animated Packet - Moving on the Center Path (Balanced) */}
                                <motion.circle 
                                    r="4" 
                                    fill="#f97316"
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        repeatDelay: 1 
                                    }}
                                    style={{
                                        offsetPath: "path('M 50% 60 L 50% 180 C 50% 250, 50% 250, 50% 320')",
                                        offsetRotate: "0deg"
                                    }}
                                />
                            </svg>

                            {/* Model Layer */}
                            <div className="grid grid-cols-3 gap-4 w-full relative z-20">
                                {/* Model 1: Fast */}
                                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center opacity-50">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                                        <Zap className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="text-xs font-bold text-zinc-300">Fast</div>
                                    <div className="text-[10px] text-zinc-500 mt-1">$0.25/1M</div>
                                </div>

                                {/* Model 2: Balanced (Active Target) */}
                                <motion.div 
                                    animate={{ 
                                        borderColor: ["rgba(249,115,22,0.2)", "rgba(249,115,22,0.6)", "rgba(249,115,22,0.2)"],
                                        boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 20px rgba(249,115,22,0.2)", "0 0 0 rgba(0,0,0,0)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="p-4 rounded-xl bg-zinc-900 border border-orange-500/30 text-center relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-orange-500/5" />
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                                        <Brain className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="text-xs font-bold text-white">Balanced</div>
                                    <div className="text-[10px] text-zinc-400 mt-1">$3.00/1M</div>
                                </motion.div>

                                {/* Model 3: Smart */}
                                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center opacity-50">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                                        <Cpu className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div className="text-xs font-bold text-zinc-300">Smart</div>
                                    <div className="text-[10px] text-zinc-500 mt-1">$15.00/1M</div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  </section>
);

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Executive AI Assistant",
      target: "For C-Suite & Founders",
      description: "Orchestrates calendar, triages email, manages research briefs, and supports strategic decisions.",
      roi: "15-20 hours/week reclaimed",
      icon: Users,
      visual: (
        <div className="space-y-3">
             <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                    <div className="h-2 w-24 bg-zinc-700 rounded mb-1" />
                    <div className="h-1.5 w-16 bg-zinc-800 rounded" />
                </div>
                <div className="text-xs text-blue-400 font-mono">Just now</div>
             </div>
             <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 flex items-center gap-3 opacity-60">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                     <div className="w-2 h-2 bg-purple-500 rounded-full" />
                </div>
                <div className="flex-1">
                    <div className="h-2 w-32 bg-zinc-700 rounded mb-1" />
                    <div className="h-1.5 w-20 bg-zinc-800 rounded" />
                </div>
                <div className="text-xs text-zinc-500 font-mono">1h ago</div>
             </div>
              <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 flex items-center gap-3 opacity-40">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                     <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1">
                    <div className="h-2 w-20 bg-zinc-700 rounded mb-1" />
                    <div className="h-1.5 w-12 bg-zinc-800 rounded" />
                </div>
                <div className="text-xs text-zinc-500 font-mono">2h ago</div>
             </div>
        </div>
      )
    },
    {
      title: "Business Ops Manager",
      target: "For Operations Teams",
      description: "Handles customer service, CRM updates, report generation, and cross-platform workflows 24/7.",
      roi: "3x capacity without hiring",
      icon: LayoutDashboard,
      visual: (
          <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50">
                  <div className="text-xs text-zinc-500 mb-2">Tickets Solved</div>
                  <div className="text-2xl font-bold text-white">1,248</div>
                  <div className="text-[10px] text-green-500 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +12%
                  </div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50">
                  <div className="text-xs text-zinc-500 mb-2">Avg. Response</div>
                  <div className="text-2xl font-bold text-white">45s</div>
                  <div className="text-[10px] text-green-500 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> -85%
                  </div>
              </div>
               <div className="col-span-2 bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50">
                  <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-400">System Status</span>
                      <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">All Systems Operational</span>
                  </div>
                  <div className="h-1 bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full" />
                  </div>
               </div>
          </div>
      )
    },
    {
      title: "Agent-Based CEO System",
      target: "For Multi-Location Ops",
      description: "Manages multiple sites, coordinates sub-agents, and provides executive oversight for complex orgs.",
      roi: "Replaces entire management layer",
      icon: Network,
      visual: (
           <div className="relative h-full min-h-[200px] flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full border border-orange-500/20 animate-[spin_10s_linear_infinite]" />
                   <div className="w-48 h-48 rounded-full border border-zinc-700/30 absolute animate-[spin_15s_linear_infinite_reverse]" />
               </div>
               <div className="relative z-10 text-center">
                   <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                       <Bot className="w-8 h-8 text-white" />
                   </div>
                   <div className="text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                       Master Node Active
                   </div>
               </div>
               {/* Satellites */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-8 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center">
                   <Users className="w-3 h-3 text-zinc-400" />
               </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-8 h-8 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center">
                   <LayoutDashboard className="w-3 h-3 text-zinc-400" />
               </div>
           </div>
      )
    }
  ];

  return (
    <section className="py-32 relative bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-zinc-950/0 to-zinc-950/0" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Build For You</h2>
          <p className="text-xl text-zinc-400 font-light">Custom AI architectures designed for your specific operational bottlenecks.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Navigation (Left) */}
            <div className="w-full lg:w-1/2 space-y-4">
                {services.map((service, i) => (
                    <div 
                        key={i}
                        onClick={() => setActiveService(i)}
                        className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                            activeService === i 
                            ? "bg-zinc-900/80 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]" 
                            : "bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700"
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 p-2 rounded-lg transition-colors ${activeService === i ? "bg-orange-500/20 text-orange-500" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 transition-colors ${activeService === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                                    {service.title}
                                </h3>
                                <p className="text-xs text-orange-400/80 font-mono mb-2 uppercase tracking-wider">{service.target}</p>
                                <p className={`text-sm leading-relaxed transition-colors ${activeService === i ? "text-zinc-300" : "text-zinc-500"}`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Visual Display (Right) */}
            <div className="w-full lg:w-1/2">
                <div className="sticky top-32">
                    <div className="relative aspect-square md:aspect-[4/3] bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm p-8 flex items-center justify-center">
                         {/* Dynamic Background */}
                         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-50" />
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                         
                         {/* Content Transition */}
                         <motion.div
                            key={activeService}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 w-full"
                         >
                            {services[activeService].visual}
                         </motion.div>

                         {/* Bottom Info */}
                         <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950/80 to-transparent border-t border-zinc-800/50 backdrop-blur-md">
                             <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                     <TrendingUp className="w-4 h-4 text-green-500" />
                                 </div>
                                 <div>
                                     <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Estimated Impact</div>
                                     <div className="text-sm text-zinc-200 font-mono">{services[activeService].roi}</div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      industry: "SaaS Company",
      metric: "92% Cost Reduction",
      challenge: "$2,400/mo AI costs limiting scale",
      solution: "Multi-model routing + context optimization",
      result: "$180/mo",
      description: "We implemented a smart routing layer that directs simple queries to smaller models and complex reasoning to larger ones.",
      quote: "We went from limiting AI usage to deploying it everywhere. The ROI was immediate.",
      author: "VP of Operations"
    },
    {
      industry: "E-Commerce Brand",
      metric: "100% Automation",
      challenge: "Support eating 40+ hrs/week of founder time",
      solution: "Business Manager Agent with Slack integration",
      result: "40hrs/wk Saved",
      description: "Deployed an autonomous agent that handles all L1 support tickets and escalates only critical issues to Slack.",
      quote: "It's like hiring a team member who never sleeps and costs less than Netflix.",
      author: "Founder & CEO"
    },
    {
      industry: "Multi-Location Service",
      metric: "10M+ Tokens Saved",
      challenge: "Massive token leak preventing system usage",
      solution: "Security overhaul and caching implementation",
      result: "10M Tokens",
      description: "Audit revealed redundant context injection. We implemented semantic caching and context window optimization.",
      quote: "They found problems we didn't even know we had. Now we're running efficiently.",
      author: "Business Owner"
    },
    {
      industry: "Premium Salon Brand",
      metric: "₹20,000+/mo Revenue Protected",
      challenge: "Manual phone and WhatsApp booking causing missed calls, double bookings, and owner time drain.",
      solution: "Smart appointment automation system that acts as a digital receptionist with zero running cost.",
      result: "Zero Running Cost System",
      description:
        "Built a smart booking system for a premium salon that lets customers book 24×7, auto-assigns available barbers, prevents double bookings, and updates schedules in real time. The architecture runs with no monthly SaaS fees or per-booking commission, recovering even 1–2 missed customers per day and protecting over ₹20,000 in monthly revenue while reducing operational stress.",
      quote:
        "We stopped losing customers to missed calls and manual mistakes. The system feels like a full-time receptionist that never sleeps and never adds to payroll.",
      author: "Salon Owner"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: Content & Nav */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Proven Results <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Across Industries</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light">
                Real outcomes from our deployed agent systems.
              </p>
            </div>

            <div className="space-y-4">
              {stories.map((story, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveStory(i)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    activeStory === i 
                    ? "bg-zinc-900/80 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]" 
                    : "bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`font-bold transition-colors ${activeStory === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                      {story.industry}
                    </h3>
                    {activeStory === i && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] uppercase tracking-wider font-medium">
                        Viewing
                      </span>
                    )}
                  </div>
                  <p className={`text-sm transition-colors ${activeStory === i ? "text-zinc-300" : "text-zinc-500"}`}>
                    {story.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Detail Card */}
          <div className="w-full lg:w-1/2">
             <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40" />
                
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-8 min-h-[400px] flex flex-col">
                  {/* Content Transition */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="mb-8">
                        <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-4">
                          {stories[activeStory].metric}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {stories[activeStory].result}
                        </h3>
                        <p className="text-zinc-500 text-sm uppercase tracking-wider font-mono">
                          Impact Achieved
                        </p>
                      </div>

                      <div className="space-y-6 flex-grow">
                        <div>
                          <h4 className="text-sm font-bold text-zinc-300 mb-1 flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-500" /> Challenge
                          </h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {stories[activeStory].challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-300 mb-1 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" /> Solution
                          </h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {stories[activeStory].description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-zinc-800">
                        <blockquote className="italic text-zinc-300 text-sm leading-relaxed">
                          "{stories[activeStory].quote}"
                        </blockquote>
                        <div className="mt-2 text-zinc-500 text-xs font-mono">
                          — {stories[activeStory].author}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => (
  <section className="py-24 relative overflow-hidden bg-zinc-900/30">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-zinc-950/50" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    
    <div className="container px-4 mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
            <Zap className="w-3 h-3" />
            Rapid Deployment
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            From Chaos to Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">in Just 14 Days</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
            We don't do 6-month consulting gigs. We deploy production-grade AI infrastructure in two-week sprints. Fast, efficient, and immediately valuable.
          </p>
          
          <div className="space-y-6 pt-4">
            {[
              { title: "No Long Onboarding", desc: "We plug into your existing stack." },
              { title: "Production Ready", desc: "Enterprise-grade security & monitoring included." },
              { title: "Full Training", desc: "We teach your team how to drive." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-bold">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual - Pipeline Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40" />
          
          <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-xs font-mono text-zinc-500">deployment_pipeline.yml</div>
            </div>

            {/* Pipeline Steps */}
            <div className="p-8 space-y-8">
               {/* Step 1: Completed */}
               <div className="relative pl-8 border-l border-green-500/30">
                 <div className="absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-wider">Week 1</span>
                   <span className="text-green-500 text-xs flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Done</span>
                 </div>
                 <h4 className="text-zinc-200 font-bold text-lg mb-1">Discovery & Architecture</h4>
                 <p className="text-zinc-500 text-sm">Security audit, token forensics, and multi-model strategy design.</p>
               </div>

               {/* Step 2: Active */}
               <div className="relative pl-8 border-l border-orange-500/50">
                 <div className="absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-orange-500 border-2 border-zinc-900 shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse" />
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">Week 2</span>
                   <span className="text-orange-500 text-xs flex items-center gap-1 animate-pulse">Processing...</span>
                 </div>
                 <h4 className="text-zinc-100 font-bold text-lg mb-1">Implementation</h4>
                 <div className="space-y-2 mt-3">
                    <div className="bg-zinc-800/50 rounded p-2 text-xs font-mono text-zinc-400 flex justify-between">
                      <span>&gt; Building agent routing...</span>
                      <span className="text-green-400">OK</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded p-2 text-xs font-mono text-zinc-400 flex justify-between">
                      <span>&gt; Optimizing context window...</span>
                      <span className="text-green-400">OK</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded p-2 text-xs font-mono text-zinc-400 flex justify-between border border-orange-500/20 bg-orange-500/5">
                      <span className="text-orange-300">&gt; Integrating tools...</span>
                      <span className="animate-spin">⟳</span>
                    </div>
                 </div>
               </div>

               {/* Step 3: Pending */}
               <div className="relative pl-8 border-l border-zinc-800">
                 <div className="absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-900" />
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-zinc-600 font-mono text-xs font-bold uppercase tracking-wider">Handoff</span>
                   <span className="text-zinc-600 text-xs">Pending</span>
                 </div>
                 <h4 className="text-zinc-500 font-bold text-lg mb-1">Training & Scale</h4>
                 <p className="text-zinc-600 text-sm">Dashboard setup, team SOPs, and performance monitoring.</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ROISection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-zinc-950" />
    <div className="container px-4 mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider mb-6">
            <TrendingUp className="w-3 h-3" />
            High Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Invest Once. <br />
            <span className="text-white">Save Forever.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
             Most agencies charge a retainer for "maintenance". We build autonomous systems that maintain themselves. Your ROI starts month 1.
          </p>

          <div className="grid grid-cols-2 gap-6">
             <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
               <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Payback Period</div>
               <div className="text-2xl font-bold text-white font-mono">3.5 Months</div>
             </div>
             <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
               <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">First Year ROI</div>
               <div className="text-2xl font-bold text-green-400 font-mono">340%</div>
             </div>
          </div>
        </motion.div>

        {/* Right Visual - Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-2xl opacity-40" />

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
             <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
               <h3 className="font-bold text-zinc-100 flex items-center gap-2">
                 <LayoutDashboard className="w-4 h-4 text-zinc-500" />
                 Cost Analysis
               </h3>
               <div className="flex gap-2 text-xs">
                 <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400">Monthly</span>
                 <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400">YTD</span>
               </div>
             </div>
             
             <div className="p-6 space-y-8">
               {/* Main Metric */}
               <div className="flex items-end justify-between">
                 <div>
                   <div className="text-zinc-500 text-sm mb-1">Projected Annual Savings</div>
                   <div className="text-4xl font-bold text-white font-mono tracking-tight">$15,600</div>
                 </div>
                 <div className="text-green-400 text-sm font-bold flex items-center bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                   <TrendingUp className="w-3 h-3 mr-1" />
                   +12% vs Manual
                 </div>
               </div>

               {/* Visual Graph Representation (CSS Bar Chart for simplicity and style control) */}
               <div className="h-40 flex items-end gap-2 pt-8 border-b border-zinc-800/50 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 90, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-zinc-800/50 rounded-t-sm relative group overflow-hidden">
                       <motion.div 
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         transition={{ delay: i * 0.05, duration: 1 }}
                         className={`absolute bottom-0 w-full ${i > 8 ? 'bg-green-500' : 'bg-zinc-700'} opacity-80 group-hover:opacity-100 transition-opacity`}
                       />
                    </div>
                  ))}
               </div>

               {/* Legend / Stats */}
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      Manual Cost
                    </div>
                    <div className="font-mono text-lg text-zinc-300">$2,000/mo</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Agent Cost
                    </div>
                    <div className="font-mono text-lg text-white">$500/mo</div>
                  </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 relative overflow-hidden bg-zinc-950">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    <div className="container px-4 mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: Visual/Header */}
        <div className="w-full lg:w-1/3">
           <div className="sticky top-32">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider mb-6">
                <HelpCircle className="w-3 h-3" />
                Support
             </div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Common <br/>
               <span className="text-zinc-500">Questions</span>
             </h2>
             <p className="text-zinc-400 text-lg mb-8 font-light">
               Everything you need to know about our deployment process and guarantees.
             </p>
             
             {/* Visual: Chat/Search Simulation */}
             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-4">
                   <div className="w-2 h-2 rounded-full bg-red-500" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500" />
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                   <div className="ml-auto text-[10px] text-zinc-500 font-mono">support_agent.exe</div>
                </div>
                <div className="space-y-3">
                   <div className="bg-zinc-800/50 rounded-lg p-3 rounded-tl-none">
                      <div className="text-[10px] text-zinc-500 mb-1">User</div>
                      <div className="text-xs text-zinc-300">How long does implementation take?</div>
                   </div>
                   <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 rounded-tr-none ml-auto max-w-[90%]">
                      <div className="text-[10px] text-orange-400 mb-1 text-right">AI Agent</div>
                      <div className="text-xs text-zinc-200">Typical deployment is 14 days. We work in 2-week sprints to ensure rapid value delivery.</div>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* Right: Accordion */}
        <div className="w-full lg:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "How is this different from using ChatGPT directly?",
                a: "We deploy autonomous agents that work 24/7, manage their own context, and integrate with your tools. It's like hiring an AI employee, not just using a chatbot."
              },
              {
                q: "What if we've already deployed OpenClaw and it's failing?",
                a: "We specialize in rescue operations. We'll audit your setup, identify waste, and optimize it. Most clients see 80%+ cost reduction in week 1."
              },
              {
                q: "How technical do we need to be?",
                a: "Not at all. We handle deployment, optimization, and management. You just describe what you need automated."
              },
              {
                q: "How do you ensure data security?",
                a: "Security-first architecture. Dedicated infrastructure, granular permissions, and we never deploy on your main machine."
              },
              {
                q: "What is your guarantee?",
                a: "If we don't reduce your AI costs by at least 60% in the first 30 days, we'll refund your implementation fee. No questions asked."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-4 hover:bg-zinc-900/50 transition-colors">
                <AccordionTrigger className="text-left text-zinc-200 hover:text-orange-400 transition-colors hover:no-underline py-6">
                  <span className="font-medium text-lg">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed pb-6 text-base font-light">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative overflow-hidden bg-zinc-950">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
    <div className="container px-4 mx-auto relative z-10">
       <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
             {/* Left: Content */}
             <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Automate? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Start Your Transformation</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-8 font-light">
                   Join forward-thinking companies saving thousands of hours annually.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                   <Button 
                     size="lg" 
                     className="rounded-full bg-orange-600 hover:bg-orange-700 text-white h-12 px-8"
                     onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                   >
                      Book Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                   <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12 px-8">
                      View Pricing
                   </Button>
                </div>
                <p className="text-zinc-500 text-xs mt-6">
                  Risk-free guarantee: If we can't find $5,000 in savings, we'll send you a $100 Amazon gift card.
                </p>
             </div>
             
             {/* Right: Visual */}
             <div className="w-full lg:w-1/2">
                <div className="relative aspect-video bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center group">
                   <div className="absolute inset-0 bg-grid-zinc-900/[0.2] bg-[size:20px_20px]" />
                   
                   {/* Launch Button Visual */}
                   <div className="relative z-10 text-center">
                      <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4 shadow-[0_0_50px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                         <Power className="w-10 h-10 text-orange-500" />
                      </div>
                      <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest group-hover:text-orange-400 transition-colors">
                         Initialize System
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

const BookMeeting = () => {
  const handleBookingClick = () => {
    window.open(
      "https://calendar.app.google/mS1urwHfqaaBTso3A",
      "GoogleCalendar",
      "width=600,height=700,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <section id="book-call" className="py-24 relative overflow-hidden bg-zinc-950">
       {/* Backgrounds */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

       <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             {/* Left: Content */}
             <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
                   <Calendar className="w-3 h-3" />
                   Free Consultation
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                   Let's Architect Your <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">AI Infrastructure</span>
                </h2>
                <p className="text-xl text-zinc-400 font-light">
                   Book a 30-minute discovery call. We'll map out your current bottlenecks and design a custom agent system to solve them.
                </p>
                
                <div className="space-y-4 pt-4">
                   {[
                      "Technical Feasibility Audit",
                      "ROI Projection Model",
                      "Custom Implementation Roadmap",
                      "Zero Commitment Required"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                         </div>
                         <span className="text-zinc-300">{item}</span>
                      </div>
                   ))}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                   <Button 
                     size="lg" 
                     className="h-14 px-8 text-base rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all hover:scale-105"
                     onClick={handleBookingClick}
                   >
                      Schedule Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                </div>
                <p className="text-zinc-500 text-xs">
                   Prefer email? <a href="mailto:work.17akki.akash@gmail.com" className="text-orange-400 hover:underline">work.17akki.akash@gmail.com</a>
                </p>
             </div>

             {/* Right: Visual - Minimal Calendar */}
             <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40" />
                
                {/* Minimal Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden shadow-2xl p-8">
                   
                   {/* Header Profile */}
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
                         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Akash" className="w-full h-full" />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">Akash Yadav</div>
                         <div className="text-zinc-500 text-sm">30 Min Strategy Call</div>
                      </div>
                   </div>

                   {/* Minimal Calendar Grid */}
                   <div className="space-y-4">
                      <div className="flex justify-between text-zinc-600 text-xs font-medium tracking-widest mb-2 px-2">
                         <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span>
                      </div>
                      <div className="grid grid-cols-5 gap-3">
                         {[...Array(15)].map((_, i) => {
                            const day = 10 + i;
                            const isSelected = i === 7;
                            const isDisabled = i % 3 === 0; // Random disabled for visual
                            
                            return (
                               <button 
                                 key={i} 
                                 disabled={isDisabled}
                                 className={`
                                   aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                                   ${isSelected 
                                     ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-110' 
                                     : isDisabled 
                                       ? 'text-zinc-700 cursor-not-allowed decoration-zinc-800' 
                                       : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}
                                 `}
                               >
                                  {day}
                               </button>
                            );
                         })}
                      </div>
                   </div>

                   {/* Minimal "Slots Available" */}
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="mt-8 flex items-center justify-center gap-2 text-xs text-green-400 bg-green-500/10 py-2 rounded-full border border-green-500/20"
                   >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      5 slots available for next week
                   </motion.div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const AiAutomationLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
        <Navbar />
        <main>
          <Hero />
          <Mistake />
          <InefficiencyTax />
          <OptimizationFramework />
          <Services />
          <SuccessStories />
          <ProcessTimeline />
          <ROISection />
          <FAQ />
          <CTA />
          <BookMeeting />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeWrapper>
  );
};

export default AiAutomationLanding;
