import { MapPin, Phone, Mail, Calendar, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const personalDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Location",
      value: "Nairobi, Kenya"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+254710600451"
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "marycathln@gmail.com"
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      label: "Experience",
      value: "3+ Years"
    }
  ];

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      title: "Expert Developer",
      description: "Proficient in modern web and mobile technologies with a focus on clean, scalable code."
    },
    {
      icon: <Target className="w-6 h-6 text-secondary" />,
      title: "Results-Driven",
      description: "Committed to delivering solutions that drive business growth and user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Hi, I'm Mary Cathline
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer and digital strategist based in Nairobi, Kenya. 
                With over 3 years of experience in the tech industry, I specialize in creating 
                innovative digital solutions that bridge the gap between technology and business needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in tech began with a curiosity about how things work on the web. 
                Today, I help businesses and individuals bring their digital visions to life through 
                modern web applications, mobile apps, and comprehensive digital strategies. 
                I believe in writing clean, maintainable code and creating user experiences that truly matter.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, mentoring upcoming developers, 
                or working on personal projects that challenge me to grow. I'm always excited about 
                the next opportunity to create something amazing.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Personal Details
                </h3>
                <div className="space-y-4">
                  {personalDetails.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                        {detail.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{detail.label}</div>
                        <div className="font-medium text-gray-900">{detail.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Overview */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Core Expertise
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: "Frontend Development", level: 95 },
                    { skill: "Backend Development", level: 88 },
                    { skill: "Mobile Development", level: 85 },
                    { skill: "UI/UX Design", level: 80 },
                    { skill: "Digital Marketing", level: 78 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{item.skill}</span>
                        <span className="text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
