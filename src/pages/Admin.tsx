
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface SignupData {
  id: number;
  fullName: string;
  email: string;
  city: string;
  date: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

interface BlogPost {
  id: number;
  title: string;
  status: "published" | "draft";
  author: string;
  date: string;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [earlySignups, setEarlySignups] = useState<SignupData[]>([
    {
      id: 1,
      fullName: "Raj Patel",
      email: "raj.patel@example.com",
      city: "Mumbai",
      date: "2024-05-01",
    },
    {
      id: 2,
      fullName: "Priya Singh",
      email: "priya.singh@example.com",
      city: "Delhi",
      date: "2024-05-02",
    },
    {
      id: 3,
      fullName: "Arun Kumar",
      email: "arun.kumar@example.com",
      city: "Bangalore",
      date: "2024-05-03",
    },
    {
      id: 4,
      fullName: "Divya Sharma",
      email: "divya.sharma@example.com",
      city: "Chennai",
      date: "2024-05-04",
    },
    {
      id: 5,
      fullName: "Ajay Verma",
      email: "ajay.verma@example.com",
      city: "Hyderabad",
      date: "2024-05-05",
    },
  ]);

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([
    {
      id: 1,
      name: "Vikram Seth",
      email: "vikram.seth@example.com",
      message: "I'm interested in using Seyall in my neighborhood. When will it launch in Kolkata?",
      date: "2024-05-10",
      read: false,
    },
    {
      id: 2,
      name: "Meera Nair",
      email: "meera.nair@example.com",
      message: "Are you looking for partnerships with local businesses? I run a small store in Chennai and would love to collaborate.",
      date: "2024-05-09",
      read: true,
    },
    {
      id: 3,
      name: "Rahul Dev",
      email: "rahul.dev@example.com",
      message: "I have a technical question about your platform. Can someone from your team contact me?",
      date: "2024-05-08",
      read: false,
    },
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The Future of Hyperlocal Gig Work in India",
      status: "published",
      author: "Priya Singh",
      date: "2024-05-15",
    },
    {
      id: 2,
      title: "Building Community Through Local Work Opportunities",
      status: "published",
      author: "Arjun Mehta",
      date: "2024-05-10",
    },
    {
      id: 3,
      title: "From Metros to Mandals: Democratizing Income Opportunities",
      status: "published",
      author: "Meera Krishnan",
      date: "2024-05-05",
    },
    {
      id: 4,
      title: "How Seyall is Different from Existing Gig Platforms",
      status: "draft",
      author: "Admin",
      date: "2024-05-18",
    },
  ]);

  useEffect(() => {
    // Check if there's a stored login state
    const storedLoginState = localStorage.getItem("adminLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simple hardcoded auth for demo (in a real app, use proper auth)
      if (username === "admin" && password === "admin123") {
        setIsLoggedIn(true);
        localStorage.setItem("adminLoggedIn", "true");
        toast.success("Logged in successfully");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
    toast.success("Logged out successfully");
  };

  const handleExportCSV = () => {
    // In a real app, this would export actual data
    toast.success("CSV exported successfully");
  };

  const markAsRead = (id: number) => {
    setContactMessages(
      contactMessages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
    toast.success("Message marked as read");
  };

  const getTotalCounts = () => {
    return {
      signups: earlySignups.length,
      messages: contactMessages.length,
      unreadMessages: contactMessages.filter((m) => !m.read).length,
      blogs: blogPosts.length,
      publishedBlogs: blogPosts.filter((b) => b.status === "published").length,
    };
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-md p-6 bg-seyall-gray-dark rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-white">Se</span>
              <span className="text-seyall-accent">yall</span>{" "}
              <span className="text-white">Admin</span>
            </h1>
            <p className="text-gray-400">Sign in to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-black border-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black border-gray-800"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-seyall-accent hover:bg-seyall-accent-dark text-black"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>For demo: username: admin, password: admin123</p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const counts = getTotalCounts();

  return (
    <div className="min-h-screen bg-black">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-seyall-gray-dark border-r border-gray-800 p-4">
          <div className="mb-8">
            <h1 className="font-nunito font-bold text-xl">
              <span className="text-white">Se</span>
              <span className="text-seyall-accent">yall</span>{" "}
              <span className="text-white">Admin</span>
            </h1>
          </div>

          <nav className="space-y-2">
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === "dashboard"
                  ? "bg-seyall-accent text-black"
                  : "text-gray-300 hover:bg-gray-900"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === "signups"
                  ? "bg-seyall-accent text-black"
                  : "text-gray-300 hover:bg-gray-900"
              }`}
              onClick={() => setActiveTab("signups")}
            >
              Early Access Signups
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === "blog"
                  ? "bg-seyall-accent text-black"
                  : "text-gray-300 hover:bg-gray-900"
              }`}
              onClick={() => setActiveTab("blog")}
            >
              Blog Manager
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === "messages"
                  ? "bg-seyall-accent text-black"
                  : "text-gray-300 hover:bg-gray-900"
              }`}
              onClick={() => setActiveTab("messages")}
            >
              Contact Messages
            </button>
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="outline"
              className="w-full border-gray-700 text-gray-300"
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="bg-seyall-gray-dark border-b border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "signups" && "Early Access Signups"}
                {activeTab === "blog" && "Blog Manager"}
                {activeTab === "messages" && "Contact Messages"}
              </h2>
            </div>
          </header>

          <main className="p-6">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-seyall-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-gray-400 text-sm mb-1">Total Early Signups</h3>
                  <p className="text-3xl font-bold">{counts.signups}</p>
                </div>
                
                <div className="bg-seyall-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-gray-400 text-sm mb-1">Blog Posts</h3>
                  <p className="text-3xl font-bold">{counts.publishedBlogs} <span className="text-sm text-gray-500 font-normal">/ {counts.blogs}</span></p>
                </div>
                
                <div className="bg-seyall-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-gray-400 text-sm mb-1">Contact Messages</h3>
                  <p className="text-3xl font-bold">
                    {counts.messages} <span className="text-seyall-accent text-sm">({counts.unreadMessages} unread)</span>
                  </p>
                </div>
                
                <div className="col-span-1 md:col-span-3 mt-6">
                  <h3 className="text-xl font-medium mb-4">Quick Stats</h3>
                  <p className="text-gray-400">Welcome to the Seyall admin dashboard! Here you can manage early access signups, blog posts, and contact messages.</p>
                </div>
              </div>
            )}

            {activeTab === "signups" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Input
                    placeholder="Search signups..."
                    className="max-w-xs bg-seyall-gray-dark border-gray-800"
                  />
                  <Button onClick={handleExportCSV} variant="outline">
                    Export CSV
                  </Button>
                </div>

                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-seyall-gray-dark hover:bg-seyall-gray-dark">
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {earlySignups.map((signup) => (
                        <TableRow key={signup.id} className="hover:bg-seyall-gray border-gray-800">
                          <TableCell>{signup.fullName}</TableCell>
                          <TableCell>{signup.email}</TableCell>
                          <TableCell>{signup.city}</TableCell>
                          <TableCell>{signup.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {activeTab === "blog" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium">Blog Posts</h3>
                  <Button className="bg-seyall-accent text-black hover:bg-seyall-accent-dark">
                    + New Post
                  </Button>
                </div>

                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-seyall-gray-dark hover:bg-seyall-gray-dark">
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id} className="hover:bg-seyall-gray border-gray-800">
                          <TableCell>{post.title}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded text-xs ${
                                post.status === "published"
                                  ? "bg-green-900/30 text-green-400"
                                  : "bg-yellow-900/30 text-yellow-400"
                              }`}
                            >
                              {post.status}
                            </span>
                          </TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>{post.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="h-8">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 border-red-900 text-red-500 hover:text-red-400">
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h3 className="text-xl font-medium mb-6">Contact Messages</h3>

                <div className="space-y-4">
                  {contactMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border ${
                        message.read
                          ? "border-gray-800 bg-seyall-gray-dark"
                          : "border-seyall-accent/50 bg-seyall-accent/5"
                      }`}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{message.name}</h4>
                        <span className="text-sm text-gray-400">{message.date}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{message.email}</p>
                      <p className="mt-3">{message.message}</p>
                      {!message.read && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3"
                          onClick={() => markAsRead(message.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
