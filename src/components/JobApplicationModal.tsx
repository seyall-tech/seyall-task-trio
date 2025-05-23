
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this, or we can add it
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { X } from "lucide-react";

interface JobApplicationModalProps {
  jobTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ jobTitle, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Submitting application for:", jobTitle, formData);
    toast.success(`Application for ${jobTitle} submitted! (This is a simulation)`);
    setIsSubmitting(false);
    onClose();
    // Reset form
     setFormData({ fullName: "", email: "", resume: null, coverLetter: "" });
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-seyall-gray-dark border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in your details below. We're excited to hear from you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div>
            <Label htmlFor="fullName" className="text-gray-300">Full Name</Label>
            <Input 
              id="fullName" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              className="bg-black border-gray-700 focus:border-seyall-accent"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="bg-black border-gray-700 focus:border-seyall-accent"
            />
          </div>
          <div>
            <Label htmlFor="resume" className="text-gray-300">Resume/CV (PDF, DOCX)</Label>
            <Input 
              id="resume" 
              name="resume" 
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange} 
              required 
              className="bg-black border-gray-700 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-seyall-accent file:text-black hover:file:bg-seyall-accent-dark"
            />
          </div>
          <div>
            <Label htmlFor="coverLetter" className="text-gray-300">Cover Letter (Optional)</Label>
            <Textarea 
              id="coverLetter" 
              name="coverLetter" 
              value={formData.coverLetter} 
              onChange={handleChange} 
              rows={4}
              className="bg-black border-gray-700 focus:border-seyall-accent"
              placeholder="Tell us why you're a great fit..."
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="text-gray-300 border-gray-700 hover:bg-gray-700">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-seyall-accent hover:bg-seyall-accent-dark text-black">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
         <DialogClose asChild className="absolute right-4 top-4">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
