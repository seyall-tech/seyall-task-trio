
import { useEffect } from "react";
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
      <section className="relative min-h-screen flex items-center pt-20 pb-12">
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
                <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium text-lg px-8 py-6">
                  Get Early Access
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-seyall-accent font-medium animate-pulse-gentle">
              🚨 Launching soon across India — from metros to mandals!
            </p>
            <p className="mt-2 text-gray-400">
              We're unlocking local jobs, one task at a time.
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
      <section id="what-is-seyall" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-seyall-accent">Seyall</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Seyall is a new kind of freelancing app — for the <span className="font-semibold text-white">offline world</span>.
            </p>
            <p className="mt-4 text-gray-400">
              Need someone to help move furniture for 3 hours? Or deliver something urgently?<br />
              Now you can hire <span className="text-seyall-accent">real people, right nearby</span> — just like that.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {taskIcons.map((task, index) => (
              <TaskIcon
                key={index}
                name={task.name}
                icon={task.icon}
                description={task.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Seyall Section */}
      <section id="why-seyall" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-seyall-accent">Seyall</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InfoCard 
              title="Hyperlocal by Default"
              description="We match people within the same neighborhood. No travel = cheaper, faster help."
              icon={<MapPin className="h-8 w-8" />}
            />
            
            <InfoCard 
              title="Super Flexible"
              description="Tasks can be for just 1 hour. Post at 9 AM, get help by 10 AM."
              icon={<Clock className="h-8 w-8" />}
            />
            
            <InfoCard 
              title="For Everyone, Everywhere"
              description="From students in Chennai to homemakers in Madurai — anyone can earn."
              icon={<Globe className="h-8 w-8" />}
            />
            
            <InfoCard 
              title="Scalable AF"
              description="No warehouses. No logistics. Just people helping people, powered by tech."
              icon={<TrendingUp className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* The Problem Today Section */}
      <section className="py-16 md:py-24 bg-seyall-gray-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              The Problem <span className="text-seyall-accent">Today</span>
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3">Online freelancers = only digital jobs</h3>
                <p className="text-gray-400">Existing freelancing platforms focus on digital skills like design, coding, and writing. What about physical, in-person tasks?</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3">Offline help = vendor headaches, unreliable</h3>
                <p className="text-gray-400">Finding reliable local help often involves multiple calls, no-shows, and inconsistent quality with no accountability.</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-medium mb-3">Local jobs = no platform</h3>
                <p className="text-gray-400">There's no easy way to find short-term, flexible work opportunities in your own neighborhood.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-medium mb-4">"Why can't I just hire someone <span className="text-seyall-accent">near me</span> to help <span className="text-seyall-accent">right now</span>?"</p>
              <p className="text-xl">Now you can.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It <span className="text-seyall-accent">Works</span>
            </h2>
            
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Early Access Sign-up Section */}
      <section id="early-access" className="py-16 md:py-24 bg-gradient-to-b from-black to-seyall-gray-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get <span className="text-seyall-accent">Early Access</span>
            </h2>
            <p className="text-gray-300">
              Be the first to know when Seyall launches in your city.
            </p>
          </div>
          
          <EarlyAccessForm />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-seyall-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              From metros to mandals — <br />we're bringing work <span className="text-seyall-accent">home</span>.
            </h2>
            
            <p className="text-lg text-gray-300">
              We believe you shouldn't have to migrate to survive. Seyall brings income opportunities to your own street, town, and block.
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
