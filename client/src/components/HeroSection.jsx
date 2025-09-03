import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './imagef/ImagewithFallback';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Mary Cathline</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Building Digital Solutions that Drive Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Web & Mobile Developer | Digital Strategist | Designer
              </p>
              <p className="text-base text-gray-600 max-w-lg">
                Passionate about creating innovative digital experiences that transform businesses and connect people. 
                Specializing in modern web technologies and mobile solutions that deliver real results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                Hire Me
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('gallery')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                View My Work
                <Download size={18} />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-secondary p-1 overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400"
                  alt="Mary Cathline - Professional Portrait"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-lg p-3 shadow-lg">
                <span className="text-sm font-medium">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
