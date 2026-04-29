import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Calendar, Award, ExternalLink, FileText } from "lucide-react";
import { useRoute } from "wouter";
import { projectsData } from "@/data/coursesAndProjects";

/**
 * Project Detail Page
 * Displays comprehensive project information including team, objectives, outcomes, and images
 */

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");

  if (!match) return null;

  const project = projectsData.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => window.history.back()} className="bg-primary text-primary-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </div>
      </div>
    );
  }

  const statusColor = {
    Active: "bg-green-100 text-green-800",
    Completed: "bg-blue-100 text-blue-800",
    Ongoing: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </div>
      </div>

      {/* Project Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full font-raleway text-sm font-semibold ${statusColor[project.status as keyof typeof statusColor]}`}>
                {project.status}
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                <p className="text-primary font-raleway text-sm font-semibold">
                  {project.type === "academic" ? "Academic Research" : "Industry Collaboration"}
                </p>
              </span>
            </div>
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground font-lato mb-6">{project.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Start Date</p>
                <p className="text-sm font-lato font-semibold text-foreground mt-1">
                  {new Date(project.startDate).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Funding</p>
                <p className="text-sm font-lato font-semibold text-foreground mt-1">{project.funding}</p>
              </div>
              {project.partner && (
                <div className="bg-white p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground font-raleway">Partner</p>
                  <p className="text-sm font-lato font-semibold text-foreground mt-1">{project.partner}</p>
                </div>
              )}
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Team Size</p>
                <p className="text-2xl font-playfair font-bold text-accent">{project.team.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.images.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Objectives */}
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Project Objectives</h3>
                <ul className="space-y-3">
                  {project.objectives.map((objective, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground font-lato">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team */}
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" /> Project Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.team.map((member, idx) => (
                    <Card key={idx} className="p-4 border-l-4 border-l-accent">
                      <p className="font-lato font-bold text-foreground">{member.name}</p>
                      <p className="text-sm text-primary font-raleway font-semibold mt-1">{member.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.affiliation}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" /> Project Outcomes
                </h3>
                <p className="text-muted-foreground font-lato leading-relaxed">{project.outcomes}</p>
              </div>

              {/* Publications */}
              {project.publications && project.publications.length > 0 && (
                <div className="bg-white p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" /> Publications
                  </h3>
                  <ul className="space-y-3">
                    {project.publications.map((pub, idx) => (
                      <li key={idx} className="text-muted-foreground font-lato leading-relaxed">
                        • {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6 bg-white border-primary/20">
                <h3 className="text-lg font-playfair font-bold text-foreground mb-4">Project Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground font-raleway uppercase">Start Date</p>
                      <p className="text-sm font-lato text-foreground mt-1">
                        {new Date(project.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  {project.endDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-muted-foreground font-raleway uppercase">End Date</p>
                        <p className="text-sm font-lato text-foreground mt-1">
                          {new Date(project.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Related Links */}
              {project.relatedLinks && project.relatedLinks.length > 0 && (
                <Card className="p-6 bg-white border-accent/20">
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-4">Related Links</h3>
                  <div className="space-y-3">
                    {project.relatedLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-lato font-semibold text-foreground">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
