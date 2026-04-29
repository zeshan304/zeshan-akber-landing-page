/**
 * Courses and Projects Data Structure
 * Easy to update: modify course/project details, add new lectures, update OneDrive links
 */

export interface Lecture {
  id: string;
  title: string;
  description: string;
  oneDriveLink: string; // Link to OneDrive or external resource
  fileType: "pdf" | "video" | "slides" | "recording" | "other";
  uploadedDate: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  level: "UG" | "Graduate" | "Advanced";
  semester: string;
  year: number;
  description: string;
  instructor: string;
  credits: number;
  prerequisites: string;
  learningOutcomes: string[];
  lectures: Lecture[];
  syllabus: string; // OneDrive link
  resources: string; // OneDrive folder link
}

export interface ProjectMember {
  name: string;
  role: string;
  affiliation: string;
}

export interface Project {
  id: string;
  title: string;
  type: "academic" | "industry";
  status: "Active" | "Completed" | "Ongoing";
  startDate: string;
  endDate?: string;
  description: string;
  objectives: string[];
  team: ProjectMember[];
  funding: string;
  partner?: string;
  images: string[];
  publications?: string[];
  outcomes: string;
  relatedLinks?: { label: string; url: string }[];
}

// ============ COURSES DATA ============
export const coursesData: Course[] = [
  {
    id: "ce-214",
    code: "CE-214",
    title: "Quantity and Cost Estimation",
    level: "UG",
    semester: "Fall",
    year: 2026,
    description:
      "Comprehensive course on quantity surveying and cost estimation techniques for construction projects. Students learn to prepare bills of quantities, estimate project costs, and manage budgets effectively.",
    instructor: "Muhammad Zeshan Akber",
    credits: 3,
    prerequisites: "CE-101 (Construction Materials)",
    learningOutcomes: [
      "Understand quantity surveying principles and practices",
      "Prepare accurate bills of quantities",
      "Estimate project costs using various methods",
      "Manage construction budgets and financial planning",
      "Use industry-standard estimation software",
    ],
    lectures: [
      {
        id: "lec-1",
        title: "Introduction to Quantity Surveying",
        description: "Overview of QS role, responsibilities, and industry standards",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_1",
        fileType: "slides",
        uploadedDate: "2026-01-15",
      },
      {
        id: "lec-2",
        title: "Bills of Quantities (BoQ) Preparation",
        description: "Step-by-step guide to preparing accurate BoQs",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_2",
        fileType: "slides",
        uploadedDate: "2026-01-22",
      },
      {
        id: "lec-3",
        title: "Cost Estimation Methods",
        description: "Parametric, analogous, and bottom-up estimation techniques",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_3",
        fileType: "slides",
        uploadedDate: "2026-01-29",
      },
      {
        id: "lec-4",
        title: "Labor and Material Cost Analysis",
        description: "Understanding labor productivity and material pricing",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_4",
        fileType: "slides",
        uploadedDate: "2026-02-05",
      },
      {
        id: "lec-5",
        title: "Contingency and Risk in Estimation",
        description: "Managing uncertainties and risks in cost estimates",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_5",
        fileType: "slides",
        uploadedDate: "2026-02-12",
      },
      {
        id: "lec-6",
        title: "Case Study: Real Project Estimation",
        description: "Practical application of estimation techniques on actual projects",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_6",
        fileType: "video",
        uploadedDate: "2026-02-19",
      },
    ],
    syllabus: "https://1drv.ms/f/s!YOUR_ONEDRIVE_SYLLABUS_CE214",
    resources: "https://1drv.ms/f/s!YOUR_ONEDRIVE_RESOURCES_CE214",
  },
  {
    id: "ce-474",
    code: "CE-474",
    title: "Construction Project Scheduling",
    level: "UG",
    semester: "Fall",
    year: 2026,
    description:
      "Advanced course on project scheduling, time management, and critical path analysis. Students learn to develop project schedules, manage resources, and optimize project timelines.",
    instructor: "Muhammad Zeshan Akber",
    credits: 3,
    prerequisites: "CE-214 (Quantity and Cost Estimation)",
    learningOutcomes: [
      "Develop comprehensive project schedules",
      "Apply critical path method (CPM) and PERT techniques",
      "Manage project resources and constraints",
      "Use professional scheduling software (Primavera, MS Project)",
      "Optimize project timelines and reduce delays",
    ],
    lectures: [
      {
        id: "lec-1",
        title: "Fundamentals of Project Scheduling",
        description: "Introduction to scheduling concepts and terminology",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_7",
        fileType: "slides",
        uploadedDate: "2026-01-15",
      },
      {
        id: "lec-2",
        title: "Work Breakdown Structure (WBS)",
        description: "Creating effective WBS for construction projects",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_8",
        fileType: "slides",
        uploadedDate: "2026-01-22",
      },
      {
        id: "lec-3",
        title: "Critical Path Method (CPM)",
        description: "Understanding and applying CPM for schedule optimization",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_9",
        fileType: "slides",
        uploadedDate: "2026-01-29",
      },
      {
        id: "lec-4",
        title: "Resource Leveling and Allocation",
        description: "Managing resource constraints in project schedules",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_10",
        fileType: "slides",
        uploadedDate: "2026-02-05",
      },
      {
        id: "lec-5",
        title: "Primavera P6 Software Training",
        description: "Hands-on training on industry-standard scheduling software",
        oneDriveLink: "https://1drv.ms/f/s!YOUR_ONEDRIVE_LINK_HERE_11",
        fileType: "video",
        uploadedDate: "2026-02-12",
      },
    ],
    syllabus: "https://1drv.ms/f/s!YOUR_ONEDRIVE_SYLLABUS_CE474",
    resources: "https://1drv.ms/f/s!YOUR_ONEDRIVE_RESOURCES_CE474",
  },
];

