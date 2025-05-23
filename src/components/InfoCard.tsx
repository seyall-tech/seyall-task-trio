
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-seyall-gray-dark p-6 rounded-lg border border-gray-800 hover:border-seyall-accent/50 transition-all duration-300 ease-in-out h-full transform hover:scale-105",
        className
      )}
    >
      <div className="text-seyall-accent mb-4">{icon}</div> {/* Icon uses new accent color */}
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default InfoCard;
