export interface AITool {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  pricing: string;
  pricingType: 'free' | 'paid' | 'freemium';
  features: string[];
  tags: string[];
  rating?: number;
  featured?: boolean;
}

export interface AICategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export const categories: AICategory[] = [
  {
    id: "chatbots",
    name: "AI Chatbots",
    description: "Conversational AI and virtual assistants",
    icon: "",
    count: 0
  },
  {
    id: "coding-assistance",
    name: "AI Coding Assistance",
    description: "AI-powered coding assistants and development tools",
    icon: "",
    count: 0
  },
  {
    id: "image-generation",
    name: "AI Image Generation",
    description: "AI-powered image creation and editing tools",
    icon: "",
    count: 0
  },
  {
    id: "video-generation",
    name: "AI Video Generation",
    description: "AI-powered video creation and editing tools",
    icon: "",
    count: 0
  },
  {
    id: "presentation",
    name: "AI Presentation",
    description: "AI-powered presentation creation and design tools",
    icon: "",
    count: 0
  },
  {
    id: "spreadsheet",
    name: "AI Spreadsheet",
    description: "AI-powered spreadsheet and data analysis tools",
    icon: "",
    count: 0
  },
  {
    id: "meeting-notes",
    name: "AI Meeting Notes",
    description: "AI-powered meeting transcription and note-taking",
    icon: "",
    count: 0
  },
  {
    id: "workflow-automation",
    name: "AI Workflow Automation",
    description: "AI-powered workflow and process automation",
    icon: "",
    count: 0
  },
  {
    id: "writing-generation",
    name: "AI Writing Generation",
    description: "AI-powered content writing and text generation",
    icon: "",
    count: 0
  },
  {
    id: "scheduling",
    name: "AI Scheduling",
    description: "AI-powered calendar and scheduling tools",
    icon: "",
    count: 0
  },
  {
    id: "graphic-design",
    name: "AI Graphic Design",
    description: "AI-powered graphic design and visual creation",
    icon: "",
    count: 0
  },
  {
    id: "data-visualization",
    name: "AI Data Visualization",
    description: "AI-powered data analysis and visualization tools",
    icon: "",
    count: 0
  },
  {
    id: "knowledge-management",
    name: "AI Knowledge Management",
    description: "AI-powered knowledge base and information management",
    icon: "",
    count: 0
  },
  {
    id: "email-assistance",
    name: "AI Email Assistance",
    description: "AI tools for email management and automation",
    icon: "",
    count: 0
  },
  {
    id: "image-generation",
    name: "AI Image Generation",
    description: "AI tools for creating stunning images from text prompts",
    icon: "",
    count: 0
  },
  {
    id: "spreadsheet",
    name: "AI Spreadsheet",
    description: "AI-powered spreadsheet and data analysis tools",
    icon: "",
    count: 0
  },
  {
    id: "meeting-notes",
    name: "AI Meeting Notes",
    description: "AI tools for meeting transcription and note-taking",
    icon: "",
    count: 0
  },
  {
    id: "workflow-automation",
    name: "AI Workflow Automation",
    description: "AI tools for automating workflows and tasks",
    icon: "",
    count: 0
  },
  {
    id: "writing-generation",
    name: "AI Writing Generation",
    description: "AI assistants for content creation and writing",
    icon: "",
    count: 0
  },
  {
    id: "scheduling",
    name: "AI Scheduling",
    description: "AI-powered scheduling and calendar management",
    icon: "",
    count: 0
  },
  {
    id: "video-generation",
    name: "AI Video Generation",
    description: "Create and edit videos with AI-powered tools",
    icon: "",
    count: 0
  },
  {
    id: "graphic-design",
    name: "AI Graphic Design",
    description: "AI tools for graphic design and visual content creation",
    icon: "",
    count: 0
  },
  {
    id: "knowledge-management",
    name: "AI Knowledge Management",
    description: "AI tools for organizing and managing knowledge",
    icon: "",
    count: 0
  },
  {
    id: "data-visualization",
    name: "AI Data Visualization",
    description: "AI-powered data visualization and analytics tools",
    icon: "",
    count: 0
  }
];

