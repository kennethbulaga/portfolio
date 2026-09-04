"use client";

import Image from "next/image";
import { MapPin, Mail, ArrowDown, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, institutionalTrust } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/components/motion";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 overflow-hidden">
      {/* Precision Subtle Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle,#71717a_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#3f3f46_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Availability Eyebrow */}
          <motion.div variants={staggerItem}>
            <Badge 
              variant="outline" 
              className="gap-2 px-3 py-1 text-xs font-medium border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {personalInfo.availability.message}
            </Badge>
          </motion.div>

          {/* Headline & Sub-headline */}
          <motion.div variants={staggerItem} className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
              <span className="text-primary">.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              {personalInfo.subHeadline}
            </p>
          </motion.div>

          {/* Genuine Bio */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location & Contact Meta */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={15} className="text-primary" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                {personalInfo.email}
              </a>
            </span>
          </motion.div>

          {/* Primary Action Buttons (Balanced 50/50 on Mobile, Flex on Desktop) */}
          <motion.div variants={staggerItem} className="pt-2 grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3 max-w-md sm:max-w-none">
            <Button onClick={scrollToProjects} size="lg" className="gap-2 shadow-xs text-xs sm:text-sm h-11 sm:h-12 w-full sm:w-auto px-3 sm:px-5">
              <span>Explore Projects</span>
              <ArrowDown size={15} />
            </Button>

            <Button
              disabled
              size="lg"
              variant="outline"
              className="text-xs sm:text-sm h-11 sm:h-12 w-full sm:w-auto px-3 sm:px-5 gap-1.5 sm:gap-2 cursor-not-allowed opacity-60"
              title="Resume is currently being updated"
            >
              <FileText size={16} className="text-muted-foreground shrink-0" />
              <span>Resume (Updating)</span>
            </Button>
          </motion.div>

          {/* Institutional Trust & Collaboration Bar */}
          <motion.div variants={staggerItem} className="pt-8 border-t border-border/60">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-primary" />
                Collaborations & Institutional Deployments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {institutionalTrust.map((partner) => {
                const content = (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-card/50 hover:bg-card hover:border-primary/40 transition-all group h-full">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-background border border-border/80 shrink-0 p-1 mt-0.5">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="40px"
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {partner.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        {partner.role}
                      </p>
                    </div>
                  </div>
                );

                return partner.link ? (
                  <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={partner.name} className="h-full">{content}</div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Animated Marquee Loop at Hero bottom edge */}
      <TechMarquee />
    </section>
  );
}
