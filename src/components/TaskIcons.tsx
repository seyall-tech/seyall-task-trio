
import { Box, Car, Gate, Cleaning, Stall, Elderly } from "lucide-react";

interface TaskIconProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const TaskIcon: React.FC<TaskIconProps> = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg hover:bg-seyall-gray transition-colors">
      <div className="bg-seyall-gray-dark p-4 rounded-full mb-3 text-seyall-accent">
        {icon}
      </div>
      <h3 className="font-medium text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-400 text-center">{description}</p>
    </div>
  );
};

export const taskIcons = [
  {
    name: "Event Setup",
    icon: <Stall className="h-6 w-6" />,
    description: "Get help with event setups, decorations and temporary assistance",
  },
  {
    name: "Quick Delivery",
    icon: <Car className="h-6 w-6" />,
    description: "Fast, local deliveries for urgent packages and items",
  },
  {
    name: "Furniture & Repair",
    icon: <Gate className="h-6 w-6" />,
    description: "Help with small repairs and furniture assembly",
  },
  {
    name: "Cleaning Help",
    icon: <Cleaning className="h-6 w-6" />,
    description: "One-time cleaning assistance for homes or offices",
  },
  {
    name: "Elderly Care",
    icon: <Elderly className="h-6 w-6" />,
    description: "Short-duration assistance for elderly relatives",
  },
  {
    name: "Moving Assistance",
    icon: <Box className="h-6 w-6" />,
    description: "Help with moving boxes and small furniture items",
  },
];
