
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Contact form submitted:", formData);
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      // Show success message
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Contact <span className="text-seyall-accent">Seyall</span>
            </h1>
            <p className="text-gray-400 text-center mb-12">
              Have questions or feedback? We'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-seyall-gray border-gray-800 focus:border-seyall-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-seyall-gray border-gray-800 focus:border-seyall-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="h-32 bg-seyall-gray border-gray-800 focus:border-seyall-accent"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div className="bg-seyall-gray-dark p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-seyall-accent">Email</h3>
                    <a 
                      href="mailto:hello@seyall.in" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      hello@seyall.in
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-seyall-accent">Location</h3>
                    <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Connect with us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 text-white hover:text-seyall-accent p-2 rounded-full transition-colors"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 text-white hover:text-seyall-accent p-2 rounded-full transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 text-white hover:text-seyall-accent p-2 rounded-full transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
