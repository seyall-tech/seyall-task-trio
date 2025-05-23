import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiLanguageSlogan from "@/components/MultiLanguageSlogan";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { TaskIcon, taskIcons } from "@/components/TaskIcons";
import InfoCard from "@/components/InfoCard";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Clock, TrendingUp } from "lucide-react";

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
              Local help. Real quick. Just around the corner.
            </p>
            
            <MultiLanguageSlogan />
            
            <div className="mt-8">
              <a href="#early-access">
                <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium text-lg px-8 py-6 transform transition-transform duration-200 hover:scale-105">
                  Get Early Access
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-seyall-accent font-medium animate-pulse-gentle">
              🚨 Launching soon across India — from metros to mandals!
            </p>
            <p className="mt-2 text-gray-400">
              We're unlocking local jobs, one task at a time, right in your neighborhood.
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
      <section id="what-is-seyall" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark animate-fade-in animation-delay-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-seyall-accent">Seyall</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Seyall is India's first freelancing app for the <span className="font-semibold text-white">offline world</span>.
            </p>
            <p className="mt-4 text-gray-400">
              Need a hand moving furniture for a few hours? Or an urgent local delivery? <br />
              With Seyall, you can hire <span className="text-seyall-accent">real people, right in your neighborhood</span> — instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {taskIcons.map((task, index) => (
              <div key={index} className="animate-fade-in animation-delay-stagger">
                <TaskIcon
                  name={task.name}
                  icon={task.icon}
                  description={task.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seyall Section */}
      <section id="why-seyall" className="py-16 md:py-24 bg-black animate-fade-in animation-delay-400">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-seyall-accent">Seyall</span>?
            </h2>
            <p className="text-lg text-gray-300">Fast, flexible, and fair – local help redefined.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InfoCard 
              title="Hyperlocal by Default"
              description="We connect you with help within your neighborhood. Zero travel means more affordable and faster assistance."
              icon={<MapPin className="h-8 w-8" />}
              className="animate-fade-in animation-delay-500"
            />
            
            <InfoCard 
              title="Super Flexible"
              description="Tasks can be as short as 1 hour. Post a task at 9 AM, and potentially get it done by 10 AM."
              icon={<Clock className="h-8 w-8" />}
              className="animate-fade-in animation-delay-600"
            />
            
            <InfoCard 
              title="For Everyone, Everywhere"
              description="From students in Chennai needing quick cash to homemakers in Madurai with free time – Seyall empowers anyone to earn locally."
              icon={<Globe className="h-8 w-8" />}
              className="animate-fade-in animation-delay-700"
            />
            
            <InfoCard 
              title="Scalable AF"
              description="No warehouses, no complex logistics. Just people helping people, powered by intuitive technology. Infinitely scalable."
              icon={<TrendingUp className="h-8 w-8" />}
              className="animate-fade-in animation-delay-800"
            />
          </div>
        </div>
      </section>

      {/* The Problem Today Section */}
      <section className="py-16 md:py-24 bg-seyall-gray-dark animate-fade-in animation-delay-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              The Current <span className="text-seyall-accent">Headache</span>
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3">Online Freelancers = Digital Only</h3>
                <p className="text-gray-400">Existing platforms are great for coding or design. But what about real-world, physical tasks?</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3">Offline Help = Unreliable & Complicated</h3>
                <p className="text-gray-400">Finding local help usually means endless calls, no-shows, and zero accountability.</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:border-seyall-accent/30">
                <h3 className="text-xl font-medium mb-3">Local Gigs = No Central Platform</h3>
                <p className="text-gray-400">There's no simple, trusted way to find short-term, flexible work opportunities in your own community.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-medium mb-4">"Why can't I just hire someone <span className="text-seyall-accent">near me</span> to help <span className="text-seyall-accent">right now</span>?"</p>
              <p className="text-xl text-white">With Seyall, you finally can.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-black animate-fade-in animation-delay-800">
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
      <section id="early-access" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark animate-fade-in animation-delay-1000">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be the First: Get <span className="text-seyall-accent">Early Access</span>
            </h2>
            <p className="text-gray-300">
              Join the Seyall waitlist and be the first to know when we launch in your city.
            </p>
          </div>
          
          <EarlyAccessForm />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden animate-fade-in animation-delay-1200">
        <div className="absolute inset-0 bg-gradient-to-b from-seyall-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              From Metros to Mandals — <br />We’re Bringing Work <span className="text-seyall-accent">Home</span>.
            </h2>
            
            <p className="text-lg text-gray-300">
              We believe opportunity shouldn't require migration. Seyall brings flexible income right to your street, your town, your block.
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
