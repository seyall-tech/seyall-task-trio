
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const JobCard = ({ job }: { job: typeof careers[0] }) => {
  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-seyall-gray-dark hover:border-seyall-accent/50 transition-all duration-300">
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
      <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-black">
        Apply for this role
      </Button>
    </div>
  );
};

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Join the <span className="text-seyall-accent">Seyall</span> Team
              </h1>
              <p className="text-gray-400">
                Help us build India's first hyperlocal gig platform and transform how communities work together.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Open Roles</h2>
              <div className="space-y-6">
                {careers.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-seyall-gray-dark to-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Don't see a fit? Drop us your CV anyway.</h3>
              <p className="text-gray-400 mb-6">
                We're always looking for talented people who are passionate about our mission. If you think you could add value to Seyall in a role not listed above, we'd love to hear from you.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 inline-flex items-center gap-2">
                Send us your CV
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
