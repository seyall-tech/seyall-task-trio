
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    notify: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      notify: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      // Clear form
      setFormData({
        fullName: "",
        email: "",
        city: "",
        notify: true,
      });
      
      // Show success message
      toast.success("You're on the list! Can't wait to welcome you 🎉");
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Your name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="bg-seyall-gray border-gray-800 focus:border-seyall-accent"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-seyall-gray border-gray-800 focus:border-seyall-accent"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          placeholder="Your city"
          value={formData.city}
          onChange={handleChange}
          required
          className="bg-seyall-gray border-gray-800 focus:border-seyall-accent"
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="notify" 
          checked={formData.notify} 
          onCheckedChange={handleCheckboxChange}
          className="border-seyall-accent data-[state=checked]:bg-seyall-accent data-[state=checked]:text-black"
        />
        <Label htmlFor="notify" className="text-sm text-gray-400">
          Notify me when you launch in my area
        </Label>
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium"
      >
        {isSubmitting ? "Submitting..." : "Get Early Access"}
      </Button>
    </form>
  );
};

export default EarlyAccessForm;
