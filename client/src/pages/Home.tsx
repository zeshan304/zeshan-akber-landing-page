import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Award, BookOpen, Users, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design System: Academic Elegance with Islamic Heritage
 * Color Palette: Forest Green (#1a5d3a), Cream (#f5f1e8), Gold (#d4af37), Charcoal (#2c2c2c)
 * Typography: Playfair Display (headings), Lato (body), Raleway (labels)
 * Layout: Asymmetric with diagonal cuts and geometric accents
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const researchAreas = [
    {
      title: "Machine Learning in Construction",
      description: "Advanced predictive modeling for concrete strength, slump prediction, and material optimization using scalable ML approaches.",
      icon: "🤖",
      citations: "145+",
    },
    {
      title: "Sustainable Infrastructure",
      description: "Life-cycle assessment and sustainability-oriented optimization for resilient buildings and energy systems.",
      icon: "🌱",
      citations: "89+",
    },
    {
      title: "Structural Resilience",
      description: "Multi-agent deep reinforcement learning for resilience optimization considering seismic hazards and utility interactions.",
      icon: "🏗️",
      citations: "63+",
    },
    {
      title: "Data-Driven Design",
      description: "Explainable AI and advanced analytics for performance prediction and risk analysis in construction engineering.",
      icon: "📊",
      citations: "45+",
    },
  ];

  const achievements = [
    { label: "Total Citations", value: "419", metric: "Google Scholar" },
    { label: "h-index", value: "8", metric: "Research Impact" },
    { label: "Publications", value: "14+", metric: "Peer-Reviewed" },
    { label: "Peer Reviews", value: "57", metric: "Contributed" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/hero_background_academic-a4FaaYGQ8vkQ4WTHm6B7SU.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with diagonal cut */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80" />

        {/* Decorative geometric shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 bg-primary" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/50">
                  <p className="text-accent font-raleway text-sm font-semibold">Assistant Professor • PhD Civil Engineering</p>
                </div>
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                  Muhammad Zeshan Akber
                </h1>
                <p className="text-xl text-muted-foreground font-lato leading-relaxed">
                  Driving innovation in construction management through advanced research in machine learning, sustainable infrastructure, and data-driven decision making.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                    <p className="text-3xl font-playfair font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-raleway">{stat.label}</p>
                  </div>
                ))}
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

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://orcid.org/0000-0003-1754-1527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-raleway">ORCID: 0000-0003-1754-1527</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center">
              <div
                className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/research_visual_abstract-AbkUqaZ5HpUDPes7F7vcah.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">Research Expertise</h2>
            <p className="text-lg text-muted-foreground font-lato">
              Specializing in cutting-edge research that bridges machine learning, sustainable infrastructure, and structural resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary hover:border-l-accent bg-gradient-to-br from-white to-secondary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{area.icon}</span>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-raleway font-semibold rounded-full">
                    {area.citations} citations
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground font-lato leading-relaxed">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-12 text-center">Research Impact</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((stat, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <p className="text-4xl font-playfair font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-raleway text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.metric}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Top Publications</h3>
              <div className="space-y-4">
                {[
                  { title: "Life cycle sustainability assessment of electricity generation in Pakistan", citations: 145, year: 2017 },
                  { title: "Prediction of seven-day compressive strength of field concrete", citations: 105, year: 2021 },
                  { title: "Predicting the slump of industrially produced concrete using machine learning", citations: 63, year: 2022 },
                ].map((pub, idx) => (
                  <div key={idx} className="flex items-start justify-between pb-4 border-b border-border last:border-b-0">
                    <div className="flex-1">
                      <p className="font-lato text-foreground font-medium">{pub.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{pub.year}</p>
                    </div>
                    <span className="ml-4 inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-raleway font-semibold rounded">
                      {pub.citations} citations
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-12 text-center">Professional Journey</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-foreground">Assistant Professor</h3>
                  <p className="text-sm text-muted-foreground font-raleway">NUST Institute of Civil Engineering (2025 - Present)</p>
                  <p className="text-muted-foreground font-lato mt-2">
                    Leading research and education in construction engineering and management with focus on machine learning applications and sustainable infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-foreground">Postdoctoral Fellow</h3>
                  <p className="text-sm text-muted-foreground font-raleway">Centre for Advances in Reliability and Safety (2022 - 2025)</p>
                  <p className="text-muted-foreground font-lato mt-2">
                    Conducted advanced research on resilience optimization and structural performance modeling.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/70 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-foreground">PhD in Civil Engineering</h3>
                  <p className="text-sm text-muted-foreground font-raleway">Hong Kong University of Science and Technology (2018 - 2022)</p>
                  <p className="text-muted-foreground font-lato mt-2">
                    Specialized in machine learning applications for construction materials and structural health monitoring.
                  </p>
                </div>
              </div>
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
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground font-lato">zeshan.akber@cairs.hk</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground font-lato">+92 51 9000 0000</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border text-center">
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
