import { useState, useEffect } from 'react';
import { Star, MessageCircle, User, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovators Ltd",
      rating: 5,
      comment: "Mary delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise are outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupHub Kenya",
      rating: 5,
      comment: "Working with Mary was a game-changer for our mobile app. Professional, reliable, and delivers quality work on time.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Solutions",
      rating: 5,
      comment: "Mary's graphic design skills are incredible. She perfectly captured our brand vision and created stunning visuals.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    company: '',
    rating: 5,
    comment: ''
  });

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('maryCathlineTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Save testimonials to localStorage whenever testimonials change
  useEffect(() => {
    localStorage.setItem('maryCathlineTestimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleInputChange = (field, value) => {
    setNewTestimonial(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newTestimonial.name || !newTestimonial.comment) {
      alert('Please fill in your name and comment.');
      return;
    }

    const testimonial = {
      id: Date.now(),
      ...newTestimonial,
      avatar: `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1494790108755-2616b612b786' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&w=100&h=100`
    };

    setTestimonials(prev => [testimonial, ...prev]);
    setNewTestimonial({
      name: '',
      company: '',
      rating: 5,
      comment: ''
    });
    setShowForm(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const averageRating = testimonials.length > 0 
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : 5.0;

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials & Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            See what my clients say about working with me. Your feedback matters!
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            </div>
            <div className="text-gray-600">
              Based on {testimonials.length} review{testimonials.length !== 1 ? 's' : ''}
            </div>
          </div>

          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Plus size={18} />
            {showForm ? 'Cancel' : 'Add Your Review'}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <MessageCircle size={20} />
                Share Your Experience
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      value={newTestimonial.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      value={newTestimonial.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('rating', index + 1)}
                        className="focus:outline-none"
                      >
                        <Star
                          size={24}
                          className={
                            index < newTestimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 hover:text-yellow-400'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review *
                  </label>
                  <Textarea
                    value={newTestimonial.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    placeholder="Share your experience working with Mary..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.company && (
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    )}
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star size={12} className="fill-current" />
                    {testimonial.rating}.0
                  </Badge>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.comment}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
