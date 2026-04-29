import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, FileText, Video, Presentation, Link as LinkIcon } from "lucide-react";
import { useRoute } from "wouter";
import { coursesData } from "@/data/coursesAndProjects";

/**
 * Course Detail Page
 * Displays full course information including lectures and resources
 * All lecture links point to OneDrive or external resources for easy updates
 */

export default function CourseDetail() {
  const [match, params] = useRoute("/course/:id");

  if (!match) return null;

  const course = coursesData.find((c) => c.id === params?.id);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Course Not Found</h1>
          <Button onClick={() => window.history.back()} className="bg-primary text-primary-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </div>
      </div>
    );
  }

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "video":
        return <Video className="h-5 w-5 text-red-500" />;
      case "slides":
        return <Presentation className="h-5 w-5 text-orange-500" />;
      case "pdf":
        return <FileText className="h-5 w-5 text-red-600" />;
      default:
        return <LinkIcon className="h-5 w-5 text-blue-500" />;
    }
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
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Button>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
              <p className="text-primary font-raleway text-sm font-semibold">
                {course.code} • {course.level} • {course.semester} {course.year}
              </p>
            </div>
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground font-lato mb-6">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Credits</p>
                <p className="text-2xl font-playfair font-bold text-primary">{course.credits}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Instructor</p>
                <p className="text-sm font-lato font-semibold text-foreground">{course.instructor}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Lectures</p>
                <p className="text-2xl font-playfair font-bold text-accent">{course.lectures.length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground font-raleway">Level</p>
                <p className="text-sm font-lato font-semibold text-foreground">{course.level}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Learning Outcomes */}
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-muted-foreground font-lato">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lectures */}
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">Course Lectures</h2>
                <div className="space-y-4">
                  {course.lectures.map((lecture, idx) => (
                    <Card key={lecture.id} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">{getFileIcon(lecture.fileType)}</div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-lato font-bold text-foreground">
                                Lecture {idx + 1}: {lecture.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{lecture.description}</p>
                            </div>
                            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-raleway font-semibold whitespace-nowrap ml-4">
                              {lecture.fileType}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-4">
                            <a
                              href={lecture.oneDriveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-lato text-sm font-semibold"
                            >
                              <Download className="h-4 w-4" /> Access Material
                            </a>
                            <span className="text-xs text-muted-foreground font-raleway">
                              Uploaded: {new Date(lecture.uploadedDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="text-lg font-playfair font-bold text-foreground mb-4">Course Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-raleway uppercase">Prerequisites</p>
                    <p className="text-sm font-lato text-foreground mt-1">{course.prerequisites}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-raleway uppercase">Semester</p>
                    <p className="text-sm font-lato text-foreground mt-1">
                      {course.semester} {course.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-raleway uppercase">Instructor</p>
                    <p className="text-sm font-lato text-foreground mt-1">{course.instructor}</p>
                  </div>
                </div>
              </Card>

              {/* Resources */}
              <Card className="p-6 border-accent/20">
                <h3 className="text-lg font-playfair font-bold text-foreground mb-4">Course Resources</h3>
                <div className="space-y-3">
                  <a
                    href={course.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-lato font-semibold text-foreground">Syllabus</p>
                      <p className="text-xs text-muted-foreground">Full course outline</p>
                    </div>
                  </a>
                  <a
                    href={course.resources}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <LinkIcon className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-lato font-semibold text-foreground">All Resources</p>
                      <p className="text-xs text-muted-foreground">OneDrive folder</p>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