// ============ PROJECTS DATA ============
export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Sustainable Building Resilience Framework",
    type: "academic",
    status: "Active",
    startDate: "2025-01-15",
    description:
      "Developing a comprehensive framework for assessing and enhancing the resilience of buildings against environmental and climate-related stressors. This project integrates machine learning algorithms with structural engineering principles to predict building performance under extreme conditions.",
    objectives: [
      "Create a holistic resilience assessment methodology",
      "Develop ML-based prediction models for building performance",
      "Integrate sustainability metrics with resilience analysis",
      "Provide actionable recommendations for building retrofitting",
      "Validate framework on real-world case studies",
    ],
    team: [
      { name: "Muhammad Zeshan Akber", role: "Principal Investigator", affiliation: "NUST" },
      { name: "Dr. Sarah Johnson", role: "Co-Investigator", affiliation: "NUST" },
      { name: "Ahmed Hassan", role: "Research Scholar", affiliation: "NUST" },
      { name: "Fatima Ali", role: "Research Scholar", affiliation: "NUST" },
    ],
    funding: "NUST Research Grant (PKR 2.5M)",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/research_visual_abstract-AbkUqaZ5HpUDPes7F7vcah.webp",
    ],
    publications: [
      "Akber, M.Z., et al. (2025). Resilience Assessment Framework for Sustainable Buildings. Journal of Sustainable Construction.",
    ],
    outcomes:
      "Framework successfully tested on 15 buildings in Islamabad. Identified critical vulnerabilities and retrofitting strategies. Published 2 peer-reviewed papers.",
    relatedLinks: [
      { label: "Project Repository", url: "https://github.com/example/resilience-framework" },
      { label: "Research Paper", url: "https://doi.org/example" },
    ],
  },
  {
    id: "proj-2",
    title: "AI-Driven Concrete Performance Prediction",
    type: "industry",
    status: "Active",
    startDate: "2024-06-01",
    description:
      "Collaborative project with a major concrete supplier to develop an AI system that predicts concrete compressive strength and durability based on mix design and environmental conditions. The system uses machine learning to optimize concrete formulations for sustainability.",
    objectives: [
      "Develop accurate ML models for concrete strength prediction",
      "Reduce concrete waste through optimized mix designs",
      "Improve sustainability by minimizing cement content",
      "Create user-friendly prediction tool for industry partners",
      "Validate predictions against laboratory and field data",
    ],
    team: [
      { name: "Muhammad Zeshan Akber", role: "Project Lead", affiliation: "NUST" },
      { name: "Concrete Corp Engineering Team", role: "Industry Partner", affiliation: "Concrete Corp" },
      { name: "Dr. Hassan Khan", role: "ML Specialist", affiliation: "NUST" },
    ],
    funding: "Industry Partnership (USD 50,000)",
    partner: "Concrete Corp Ltd.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/research_visual_abstract-AbkUqaZ5HpUDPes7F7vcah.webp",
    ],
    publications: [
      "Akber, M.Z., & Khan, H. (2024). Machine Learning for Concrete Performance Optimization. Concrete International.",
    ],
    outcomes:
      "Developed prediction model with 94% accuracy. Implemented in production for 3 concrete plants. Reduced waste by 12% and improved sustainability metrics.",
    relatedLinks: [
      { label: "Industry Whitepaper", url: "https://example.com/concrete-ml-whitepaper" },
    ],
  },
  {
    id: "proj-3",
    title: "Life-Cycle Carbon Assessment Platform",
    type: "academic",
    status: "Completed",
    startDate: "2022-09-01",
    endDate: "2024-12-31",
    description:
      "Developed a comprehensive web-based platform for assessing the life-cycle carbon footprint of construction projects. The platform integrates material databases, energy consumption models, and transportation impact calculations.",
    objectives: [
      "Create comprehensive LCA database for construction materials",
      "Develop carbon calculation algorithms",
      "Build user-friendly web interface",
      "Validate against international LCA standards",
      "Support decision-making for sustainable construction",
    ],
    team: [
      { name: "Muhammad Zeshan Akber", role: "Project Director", affiliation: "HKUST" },
      { name: "Dr. Chen Wei", role: "Co-Director", affiliation: "HKUST" },
      { name: "Lisa Wong", role: "Software Developer", affiliation: "HKUST" },
      { name: "Raj Patel", role: "Data Analyst", affiliation: "HKUST" },
    ],
    funding: "Research Grant (HKD 800,000)",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663611545825/PjDc6XjX9YDtxtRWMcCUPS/research_visual_abstract-AbkUqaZ5HpUDPes7F7vcah.webp",
    ],
    publications: [
      "Akber, M.Z., et al. (2023). Life-Cycle Carbon Assessment Framework for Construction. Environmental Science & Technology.",
      "Akber, M.Z., & Chen, W. (2024). Digital Tools for Sustainable Construction. Journal of Cleaner Production.",
    ],
    outcomes:
      "Platform deployed and used by 50+ construction firms. Assessed carbon footprint of 200+ projects. Published 3 high-impact papers. Platform continues to be maintained and updated.",
    relatedLinks: [
      { label: "Platform Website", url: "https://example.com/lca-platform" },
      { label: "GitHub Repository", url: "https://github.com/example/lca-platform" },
    ],
  },
];