export const aiTools: AITool[] = [
  // AI Chatbots
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI for various tasks",
    link: "https://chat.openai.com",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Natural conversation", "Code generation", "Writing assistance"],
    tags: ["conversation", "ai", "openai"]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant for helpful, harmless, and honest conversations",
    link: "https://claude.ai",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Safe AI", "Long context", "Coding help"],
    tags: ["conversation", "anthropic", "safe-ai"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Advanced AI model for reasoning and problem-solving",
    link: "https://deepseek.com",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Deep reasoning", "Problem solving", "Code analysis"],
    tags: ["ai", "reasoning", "deepseek"]
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google's multimodal AI for text, images, and more",
    link: "https://gemini.google.com",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Multimodal", "Google integration", "Advanced reasoning"],
    tags: ["google", "multimodal", "ai"]
  },
  {
    id: "grok",
    name: "Grok",
    description: "X's AI assistant with real-time information access",
    link: "https://grok.x.ai",
    category: "chatbots",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Real-time data", "X integration", "Conversational AI"],
    tags: ["x", "real-time", "social"]
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    description: "Meta's AI assistant for creative and practical tasks",
    link: "https://meta.ai",
    category: "chatbots",
    pricing: "Free",
    pricingType: "free",
    features: ["Creative assistance", "Meta integration", "Image generation"],
    tags: ["meta", "creative", "multimodal"]
  },
  {
    id: "ms-copilot",
    name: "MS Copilot",
    description: "Microsoft's AI assistant integrated across Office and Windows",
    link: "https://copilot.microsoft.com",
    category: "chatbots",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Office integration", "Windows integration", "Productivity"],
    tags: ["microsoft", "productivity", "office"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search and research assistant",
    link: "https://perplexity.ai",
    category: "chatbots",
    pricing: "Free with Pro plans",
    pricingType: "freemium",
    features: ["Real-time search", "Source citations", "Research assistance"],
    tags: ["search", "research", "citations"]
  },

  // AI Presentation
  {
    id: "beautiful-ai",
    name: "Beautiful.Ai",
    description: "AI-powered presentation design platform",
    link: "https://beautiful.ai",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Smart templates", "Auto-design", "Team collaboration"],
    tags: ["presentations", "design", "templates"]
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "Create presentations, documents and websites with AI",
    link: "https://gamma.app",
    category: "presentation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["AI generation", "Multi-format", "Interactive content"],
    tags: ["presentations", "websites", "documents"]
  },
  {
    id: "pitch",
    name: "Pitch",
    description: "Modern presentation software for teams",
    link: "https://pitch.com",
    category: "presentation",
    pricing: "Free with team plans",
    pricingType: "freemium",
    features: ["Team collaboration", "Smart templates", "Analytics"],
    tags: ["presentations", "teams", "collaboration"]
  },
  {
    id: "plus",
    name: "Plus",
    description: "AI-powered presentation creator",
    link: "https://plus.ai",
    category: "presentation",
    pricing: "Premium",
    pricingType: "paid",
    features: ["AI content generation", "Smart design", "Export options"],
    tags: ["ai", "presentations", "content"]
  },
  {
    id: "popal",
    name: "PopAI",
    description: "AI presentation and document creator",
    link: "https://popai.pro",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI templates", "Quick generation", "Multiple formats"],
    tags: ["ai", "templates", "documents"]
  },
  {
    id: "presentation-ai",
    name: "Presentation.AI",
    description: "Automated presentation creation with AI",
    link: "https://presentation.ai",
    category: "presentation",
    pricing: "Subscription based",
    pricingType: "paid",
    features: ["Auto-generation", "Professional templates", "Content suggestions"],
    tags: ["automation", "professional", "ai"]
  },
  {
    id: "slidesgo",
    name: "Slidesgo",
    description: "Free presentation templates with AI assistance",
    link: "https://slidesgo.com",
    category: "presentation",
    pricing: "Free with premium options",
    pricingType: "freemium",
    features: ["Free templates", "AI assistance", "Customization"],
    tags: ["templates", "free", "customization"]
  },
  {
    id: "tome",
    name: "Tome",
    description: "AI-native storytelling and presentation platform",
    link: "https://tome.app",
    category: "presentation",
    pricing: "Free with pro features",
    pricingType: "freemium",
    features: ["AI storytelling", "Interactive content", "Multimedia"],
    tags: ["storytelling", "interactive", "multimedia"]
  },

  // AI Coding Assistance  
  {
    id: "askcodi",
    name: "Askcodi",
    description: "AI coding assistant for faster development",
    link: "https://askcodi.com",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Code generation", "Bug fixing", "Code explanation"],
    tags: ["coding", "development", "ai"]
  },
  {
    id: "codiga",
    name: "Codiga",
    description: "AI-powered code review and analysis",
    link: "https://codiga.io",
    category: "coding-assistance",
    pricing: "Free with team plans",
    pricingType: "freemium",
    features: ["Code review", "Security analysis", "Quality metrics"],
    tags: ["code-review", "security", "analysis"]
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor for fast software development",
    link: "https://cursor.sh",
    category: "coding-assistance",
    pricing: "Free with pro features",
    pricingType: "freemium",
    features: ["AI code completion", "Chat with codebase", "Smart editing"],
    tags: ["editor", "ai", "completion"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer from GitHub and OpenAI",
    link: "https://github.com/features/copilot",
    category: "coding-assistance",
    pricing: "Subscription required",
    pricingType: "paid",
    features: ["Code suggestions", "Auto-completion", "Multi-language"],
    tags: ["github", "ai", "programming"]
  },
  {
    id: "qodo",
    name: "Qodo",
    description: "AI-powered code quality and testing platform",
    link: "https://qodo.ai",
    category: "coding-assistance",
    pricing: "Free with enterprise plans",
    pricingType: "freemium",
    features: ["Code quality", "Test generation", "Bug detection"],
    tags: ["quality", "testing", "bugs"]
  },
  {
    id: "replit",
    name: "Replit",
    description: "Online IDE with AI coding assistance",
    link: "https://replit.com",
    category: "coding-assistance",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Online IDE", "AI assistance", "Collaboration"],
    tags: ["ide", "online", "collaboration"]
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI code completion for all major IDEs",
    link: "https://tabnine.com",
    category: "coding-assistance",
    pricing: "Free with pro plans",
    pricingType: "freemium",
    features: ["Code completion", "IDE integration", "Team learning"],
    tags: ["completion", "ide", "integration"]
  },

  // AI Email Assistance
  {
    id: "clippit-ai",
    name: "Clippit.Ai",
    description: "AI email writing assistant",
    link: "https://clippit.ai",
    category: "email-assistance",
    pricing: "Subscription based",
    pricingType: "paid",
    features: ["Email composition", "Tone adjustment", "Templates"],
    tags: ["email", "writing", "templates"]
  },
  {
    id: "friday",
    name: "Friday",
    description: "AI email and document assistant",
    link: "https://friday.app",
    category: "email-assistance",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Email assistance", "Document creation", "AI writing"],
    tags: ["email", "documents", "writing"]
  },
  {
    id: "mailmaestro",
    name: "Mailmaestro",
    description: "AI email assistant for Outlook and Gmail",
    link: "https://mailmaestro.com",
    category: "email-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Email composition", "Gmail integration", "Outlook integration"],
    tags: ["outlook", "gmail", "composition"]
  },
  {
    id: "shortwave",
    name: "Shortwave",
    description: "AI-powered email client for productivity",
    link: "https://shortwave.com",
    category: "email-assistance",
    pricing: "Free with pro features",
    pricingType: "freemium",
    features: ["Smart inbox", "AI summaries", "Quick actions"],
    tags: ["productivity", "inbox", "summaries"]
  },
  {
    id: "superhuman",
    name: "Superhuman",
    description: "The fastest email experience with AI features",
    link: "https://superhuman.com",
    category: "email-assistance",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Speed optimization", "AI assistance", "Advanced features"],
    tags: ["speed", "premium", "productivity"]
  },

  // AI Image Generation
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "Adobe's AI image generator integrated into Creative Suite",
    link: "https://firefly.adobe.com",
    category: "image-generation",
    pricing: "Free with Creative Cloud plans",
    pricingType: "freemium",
    features: ["Creative Cloud integration", "Commercial safe", "Professional quality"],
    tags: ["adobe", "creative", "commercial"]
  },
  {
    id: "dalle",
    name: "DALL-E",
    description: "OpenAI's powerful text-to-image AI generator",
    link: "https://openai.com/dall-e-3",
    category: "image-generation",
    pricing: "Pay per use",
    pricingType: "paid",
    features: ["High quality images", "Text integration", "Creative freedom"],
    tags: ["openai", "creative", "text-to-image"]
  },
  {
    id: "flux1",
    name: "FLUX.1",
    description: "Advanced AI image generation model",
    link: "https://flux1.ai",
    category: "image-generation",
    pricing: "Free with premium options",
    pricingType: "freemium",
    features: ["High resolution", "Style variety", "Fast generation"],
    tags: ["advanced", "high-res", "fast"]
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description: "AI image generator with text rendering capabilities",
    link: "https://ideogram.ai",
    category: "image-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text in images", "Multiple styles", "High quality"],
    tags: ["text-rendering", "styles", "quality"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Leading AI art generator for creative professionals",
    link: "https://midjourney.com",
    category: "image-generation",
    pricing: "Subscription required",
    pricingType: "paid",
    features: ["Artistic quality", "Community", "Professional results"],
    tags: ["art", "professional", "creative"]
  },
  {
    id: "recraft",
    name: "Recraft",
    description: "AI design tool for logos, icons, and graphics",
    link: "https://recraft.ai",
    category: "image-generation",
    pricing: "Free with pro features",
    pricingType: "freemium",
    features: ["Vector graphics", "Brand consistency", "Design automation"],
    tags: ["design", "vectors", "branding"]
  },
  {
    id: "stable-diffusion",
    name: "StableDiffusion",
    description: "Open-source AI image generation model",
    link: "https://stability.ai",
    category: "image-generation",
    pricing: "Free and open source",
    pricingType: "free",
    features: ["Open source", "Customizable", "Community driven"],
    tags: ["open-source", "customizable", "free"]
  },

  // AI Spreadsheet
  {
    id: "bricks",
    name: "Bricks",
    description: "AI-powered spreadsheet and presentation tool",
    link: "https://bricks.co",
    category: "spreadsheet",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI formulas", "Data visualization", "Presentation integration"],
    tags: ["spreadsheet", "visualization", "integration"]
  },
  {
    id: "formula-bot",
    name: "Formula Bot",
    description: "AI assistant for Excel and Google Sheets formulas",
    link: "https://formulabot.com",
    category: "spreadsheet",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Formula generation", "Excel support", "Google Sheets"],
    tags: ["formulas", "excel", "google-sheets"]
  },
  {
    id: "gigasheet",
    name: "Gigasheet",
    description: "Big data spreadsheet with AI capabilities",
    link: "https://gigasheet.co",
    category: "spreadsheet",
    pricing: "Free with enterprise plans",
    pricingType: "freemium",
    features: ["Big data handling", "AI analysis", "Cloud-based"],
    tags: ["big-data", "analysis", "cloud"]
  },
  {
    id: "rows-ai",
    name: "Rows AI",
    description: "Modern spreadsheet with AI integration",
    link: "https://rows.com",
    category: "spreadsheet",
    pricing: "Free with pro features",
    pricingType: "freemium",
    features: ["AI assistance", "API integration", "Modern interface"],
    tags: ["modern", "api", "integration"]
  },
  {
    id: "sheetai",
    name: "SheetAI",
    description: "AI assistant for Google Sheets",
    link: "https://sheetai.app",
    category: "spreadsheet",
    pricing: "Subscription based",
    pricingType: "paid",
    features: ["Google Sheets integration", "AI formulas", "Data processing"],
    tags: ["google-sheets", "formulas", "processing"]
  },

  // AI Meeting Notes
  {
    id: "avoma",
    name: "Avoma",
    description: "AI meeting assistant for conversation intelligence",
    link: "https://avoma.com",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Meeting transcription", "Conversation analytics", "CRM integration"],
    tags: ["transcription", "analytics", "crm"]
  },
  {
    id: "equal-time",
    name: "Equal Time",
    description: "AI-powered meeting equity and engagement tracker",
    link: "https://equaltime.ai",
    category: "meeting-notes",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Speaking time analysis", "Engagement metrics", "Equity insights"],
    tags: ["equity", "engagement", "analysis"]
  },
  {
    id: "fathom",
    name: "Fathom",
    description: "Free AI meeting assistant for note-taking",
    link: "https://fathom.video",
    category: "meeting-notes",
    pricing: "Free",
    pricingType: "free",
    features: ["Automatic notes", "Meeting summaries", "Action items"],
    tags: ["free", "notes", "summaries"]
  },
  {
    id: "fellow-app",
    name: "Fellow App",
    description: "AI meeting management and note-taking platform",
    link: "https://fellow.app",
    category: "meeting-notes",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Meeting agendas", "AI notes", "Team collaboration"],
    tags: ["agendas", "collaboration", "management"]
  },
  {
    id: "fireflies",
    name: "Fireflies",
    description: "AI meeting assistant for transcription and analysis",
    link: "https://fireflies.ai",
    category: "meeting-notes",
    pricing: "Free with paid plans",
    pricingType: "freemium",
    features: ["Meeting transcription", "Searchable notes", "Integration"],
    tags: ["transcription", "searchable", "integration"]
  },
  {
    id: "krisp",
    name: "Krisp",
    description: "AI-powered noise cancellation and meeting assistant",
    link: "https://krisp.ai",
    category: "meeting-notes",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Noise cancellation", "Meeting notes", "Call insights"],
    tags: ["noise-cancellation", "insights", "quality"]
  },
  {
    id: "otter",
    name: "Otter",
    description: "AI meeting notes and real-time transcription",
    link: "https://otter.ai",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Real-time transcription", "Meeting summaries", "Collaboration"],
    tags: ["real-time", "summaries", "collaboration"]
  },

  // AI Workflow Automation
  {
    id: "integrately",
    name: "Integrately",
    description: "AI-powered automation platform for app integrations",
    link: "https://integrately.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["App integrations", "Workflow automation", "AI assistance"],
    tags: ["integrations", "automation", "workflows"]
  },
  {
    id: "make",
    name: "Make",
    description: "Visual platform for workflow automation with AI",
    link: "https://make.com",
    category: "workflow-automation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Visual automation", "API connections", "AI integration"],
    tags: ["visual", "api", "connections"]
  },
  {
    id: "monday-com",
    name: "Monday.Com",
    description: "Work management platform with AI features",
    link: "https://monday.com",
    category: "workflow-automation",
    pricing: "Free trial with paid plans",
    pricingType: "paid",
    features: ["Project management", "AI insights", "Team collaboration"],
    tags: ["project-management", "insights", "teams"]
  },
  {
    id: "n8n",
    name: "N8n",
    description: "Fair-code automation platform with AI capabilities",
    link: "https://n8n.io",
    category: "workflow-automation",
    pricing: "Free with cloud options",
    pricingType: "freemium",
    features: ["Fair-code", "Self-hosted", "AI workflows"],
    tags: ["fair-code", "self-hosted", "workflows"]
  },
  {
    id: "wrike",
    name: "Wrike",
    description: "Project management with AI-powered insights",
    link: "https://wrike.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Project management", "AI insights", "Resource planning"],
    tags: ["project-management", "insights", "planning"]
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps with AI",
    link: "https://zapier.com",
    category: "workflow-automation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["App connections", "Workflow automation", "AI assistance"],
    tags: ["connections", "automation", "popular"]
  },

  // AI Writing Generation
  {
    id: "copy-ai",
    name: "Copy.Ai",
    description: "AI copywriting tool for marketing content",
    link: "https://copy.ai",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Marketing copy", "Multiple formats", "Brand voice"],
    tags: ["marketing", "copywriting", "brand"]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar and style",
    link: "https://grammarly.com",
    category: "writing-generation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Grammar checking", "Style suggestions", "Plagiarism detection"],
    tags: ["grammar", "style", "checking"]
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "AI content generation platform for businesses",
    link: "https://jasper.ai",
    category: "writing-generation",
    pricing: "Subscription required",
    pricingType: "paid",
    features: ["Business content", "Brand voice", "Team collaboration"],
    tags: ["business", "brand", "professional"]
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace with AI writing assistance",
    link: "https://notion.so",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Workspace", "AI writing", "Collaboration"],
    tags: ["workspace", "collaboration", "notes"]
  },
  {
    id: "quarkle",
    name: "Quarkle",
    description: "AI writing tool for academic and professional content",
    link: "https://quarkle.ai",
    category: "writing-generation",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Academic writing", "Professional content", "Research assistance"],
    tags: ["academic", "professional", "research"]
  },
  {
    id: "quillbot",
    name: "Quillbot",
    description: "AI paraphrasing and writing enhancement tool",
    link: "https://quillbot.com",
    category: "writing-generation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Paraphrasing", "Grammar checking", "Summarization"],
    tags: ["paraphrasing", "enhancement", "summarization"]
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "AI writing assistant for content creation",
    link: "https://rytr.me",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Content creation", "Multiple tones", "Plagiarism checker"],
    tags: ["content", "tones", "affordable"]
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    description: "AI writing partner for creative writers",
    link: "https://sudowrite.com",
    category: "writing-generation",
    pricing: "Subscription required",
    pricingType: "paid",
    features: ["Creative writing", "Story development", "Character building"],
    tags: ["creative", "stories", "fiction"]
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI writing platform for marketing and content",
    link: "https://writesonic.com",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Marketing content", "SEO optimization", "Multiple formats"],
    tags: ["marketing", "seo", "content"]
  },

  // AI Scheduling
  {
    id: "calendly",
    name: "Calendly",
    description: "Smart scheduling platform with AI features",
    link: "https://calendly.com",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Smart scheduling", "Calendar integration", "Automation"],
    tags: ["scheduling", "calendar", "automation"]
  },
  {
    id: "clockwise",
    name: "Clockwise",
    description: "AI-powered focus time and calendar optimization",
    link: "https://clockwise.com",
    category: "scheduling",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Focus time", "Calendar optimization", "Team insights"],
    tags: ["focus", "optimization", "productivity"]
  },
  {
    id: "motion",
    name: "Motion",
    description: "AI-powered calendar and task management",
    link: "https://usemotion.com",
    category: "scheduling",
    pricing: "Subscription required",
    pricingType: "paid",
    features: ["AI scheduling", "Task management", "Calendar optimization"],
    tags: ["ai-scheduling", "tasks", "optimization"]
  },
  {
    id: "reclaim-ai",
    name: "Reclaim AI",
    description: "AI calendar assistant for time management",
    link: "https://reclaim.ai",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Time blocking", "Habit scheduling", "Calendar defense"],
    tags: ["time-blocking", "habits", "defense"]
  },
  {
    id: "taskade",
    name: "Taskade",
    description: "AI-powered project management and scheduling",
    link: "https://taskade.com",
    category: "scheduling",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Project management", "AI assistance", "Team collaboration"],
    tags: ["projects", "collaboration", "ai"]
  },
  {
    id: "trevor-ai",
    name: "Trevor AI",
    description: "AI daily planner and time management",
    link: "https://trevor.app",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Daily planning", "Time estimation", "Schedule optimization"],
    tags: ["daily-planning", "estimation", "optimization"]
  },

  // AI Video Generation
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video and podcast editing platform",
    link: "https://descript.com",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text-based editing", "AI voices", "Transcription"],
    tags: ["editing", "podcasts", "transcription"]
  },
  {
    id: "heiper-ai",
    name: "Heiper AI",
    description: "AI video creation and editing assistant",
    link: "https://heiper.ai",
    category: "video-generation",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Video creation", "AI editing", "Content generation"],
    tags: ["creation", "editing", "content"]
  },
  {
    id: "invideo-ai",
    name: "Invideo AI",
    description: "AI video creator for marketing and content",
    link: "https://invideo.io",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Marketing videos", "Templates", "AI generation"],
    tags: ["marketing", "templates", "generation"]
  },
  {
    id: "kling",
    name: "Kling",
    description: "AI video generation from text and images",
    link: "https://kling.ai",
    category: "video-generation",
    pricing: "Subscription based",
    pricingType: "paid",
    features: ["Text-to-video", "Image animation", "High quality"],
    tags: ["text-to-video", "animation", "quality"]
  },
  {
    id: "krea-ai",
    name: "Krea AI",
    description: "AI video and image generation platform",
    link: "https://krea.ai",
    category: "video-generation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Video generation", "Image creation", "Real-time"],
    tags: ["generation", "real-time", "creative"]
  },
  {
    id: "ltx-studio",
    name: "LTX Studio",
    description: "AI-powered video production studio",
    link: "https://ltxstudio.ai",
    category: "video-generation",
    pricing: "Professional subscription",
    pricingType: "paid",
    features: ["Professional video", "AI production", "Studio quality"],
    tags: ["professional", "studio", "production"]
  },
  {
    id: "luma-ai",
    name: "Luma AI",
    description: "AI video generation and 3D capture",
    link: "https://lumalabs.ai",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["3D capture", "Video generation", "High quality"],
    tags: ["3d", "capture", "quality"]
  },
  {
    id: "pika-ai",
    name: "Pika AI",
    description: "AI video generator from text and images",
    link: "https://pika.art",
    category: "video-generation",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Text-to-video", "Image animation", "Creative effects"],
    tags: ["text-to-video", "animation", "effects"]
  },
  {
    id: "runway",
    name: "Runway",
    description: "AI video generation and editing platform",
    link: "https://runwayml.com",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Video generation", "AI editing", "Creative tools"],
    tags: ["generation", "editing", "creative"]
  },
  {
    id: "sora",
    name: "Sora",
    description: "OpenAI's advanced video generation model",
    link: "https://openai.com/sora",
    category: "video-generation",
    pricing: "Preview access",
    pricingType: "paid",
    features: ["Advanced generation", "High quality", "Realistic videos"],
    tags: ["openai", "advanced", "realistic"]
  },

  // AI Graphic Design
  {
    id: "autodraw",
    name: "AutoDraw",
    description: "Google's AI-powered drawing and design tool",
    link: "https://autodraw.com",
    category: "graphic-design",
    pricing: "Free",
    pricingType: "free",
    features: ["AI drawing assistance", "Icon suggestions", "Simple interface"],
    tags: ["google", "drawing", "free"]
  },
  {
    id: "canva",
    name: "Canva",
    description: "Design platform with AI-powered features",
    link: "https://canva.com",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Design templates", "AI generation", "Brand kit"],
    tags: ["templates", "popular", "design"]
  },
  {
    id: "designcom",
    name: "Design.Com",
    description: "AI-powered logo and brand design platform",
    link: "https://design.com",
    category: "graphic-design",
    pricing: "Paid plans",
    pricingType: "paid",
    features: ["Logo design", "Brand identity", "AI assistance"],
    tags: ["logo", "branding", "identity"]
  },
  {
    id: "framer",
    name: "Framer",
    description: "Web design platform with AI features",
    link: "https://framer.com",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Web design", "AI assistance", "Interactive prototypes"],
    tags: ["web-design", "prototypes", "interactive"]
  },
  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    description: "AI-powered design app from Microsoft",
    link: "https://designer.microsoft.com",
    category: "graphic-design",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["AI design", "Microsoft integration", "Templates"],
    tags: ["microsoft", "integration", "templates"]
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "AI-powered UI/UX design platform",
    link: "https://uizard.io",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["UI design", "Wireframing", "AI assistance"],
    tags: ["ui-design", "wireframing", "ux"]
  },

  // AI Knowledge Management
  {
    id: "mem",
    name: "Mem",
    description: "AI-powered note-taking and knowledge management",
    link: "https://mem.ai",
    category: "knowledge-management",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Smart notes", "AI organization", "Knowledge graph"],
    tags: ["notes", "organization", "knowledge"]
  },
  {
    id: "notion-km",
    name: "Notion",
    description: "All-in-one workspace with AI capabilities",
    link: "https://notion.so",
    category: "knowledge-management",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Workspace", "AI assistance", "Database"],
    tags: ["workspace", "database", "collaboration"]
  },
  {
    id: "tettra",
    name: "Tettra",
    description: "AI-powered team knowledge base",
    link: "https://tettra.com",
    category: "knowledge-management",
    pricing: "Paid subscription",
    pricingType: "paid",
    features: ["Knowledge base", "Team collaboration", "AI search"],
    tags: ["knowledge-base", "teams", "search"]
  },

  // AI Data Visualization
  {
    id: "deckopilot",
    name: "Deckopilot",
    description: "AI-powered data visualization and presentation tool",
    link: "https://deckopilot.com",
    category: "data-visualization",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Data visualization", "AI insights", "Presentation ready"],
    tags: ["visualization", "insights", "presentations"]
  },
  {
    id: "flourish",
    name: "Flourish",
    description: "Beautiful data visualization with AI assistance",
    link: "https://flourish.studio",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Interactive charts", "Data storytelling", "Templates"],
    tags: ["charts", "storytelling", "interactive"]
  },
  {
    id: "julius",
    name: "Julius",
    description: "AI data analyst for insights and visualization",
    link: "https://julius.ai",
    category: "data-visualization",
    pricing: "Free with premium features",
    pricingType: "freemium",
    features: ["Data analysis", "AI insights", "Automated reports"],
    tags: ["analysis", "insights", "reports"]
  },
  {
    id: "visme",
    name: "Visme",
    description: "Visual content creation with data visualization",
    link: "https://visme.co",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Visual content", "Data charts", "Infographics"],
    tags: ["visual", "charts", "infographics"]
  },
  {
    id: "zing-data",
    name: "Zing Data",
    description: "Mobile-first business intelligence with AI",
    link: "https://zingdata.com",
    category: "data-visualization",
    pricing: "Subscription based",
    pricingType: "paid",
    features: ["Mobile BI", "AI insights", "Real-time data"],
    tags: ["mobile", "business-intelligence", "real-time"]
  }
];

export const updateCategoryCounts = () => {
  categories.forEach(category => {
    category.count = aiTools.filter(tool => tool.category === category.id).length;
  });
};

// Initialize category counts
updateCategoryCounts();

export const getFeaturedTools = (): AITool[] => {
  return aiTools.filter(tool => tool.featured);
};

export const getToolsByCategory = (categoryId: string): AITool[] => {
  return aiTools.filter(tool => tool.category === categoryId);
};

export const getToolsByPricing = (pricingType: string): AITool[] => {
  return aiTools.filter(tool => tool.pricingType === pricingType);
};

export const searchTools = (query: string): AITool[] => {
  const lowercaseQuery = query.toLowerCase();
  return aiTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};