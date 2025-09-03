import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Kiprotich",
      position: "CEO, TechStart Kenya",
      company: "TechStart Kenya",
      rating: 5,
      comment: "Mary delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise is remarkable. Our sales increased by 300% within the first month!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      position: "Marketing Director",
      company: "Digital Solutions Ltd",
      rating: 5,
      comment: "Working with Mary was a game-changer for our digital presence. She not only built us a beautiful website but also implemented a comprehensive SEO strategy that tripled our organic traffic.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      name: "David Ochieng",
      position: "Founder",
      company: "MobiBank Solutions",
      rating: 5,
      comment: "The mobile banking app Mary developed for us is secure, user-friendly, and has received excellent feedback from our customers. Her expertise in mobile development is outstanding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 4,
      name: "Grace Mutindi",
      position: "Operations Manager",
      company: "HealthCare Plus",
      rating: 5,
      comment: "Mary's data visualization dashboard transformed how we analyze our patient data. The Power BI integration she implemented provides insights we never had before. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 5,
      name: "Michael Kamau",
      position: "Creative Director",
      company: "Brand Innovators",
      rating: 5,
      comment: "Mary's design skills are exceptional. She created a complete brand identity for our agency that perfectly captures our vision. Her creativity and professionalism are unmatched.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 6,
      name: "Lucy Njeri",
      position: "E-commerce Manager",
      company: "Fashion Forward",
      rating: 5,
      comment: "The chatbot and USSD system Mary developed for our customer service has automated 80% of our inquiries. Our customer satisfaction scores have never been higher!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover h-full bg-white border-0 shadow-md relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-secondary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.position}
                    </p>
                    <p className="text-primary text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join These Happy Clients?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            I'm committed to delivering exceptional results that exceed your expectations.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
