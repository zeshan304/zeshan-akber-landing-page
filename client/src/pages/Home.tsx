import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, BookOpen, Briefcase, Zap, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { coursesData, projectsData } from "@/data/coursesAndProjects";

/**
 * Design System: Sustainable & Intelligent Construction Management
 * Color Palette: Professional Blue (#0066cc), Forest Green (#2d8659), Clean White (#ffffff)
 * Vision: Academic Leader + Industry Innovator in Sustainable Construction Management
 * Typography: Playfair Display (headings), Lato (body), Raleway (labels)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("research");

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const latestUpdates = [
    {
      title: "Conference on AI 2.0 to Boost Productivity (April 2026)",
      description: "Participated in a global conference exploring next-generation AI for industrial productivity.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/research_visual_abstract-AbkUqaZ5HpUDPes7F7vcah.webp",
      category: "Conference",
    },
    {
      title: "Q1 Journal Publications Milestone",
      description: "Expanded publication portfolio in AI, concrete performance, and sustainability themes.",
      category: "Publications",
    },
    {
      title: "Course Resources Upload Pipeline",
      description: "Prepared structure for adding lab manuals and future video content with coming-soon placeholders.",
      category: "Teaching",
    },
  ];

  const researchTeaching = [
    {
      category: "Courses",
      items: coursesData.map((course) => ({
        id: course.id,
        title: course.title,
        level: course.level,
        code: course.code,
        semester: course.semester,
        year: course.year,
      })),
    },
    {
      category: "Publications",
      items: [
        { title: "Life cycle sustainability assessment of electricity generation", citations: 145, year: 2017 },
        { title: "Prediction of seven-day compressive strength of field concrete", citations: 105, year: 2021 },
        { title: "Predicting the slump of industrially produced concrete using ML", citations: 63, year: 2022 },
      ],
    },
    {
      category: "Projects",
      items: [
        { title: "Sustainable Building Resilience Framework", status: "Active", funding: "NUST" },
        { title: "AI-Driven Concrete Performance Prediction", status: "Active", funding: "Industry Partnership" },
        { title: "Life-Cycle Carbon Assessment Platform", status: "Completed", funding: "Research Grant" },
      ],
    },
  ];

  const industryCollaboration = [
    {
      category: "Professional Experience",
      items: [
        { title: "Assistant Professor", org: "NUST Institute of Civil Engineering", period: "2025 - Present", focus: "Research & Education" },
        { title: "Postdoctoral Fellow", org: "Centre for Advances in Reliability and Safety", period: "2022 - 2025", focus: "Resilience Optimization" },
        { title: "Research Scholar", org: "Hong Kong University of Science and Technology", period: "2018 - 2022", focus: "ML in Construction" },
      ],
    },
    {
      category: "Industry Projects",
      items: projectsData
        .filter((p) => p.type === "industry")
        .map((project) => ({
          id: project.id,
          title: project.title,
          partner: project.partner || project.funding,
          scope: project.description.substring(0, 50) + "...",
        })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex gap-1">
            <button
              onClick={() => scrollToSection("research")}
              className={`px-6 py-4 font-lato font-semibold text-sm transition-all border-b-2 ${
                activeTab === "research"
                  ? "text-primary border-b-primary"
                  : "text-muted-foreground border-b-transparent hover:text-foreground"
              }`}
            >
              Research & Teaching
            </button>
            <button
              onClick={() => scrollToSection("industry")}
              className={`px-6 py-4 font-lato font-semibold text-sm transition-all border-b-2 ${
                activeTab === "industry"
                  ? "text-primary border-b-primary"
                  : "text-muted-foreground border-b-transparent hover:text-foreground"
              }`}
            >
              Industry & Collaboration
            </button>
            <button
              onClick={() => scrollToSection("updates")}
              className={`px-6 py-4 font-lato font-semibold text-sm transition-all border-b-2 ${
                activeTab === "updates"
                  ? "text-primary border-b-primary"
                  : "text-muted-foreground border-b-transparent hover:text-foreground"
              }`}
            >
              Latest Updates
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                  <p className="text-primary font-raleway text-sm font-semibold">Academic Leader • Industry Innovator</p>
                </div>
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                  Muhammad Zeshan Akber
                </h1>
                <p className="text-xl text-muted-foreground font-lato leading-relaxed">
                  Advancing <span className="font-semibold text-primary">Sustainable and Intelligent Construction Management</span> through research, education, and industry collaboration.
                </p>
                <div className="space-y-2 text-sm font-lato text-muted-foreground">
                  <p>🌱 <span className="font-semibold">Sustainable:</span> Environmentally friendly, economically stable, socially acceptable</p>
                  <p>🤖 <span className="font-semibold">Intelligent:</span> Rational, data-driven, autonomous approaches</p>
                  <p>🏗️ <span className="font-semibold">Lifecycle Management:</span> Cost, quality, time optimization across project lifecycle</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-lato"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-lato"
                  onClick={() => window.open("https://scholar.google.com/citations?user=mFiSbPIAAAAJ", "_blank")}
                >
                  View Publications
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <p className="text-2xl font-playfair font-bold text-primary">419</p>
                  <p className="text-xs text-muted-foreground font-raleway">Citations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <p className="text-2xl font-playfair font-bold text-accent">14+</p>
                  <p className="text-xs text-muted-foreground font-raleway">Publications</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm">
                  <p className="text-2xl font-playfair font-bold text-primary">h-8</p>
                  <p className="text-xs text-muted-foreground font-raleway">h-index</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Profile Picture */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="/manus-storage/profilepic_32918e6c.webp"
                  alt="Muhammad Zeshan Akber"
                  className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Teaching Section */}
      <section id="research" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">Research & Teaching</h2>
            <p className="text-lg text-muted-foreground font-lato">
              Bridging academia and practice through innovative courses, impactful research, and collaborative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchTeaching.map((section, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => {
                    const isCourse = (item as any).code !== undefined;
                    return (
                      <div key={itemIdx} className="pb-4 border-b border-border last:border-b-0">
                        {isCourse ? (
                          <Link href={`/course/${(item as any).id}`} className="font-lato font-semibold text-primary hover:text-primary/80 text-sm cursor-pointer transition-colors">
                            {item.title}
                          </Link>
                        ) : (
                          <p className="font-lato font-semibold text-foreground text-sm">{item.title}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1 font-raleway">
                          {(item as any).code && `${(item as any).code} • ${(item as any).level} • ${(item as any).semester} ${(item as any).year}`}
                          {(item as any).level && !((item as any).code) && (item as any).level}
                          {(item as any).students && ` • ${(item as any).students}`}
                          {(item as any).year && ` • ${(item as any).year}`}
                          {(item as any).funding && ` • ${(item as any).funding}`}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry & Collaboration Section */}
      <section id="industry" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">Industry & Collaboration</h2>
            <p className="text-lg text-muted-foreground font-lato">
              Translating research into practice through industry partnerships and real-world project implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryCollaboration.map((section, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">{section.category}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => {
                    const isProject = (item as any).id !== undefined && section.category === "Industry Projects";
                    return (
                      <div key={itemIdx} className="pb-4 border-b border-border last:border-b-0">
                        {isProject ? (
                          <Link href={`/project/${(item as any).id}`} className="font-lato font-semibold text-primary hover:text-primary/80 text-sm cursor-pointer transition-colors">
                            {item.title}
                          </Link>
                        ) : (
                          <p className="font-lato font-semibold text-foreground text-sm">{item.title}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1 font-raleway">
                          {(item as any).org || (item as any).partner}
                        </p>
                        <p className="text-xs text-primary mt-1 font-raleway font-semibold">
                          {(item as any).period || (item as any).scope}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section id="updates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">Latest Updates</h2>
            <p className="text-lg text-muted-foreground font-lato">
              Recent news, conferences, publications, and milestones.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* News Card */}
              <Card className="p-8 border-l-4 border-l-primary bg-gradient-to-br from-white to-primary/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-raleway font-semibold rounded-full">
                    {latestUpdates[currentNewsIndex].category}
                  </div>
                  <span className="text-sm text-muted-foreground font-raleway">
                    {currentNewsIndex + 1} / {latestUpdates.length}
                  </span>
                </div>

                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                  {latestUpdates[currentNewsIndex].title}
                </h3>

                <p className="text-muted-foreground font-lato mb-6">
                  {latestUpdates[currentNewsIndex].description}
                </p>

                {latestUpdates[currentNewsIndex].image && (
                  <div
                    className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
                    style={{ backgroundImage: `url('${latestUpdates[currentNewsIndex].image}')` }}
                  />
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentNewsIndex((prev) => (prev - 1 + latestUpdates.length) % latestUpdates.length)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-primary rotate-180" />
                  </button>

                  <div className="flex gap-2">
                    {latestUpdates.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentNewsIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentNewsIndex ? "bg-primary w-8" : "bg-border w-2"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentNewsIndex((prev) => (prev + 1) % latestUpdates.length)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-muted-foreground font-lato mb-12 max-w-2xl mx-auto">
              Interested in collaboration, research partnerships, or consulting? I'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground font-lato">zeshan.akber@cairs.hk</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground font-lato">+92 51 9000 0000</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground font-lato">Islamabad, Pakistan</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white border-border">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-raleway font-semibold text-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-border rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-raleway font-semibold text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-border rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-raleway font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-border rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-raleway font-semibold text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-border rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    rows={5}
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-lato">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-lato text-sm mb-4">
            © 2026 Muhammad Zeshan Akber. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://scholar.google.com/citations?user=mFiSbPIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-raleway"
            >
              Google Scholar
            </a>
            <a
              href="https://orcid.org/0000-0003-1754-1527"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-raleway"
            >
              ORCID
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-zeshan-akber-5998a025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-raleway"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
