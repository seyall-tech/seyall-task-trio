
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    slug: "future-of-hyperlocal-gigs",
    title: "The Future of Hyperlocal Gig Work in India",
    excerpt: "How technology is enabling neighborhood-level economic opportunities across urban and rural India.",
    author: "Priya Singh",
    date: "2024-05-15",
    tags: ["gig economy", "hyperlocal", "india", "tech"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    slug: "building-community-through-local-work",
    title: "Building Community Through Local Work Opportunities",
    excerpt: "How hyperlocal gig platforms are strengthening neighborhood connections and creating economic resilience.",
    author: "Arjun Mehta",
    date: "2024-05-10",
    tags: ["community", "local economy", "gig work"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    slug: "from-metros-to-mandals",
    title: "From Metros to Mandals: Democratizing Income Opportunities",
    excerpt: "How technology is bringing flexible work to small towns and villages across India.",
    author: "Meera Krishnan",
    date: "2024-05-05",
    tags: ["rural economy", "small towns", "income"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Seyall <span className="text-seyall-accent">Blog</span>
            </h1>
            <p className="text-gray-400 mb-12">
              Insights on hyperlocal gig economy, community building, and the future of work in India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-seyall-gray-dark rounded-lg overflow-hidden border border-gray-800 hover:border-seyall-accent/50 transition-all duration-300"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-black/50 text-seyall-accent px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-medium mb-3">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="link" className="text-seyall-accent p-0 h-auto">
                          Read more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400">More articles coming soon!</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
