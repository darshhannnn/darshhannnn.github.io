import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      // In a real application, this would send the form data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "darshanborimalla@gmail.com",
      href: "mailto:darshanborimalla@gmail.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 95501 35476",
      href: "tel:+919550135476",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/darshan-borimalla", 
      label: "LinkedIn", 
      bgColor: "bg-blue-600 hover:bg-blue-700",
      hoverEffect: "hover:scale-110 hover:rotate-6"
    },
    { 
      icon: Github, 
      href: "https://github.com/darshhannnn", 
      label: "GitHub", 
      bgColor: "bg-gray-700 hover:bg-gray-600",
      hoverEffect: "hover:scale-110 hover:-rotate-6"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter", 
      bgColor: "bg-blue-400 hover:bg-blue-500",
      hoverEffect: "hover:scale-110 hover:rotate-3"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      
      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6 animate-bounce-in">
              <MessageCircle className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Let's Connect</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Let's Work{" "}
              <span className="gradient-text">Together</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Ready to bring your ideas to life? I'm always excited to discuss new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-blue-400" />
                Get In Touch
              </h3>
              
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                I'm always interested in hearing about new opportunities and interesting projects. Whether you're a company looking to hire, or someone looking to collaborate, I'd love to hear from you.
              </p>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="group flex items-center gap-4 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className={`${info.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1" data-testid={`text-contact-label-${index}`}>
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                            data-testid={`link-contact-${index}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-lg" data-testid={`text-contact-value-${index}`}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div>
                <p className="text-gray-300 mb-4 font-medium">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${social.bgColor} ${social.hoverEffect} shadow-lg hover:shadow-xl`}
                        aria-label={social.label}
                        data-testid={`link-social-${index}`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                        Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-200">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Project inquiry"
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group hover:shadow-xl hover:scale-105 disabled:opacity-50"
                    data-testid="button-submit"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}