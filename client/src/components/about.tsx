import { Download, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download
    console.log("Download resume clicked");
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that matter. I specialize in React, Node.js, and modern web technologies, always striving to write clean, maintainable code.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey in tech began with a curiosity about how things work behind the scenes. Today, I help businesses transform their ideas into powerful web applications that engage users and drive results.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Available for freelance</span>
                </div>
              </div>
              <Button
                onClick={handleDownloadResume}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
                data-testid="button-download-resume"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Modern office workspace"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
