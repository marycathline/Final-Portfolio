import { Check, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$500",
      period: "per project",
      description: "Perfect for small businesses and startups",
      popular: false,
      features: [
        "Responsive Website Design",
        "Up to 5 pages",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "2 rounds of revisions",
        "30 days support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Standard",
      price: "$1,200",
      period: "per project",
      description: "Ideal for growing businesses with advanced needs",
      popular: true,
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "Advanced SEO optimization",
        "API integrations",
        "Content Management System",
        "E-commerce functionality",
        "Analytics setup",
        "5 rounds of revisions",
        "60 days support",
        "Performance optimization"
      ],
      buttonText: "Most Popular",
      buttonVariant: "default"
    },
    {
      name: "Premium",
      price: "$2,500",
      period: "per project",
      description: "Complete solution for enterprise-level requirements",
      popular: false,
      features: [
        "Everything in Standard",
        "Unlimited pages",
        "Custom web application",
        "Mobile app development",
        "Advanced security features",
        "Database design",
        "Third-party integrations",
        "Custom dashboard",
        "Unlimited revisions",
        "90 days support",
        "Priority support",
        "Training & documentation"
      ],
      buttonText: "Get Premium",
      buttonVariant: "outline"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your project needs. All packages include professional quality and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative card-hover ${
                plan.popular
                  ? 'border-2 border-primary shadow-xl scale-105'
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={plan.buttonVariant}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-md'
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-gray-600 mb-6">
              Need something specific? I offer custom solutions tailored to your unique requirements.
              Let's discuss your project and create a package that fits your needs perfectly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Money Back Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">48hr</div>
                <div className="text-sm text-gray-600">Quick Turnaround</div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="mt-6 bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
