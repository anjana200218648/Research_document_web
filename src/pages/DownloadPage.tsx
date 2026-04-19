import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { 
  FileText, 
  Users, 
  Calendar, 
  File, 
  Eye, 
  Download,
  ChevronRight,
  FolderOpen,
  Presentation,
  BookOpen,
  ClipboardList,
  GraduationCap,
  UserCircle,
  ExternalLink
} from "lucide-react";

// Import research paper from assets
import researchPaperPDF from "@/assets/SafeKid Scan Early Detection of Digital Addiction (Camera Ready).pdf";

// Document section types
interface DocumentItem {
  name: string;
  description: string;
  driveLink?: string;
  localFile?: string;
}

interface DocumentSection {
  id: string;
  title: string;
  icon: any;
  count: number;
  description: string;
  items: DocumentItem[];
  color: string;
}

// Document data with Google Drive links
const documentSections: DocumentSection[] = [
  {
    id: "proposal",
    title: "Research Proposal",
    icon: ClipboardList,
    count: 1,
    description: "Our initial project proposal documents outlining objectives, methodology, and expected outcomes.",
    color: "#3B82F6",
    items: [
      {
        name: "Proposal Reports",
        description: "Individual reports from all 4 team members",
        driveLink: "https://drive.google.com/drive/folders/1k7PGo9MIwBD0KnzVBY7vdeitTgdml29s?usp=sharing"
      }
    ]
  },
  {
    id: "presentations",
    title: "Presentations",
    icon: Presentation,
    count: 3,
    description: "Slides and materials from our project presentations throughout the research timeline.",
    color: "#8B5CF6",
    items: [
      {
        name: "Proposal Presentation",
        description: "Initial project pitch presentation",
        driveLink: "https://drive.google.com/drive/folders/1XyqyxQyHnvvDaoYVOHFWYIzNHlohKxUT?usp=sharing"
      },
      {
        name: "Progress Presentation 1",
        description: "First milestone results and findings",
        driveLink: "https://drive.google.com/file/d/1y_CYpm_5j8SqlSEHqDFdoooXBM43KhEL/view?usp=sharing"
      },
      {
        name: "Progress Presentation 2",
        description: "Second milestone results and updates",
        driveLink: "https://drive.google.com/file/d/1HamwF9DEtFS64LnxgHLNHRIfSNUR4tEa/view?usp=sharing"
      }
    ]
  },
  {
    id: "log-books",
    title: "Log Books",
    icon: BookOpen,
    count: 1,
    description: "Detailed tracking of research activities, experiments, and meeting minutes from all team members.",
    color: "#10B981",
    items: [
      {
        name: "Team Log Books",
        description: "Weekly logs from all 4 team members",
        driveLink: "https://drive.google.com/drive/folders/1SD6A7CoVP18D_xn-4ydnIVTHljWcqnlw?usp=sharing"
      }
    ]
  },
   {
    id: "CheckList Doc",
    title: "CheckList Documents",
    icon: BookOpen,
    count: 2,
    description: "Checklist documents used to track progress and ensure task completion throughout the research.",
    color: "#8B5CF6",
    items: [
      {
        name: "CheckList 01 Document",
        description: "GitHub repository and Readme file create",
        driveLink: "https://drive.google.com/drive/folders/1YjQklmeEqcG5377MO2IktPihEUrQ72Bf?usp=sharing"
      },
      {
        name: "CheckList 02 Document",
        description: "Create Project plan document using MS Planner",
        driveLink: "https://drive.google.com/drive/folders/1t4T1ykmd_J06yggKApwXlHfGtjTKu7vI?usp=sharing"
      },
      
    ]
  },
  {
    id: "final-reports",
    title: "Final Reports",
    icon: FileText,
    count: 1,
    description: "Comprehensive documentation of our complete research findings, methodology, results, and conclusions.",
    color: "#EC4899",
    items: [
      {
        name: "Final Reports",
        description: "Complete documentation of research findings",
        driveLink: "https://drive.google.com/drive/folders/1hF3JKAYoPlo0zj1eg9q5jIDe2NFMTpJ9?usp=sharing"
      }
    ]
  }
];

