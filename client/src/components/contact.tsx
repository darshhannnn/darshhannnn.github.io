import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Sparkles, MessageCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "darshankumarb3@gmail.com",
      href: "mailto:darshankumarb3@gmail.com",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 8919527353",
      href: "tel:+918919527353",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/darshan-borimalla", 
      label: "LinkedIn", 
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      icon: Github, 
      href: "https://github.com/darshhannnn", 
      label: "GitHub", 
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] float-modern" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px] float-delayed" />
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 animate-bounce-in">
              <MessageCircle className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-white/70">Let's Connect</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Let's Work{" "}
              <span className="gradient-text">Together</span>
            </h2>
            
            <p className="text-xl text-white/40 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ready to bring your ideas to life? I'm always excited to discuss new opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-indigo-400" />
                  <span className="gradient-text">Get In Touch</span>
                </h3>
                
                <p className="text-white/40 mb-8 leading-relaxed">
                  I'm always interested in hearing about new opportunities and interesting projects. Whether you're a company looking to hire, or someone looking to collaborate, I'd love to hear from you.
                </p>
                
                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm mb-1" data-testid={`text-contact-label-${index}`}>
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white hover:text-indigo-400 transition-colors duration-200 font-medium"
                              data-testid={`link-contact-${index}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium" data-testid={`text-contact-value-${index}`}>
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
                  <p className="text-white/50 mb-4 font-medium">Follow me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          aria-label={social.label}
                          data-testid={`link-social-${index}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/50">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/20 transition-all duration-300 hover:border-white/20"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/50">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/20 transition-all duration-300 hover:border-white/20"
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/50">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/20 transition-all duration-300 hover:border-white/20"
                      placeholder="Project inquiry"
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/50">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/20 resize-none transition-all duration-300 hover:border-white/20"
                      placeholder="Tell me about your project..."
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitted 
                        ? 'bg-emerald-500 text-white' 
                        : 'btn-primary text-white'
                    } disabled:opacity-50`}
                    data-testid="button-submit"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
