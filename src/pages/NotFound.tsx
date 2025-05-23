
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="text-white">4</span>
          <span className="text-seyall-accent">0</span>
          <span className="text-white">4</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-black">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
