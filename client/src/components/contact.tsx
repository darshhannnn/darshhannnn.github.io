import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'darshankumarb3@gmail.com', href: 'mailto:darshankumarb3@gmail.com', gradient: 'from-indigo-500 to-purple-500' },
  { icon: Phone, label: 'Phone', value: '+91 8919527353', href: 'tel:+918919527353', gradient: 'from-cyan-500 to-blue-500' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: null, gradient: 'from-emerald-500 to-teal-500' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/darshan-borimalla', label: 'LinkedIn', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Github, href: 'https://github.com/darshhannnn', label: 'GitHub', gradient: 'from-gray-500 to-gray-600' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const header = useScrollReveal();
  const info = useScrollReveal({ threshold: 0.2 });
  const formRef = useScrollReveal({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        {/* Header */}
        <div ref={header.ref} className={`section-header reveal ${header.isVisible ? 'active' : ''}`}>
          <div className="section-badge">
            <MessageCircle className="w-4 h-4 text-indigo-400" />
            Contact
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Let's discuss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div ref={info.ref} className={`reveal ${info.isVisible ? 'active' : ''}`}>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-white/40 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and interesting projects. 
                Whether you're a company looking to hire or someone looking to collaborate.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-indigo-400 transition-colors text-sm font-medium">{item.value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Social</p>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center hover:scale-110 transition-transform`}
                    >
                      <s.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef.ref} className={`reveal ${formRef.isVisible ? 'active' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="input"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`btn w-full ${
                    status === 'success' ? 'bg-emerald-500 text-white' : 'btn-primary'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