// Modal component for document preview
const DocumentModal = ({ 
  isOpen, 
  onClose, 
  title,
  items 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string;
  items: DocumentItem[];
}) => {
  if (!isOpen) return null;

  const getEmbedUrl = (url: string) => {
    // Convert Google Drive links to embed format
    if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/\/d\/(.+?)\//);
      const folderIdMatch = url.match(/\/folders\/(.+?)(\?|$)/);
      
      if (fileIdMatch) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      } else if (folderIdMatch) {
        return `https://drive.google.com/embeddedfolderview?id=${folderIdMatch[1]}`;
      }
    }
    return url;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl h-[90vh] bg-background rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 h-[calc(90vh-64px)] overflow-y-auto">
          {items.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-semibold text-primary mb-2">{item.name}</h4>
              {item.driveLink ? (
                <iframe
                  src={getEmbedUrl(item.driveLink)}
                  width="100%"
                  height="500px"
                  className="border-0 rounded-lg"
                  allow="autoplay"
                />
              ) : item.localFile ? (
                <embed
                  src={item.localFile}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                  className="border-0 rounded-lg"
                />
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const DocumentsPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<DocumentSection | null>(null);
  const [researchPreviewOpen, setResearchPreviewOpen] = useState(false);

  const handleViewDocuments = (section: DocumentSection) => {
    setSelectedSection(section);
    setModalOpen(true);
  };

  const handleOpenDriveLink = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownloadResearch = () => {
    const link = document.createElement('a');
    link.href = researchPaperPDF;
    link.download = 'SafeKid_Scan_Research_Paper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            Research Documents
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Access all documentation related to our SafeKid Scan research project, 
            from initial proposals to final reports.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto mb-12" />

        {/* Research Paper Section - Special Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-accent" />
            <h2 className="font-display text-xl font-semibold text-primary">Research Paper</h2>
            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">1 document</span>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-primary mb-1">
                  Published Paper
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our published academic paper presenting the key findings and innovations of our SafeKid Scan project.
                </p>
                <p className="text-xs text-muted-foreground">
                  Academic publication of our research
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setResearchPreviewOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={handleDownloadResearch}
                  className="flex items-center gap-2 px-4 py-2 gradient-navy text-primary-foreground rounded-lg transition-all hover:scale-105 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Document Sections */}
        <div className="space-y-6">
          {documentSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="w-5 h-5" style={{ color: section.color }} />
                <h2 className="font-display text-xl font-semibold text-primary">{section.title}</h2>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">
                  {section.count} document{section.count > 1 ? 's' : ''}
                </span>
              </div>

              {/* Section Card */}
              <div className="glass-card p-6">
                <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-border">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">• {item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewDocuments(section)}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm"
                      >
                        <FolderOpen className="w-4 h-4" />
                        View Documents
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      {item.driveLink && (
                        <button
                          onClick={() => handleOpenDriveLink(item.driveLink!)}
                          className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary/50 rounded-lg transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open in Drive
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <UserCircle className="w-5 h-5 text-accent" />
            <h2 className="font-display text-xl font-semibold text-primary">Team Information</h2>
            <span className="text-xs bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">1 document</span>
          </div>
          
          <div className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Details about our research team members, roles, and contributions to the SafeKid Scan project.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-border">
              <div>
                <h4 className="font-semibold text-primary mb-1">• Team Profiles</h4>
                <p className="text-xs text-muted-foreground">Information about all 4 team members</p>
              </div>
              <button
                onClick={() => handleOpenDriveLink("https://drive.google.com/drive/folders/16DQAUB9_tEwa7bUS5zWR7sS6UBX-HUcu?usp=sharing")}
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm"
              >
                <FolderOpen className="w-4 h-4" />
                View Documents
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Research Paper Preview Modal */}
        {researchPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setResearchPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[90vh] bg-background rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-display text-lg font-semibold text-primary">
                  SafeKid Scan Research Paper
                </h3>
                <button
                  onClick={() => setResearchPreviewOpen(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="h-[calc(90vh-64px)]">
                <embed
                  src={researchPaperPDF}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Document Modal for Google Drive content */}
        <DocumentModal 
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedSection?.title || ""}
          items={selectedSection?.items || []}
        />
      </div>
    </PageWrapper>
  );
};

export default DocumentsPage;