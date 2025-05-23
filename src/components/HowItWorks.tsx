
import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-seyall-accent flex items-center justify-center text-seyall-gray-dark font-bold text-xl mr-4"> {/* Step number uses new accent and dark text */}
          {number}
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400 pl-16">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16 relative">
      {/* Connecting line */}
      <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-seyall-accent via-seyall-accent/50 to-seyall-accent/10 hidden md:block"></div> {/* Line uses new accent */}
      
      <Step
        number={1}
        title="Post a task (or find one!)"
        description="Describe what you need, or browse available tasks. Specify your budget or see offered pay."
      />
      
      <Step
        number={2}
        title="Connect with Local Talent"
        description="Verified people in your area get notified or apply. You choose who to work with."
      />
      
      <Step
        number={3}
        title="Get It Done, Your Way"
        description="Agree on terms, meet, and complete the task. Simple, fast, and on your conditions."
      />
    </div>
  );
};

export default HowItWorks;
