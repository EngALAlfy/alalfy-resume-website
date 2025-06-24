import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Globe, MessageCircle, Download, Mail, MapPin, Calendar, Award, Briefcase, GraduationCap, User, Code, Database, Server, Smartphone, Monitor, GitBranch } from "lucide-react";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const downloadCV = () => {
    // This would typically trigger a PDF download
    window.open('/Islam_Alalfy_CV_2025_ATS_Updated.pdf', '_blank');
  };

  const workExperience = [
    {
      title: "Team Lead – Flutter & Laravel",
      company: "Bakka Soft",
      location: "Cairo, Egypt",
      duration: "Dec 2022 – Present",
      responsibilities: [
        "Leading development of HurryApp (large-scale food delivery app)",
        "Managing DevOps, CI/CD, POS integrations",
        "Promoted to Team Lead in Nov 2024"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "GRE Development",
      location: "London (Remote)",
      duration: "Feb 2024 – Oct 2024",
      responsibilities: [
        "Full-stack development (Laravel, PHP, Flutter, ReactJS)",
        "Developed multi-vendor SaaS e-commerce store"
      ]
    },
    {
      title: "Founder & Tech Lead",
      company: "YoTech",
      location: "Cairo, Egypt",
      duration: "Jan 2024 – Present",
      responsibilities: [
        "Founded and led full-stack software startup",
        "Delivered software for startups and SMEs"
      ]
    },
    {
      title: "Full Stack Developer – Flutter & Laravel",
      company: "SPC Tech",
      location: "Future City",
      duration: "Dec 2023 – Feb 2024",
      responsibilities: [
        "Built taxi booking app using Flutter",
        "Backend with Node.js and Firebase"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Knooz Misr",
      location: "Galalah, Egypt",
      duration: "Dec 2021 – Dec 2022",
      responsibilities: [
        "Developed centralized marble factory system for 13 factories"
      ]
    },
    {
      title: "Full Stack Developer (Remote)",
      company: "Arinanetwork",
      location: "Alexandria, Egypt",
      duration: "Jun 2019 – Nov 2021",
      responsibilities: [
        "Developed ERP system with offline support and secured source code"
      ]
    }
  ];

  const technicalSkills = {
    "Backend": ["Laravel", "PHP", "Node.js", "MySQL", "REST APIs", "GraphQL"],
    "Frontend": ["Flutter", "HTML", "CSS", "JavaScript", "jQuery", "ReactJS"],
    "DevOps & Tools": ["Docker", "GitHub Actions", "Composer"],
    "Server Management": ["Ubuntu", "Linux"],
    "AI & APIs": ["Ollama Local API", "AI Integrations"],
    "Other Tools": ["Unit Testing", "Python", "Microsoft Office"],
    "Payment Integrations": ["OPay", "STC Pay", "Paymob", "TELR (UAE)", "FAWRY", "KASHIER"]
  };

  const softSkills = [
    "Team Leadership & Mentorship",
    "Analytical Thinking", 
    "Pressure Management",
    "Communication & Collaboration"
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark bg-gray-900">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl">
              IA
            </div>
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Islam Hassan Abd Allah Alalfy
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
                Senior Software Engineer | Team Lead – Mobile and Web
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mb-8 leading-relaxed">
                A result-driven Flutter & Laravel Developer with over 5 years of experience in building 
                scalable web and mobile applications. Currently leading teams, managing infrastructure, 
                and integrating AI-powered solutions in both startup and enterprise environments.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={downloadCV}
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <a href="https://github.com/EngALAlfy" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://alalfy.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3">
                    <Globe className="mr-2 h-5 w-5" />
                    Website
                  </Button>
                </a>
                <a href="https://api.whatsapp.com/send?phone=201153263994" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* Work Experience */}
        <section id="experience">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-gray-800 dark:text-white">{job.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col lg:text-right">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {job.duration}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 flex items-center gap-2">
                    {category === 'Backend' && <Database className="h-5 w-5" />}
                    {category === 'Frontend' && <Monitor className="h-5 w-5" />}
                    {category === 'DevOps & Tools' && <GitBranch className="h-5 w-5" />}
                    {category === 'Server Management' && <Server className="h-5 w-5" />}
                    {category === 'AI & APIs' && <Code className="h-5 w-5" />}
                    {category === 'Other Tools' && <Award className="h-5 w-5" />}
                    {category === 'Payment Integrations' && <Smartphone className="h-5 w-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section id="soft-skills">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Soft Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                    <span className="text-lg font-medium text-gray-800 dark:text-white">{skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Education</h2>
          </div>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Bachelor's Degree in Civil Engineering
              </h3>
              <p className="text-blue-600 font-semibold mb-2">Al-Azhar University – Egypt</p>
              <p className="text-gray-600 dark:text-gray-300">Graduated: 2021</p>
            </CardContent>
          </Card>
        </section>

        {/* Personal Info */}
        <section id="personal">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Nationality", value: "Egyptian" },
              { label: "Marital Status", value: "Married" },
              { label: "Military Service", value: "Completed" },
              { label: "Driving License", value: "Yes" }
            ].map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Online Profiles */}
        <section id="profiles">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Online Profiles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Website", url: "https://alalfy.com", icon: Globe },
              { label: "Startup", url: "https://yotech.org", icon: Briefcase },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167", icon: Linkedin },
              { label: "GitHub", url: "https://github.com/EngALAlfy", icon: Github },
              { label: "WhatsApp", url: "https://api.whatsapp.com/send?phone=201153263994", icon: MessageCircle }
            ].map((profile, index) => (
              <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer">
                <Card className="text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-blue-600">
                  <CardContent className="p-6">
                    <profile.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-800 dark:text-white">{profile.label}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Separator className="mb-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Islam Hassan Abd Allah Alalfy. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with React & Vite
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
