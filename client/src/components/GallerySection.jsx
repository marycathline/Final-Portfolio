import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Digital Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&h=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure banking application for Android",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&h=300",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity and visual system",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&h=300",
      technologies: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      category: "web",
      description: "Analytics dashboard for healthcare management",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&h=300",
      technologies: ["React", "D3.js", "Power BI", "REST API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "marketing",
      description: "Viral social media campaign for tech startup",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&h=300",
      technologies: ["Meta Ads", "Google Analytics", "Content Strategy"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food delivery mobile application",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&h=300",
      technologies: ["Flutter", "Firebase", "Google Maps", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "web",
      description: "Modern portfolio website with animations",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&h=300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "UI/UX Design System",
      category: "design",
      description: "Comprehensive design system for SaaS platform",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&h=300",
      technologies: ["Figma", "Design Tokens", "Component Library"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Lead Generation Campaign",
      category: "marketing",
      description: "B2B lead generation through digital channels",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300",
      technologies: ["LinkedIn Ads", "Email Marketing", "CRM Integration"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-primary hover:border-primary'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-hover group overflow-hidden bg-white border-0 shadow-md">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
