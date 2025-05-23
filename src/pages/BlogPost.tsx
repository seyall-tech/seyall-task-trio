
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample blog post data
const blogPosts = {
  "future-of-hyperlocal-gigs": {
    title: "The Future of Hyperlocal Gig Work in India",
    author: "Priya Singh",
    date: "2024-05-15",
    tags: ["gig economy", "hyperlocal", "india", "tech"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="mb-4">The gig economy in India is undergoing a fundamental shift. While global platforms have dominated headlines, a new trend is emerging: hyperlocal gig platforms that connect people within neighborhoods for in-person tasks and services.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of Neighborhood Economics</h2>
      <p class="mb-4">Traditional gig platforms have focused on specialized skills or services that can be delivered digitally or through centralized systems. However, these models often overlook the vast potential of neighborhood-level exchanges and short-term assistance.</p>
      
      <p class="mb-4">India's unique demographic and geographic landscape makes it particularly well-suited for hyperlocal platforms. With high population density in urban areas and strong community ties, the foundation for neighborhood-level gig work is already in place.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Bridging the Urban-Rural Divide</h2>
      <p class="mb-4">One of the most promising aspects of hyperlocal gig work is its potential to create economic opportunities beyond metro cities. While traditional job markets and even mainstream gig platforms tend to concentrate in urban centers, neighborhood-focused platforms can thrive anywhere people live in proximity to each other.</p>
      
      <p class="mb-4">This decentralized approach could help stem the tide of rural-to-urban migration by creating viable income opportunities in smaller towns and villages. When people can find flexible work opportunities within their own communities, the economic pressure to relocate diminishes.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Technology as the Great Enabler</h2>
      <p class="mb-4">What makes the hyperlocal gig economy possible now is the widespread adoption of smartphones and internet connectivity across India. Even in rural areas, digital literacy and connectivity have reached levels that make technology-enabled local marketplaces viable.</p>
      
      <p class="mb-4">Advanced technologies like geolocation, digital payments, and trust-building verification systems are making it easier than ever to connect neighbors for short-term work arrangements.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
      <p class="mb-4">As India continues to navigate economic challenges and opportunities, hyperlocal gig platforms represent a promising approach to distributed economic growth. By enabling micro-entrepreneurship at the neighborhood level, these platforms could help create a more resilient and inclusive economy.</p>
      
      <p class="mb-4">The future of work in India might not just be digital or remote—it could be as close as next door.</p>
    `,
    relatedPosts: [
      {
        slug: "building-community-through-local-work",
        title: "Building Community Through Local Work Opportunities"
      },
      {
        slug: "from-metros-to-mandals",
        title: "From Metros to Mandals: Democratizing Income Opportunities"
      }
    ]
  },
  "building-community-through-local-work": {
    title: "Building Community Through Local Work Opportunities",
    author: "Arjun Mehta",
    date: "2024-05-10",
    tags: ["community", "local economy", "gig work"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="mb-4">In an increasingly digital world, many communities are experiencing a paradox: while global connectivity grows, local connections often weaken. Hyperlocal gig platforms are emerging as a surprising solution to this modern challenge.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Rediscovering Neighborhood Connections</h2>
      <p class="mb-4">When neighbors help neighbors with everyday tasks, something remarkable happens. Beyond the economic transaction, these interactions build community fabric and restore connections that have been eroded by modern lifestyles.</p>
      
      <p class="mb-4">Traditional community ties in India have always been strong, but urbanization and modern work patterns have disrupted these networks. Hyperlocal platforms can leverage technology to help restore these connections in a format adapted to contemporary life.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Trust in the Digital Age</h2>
      <p class="mb-4">One of the core challenges for any community-based economy is trust. Hyperlocal platforms that incorporate verification systems, ratings, and reviews create accountability that makes neighbors more comfortable engaging with each other for work opportunities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Economic Resilience Through Community</h2>
      <p class="mb-4">Communities with strong internal economic activity demonstrate greater resilience during economic downturns. When money circulates locally rather than immediately flowing out to distant corporations or service providers, the community retains more economic value.</p>
      
      <p class="mb-4">This local circulation creates a multiplier effect that strengthens the entire neighborhood economy. Each transaction between neighbors potentially triggers additional local spending, creating a virtuous cycle of community economic development.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Community Economics</h2>
      <p class="mb-4">As hyperlocal platforms grow, they have the potential to transform not just how we work, but how we live together. By making it easier for people to help each other and build economic relationships, these platforms can contribute to stronger, more connected communities.</p>
    `,
    relatedPosts: [
      {
        slug: "future-of-hyperlocal-gigs",
        title: "The Future of Hyperlocal Gig Work in India"
      },
      {
        slug: "from-metros-to-mandals",
        title: "From Metros to Mandals: Democratizing Income Opportunities"
      }
    ]
  },
  "from-metros-to-mandals": {
    title: "From Metros to Mandals: Democratizing Income Opportunities",
    author: "Meera Krishnan",
    date: "2024-05-05",
    tags: ["rural economy", "small towns", "income"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="mb-4">India's economic growth story has been predominantly centered around its major metropolitan areas. While cities like Mumbai, Delhi, Bangalore, and Chennai have flourished, smaller towns and rural areas have often been left behind in terms of economic opportunities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rural-Urban Opportunity Gap</h2>
      <p class="mb-4">The disparity in income opportunities between urban and rural India continues to drive one of the world's largest internal migrations. Millions leave their homes and communities each year in search of better economic prospects in already overcrowded cities.</p>
      
      <p class="mb-4">This migration creates challenges for both the migrants, who often face difficult living conditions and cultural adjustment, and for the communities they leave behind, which lose valuable human capital and workforce.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Technology as an Equalizer</h2>
      <p class="mb-4">Digital platforms have the potential to bridge this opportunity gap by connecting people to work regardless of location. However, most existing platforms still favor urban users due to the nature of services offered or delivery logistics.</p>
      
      <p class="mb-4">Hyperlocal platforms that focus on neighborhood-level exchanges present a different model. Since they facilitate local connections for in-person services, they can function effectively anywhere people live in communities—from metro cities to small towns and village clusters.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Inclusive by Design</h2>
      <p class="mb-4">For digital platforms to truly serve all of India, they must be designed with inclusivity in mind. This means considering factors like:
      </p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Language accessibility for non-English speakers</li>
        <li>Simple interfaces that work well on basic smartphones</li>
        <li>Low bandwidth requirements for areas with limited connectivity</li>
        <li>Support for feature phone users where necessary</li>
        <li>Offline functionality for unreliable network areas</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Potential Impact</h2>
      <p class="mb-4">If successfully implemented across India's diverse geography, hyperlocal gig platforms could help distribute economic opportunities more equitably. This could reduce migration pressure, strengthen local economies, and contribute to more sustainable development patterns.</p>
      
      <p class="mb-4">The vision of connecting India's 700+ districts through neighborhood-level economic exchanges represents a powerful approach to inclusive growth that builds on the country's strong community traditions while leveraging modern technology.</p>
    `,
    relatedPosts: [
      {
        slug: "future-of-hyperlocal-gigs",
        title: "The Future of Hyperlocal Gig Work in India"
      },
      {
        slug: "building-community-through-local-work",
        title: "Building Community Through Local Work Opportunities"
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="bg-seyall-accent hover:bg-seyall-accent-dark text-black">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-seyall-accent mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-seyall-gray text-seyall-accent px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <div className="mr-4 h-10 w-10 rounded-full bg-seyall-accent flex items-center justify-center text-black font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-gray-400">{post.date}</div>
              </div>
            </div>

            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <div 
              className="prose prose-invert prose-headings:text-white prose-a:text-seyall-accent max-w-none" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-seyall-gray-dark p-4 rounded-lg hover:border-seyall-accent border border-gray-800 transition-all duration-300"
                    >
                      <h4 className="font-medium mb-2">{relatedPost.title}</h4>
                      <span className="text-sm text-seyall-accent">Read article →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
