import React, { useState } from 'react';
import { Users, Target, Award, Heart, ArrowRight, Play, Quote, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Satisfaction Rate', icon: Heart },
    { number: '24/7', label: 'Customer Support', icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform how our customers experience technology.'
    },
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description: 'Every decision we make starts with our customers. Their success is our success, and their feedback drives our evolution.'
    },
    {
      icon: Zap,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. From design to delivery, we maintain the highest standards in everything we create.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest communication, ethical practices, and building long-term relationships based on trust.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face',
      bio: 'Former VP at Google with 15+ years in tech leadership.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Ex-Netflix engineer passionate about scalable architecture.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer with a focus on user experience.'
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Operations expert ensuring seamless customer experiences.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to revolutionize digital experiences' },
    { year: '2020', title: 'First Product Launch', description: 'Launched our flagship platform to 1,000+ early adopters' },
    { year: '2021', title: 'Series A Funding', description: 'Raised $10M to accelerate growth and innovation' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded operations to 15 countries worldwide' },
    { year: '2023', title: 'Industry Recognition', description: 'Won "Best Innovation Award" at TechCrunch Disrupt' },
    { year: '2024', title: '50K Customers', description: 'Reached milestone of serving 50,000+ happy customers' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            We're Building the Future
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses and individuals with innovative technology solutions that make the impossible, possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
              Join Our Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on strong principles that guide every decision we make
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {['mission', 'vision', 'story'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-500">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize access to powerful technology solutions that enable businesses and individuals 
                  to achieve their full potential. We believe that innovation should be accessible, intuitive, 
                  and transformative for everyone.
                </p>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-500">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the world's most trusted platform for digital transformation, where every interaction 
                  creates value, every solution drives progress, and every customer becomes a catalyst for positive change 
                  in their industry.
                </p>
              </div>
            )}
            
            {activeTab === 'story' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-500">
                <Quote className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2019 by a team of passionate technologists who witnessed firsthand the challenges 
                  businesses face in adopting new technologies. We started with a simple question: "What if technology 
                  could be as intuitive as having a conversation?" This question led us to create solutions that 
                  bridge the gap between complex technology and human needs.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that shape our culture and drive our decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to work with us, partner with us, or simply learn more about what we do, 
            we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              View Careers
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;