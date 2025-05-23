
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
        <div className="h-12 w-12 rounded-full bg-seyall-accent flex items-center justify-center text-black font-bold text-xl mr-4">
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
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-seyall-accent via-seyall-accent/50 to-transparent hidden md:block"></div>
      
      <Step
        number={1}
        title="Post a task"
        description="Describe what you need help with, when you need it, and for how long. For example: 'Need help at my popup stall, 6-9 PM today'"
      />
      
      <Step
        number={2}
        title="Nearby helpers apply"
        description="Verified people from your area get notified about your task and can apply to help you"
      />
      
      <Step
        number={3}
        title="Get it done fast"
        description="Choose a helper, meet them, and get your task completed. No contracts. No fluff. Just fast, reliable help."
      />
    </div>
  );
};

export default HowItWorks;
