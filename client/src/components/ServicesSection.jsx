import { 
    Code, 
    Smartphone, 
    Bot, 
    Link, 
    Palette, 
    Search, 
    BarChart3, 
    Megaphone 
  } from 'lucide-react';
  import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
  
  const ServicesSection = () => {
    const services = [
      {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Node.js. From simple landing pages to complex web applications.",
        features: ["React & Next.js", "Full-stack Solutions", "Responsive Design", "Performance Optimization"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: "Android Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences on Android devices with modern UI/UX principles.",
        features: ["Native Android", "React Native", "Material Design", "App Store Optimization"]
      },
      {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: "Chatbot & USSD Development",
        description: "Intelligent conversational interfaces and USSD applications that automate customer interactions and streamline business processes.",
        features: ["AI Chatbots", "USSD Solutions", "Customer Support", "Process Automation"]
      },
      {
        icon: <Link className="w-8 h-8 text-primary" />,
        title: "API Integration",
        description: "Seamless integration of third-party APIs and development of custom APIs to connect your applications with external services and databases.",
        features: ["REST APIs", "GraphQL", "Third-party Integration", "Database Design"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary" />,
        title: "Graphic Designing",
        description: "Creative visual designs that communicate your brand message effectively across digital and print media with modern design principles.",
        features: ["Brand Identity", "UI/UX Design", "Print Design", "Digital Graphics"]
      },
      {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "SEO & Optimization",
        description: "Comprehensive SEO strategies and website optimization to improve your online visibility and drive organic traffic to your business.",
        features: ["Technical SEO", "Content Strategy", "Performance Optimization", "Analytics Setup"]
      },
      {
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        title: "Sales Analysis & Visualization (Power BI)",
        description: "Transform your business data into actionable insights with interactive dashboards and comprehensive sales analytics using Power BI.",
        features: ["Power BI Dashboards", "Data Visualization", "Sales Analytics", "Custom Reports"]
      },
      {
        icon: <Megaphone className="w-8 h-8 text-primary" />,
        title: "Digital Marketing",
        description: "Strategic digital marketing campaigns that increase brand awareness, drive engagement, and convert leads into customers across multiple channels.",
        features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "Campaign Management"]
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-white border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your project and bring your vision to life with the perfect combination of technology and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Start Your Project
                </button>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  