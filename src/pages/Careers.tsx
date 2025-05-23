
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal"; // Import the modal
import { toast } from "sonner";

// Sample careers data
const careers = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    location: "Remote (India)",
    type: "Full-time",
    description: "We're looking for an experienced UI/UX designer to help shape Seyall's mobile app and website. You'll work directly with our product and engineering teams to create beautiful, intuitive interfaces that make finding local help as easy as possible.",
  },
  {
    id: 2,
    title: "Mobile Developer (React Native)",
    location: "Hybrid (Chennai)",
    type: "Full-time",
    description: "Join our development team to build India's first hyperlocal gig platform. You'll be responsible for implementing core features of our mobile app, ensuring performance across various devices and network conditions.",
  },
  {
    id: 3,
    title: "Community Operations Manager",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    description: "Help us build and nurture our community of helpers and users. You'll develop strategies for user engagement, onboarding, trust and safety, and community growth across our target cities.",
  },
];

interface CareerItem {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
}

const JobCard = ({ job, onApplyClick }: { job: CareerItem, onApplyClick: (title: string) => void }) => {
  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-seyall-gray-dark hover:border-seyall-accent/50 transition-all duration-300 ease-in-out transform hover:scale-102 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-medium text-white">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-sm bg-black/50 text-gray-300 px-2 py-1 rounded">
              {job.location}
            </span>
            <span className="text-sm bg-black/50 text-seyall-accent px-2 py-1 rounded">
              {job.type}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mb-6">{job.description}</p>
      <Button 
        className="bg-seyall-accent hover:bg-seyall-accent-dark text-black"
        onClick={() => onApplyClick(job.title)}
      >
        Apply for this role
      </Button>
    </div>
  );
};

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (title: string) => {
    setSelectedJobTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJobTitle("");
  };
  
  const handleSendCv = () => {
    // In a real app, this might open mail client or another form
    toast.info("To send your CV, please email us at careers@seyall.in");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Join the <span className="text-seyall-accent">Seyall</span> Revolution
              </h1>
              <p className="text-gray-400 text-lg">
                Help us build India's first hyperlocal gig platform and transform how communities connect and work together.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
              <div className="space-y-6">
                {careers.map((job, index) => (
                  <div key={job.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in">
                    <JobCard job={job} onApplyClick={handleApplyClick} />
                  </div>
                ))}
                 {careers.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    No open roles at the moment. Check back soon or send us your CV!
                  </p>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-seyall-gray-dark to-black p-8 rounded-lg border border-gray-800 animate-fade-in animation-delay-500">
              <h3 className="text-xl font-bold mb-4">Don't see your dream role? Pitch us!</h3>
              <p className="text-gray-400 mb-6">
                We're always scouting for passionate talent. If you believe in our mission and think you can make a difference at Seyall, we'd love to hear from you.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 inline-flex items-center gap-2"
                onClick={handleSendCv}
              >
                Send us your CV
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <JobApplicationModal 
        jobTitle={selectedJobTitle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Careers;

