import { Box, Car, Construction, Sparkles, Store, Accessibility } from "lucide-react";

interface TaskIconProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const TaskIcon: React.FC<TaskIconProps> = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg hover:bg-seyall-gray/60 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="bg-seyall-gray-dark p-4 rounded-full mb-3 text-seyall-accent transition-transform duration-300 group-hover:scale-110">
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
    icon: <Store className="h-6 w-6" />,
    description: "Get help with event setups, decorations and temporary assistance",
  },
  {
    name: "Quick Delivery",
    icon: <Car className="h-6 w-6" />,
    description: "Fast, local deliveries for urgent packages and items",
  },
  {
    name: "Furniture & Repair",
    icon: <Construction className="h-6 w-6" />,
    description: "Help with small repairs and furniture assembly",
  },
  {
    name: "Cleaning Help",
    icon: <Sparkles className="h-6 w-6" />,
    description: "One-time cleaning assistance for homes or offices",
  },
  {
    name: "Elderly Care",
    icon: <Accessibility className="h-6 w-6" />,
    description: "Short-duration assistance for elderly relatives",
  },
  {
    name: "Moving Assistance",
    icon: <Box className="h-6 w-6" />,
    description: "Help with moving boxes and small furniture items",
  },
];
