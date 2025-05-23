import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiLanguageSlogan from "@/components/MultiLanguageSlogan";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { TaskIcon, taskIcons } from "@/components/TaskIcons";
import InfoCard from "@/components/InfoCard";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Clock, TrendingUp, CheckCircle, DollarSign, Briefcase } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-nunito font-bold text-4xl md:text-6xl lg:text-7xl mb-4">
              <span className="text-white">Se</span>
              <span className="text-seyall-accent">yall</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/90">
              Local help. Real quick. <span className="text-seyall-accent font-semibold">You set the terms.</span>
            </p>
            
            <MultiLanguageSlogan />
            
            <div className="mt-8">
              <a href="#early-access">
                <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-seyall-gray-dark font-medium text-lg px-8 py-6 transform transition-transform duration-200 hover:scale-105">
                  Get Early Access
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-seyall-accent font-medium animate-pulse-gentle">
              🚨 Launching soon across India — from metros to mandals!
            </p>
            <p className="mt-2 text-gray-400">
              Unlock local jobs and tasks. <span className="font-semibold text-white">Your neighborhood, your rules.</span>
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#what-is-seyall" className="text-white/50 hover:text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* What is Seyall Section */}
      <section id="what-is-seyall" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark animate-scroll-reveal-up [animation-delay:200ms]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-seyall-accent">Seyall</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Seyall is India's first freelancing app for the <span className="font-semibold text-white">offline world</span>. 
              You <strong className="text-seyall-accent">choose the tasks</strong> you want to do, and <strong className="text-seyall-accent">name your price</strong>.
            </p>
            <p className="mt-4 text-gray-400">
              Need a hand moving furniture? Or an urgent local delivery? <br />
              With Seyall, find <span className="text-seyall-accent">real people, for real tasks, on your terms.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {taskIcons.map((task, index) => (
              <TaskIcon
                key={index}
                name={task.name}
                icon={task.icon}
                description={task.description}
                className={`animate-scroll-reveal-up [animation-delay:${200 + index * 100}ms]`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Seyall Section - Emphasizing choice */}
      <section id="why-seyall" className="py-16 md:py-24 bg-black animate-scroll-reveal-up [animation-delay:400ms]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-seyall-accent">Seyall</span>?
            </h2>
            <p className="text-lg text-gray-300">Your Work, Your Way. Fast, flexible, and fair.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InfoCard 
              title="You Choose the Task"
              description="Browse local tasks and pick what fits your skills and schedule. No commitments, just opportunities."
              icon={<Briefcase className="h-8 w-8" />}
              className="animate-scroll-reveal-up [animation-delay:500ms]"
            />
             <InfoCard 
              title="You Set the Price"
              description="For task posters: define your budget. For task doers: apply for tasks offering the pay you want."
              icon={<DollarSign className="h-8 w-8" />}
              className="animate-scroll-reveal-up [animation-delay:600ms]"
            />
            <InfoCard 
              title="Hyperlocal & Instant"
              description="Connect within your neighborhood. Zero travel means efficient help and earnings."
              icon={<MapPin className="h-8 w-8" />}
              className="animate-scroll-reveal-up [animation-delay:700ms]"
            />
            <InfoCard 
              title="Super Flexible Hours"
              description="Tasks can be as short as 1 hour. Perfect for fitting work around your life, not the other way around."
              icon={<Clock className="h-8 w-8" />}
              className="animate-scroll-reveal-up [animation-delay:800ms]"
            />
          </div>
        </div>
      </section>

      {/* The Problem Today Section */}
      <section className="py-16 md:py-24 bg-seyall-gray-dark animate-scroll-reveal-up [animation-delay:600ms]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              The Current <span className="text-seyall-accent">Headache</span>
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3 text-white">Online Freelancers = Digital Only</h3>
                <p className="text-gray-400">Great for remote work, but what about physical, real-world tasks in your locality?</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3 text-white">Offline Help = Unreliable & Complicated</h3>
                <p className="text-gray-400">Finding local help often means uncertainty, no-shows, and a lack of transparency or choice in pricing.</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3 text-white">Local Gigs = No Central Platform for Choice</h3>
                <p className="text-gray-400">There's no simple, trusted way to find short-term work where you control the task and the pay.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-medium mb-4">"Why can't I just hire someone <span className="text-seyall-accent">near me</span> for what <span className="text-seyall-accent">I need</span>, at a price that works?"</p>
              <p className="text-xl text-white">With Seyall, you finally can. Your terms, your tasks, your price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-black animate-scroll-reveal-up [animation-delay:800ms]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It <span className="text-seyall-accent">Works</span> (It's Simple!)
            </h2>
            
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Early Access Sign-up Section */}
      <section id="early-access" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark animate-scroll-reveal-up [animation-delay:1000ms]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be the First: Get <span className="text-seyall-accent">Early Access</span>
            </h2>
            <p className="text-gray-300">
              Join the Seyall waitlist. Be the first to discover local tasks and earning opportunities on your terms.
            </p>
          </div>
          
          <EarlyAccessForm />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden animate-scroll-reveal-up [animation-delay:1200ms]">
        <div className="absolute inset-0 bg-gradient-to-b from-seyall-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              From Metros to Mandals — <br />Empowering Local Work, <span className="text-seyall-accent">Your Way</span>.
            </h2>
            
            <p className="text-lg text-gray-300">
              Opportunity shouldn't require migration. Seyall brings flexible income and help right to your community, on terms you define.
            </p>
            
            <div className="mt-12">
              <p className="text-xl font-bold text-seyall-accent animate-pulse-gentle">
                🔥 COMING SOON — ACROSS INDIA
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
