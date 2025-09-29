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
  icon?: string;
}

export interface AICategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// CRITICAL: The order of categories in this array determines the display order
// NEVER change this order - it affects the card layout in the QuickView
export const categories: AICategory[] = [
  // Top Row (Cards 1-3)
  {
    id: "chatbots",
    name: "AI Chatbots",
    description: "Conversational AI and virtual assistants",
    icon: "🤖",
    count: 0
  },
  {
    id: "coding-assistance",
    name: "AI Coding Assistance",
    description: "AI-powered coding assistants and development tools",
    icon: "💻",
    count: 0
  },
  {
    id: "image-generation",
    name: "AI Image Generation",
    description: "AI-powered image creation and editing tools",
    icon: "🎨",
    count: 0
  },
  // Second Row (Cards 4-6)
  {
    id: "video-generation",
    name: "AI Video Generation",
    description: "AI-powered video creation and editing tools",
    icon: "🎬",
    count: 0
  },
  {
    id: "project-building",
    name: "AI App Builders",
    description: "Complete AI platforms for building apps and websites from scratch",
    icon: "🏗️",
    count: 0
  },
  {
    id: "presentation",
    name: "AI Presentation",
    description: "AI-powered presentation creation and design tools",
    icon: "📊",
    count: 0
  },
  {
    id: "spreadsheet",
    name: "AI Spreadsheet",
    description: "AI-powered spreadsheet and data analysis tools",
    icon: "📈",
    count: 0
  },
  // Third Row (Cards 7-9)
  {
    id: "meeting-notes",
    name: "AI Meeting Notes",
    description: "AI-powered meeting transcription and note-taking",
    icon: "📝",
    count: 0
  },
  {
    id: "workflow-automation",
    name: "AI Workflow Automation",
    description: "AI-powered workflow and process automation",
    icon: "⚡",
    count: 0
  },
  {
    id: "writing-generation",
    name: "AI Writing Generation",
    description: "AI-powered content writing and text generation",
    icon: "✍️",
    count: 0
  },
  // Fourth Row (Cards 10-12)
  {
    id: "scheduling",
    name: "AI Scheduling",
    description: "AI-powered calendar and scheduling tools",
    icon: "📅",
    count: 0
  },
  {
    id: "graphic-design",
    name: "AI Graphic Design",
    description: "AI-powered graphic design and visual creation",
    icon: "🎯",
    count: 0
  },
  {
    id: "data-visualization",
    name: "AI Data Visualization",
    description: "AI-powered data analysis and visualization tools",
    icon: "📊",
    count: 0
  },
  // Fifth Row (Cards 13-14)
  {
    id: "knowledge-management",
    name: "AI Knowledge Management",
    description: "AI-powered knowledge base and information management",
    icon: "🧠",
    count: 0
  },
  {
    id: "email-assistance",
    name: "AI Email Assistance",
    description: "AI tools for email management and automation",
    icon: "📧",
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
    tags: ["conversation", "ai", "openai"],
    icon: "https://cdn.openai.com/API/logo-openai.svg"
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
    tags: ["conversation", "anthropic", "safe-ai"],
    icon: "https://claude.ai/images/claude_app_icon.png"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Advanced AI model with strong reasoning capabilities",
    link: "https://chat.deepseek.com",
    category: "chatbots",
    pricing: "Free",
    pricingType: "free",
    features: ["Advanced reasoning", "Code generation", "Math solving"],
    tags: ["reasoning", "ai", "free"],
    icon: "https://chat.deepseek.com/favicon.ico"
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google's advanced AI assistant for multimodal tasks",
    link: "https://gemini.google.com",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Multimodal AI", "Google integration", "Real-time info"],
    tags: ["google", "multimodal", "ai"],
    icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
  },
  {
    id: "grok",
    name: "Grok",
    description: "X's AI assistant with real-time information access",
    link: "https://x.ai",
    category: "chatbots",
    pricing: "Premium subscription",
    pricingType: "paid",
    features: ["Real-time data", "X integration", "Witty responses"],
    tags: ["x", "real-time", "premium"],
    icon: "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7278.png"
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    description: "Meta's AI assistant integrated across Meta platforms",
    link: "https://ai.meta.com",
    category: "chatbots",
    pricing: "Free",
    pricingType: "free",
    features: ["Meta integration", "Image generation", "Search"],
    tags: ["meta", "facebook", "free"],
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/V2fJEb7DPNJ.png"
  },
  {
    id: "ms-copilot",
    name: "MS Copilot",
    description: "Microsoft's AI assistant integrated with Office and Windows",
    link: "https://copilot.microsoft.com",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Office integration", "Windows integration", "Enterprise features"],
    tags: ["microsoft", "office", "windows"],
    icon: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/brand-icons/product/svg/copilot_48x1.svg"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search engine with real-time information",
    link: "https://perplexity.ai",
    category: "chatbots",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Real-time search", "Source citations", "Research mode"],
    tags: ["search", "research", "citations"],
    icon: "https://www.perplexity.ai/favicon.svg"
  },

  // AI Coding Assistance
  {
    id: "askcodi",
    name: "AskCodi",
    description: "AI coding assistant for faster development",
    link: "https://askcodi.com",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Code generation", "Multiple languages", "IDE integration"],
    tags: ["coding", "development", "ide"],
    icon: "https://askcodi.com/favicon.ico"
  },
  {
    id: "codiga",
    name: "Codiga",
    description: "AI-powered code analysis and security scanning",
    link: "https://www.codiga.io/",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Code analysis", "Security scanning", "Quality metrics"],
    tags: ["analysis", "security", "quality"],
    icon: "https://www.codiga.io/favicon.ico"
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor built for pair programming with AI",
    link: "https://cursor.sh",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI pair programming", "Natural language editing", "Codebase understanding"],
    tags: ["editor", "pair-programming", "ai-first"],
    icon: "https://cursor.sh/favicon.ico"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    link: "https://github.com/features/copilot",
    category: "coding-assistance",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Code completion", "Function generation", "Documentation"],
    tags: ["github", "autocomplete", "ai"],
    icon: "https://github.githubassets.com/assets/copilot-icon-1c0c96ccbaee.svg"
  },
  {
    id: "qodo",
    name: "Qodo",
    description: "AI-powered code quality and testing assistant",
    link: "https://qodo.ai",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Test generation", "Code review", "Quality analysis"],
    tags: ["testing", "quality", "review"],
    icon: "https://qodo.ai/favicon.ico"
  },
  {
    id: "replit",
    name: "Replit",
    description: "Online IDE with AI-powered coding assistance",
    link: "https://replit.com",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Online IDE", "AI assistant", "Collaboration"],
    tags: ["ide", "online", "collaboration"],
    icon: "https://replit.com/public/icons/favicon-196.png"
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI assistant for software developers",
    link: "https://tabnine.com",
    category: "coding-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Code completion", "AI chat", "Privacy focused"],
    tags: ["completion", "privacy", "assistant"],
    icon: "https://tabnine.com/favicon.ico"
  },

  // AI Image Generation
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "Adobe's AI-powered creative tools for image generation",
    link: "https://firefly.adobe.com",
    category: "image-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text to image", "Creative effects", "Adobe integration"],
    tags: ["adobe", "creative", "integration"],
    icon: "https://www.adobe.com/content/dam/cc/icons/firefly.svg"
  },
  {
    id: "dalle",
    name: "DALL-E",
    description: "OpenAI's powerful AI image generator",
    link: "https://openai.com/index/dall-e-2/",
    category: "image-generation",
    pricing: "Credit-based",
    pricingType: "paid",
    features: ["High-quality images", "Creative prompts", "Style variations"],
    tags: ["openai", "creative", "high-quality"],
    icon: "https://cdn.openai.com/API/logo-openai.svg"
  },
  {
    id: "flux1",
    name: "FLUX.1",
    description: "Advanced AI image generation with photorealistic results",
    link: "https://flux.ai",
    category: "image-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Photorealistic", "Fast generation", "High resolution"],
    tags: ["photorealistic", "fast", "quality"],
    icon: "https://flux.ai/favicon.ico"
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description: "AI image generator with excellent text rendering",
    link: "https://ideogram.ai",
    category: "image-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text in images", "Creative styles", "High quality"],
    tags: ["text-rendering", "creative", "quality"],
    icon: "https://ideogram.ai/favicon.ico"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator known for artistic and creative images",
    link: "https://midjourney.com",
    category: "image-generation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Artistic style", "High quality", "Community"],
    tags: ["artistic", "creative", "community"],
    icon: "https://midjourney.com/favicon.ico"
  },
  {
    id: "recraft",
    name: "Recraft",
    description: "AI design tool for creating consistent brand imagery",
    link: "https://recraft.ai",
    category: "image-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Brand consistency", "Vector graphics", "Style control"],
    tags: ["branding", "vector", "consistency"],
    icon: "https://recraft.ai/favicon.ico"
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Open-source AI image generation model",
    link: "https://stability.ai",
    category: "image-generation",
    pricing: "Free/Open Source",
    pricingType: "free",
    features: ["Open source", "Customizable", "Local deployment"],
    tags: ["open-source", "customizable", "free"],
    icon: "https://stability.ai/favicon.ico"
  },

  // AI Video Generation
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video editing with transcription",
    link: "https://descript.com",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text-based editing", "AI voices", "Transcription"],
    tags: ["editing", "transcription", "voices"]
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    description: "AI-powered video creation platform",
    link: "https://invideo.io",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Template library", "AI scripts", "Voice synthesis"],
    tags: ["templates", "scripts", "synthesis"]
  },
  {
    id: "kling",
    name: "Kling",
    description: "AI video generation with realistic motion",
    link: "https://klingai.com/global/",
    category: "video-generation",
    pricing: "Credit-based",
    pricingType: "paid",
    features: ["Realistic motion", "High quality", "Long videos"],
    tags: ["motion", "realistic", "quality"]
  },
  {
    id: "krea-ai",
    name: "Krea AI",
    description: "Real-time AI image and video generation",
    link: "https://krea.ai",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Real-time generation", "Image to video", "Creative control"],
    tags: ["real-time", "creative", "control"]
  },
  {
    id: "ltx-studio",
    name: "LTX Studio",
    description: "Complete AI filmmaking platform",
    link: "https://ltx.studio",
    category: "video-generation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Complete filmmaking", "Storyboard to film", "Character consistency"],
    tags: ["filmmaking", "storyboard", "consistency"]
  },
  {
    id: "luma-ai",
    name: "Luma AI",
    description: "AI for 3D capture and neural rendering",
    link: "https://lumalabs.ai",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["3D capture", "Neural rendering", "Photorealism"],
    tags: ["3d", "rendering", "photorealistic"]
  },
  {
    id: "pika-ai",
    name: "Pika AI",
    description: "AI video generator for creative content",
    link: "https://pika.art",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Text to video", "Image animation", "Creative effects"],
    tags: ["animation", "creative", "effects"]
  },
  {
    id: "runway",
    name: "Runway",
    description: "AI-powered creative suite for video generation",
    link: "https://runwayml.com",
    category: "video-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Video generation", "Creative tools", "Real-time collaboration"],
    tags: ["creative-suite", "collaboration", "tools"]
  },
  {
    id: "sora",
    name: "Sora",
    description: "OpenAI's text-to-video generation model",
    link: "https://openai.com/sora",
    category: "video-generation",
    pricing: "Limited access",
    pricingType: "paid",
    features: ["Text to video", "High quality", "Long sequences"],
    tags: ["openai", "text-to-video", "quality"]
  },

  // AI Project Building Tools
  {
    id: "lovable",
    name: "Lovable",
    description: "AI-powered full-stack app development platform",
    link: "https://lovable.dev",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Full-stack apps", "AI code generation", "Instant deployment"],
    tags: ["full-stack", "development", "deployment"],
    icon: "https://lovable.dev/favicon.ico"
  },
  {
    id: "v0",
    name: "v0",
    description: "Vercel's AI-powered UI generation and React component builder",
    link: "https://v0.dev",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["UI generation", "React components", "Instant preview"],
    tags: ["ui", "react", "components"],
    icon: "https://v0.dev/favicon.ico"
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    description: "AI-powered full-stack development environment",
    link: "https://bolt.new",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Full-stack development", "AI assistance", "Live preview"],
    tags: ["full-stack", "development", "preview"],
    icon: "https://bolt.new/favicon.ico"
  },
  {
    id: "codeium-windsurf",
    name: "Codeium Windsurf",
    description: "AI IDE for complete codebase understanding and project building",
    link: "https://codeium.com/windsurf",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Codebase understanding", "Project building", "AI IDE"],
    tags: ["codebase", "understanding", "ide"],
    icon: "https://codeium.com/favicon.ico"
  },
  {
    id: "debuild",
    name: "Debuild",
    description: "AI-powered low-code platform for web app development",
    link: "https://www.allai.cn/tool/243",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Low-code", "Web apps", "Visual builder"],
    tags: ["low-code", "web-apps", "visual"],
    icon: "https://debuild.app/favicon.ico"
  },
  {
    id: "bubble",
    name: "Bubble",
    description: "No-code platform with AI-enhanced app building",
    link: "https://bubble.io",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["No-code", "Full-stack apps", "Database included"],
    tags: ["no-code", "full-stack", "database"],
    icon: "https://bubble.io/favicon.ico"
  },
  {
    id: "glide",
    name: "Glide",
    description: "AI-powered app builder from spreadsheets",
    link: "https://glideapps.com",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Spreadsheet to app", "AI automation", "Mobile apps"],
    tags: ["spreadsheet", "mobile", "automation"],
    icon: "https://glideapps.com/favicon.ico"
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    description: "AI website builder with advanced design capabilities",
    link: "https://framer.com",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Website builder", "AI design", "Professional templates"],
    tags: ["website", "design", "templates"],
    icon: "https://framer.com/favicon.ico"
  },
  {
    id: "webflow",
    name: "Webflow",
    description: "Visual web development platform with AI enhancements",
    link: "https://webflow.com",
    category: "project-building",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Visual development", "CMS included", "Responsive design"],
    tags: ["visual", "cms", "responsive"],
    icon: "https://webflow.com/favicon.ico"
  },

  // AI Presentation Tools
  {
    id: "beautiful-ai",
    name: "Beautiful.AI",
    description: "AI-powered presentation design with smart templates",
    link: "https://beautiful.ai",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Smart templates", "Auto-design", "Brand consistency"],
    tags: ["presentation", "design", "templates"]
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "AI presentation generator with natural language input",
    link: "https://gamma.app",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI generation", "Interactive content", "Web publishing"],
    tags: ["generation", "interactive", "web"]
  },
  {
    id: "pitch",
    name: "Pitch",
    description: "Collaborative presentation platform with AI assistance",
    link: "https://pitch.com",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Collaboration", "Smart templates", "Analytics"],
    tags: ["collaboration", "analytics", "team"]
  },
  {
    id: "plus",
    name: "Plus",
    description: "AI-powered presentation creation and editing",
    link: "https://plus.ai",
    category: "presentation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["AI content", "Professional design", "Quick creation"],
    tags: ["ai-content", "professional", "quick"]
  },
  {
    id: "popal",
    name: "PopAI",
    description: "AI presentation assistant for content creation",
    link: "https://popal.ai",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Content generation", "Design suggestions", "Quick formatting"],
    tags: ["content", "suggestions", "formatting"]
  },
  {
    id: "presentation-ai",
    name: "Presentation.AI",
    description: "AI-driven presentation builder with smart layouts",
    link: "https://www.presentations.ai/",
    category: "presentation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Smart layouts", "Auto-formatting", "Content optimization"],
    tags: ["layouts", "formatting", "optimization"]
  },
  {
    id: "slidesgo",
    name: "Slidesgo",
    description: "AI-enhanced presentation templates and design tools",
    link: "https://slidesgo.com",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Template library", "AI enhancement", "Custom design"],
    tags: ["templates", "enhancement", "custom"]
  },
  {
    id: "tome",
    name: "Tome",
    description: "AI storytelling platform for presentations",
    link: "https://landing-staging.tome.app/",
    category: "presentation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI storytelling", "Interactive content", "Media integration"],
    tags: ["storytelling", "interactive", "media"]
  },

  // AI Spreadsheet Tools
  {
    id: "bricks",
    name: "Bricks",
    description: "AI-powered spreadsheet with built-in visualizations",
    link: "https://bricks.co",
    category: "spreadsheet",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI formulas", "Auto-charts", "Data insights"],
    tags: ["formulas", "charts", "insights"]
  },
  {
    id: "formula-bot",
    name: "Formula Bot",
    description: "AI assistant for Excel and Google Sheets formulas",
    link: "https://formulabot.com",
    category: "spreadsheet",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Formula generation", "Excel assistance", "Natural language"],
    tags: ["formulas", "excel", "natural-language"]
  },
  {
    id: "gigasheet",
    name: "Gigasheet",
    description: "AI-powered big data spreadsheet platform",
    link: "https://gigasheet.co",
    category: "spreadsheet",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Big data handling", "AI analysis", "Cloud-based"],
    tags: ["big-data", "analysis", "cloud"]
  },
  {
    id: "rows-ai",
    name: "Rows AI",
    description: "Modern spreadsheet with AI-powered features",
    link: "https://rows.com",
    category: "spreadsheet",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI functions", "API integrations", "Collaboration"],
    tags: ["functions", "api", "collaboration"]
  },
  {
    id: "sheet-ai",
    name: "SheetAI",
    description: "AI assistant for Google Sheets automation",
    link: "https://sheetai.app",
    category: "spreadsheet",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Google Sheets AI", "Automation", "Data processing"],
    tags: ["google-sheets", "automation", "processing"]
  },

  // AI Meeting Notes Tools
  {
    id: "avoma",
    name: "Avoma",
    description: "AI meeting assistant with conversation intelligence",
    link: "https://avoma.com",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Meeting transcription", "AI insights", "CRM integration"],
    tags: ["transcription", "insights", "crm"]
  },
  {
    id: "equal-time",
    name: "Equal Time",
    description: "AI-powered meeting equality and participation tracking",
    link: "https://equaltime.io/",
    category: "meeting-notes",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Participation tracking", "Equality metrics", "Meeting insights"],
    tags: ["participation", "equality", "metrics"]
  },
  {
    id: "fathom",
    name: "Fathom",
    description: "AI meeting assistant for automatic recording and summaries",
    link: "https://fathom.video",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Auto-recording", "AI summaries", "Search transcripts"],
    tags: ["recording", "summaries", "transcripts"]
  },
  {
    id: "fellow-app",
    name: "Fellow App",
    description: "AI-powered meeting management and note-taking",
    link: "https://fellow.app",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Meeting agendas", "Action items", "Team collaboration"],
    tags: ["agendas", "action-items", "collaboration"]
  },
  {
    id: "fireflies",
    name: "Fireflies",
    description: "AI notetaker for meetings with conversation analysis",
    link: "https://fireflies.ai",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Auto-transcription", "Conversation analytics", "CRM sync"],
    tags: ["transcription", "analytics", "sync"]
  },
  {
    id: "krisp",
    name: "Krisp",
    description: "AI-powered noise cancellation and meeting assistant",
    link: "https://krisp.ai",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Noise cancellation", "Meeting transcription", "AI insights"],
    tags: ["noise-cancellation", "transcription", "insights"]
  },
  {
    id: "otter",
    name: "Otter",
    description: "AI meeting assistant with real-time transcription",
    link: "https://otter.ai",
    category: "meeting-notes",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Real-time transcription", "Meeting summaries", "Collaboration"],
    tags: ["real-time", "summaries", "collaboration"]
  },

  // AI Workflow Automation Tools
  {
    id: "integrately",
    name: "Integrately",
    description: "AI-powered app integration and workflow automation",
    link: "https://integrately.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["App integrations", "Workflow automation", "Pre-built templates"],
    tags: ["integrations", "automation", "templates"]
  },
  {
    id: "make",
    name: "Make",
    description: "Visual platform for building automated workflows",
    link: "https://make.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Visual automation", "API connections", "Complex workflows"],
    tags: ["visual", "api", "complex"]
  },
  {
    id: "monday-com",
    name: "Monday.com",
    description: "Work management platform with AI automation",
    link: "https://monday.com/w/ai-trust-center",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Project management", "AI insights", "Workflow automation"],
    tags: ["project-management", "insights", "automation"]
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Open-source workflow automation with AI capabilities",
    link: "https://n8n.io",
    category: "workflow-automation",
    pricing: "Free/Open Source",
    pricingType: "free",
    features: ["Open source", "Self-hosted", "AI integrations"],
    tags: ["open-source", "self-hosted", "integrations"]
  },
  {
    id: "wrike",
    name: "Wrike",
    description: "Project management with AI-powered workflow optimization",
    link: "https://wrike.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Project management", "AI optimization", "Team collaboration"],
    tags: ["project", "optimization", "team"]
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps and services",
    link: "https://zapier.com",
    category: "workflow-automation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["App connections", "Automated workflows", "AI enhancements"],
    tags: ["connections", "workflows", "enhancements"]
  },

  // AI Writing Generation Tools
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI copywriting tool for marketing and content creation",
    link: "https://copy.ai",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Marketing copy", "Content templates", "Brand voice"],
    tags: ["marketing", "templates", "brand"]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar and style improvement",
    link: "https://grammarly.com",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Grammar check", "Style suggestions", "Tone detection"],
    tags: ["grammar", "style", "tone"]
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "AI content platform for marketing teams",
    link: "https://jasper.ai",
    category: "writing-generation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Long-form content", "Brand voice", "Team collaboration"],
    tags: ["long-form", "brand", "team"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion workspace",
    link: "https://notion.so",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Workspace integration", "Content generation", "Document assistance"],
    tags: ["workspace", "generation", "documents"]
  },
  {
    id: "quarkle",
    name: "Quarkle",
    description: "AI writing tool for creative and technical content",
    link: "https://quarkle.ai",
    category: "writing-generation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Creative writing", "Technical docs", "Style adaptation"],
    tags: ["creative", "technical", "style"]
  },
  {
    id: "quillbot",
    name: "QuillBot",
    description: "AI paraphrasing and writing enhancement tool",
    link: "https://quillbot.com",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Paraphrasing", "Grammar check", "Summarization"],
    tags: ["paraphrasing", "grammar", "summarization"]
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "AI writing assistant for various content types",
    link: "https://rytr.me",
    category: "writing-generation",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Multiple content types", "Tone options", "Language support"],
    tags: ["content-types", "tone", "language"]
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    description: "AI writing partner for creative writers",
    link: "https://sudowrite.com",
    category: "writing-generation",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Creative writing", "Story development", "Character building"],
    tags: ["creative", "story", "character"]
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
    tags: ["marketing", "seo", "formats"]
  },

  // AI Scheduling Tools
  {
    id: "calendly",
    name: "Calendly",
    description: "Automated scheduling platform with AI optimization",
    link: "https://calendly.com",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Auto-scheduling", "Calendar integration", "Meeting optimization"],
    tags: ["auto-scheduling", "calendar", "optimization"]
  },
  {
    id: "clockwise",
    name: "Clockwise",
    description: "AI-powered focus time and calendar optimization",
    link: "https://clockwise.com",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Focus time", "Calendar optimization", "Team coordination"],
    tags: ["focus", "optimization", "coordination"]
  },
  {
    id: "motion",
    name: "Motion",
    description: "AI calendar and task management with automatic scheduling",
    link: "https://www.usemotion.com/",
    category: "scheduling",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["AI scheduling", "Task management", "Priority optimization"],
    tags: ["ai-scheduling", "tasks", "priority"]
  },
  {
    id: "reclaim-ai",
    name: "Reclaim AI",
    description: "AI scheduling assistant for work-life balance",
    link: "https://reclaim.ai",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Work-life balance", "Habit scheduling", "Time blocking"],
    tags: ["work-life", "habits", "time-blocking"]
  },
  {
    id: "taskade",
    name: "Taskade",
    description: "AI-powered project management and scheduling",
    link: "https://taskade.com",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Project management", "AI assistant", "Team collaboration"],
    tags: ["project", "assistant", "collaboration"]
  },
  {
    id: "trevor-ai",
    name: "Trevor AI",
    description: "AI daily planner for time management",
    link: "https://trevor.ai",
    category: "scheduling",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Daily planning", "Time blocking", "Productivity insights"],
    tags: ["daily-planning", "time-blocking", "productivity"]
  },

  // AI Graphic Design Tools
  {
    id: "autodraw",
    name: "AutoDraw",
    description: "Google's AI drawing tool with smart suggestions",
    link: "https://autodraw.com",
    category: "graphic-design",
    pricing: "Free",
    pricingType: "free",
    features: ["Smart drawing", "AI suggestions", "Quick creation"],
    tags: ["drawing", "suggestions", "quick"]
  },
  {
    id: "canva",
    name: "Canva",
    description: "Design platform with AI-powered features and templates",
    link: "https://canva.com",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI design", "Template library", "Brand consistency"],
    tags: ["design", "templates", "brand"]
  },
  {
    id: "designcom",
    name: "Design.com",
    description: "AI logo and brand design platform",
    link: "https://design.com",
    category: "graphic-design",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Logo creation", "Brand design", "AI assistance"],
    tags: ["logo", "brand", "assistance"]
  },
  {
    id: "framer",
    name: "Framer",
    description: "AI-powered web design and prototyping tool",
    link: "https://framer.com",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Web design", "Prototyping", "AI components"],
    tags: ["web-design", "prototyping", "components"]
  },
  {
    id: "microsoft-designer",
    name: "Microsoft Designer",
    description: "AI-powered graphic design tool from Microsoft",
    link: "https://designer.microsoft.com",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI design", "Microsoft integration", "Template library"],
    tags: ["microsoft", "integration", "templates"]
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "AI-powered UI/UX design and prototyping platform",
    link: "https://uizard.io",
    category: "graphic-design",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["UI design", "Prototyping", "AI generation"],
    tags: ["ui-design", "prototyping", "generation"]
  },

  // AI Data Visualization Tools
  {
    id: "deckopilot",
    name: "Deckopilot",
    description: "AI-powered presentation and data visualization",
    link: "https://www.deckpilot.io/",
    category: "data-visualization",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Data visualization", "Presentation design", "AI insights"],
    tags: ["visualization", "presentation", "insights"]
  },
  {
    id: "flourish",
    name: "Flourish",
    description: "Data visualization platform with AI-enhanced features",
    link: "https://flourish.studio",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Interactive charts", "Data storytelling", "Animation"],
    tags: ["interactive", "storytelling", "animation"]
  },
  {
    id: "julius",
    name: "Julius",
    description: "AI data analyst for spreadsheets and visualizations",
    link: "https://julius.ai",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Data analysis", "Chart generation", "Natural language queries"],
    tags: ["analysis", "charts", "natural-language"]
  },
  {
    id: "visme",
    name: "Visme",
    description: "AI-enhanced design platform for data visualization",
    link: "https://visme.co",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Infographics", "Data charts", "Interactive content"],
    tags: ["infographics", "charts", "interactive"]
  },
  {
    id: "zing-data",
    name: "Zing Data",
    description: "Mobile-first business intelligence with AI insights",
    link: "https://zingdata.com",
    category: "data-visualization",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Mobile BI", "AI insights", "Real-time data"],
    tags: ["mobile", "bi", "real-time"]
  },

  // AI Knowledge Management Tools
  {
    id: "mem",
    name: "Mem",
    description: "AI-powered knowledge management and note-taking",
    link: "https://mem.ai",
    category: "knowledge-management",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["AI organization", "Smart search", "Auto-tagging"],
    tags: ["organization", "search", "tagging"]
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace with AI knowledge management",
    link: "https://notion.so",
    category: "knowledge-management",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Workspace", "AI assistant", "Database management"],
    tags: ["workspace", "assistant", "database"]
  },
  {
    id: "tettra",
    name: "Tettra",
    description: "AI-powered team knowledge base and wiki",
    link: "https://tettra.com",
    category: "knowledge-management",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Knowledge base", "Team wiki", "AI suggestions"],
    tags: ["knowledge-base", "wiki", "suggestions"]
  },

  // AI Email Assistance Tools
  {
    id: "clippit-ai",
    name: "Clippit.AI",
    description: "AI email assistant for smart composition and replies",
    link: "https://clippit.ai",
    category: "email-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Email composition", "Smart replies", "Tone adjustment"],
    tags: ["composition", "replies", "tone"]
  },
  {
    id: "friday",
    name: "Friday",
    description: "AI email copilot for better email management",
    link: "https://friday.app",
    category: "email-assistance",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Email management", "AI insights", "Productivity tracking"],
    tags: ["management", "insights", "productivity"]
  },
  {
    id: "mailmestro",
    name: "Mailmestro",
    description: "AI email assistant for Outlook and Gmail",
    link: "https://www.maestrolabs.com/",
    category: "email-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Email templates", "AI writing", "Integration"],
    tags: ["templates", "writing", "integration"]
  },
  {
    id: "shortwave",
    name: "Shortwave",
    description: "AI-powered email client with smart features",
    link: "https://shortwave.com",
    category: "email-assistance",
    pricing: "Free with premium plans",
    pricingType: "freemium",
    features: ["Smart inbox", "AI summaries", "Email scheduling"],
    tags: ["inbox", "summaries", "scheduling"]
  },
  {
    id: "superhuman",
    name: "Superhuman",
    description: "AI-enhanced email client for productivity",
    link: "https://superhuman.com",
    category: "email-assistance",
    pricing: "Subscription",
    pricingType: "paid",
    features: ["Speed optimization", "AI triage", "Advanced features"],
    tags: ["speed", "triage", "advanced"]
  }
];

// Helper functions
export function getToolsByCategory(categoryId: string): AITool[] {
  return aiTools.filter(tool => tool.category === categoryId);
}

export function getFeaturedTools(): AITool[] {
  return aiTools.filter(tool => tool.featured === true);
}

export function searchTools(query: string): AITool[] {
  const lowercaseQuery = query.toLowerCase();
  return aiTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}

// Get categories with updated counts - this function ensures SSR/client consistency
export function getCategoriesWithCounts(): AICategory[] {
  return categories.map(category => ({
    ...category,
    count: getToolsByCategory(category.id).length
  }));
}