import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
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
import { fadeInUp, fadeInLeft, scaleIn, staggerContainer, staggerFast, smoothTransition } from "@/utils/animations";
import { SpotlightCard } from "@/components/SpotlightCard";
import ClawBotIcon from "@/components/ClawBotIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Reusable viewport-triggered stagger wrapper
const ViewStagger = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={staggerContainer as Variants}
    className={className}
  >
    {children}
  </motion.div>
);

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

// Section divider for visual flow
const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
);

const WorkflowVisual = () => {
  return (
    <div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md overflow-hidden shadow-2xl ring-1 ring-white/5 group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 rounded-full bg-zinc-900/80 border border-orange-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(255,87,34,0.25)] backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-zinc-950 border border-orange-500/20 flex items-center justify-center">
            <ClawBotIcon size={32} color="#f97316" />
          </div>
        </div>
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping opacity-20" />
      </div>

      {/* Inner Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square z-10">
        <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {/* Top node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg hover:border-orange-500/40 transition-colors"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <Server className="w-5 h-5 text-blue-400" />
            </motion.div>
          </div>
          {/* Bottom node */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <motion.div
              className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg hover:border-orange-500/40 transition-colors"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <Users className="w-5 h-5 text-emerald-400" />
            </motion.div>
          </div>

          {/* Decorative dots on inner orbit */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500/40 shadow-[0_0_6px_rgba(249,115,22,0.4)]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-orange-500/40 shadow-[0_0_6px_rgba(249,115,22,0.4)]" />
        </motion.div>
      </div>

      {/* Outer Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square z-10">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.05]" />

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {/* Left node */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
            <motion.div
              className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg hover:border-orange-500/40 transition-colors"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <LayoutDashboard className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>
          {/* Right node */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
            <motion.div
              className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg hover:border-orange-500/40 transition-colors"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </div>

          {/* Decorative dots on outer orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/10" />
        </motion.div>
      </div>

      {/* Outermost decorative orbit */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full border border-white/[0.03] z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-500/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-orange-500/20" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500/20" />
      </motion.div>

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
          variants={staggerContainer as Variants}
          className="text-left space-y-8 max-w-2xl"
        >
          <motion.div variants={fadeInUp as Variants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-400 backdrop-blur-xl ring-1 ring-inset ring-orange-500/10">
              <ClawBotIcon size={16} color="#fb923c" />
              <span className="tracking-wide">Enterprise-Grade AI Automation</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp as Variants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Stop Burning Budget.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 text-glow">Start Scaling Operations.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp as Variants}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-lg"
          >
            Enterprise AI automation that actually works. We fix the <span className="text-zinc-200 font-normal">$1M token mistakes</span> and build systems that scale.
          </motion.p>

          <motion.div variants={fadeInUp as Variants} className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
              onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Automating
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all duration-300 backdrop-blur-sm hover:border-zinc-700"
              onClick={() => document.getElementById('mistakes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See The Mistakes
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInLeft as Variants}
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
                 {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex gap-2 text-red-400/80">
                     <span className="text-zinc-600">[{10 + i}:42:{10+i}]</span>
                     <span>Auth_Error: Token leakage detected in plain text</span>
                  </div>
                 ))}
              </div>

              {/* Floating Alert */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
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
        <ViewStagger className="order-1 lg:order-2 space-y-6">
          <motion.div variants={fadeInUp as Variants}>
            <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-400 mb-2 tracking-wide">
              <AlertTriangle className="mr-2 h-3.5 w-3.5" />
              <span>System Alert</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Is Your AI Investment <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Bleeding Money?</span>
          </motion.h2>
          <motion.p variants={fadeInUp as Variants} className="text-lg text-zinc-400 leading-relaxed font-light">
            We recently onboarded a client who burned <strong className="text-white font-medium">$1 million in tokens</strong> before their system even connected to Telegram.
          </motion.p>

          <motion.ul variants={staggerFast as Variants} className="space-y-3 pt-2">
            {[
              "Zero security protocols (exposing sensitive data)",
              "Single LLM handling everything (no cost optimization)",
              "Loading 2-3 million tokens per heartbeat",
              "Entire session histories uploaded with every prompt",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp as Variants}
                className="flex items-start gap-3 text-zinc-300 group"
              >
                <XCircle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" />
                <span className="font-light group-hover:text-white transition-colors">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </ViewStagger>
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
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={scaleIn as Variants}
                  className="w-full lg:w-1/2 order-2 lg:order-1"
                >
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

                                {/* Animated Progress Bars */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-zinc-400">Token Wasted</span>
                                            <span className="text-red-400">92%</span>
                                        </div>
                                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                              initial={{ width: 0 }}
                                              whileInView={{ width: "92%" }}
                                              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                              viewport={{ once: true }}
                                              className="h-full bg-red-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-zinc-400">Redundant Calls</span>
                                            <span className="text-orange-400">85%</span>
                                        </div>
                                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                              initial={{ width: 0 }}
                                              whileInView={{ width: "85%" }}
                                              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                              viewport={{ once: true }}
                                              className="h-full bg-orange-500 rounded-full"
                                            />
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
                </motion.div>

                {/* Text Side (Right) */}
                <ViewStagger className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                    <motion.div variants={fadeInUp as Variants}>
                      <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-400 mb-2 tracking-wide">
                          <AlertTriangle className="mr-2 h-3.5 w-3.5" />
                          <span>The Hidden Cost</span>
                      </div>
                    </motion.div>
                    <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Inefficiency Tax</span><br/>
                        On Your Business
                    </motion.h2>
                    <motion.p variants={fadeInUp as Variants} className="text-lg text-zinc-400 leading-relaxed font-light">
                        Most businesses are paying a <strong className="text-white font-medium">92% premium</strong> on every AI operation. It's not just money — it's speed, reliability, and scalability burning away.
                    </motion.p>

                    <motion.div variants={staggerFast as Variants} className="space-y-6 pt-2">
                        {[
                            { title: "Unoptimized Context", desc: "Sending entire chat history for simple 'yes/no' questions." },
                            { title: "Model Mismatch", desc: "Using GPT-4 ($30/1M) for tasks requiring GPT-3.5 ($0.50/1M)." },
                            { title: "Zero Caching", desc: "Paying to regenerate the same answer 100 times a day." }
                        ].map((item, i) => (
                            <motion.div
                              key={i}
                              variants={fadeInUp as Variants}
                              className="flex gap-4 group cursor-default"
                            >
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-300">
                                    <XCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-200 font-bold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ViewStagger>
            </div>
        </div>
    </section>
  );
};

const OptimizationFramework = () => (
  <section id="framework" className="py-32 relative overflow-hidden bg-zinc-950">
    <SectionDivider />
    {/* Background Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50" />

    <div className="container px-4 mx-auto relative z-10 pt-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Side (Left) */}
            <motion.div
              variants={staggerContainer as unknown as Variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="w-full lg:w-1/2 space-y-6"
            >
                <motion.div variants={fadeInUp as unknown as Variants}>
                  <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-sm font-medium text-orange-400 mb-2 backdrop-blur-md">
                      <GitBranch className="w-4 h-4 mr-2" />
                      Our Solution
                  </div>
                </motion.div>
                <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl md:text-5xl font-bold leading-tight">
                    Smart Routing <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Architecture</span>
                </motion.h2>
                <motion.p variants={fadeInUp as unknown as Variants} className="text-xl text-zinc-400 font-light leading-relaxed">
                    We don't just "hook up an API". We build an intelligent layer that routes every request to the perfect model for the job.
                </motion.p>

                <motion.div variants={fadeInUp as unknown as Variants} className="space-y-4 pt-2">
                    {[
                        { icon: Brain, title: "Intent Recognition", text: "AI analyzes the complexity of every prompt before processing." },
                        { icon: GitBranch, title: "Dynamic Routing", text: "Simple tasks go to fast models. Complex reasoning goes to smart models." },
                        { icon: Database, title: "Smart Caching", text: "Instant answers for repeated questions, zero cost." }
                    ].map((item, i) => (
                        <motion.div
                          key={i}
                          variants={fadeInUp as unknown as Variants}
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-colors duration-300 group cursor-default"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-zinc-800 group-hover:bg-orange-500/10 transition-colors duration-300">
                                    <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-200 font-bold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                                    <p className="text-zinc-500 text-sm">{item.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Visual Side (Right) - Routing Diagram */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp as unknown as Variants}
              transition={{ ...smoothTransition, delay: 0.2 } as unknown as Transition}
              className="w-full lg:w-1/2"
            >
                <div className="relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <div className="relative z-10 flex flex-col items-center gap-0">

                        {/* Step 1: Input */}
                        <div className="w-full max-w-[220px] p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-center">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Input</div>
                            <div className="text-zinc-200 font-mono text-sm flex items-center justify-center gap-2">
                                <motion.span
                                  animate={{ opacity: [1, 0.4, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                                />
                                User Prompt
                            </div>
                        </div>

                        {/* Line down */}
                        <div className="w-px h-8 bg-zinc-700 relative">
                            <motion.div
                              animate={{ y: [0, 32] }}
                              transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn", repeatDelay: 0.8 }}
                              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.6)]"
                            />
                        </div>

                        {/* Step 2: Router */}
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] relative cursor-default"
                        >
                            <GitBranch className="w-7 h-7 text-white" />
                            <motion.div
                              animate={{ scale: [1, 1.6], opacity: [0.25, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                              className="absolute inset-0 rounded-full border-2 border-orange-500"
                            />
                        </motion.div>

                        {/* Branching: vertical stem + horizontal bar + 3 drops */}
                        <svg viewBox="0 0 300 50" className="w-full max-w-[300px] h-[50px]" fill="none">
                            {/* Stem from router */}
                            <line x1="150" y1="0" x2="150" y2="16" stroke="#3f3f46" strokeWidth="1.5" />
                            {/* Horizontal bar */}
                            <line x1="50" y1="16" x2="250" y2="16" stroke="#3f3f46" strokeWidth="1.5" />
                            {/* Left drop */}
                            <line x1="50" y1="16" x2="50" y2="50" stroke="#3f3f46" strokeWidth="1.5" />
                            {/* Center drop (active) */}
                            <line x1="150" y1="16" x2="150" y2="50" stroke="#f97316" strokeWidth="1.5" />
                            {/* Right drop */}
                            <line x1="250" y1="16" x2="250" y2="50" stroke="#3f3f46" strokeWidth="1.5" />
                            {/* Animated dot on center path */}
                            <motion.circle
                              cx="150"
                              r="3"
                              fill="#f97316"
                              initial={{ cy: 16 }}
                              animate={{ cy: [16, 50] }}
                              transition={{ duration: 1, repeat: Infinity, ease: "easeIn", repeatDelay: 1.2 }}
                            />
                        </svg>

                        {/* Step 3: Model cards */}
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {[
                              { icon: Zap, label: "Fast", sub: "$0.25/1M", colorBg: "bg-green-500/10", colorText: "text-green-500", active: false },
                              { icon: Brain, label: "Balanced", sub: "$3.00/1M", colorBg: "bg-orange-500/10", colorText: "text-orange-500", active: true },
                              { icon: Cpu, label: "Smart", sub: "$15.00/1M", colorBg: "bg-purple-500/10", colorText: "text-purple-500", active: false },
                            ].map((m, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`p-3 rounded-xl text-center relative overflow-hidden cursor-default ${
                                  m.active
                                    ? "bg-zinc-900 border border-orange-500/30"
                                    : "bg-zinc-900/80 border border-zinc-800 opacity-40"
                                }`}
                              >
                                {m.active && <div className="absolute inset-0 bg-orange-500/5" />}
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2 ${m.colorBg}`}>
                                    <m.icon className={`w-4 h-4 ${m.colorText}`} />
                                </div>
                                <div className={`text-xs font-semibold relative z-10 ${m.active ? 'text-white' : 'text-zinc-400'}`}>{m.label}</div>
                                <div className={`text-[10px] mt-0.5 relative z-10 font-mono ${m.active ? 'text-zinc-500' : 'text-zinc-600'}`}>{m.sub}</div>
                                {m.active && (
                                  <div className="mt-1.5 text-[9px] text-orange-400 font-mono uppercase tracking-wider relative z-10 flex items-center justify-center gap-1">
                                    <motion.span
                                      animate={{ opacity: [1, 0.3, 1] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                      className="inline-block w-1 h-1 rounded-full bg-orange-400"
                                    />
                                    Active
                                  </div>
                                )}
                              </motion.div>
                            ))}
                        </div>

                        {/* Line down from center model */}
                        <div className="w-px h-8 bg-gradient-to-b from-orange-500/40 to-zinc-700" />

                        {/* Step 4: Output */}
                        <div className="w-full max-w-[220px] p-3.5 rounded-xl bg-zinc-800/60 border border-green-500/20 text-center">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Output</div>
                            <div className="text-zinc-200 font-mono text-sm flex items-center justify-center gap-2">
                                <motion.span
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                                />
                                Optimized Result
                            </div>
                            <div className="text-[10px] text-green-400/60 font-mono mt-0.5">70% cost saved</div>
                        </div>
                    </div>
                </div>
            </motion.div>
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
      <SectionDivider />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-zinc-950/0 to-zinc-950/0" />
      <div className="container px-4 mx-auto relative z-10 pt-8">
        <ViewStagger className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold mb-6">What We Build For You</motion.h2>
          <motion.p variants={fadeInUp as Variants} className="text-xl text-zinc-400 font-light">Custom AI architectures designed for your specific operational bottlenecks.</motion.p>
        </ViewStagger>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Navigation (Left) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerFast as Variants}
              className="w-full lg:w-1/2 space-y-4"
            >
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp as Variants}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onClick={() => setActiveService(i)}
                        className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                            activeService === i
                            ? "bg-zinc-900/80 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                            : "bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700"
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${activeService === i ? "bg-orange-500/20 text-orange-500" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${activeService === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                                    {service.title}
                                </h3>
                                <p className="text-xs text-orange-400/80 font-mono mb-2 uppercase tracking-wider">{service.target}</p>
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${activeService === i ? "text-zinc-300" : "text-zinc-500"}`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Visual Display (Right) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={scaleIn as Variants}
              className="w-full lg:w-1/2"
            >
                <div className="sticky top-32">
                    <div className="relative aspect-square md:aspect-[4/3] bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm p-8 flex items-center justify-center">
                         {/* Dynamic Background */}
                         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-50" />
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                         {/* Content Transition */}
                         <AnimatePresence mode="wait">
                           <motion.div
                              key={activeService}
                              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                              transition={{ duration: 0.4 }}
                              className="relative z-10 w-full"
                           >
                              {services[activeService].visual}
                           </motion.div>
                         </AnimatePresence>

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
            </motion.div>
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
      solution: "Security overhaul & caching implementation",
      result: "10M Tokens",
      description: "Audit revealed redundant context injection. We implemented semantic caching and context window optimization.",
      quote: "They found problems we didn't even know we had. Now we're running efficiently.",
      author: "Business Owner"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      <SectionDivider />
      <div className="container px-4 mx-auto relative z-10 pt-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: Content & Nav */}
          <ViewStagger className="w-full lg:w-1/2 space-y-8">
            <div>
              <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold mb-4">
                Proven Results <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Across Industries</span>
              </motion.h2>
              <motion.p variants={fadeInUp as Variants} className="text-xl text-zinc-400 font-light">
                Real outcomes from our deployed agent systems.
              </motion.p>
            </div>

            <motion.div variants={staggerFast as Variants} className="space-y-4">
              {stories.map((story, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp as Variants}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] uppercase tracking-wider font-medium"
                      >
                        Viewing
                      </motion.span>
                    )}
                  </div>
                  <p className={`text-sm transition-colors ${activeStory === i ? "text-zinc-300" : "text-zinc-500"}`}>
                    {story.metric}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </ViewStagger>

          {/* Right: Visual Detail Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleIn as Variants}
            className="w-full lg:w-1/2"
          >
             <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40" />

                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-8 min-h-[400px] flex flex-col">
                  {/* Content Transition */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStory}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                      transition={{ duration: 0.4 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => (
  <section className="py-24 relative overflow-hidden bg-zinc-900/30">
    <SectionDivider />
    {/* Background Elements */}
    <div className="absolute inset-0 bg-zinc-950/50" />

    <div className="container px-4 mx-auto relative z-10 pt-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ViewStagger className="space-y-8">
          <motion.div variants={fadeInUp as Variants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Rapid Deployment
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold leading-tight">
            From Chaos to Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">in Just 14 Days</span>
          </motion.h2>
          <motion.p variants={fadeInUp as Variants} className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
            We don't do 6-month consulting gigs. We deploy production-grade AI infrastructure in two-week sprints. Fast, efficient, and immediately valuable.
          </motion.p>

          <motion.div variants={staggerFast as Variants} className="space-y-6 pt-4">
            {[
              { title: "No Long Onboarding", desc: "We plug into your existing stack." },
              { title: "Production Ready", desc: "Enterprise-grade security & monitoring included." },
              { title: "Full Training", desc: "We teach your team how to drive." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp as Variants}
                className="flex gap-4 group cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 mt-1 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                  <CheckCircle2 className="w-3 h-3 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-bold group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ViewStagger>

        {/* Right Visual - Pipeline Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleIn as Variants}
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
               <motion.div
                 initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 className="relative pl-8 border-l border-green-500/30"
               >
                 <div className="absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-wider">Week 1</span>
                   <span className="text-green-500 text-xs flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Done</span>
                 </div>
                 <h4 className="text-zinc-200 font-bold text-lg mb-1">Discovery & Architecture</h4>
                 <p className="text-zinc-500 text-sm">Security audit, token forensics, and multi-model strategy design.</p>
               </motion.div>

               {/* Step 2: Active */}
               <motion.div
                 initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.6 }}
                 className="relative pl-8 border-l border-orange-500/50"
               >
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
               </motion.div>

               {/* Step 3: Pending */}
               <motion.div
                 initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.6 }}
                 className="relative pl-8 border-l border-zinc-800"
               >
                 <div className="absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-900" />
                 <div className="flex justify-between items-start mb-2">
                   <span className="text-zinc-600 font-mono text-xs font-bold uppercase tracking-wider">Handoff</span>
                   <span className="text-zinc-600 text-xs">Pending</span>
                 </div>
                 <h4 className="text-zinc-500 font-bold text-lg mb-1">Training & Scale</h4>
                 <p className="text-zinc-600 text-sm">Dashboard setup, team SOPs, and performance monitoring.</p>
               </motion.div>
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
    <SectionDivider />
    <div className="container px-4 mx-auto relative z-10 pt-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ViewStagger className="space-y-6">
          <motion.div variants={fadeInUp as Variants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider mb-2">
              <TrendingUp className="w-3 h-3" />
              High Impact
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold">
            Invest Once. <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Save Forever.</span>
          </motion.h2>
          <motion.p variants={fadeInUp as Variants} className="text-zinc-400 text-lg font-light leading-relaxed">
             Most agencies charge a retainer for "maintenance". We build autonomous systems that maintain themselves. Your ROI starts month 1.
          </motion.p>

          {/* Stat cards - individually staggered */}
          <motion.div variants={fadeInUp as Variants} className="pt-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerFast as Variants}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                variants={fadeInUp as Variants}
                whileHover={{ scale: 1.03, borderColor: "rgba(161, 161, 170, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-colors duration-300"
              >
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Payback Period</div>
                <div className="text-2xl font-bold text-white font-mono">3.5 Months</div>
              </motion.div>
              <motion.div
                variants={fadeInUp as Variants}
                whileHover={{ scale: 1.03, borderColor: "rgba(34, 197, 94, 0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-colors duration-300"
              >
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">First Year ROI</div>
                <div className="text-2xl font-bold text-green-400 font-mono">340%</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </ViewStagger>

        {/* Right Visual - Dashboard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleIn as Variants}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-2xl"
          />

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
             {/* Dashboard Header */}
             <motion.div
               initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="p-6 border-b border-zinc-800 flex justify-between items-center"
             >
               <h3 className="font-bold text-zinc-100 flex items-center gap-2">
                 <LayoutDashboard className="w-4 h-4 text-zinc-500" />
                 Cost Analysis
               </h3>
               <div className="flex gap-2 text-xs">
                 <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400">Monthly</span>
                 <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400">YTD</span>
               </div>
             </motion.div>

             <div className="p-6 space-y-8">
               {/* Main Metric */}
               <motion.div
                 initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.7, delay: 0.35 }}
                 className="flex items-end justify-between"
               >
                 <div>
                   <div className="text-zinc-500 text-sm mb-1">Projected Annual Savings</div>
                   <div className="text-4xl font-bold text-white font-mono tracking-tight">$15,600</div>
                 </div>
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 300 }}
                   className="text-green-400 text-sm font-bold flex items-center bg-green-500/10 px-2 py-1 rounded border border-green-500/20"
                 >
                   <TrendingUp className="w-3 h-3 mr-1" />
                   +12% vs Manual
                 </motion.div>
               </motion.div>

               {/* Visual Graph */}
               <motion.div
                 initial={{ opacity: 0, filter: "blur(6px)" }}
                 whileInView={{ opacity: 1, filter: "blur(0px)" }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.45 }}
                 className="h-40 flex items-end gap-2 pt-8 border-b border-zinc-800/50 pb-4"
               >
                  {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 90, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-zinc-800/50 rounded-t-sm relative group overflow-hidden cursor-default">
                       <motion.div
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 + i * 0.06, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                         className={`absolute bottom-0 w-full rounded-t-sm ${i > 8 ? 'bg-green-500' : 'bg-zinc-700'} opacity-80 group-hover:opacity-100 transition-opacity duration-200`}
                       />
                    </div>
                  ))}
               </motion.div>

               {/* Legend / Stats */}
               <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={staggerFast as Variants}
                 className="grid grid-cols-2 gap-4"
               >
                  <motion.div variants={fadeInUp as Variants}>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      Manual Cost
                    </div>
                    <div className="font-mono text-lg text-zinc-300">$2,000/mo</div>
                  </motion.div>
                  <motion.div variants={fadeInUp as Variants}>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Agent Cost
                    </div>
                    <div className="font-mono text-lg text-white">$500/mo</div>
                  </motion.div>
               </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 relative overflow-hidden bg-zinc-950">
    <SectionDivider />
    <div className="container px-4 mx-auto relative z-10 pt-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: Visual/Header */}
        <ViewStagger className="w-full lg:w-1/3">
           <div className="sticky top-32 space-y-6">
             <motion.div variants={fadeInUp as Variants}>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider mb-2">
                  <HelpCircle className="w-3 h-3" />
                  Support
               </div>
             </motion.div>
             <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold">
               Common <br/>
               <span className="text-zinc-500">Questions</span>
             </motion.h2>
             <motion.p variants={fadeInUp as Variants} className="text-zinc-400 text-lg font-light">
               Everything you need to know about our deployment process and guarantees.
             </motion.p>

             {/* Visual: Chat/Search Simulation */}
             <motion.div variants={fadeInUp as Variants} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
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
             </motion.div>
           </div>
        </ViewStagger>

        {/* Right: Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast as Variants}
          className="w-full lg:w-2/3"
        >
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
              <motion.div key={i} variants={fadeInUp as Variants}>
                <AccordionItem value={`item-${i}`} className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-4 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                  <AccordionTrigger className="text-left text-zinc-200 hover:text-orange-400 transition-colors hover:no-underline py-6">
                    <span className="font-medium text-lg">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 leading-relaxed pb-6 text-base font-light">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative overflow-hidden bg-zinc-950">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
    <div className="container px-4 mx-auto relative z-10">
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-80px" }}
         variants={scaleIn as Variants}
         className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 md:p-16 overflow-hidden relative"
       >
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
             {/* Left: Content */}
             <ViewStagger className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold leading-tight">
                  Ready to Automate? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Start Your Transformation</span>
                </motion.h2>
                <motion.p variants={fadeInUp as Variants} className="text-xl text-zinc-400 font-light">
                   Join forward-thinking companies saving thousands of hours annually.
                </motion.p>
                <motion.div variants={fadeInUp as Variants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                   <Button
                     size="lg"
                     className="rounded-full bg-orange-600 hover:bg-orange-700 text-white h-12 px-8 shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
                     onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                   >
                      Book Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                   <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 h-12 px-8 transition-all duration-300">
                      View Pricing
                   </Button>
                </motion.div>
                <motion.p variants={fadeInUp as Variants} className="text-zinc-500 text-xs">
                  Risk-free guarantee: If we can't find $5,000 in savings, we'll send you a $100 Amazon gift card.
                </motion.p>
             </ViewStagger>

             {/* Right: Visual */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
               whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="w-full lg:w-1/2"
             >
                <div className="relative aspect-video bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center group">
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                   {/* Launch Button Visual */}
                   <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, boxShadow: "0 0 60px rgba(249,115,22,0.4)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4 shadow-[0_0_50px_rgba(249,115,22,0.2)] cursor-pointer"
                      >
                         <Power className="w-10 h-10 text-orange-500" />
                      </motion.div>
                      <div className="text-zinc-500 font-mono text-sm uppercase tracking-widest group-hover:text-orange-400 transition-colors duration-300">
                         Initialize System
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </motion.div>
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
       <SectionDivider />
       {/* Backgrounds */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

       <div className="container px-4 mx-auto relative z-10 pt-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             {/* Left: Content */}
             <ViewStagger className="w-full lg:w-1/2 space-y-8">
                <motion.div variants={fadeInUp as Variants}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
                     <Calendar className="w-3 h-3" />
                     Free Consultation
                  </div>
                </motion.div>
                <motion.h2 variants={fadeInUp as Variants} className="text-3xl md:text-5xl font-bold leading-tight">
                   Let's Architect Your <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">AI Infrastructure</span>
                </motion.h2>
                <motion.p variants={fadeInUp as Variants} className="text-xl text-zinc-400 font-light">
                   Book a 30-minute discovery call. We'll map out your current bottlenecks and design a custom agent system to solve them.
                </motion.p>

                <motion.div variants={staggerFast as Variants} className="space-y-4 pt-4">
                   {[
                      "Technical Feasibility Audit",
                      "ROI Projection Model",
                      "Custom Implementation Roadmap",
                      "Zero Commitment Required"
                   ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp as Variants}
                        className="flex items-center gap-3 group cursor-default"
                      >
                         <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                         </div>
                         <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                      </motion.div>
                   ))}
                </motion.div>

                <motion.div variants={fadeInUp as Variants} className="pt-4 flex flex-col sm:flex-row gap-4">
                   <Button
                     size="lg"
                     className="h-14 px-8 text-base rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,87,34,0.4)]"
                     onClick={handleBookingClick}
                   >
                      Schedule Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                </motion.div>
                <motion.p variants={fadeInUp as Variants} className="text-zinc-500 text-xs">
                   Prefer email? <a href="mailto:work.17akki.akash@gmail.com" className="text-orange-400 hover:underline transition-colors">work.17akki.akash@gmail.com</a>
                </motion.p>
             </ViewStagger>

             {/* Right: Visual - Minimal Calendar */}
             <motion.div
               variants={fadeInUp as unknown as Variants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ ...smoothTransition, delay: 0.2 } as unknown as Transition}
               className="w-full lg:w-1/2 relative"
             >
                {/* Minimal Card */}
                <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden shadow-2xl p-8">

                   {/* Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div>
                         <div className="text-white font-semibold text-lg">Akash Yadav</div>
                         <div className="text-zinc-500 text-sm font-light">30 min · Strategy Call</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                         <Calendar className="w-4 h-4 text-orange-400" />
                      </div>
                   </div>

                   <div className="h-px bg-zinc-800/80 mb-6" />

                   {/* Time slots instead of calendar grid */}
                   <div className="space-y-3">
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-4">Available this week</div>
                      {[
                        { day: "Mon", date: "10", time: "2:00 PM", available: true },
                        { day: "Tue", date: "11", time: "10:00 AM", available: true },
                        { day: "Wed", date: "12", time: "3:30 PM", available: false },
                        { day: "Thu", date: "13", time: "11:00 AM", available: true },
                      ].map((slot, i) => (
                        <motion.div
                          key={i}
                          whileHover={slot.available ? { x: 2 } : undefined}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                            i === 1
                              ? "bg-orange-500/5 border-orange-500/20"
                              : slot.available
                                ? "bg-zinc-800/30 border-zinc-800 hover:border-zinc-700 cursor-pointer"
                                : "bg-zinc-800/10 border-zinc-800/50 opacity-40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`text-center w-10 ${i === 1 ? "text-orange-400" : "text-zinc-400"}`}>
                              <div className="text-[10px] uppercase tracking-wider leading-none mb-0.5">{slot.day}</div>
                              <div className="text-lg font-semibold leading-none">{slot.date}</div>
                            </div>
                            <div className="w-px h-8 bg-zinc-800" />
                            <span className={`text-sm font-mono ${i === 1 ? "text-white" : "text-zinc-400"}`}>{slot.time}</span>
                          </div>
                          {i === 1 ? (
                            <div className="flex items-center gap-1.5 text-xs text-orange-400 font-medium">
                              <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-orange-400"
                              />
                              Next
                            </div>
                          ) : slot.available ? (
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                          ) : (
                            <span className="text-[10px] text-zinc-600 font-mono">Booked</span>
                          )}
                        </motion.div>
                      ))}
                   </div>

                   <div className="h-px bg-zinc-800/80 mt-6 mb-4" />

                   {/* Footer */}
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-1.5 text-xs text-green-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        3 slots open
                     </div>
                     <span className="text-[10px] text-zinc-600 font-mono">Google Calendar</span>
                   </div>
                </div>
             </motion.div>
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
