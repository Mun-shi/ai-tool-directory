import React from 'react';
import Image from 'next/image';
import { AITool, AICategory } from '@/data/aiTools';
import { motion } from 'framer-motion';

interface QuickViewProps {
  tools: AITool[];
  categories: AICategory[];
}

const QuickView: React.FC<QuickViewProps> = ({ tools, categories }) => {
  // Logo filename mapping for uploaded logos
  const logoFileMap: Record<string, string> = {
    // AI Chatbots
    'chatgpt': 'ChatGPT-Logo.png',
    'claude': 'claude.jpeg',
    'ms-copilot': 'copilot.jpeg',
    'deepseek': 'deepseek.png',
    'gemini': 'gemini.png',
    'grok': 'grok.png',
    'meta-ai': 'meta.jpeg',
    'perplexity': 'perplexity.png',
    
    // AI Coding Assistance
    'askcodi': 'askcodi.avif',
    'codiga': 'Codiga.jpg',
    'cursor': 'cursor.png',
    'github-copilot': 'github-copilot.webp',
    'qodo': 'qodo.jpg',
    'replit': 'replit.png',
    'tabnine': 'tabnine.png',
    
    // AI Image Generation
    'adobe-firefly': 'Adobe_Firefly.png',
    'dalle': 'dalle.jpg',
    'flux1': 'flux.jpeg',
    'ideogram': 'ideogram.webp',
    'midjourney': 'midjourney.jpg',
    'recraft': 'recraft.jpeg',
    'stable-diffusion': 'stable diffusion.jpg',
    
    // AI Video Generation
    'descript': 'descript.jpeg',
    'invideo-ai': 'invideo.webp',
    'kling': 'kling.jpg',
    'krea-ai': 'krea.jpeg',
    'ltx-studio': 'ltx studio.png',
    'luma-ai': 'luma ai.png',
    'pika-ai': 'pika.webp',
    'runway': 'runaway.png',
    'sora': 'sora.webp',
    
    // AI App Builders
    'lovable': 'lovable.jpg',
    'v0': 'v0.png',
    'bolt-new': 'Bolt.new.jpg',
    'codeium-windsurf': 'windsurf.png',
    'debuild': 'debuild.avif',
    'bubble': 'bubble.png',
    'glide': 'glide.png',
    'framer-ai': 'framer.png',
    'webflow': 'webflow.jpeg',
    
    // AI Presentation
    'beautiful-ai': 'beutiful.webp',
    'gamma': 'gamma.webp',
    'pitch': 'pitch logo.jpg',
    'plus': 'plus ai.png',
    'popal': 'pop.jpeg',
    'presentation-ai': 'presentation.png',
    'slidesgo': 'slidesgo.png',
    'tome': 'tome.png',
    
    // AI Spreadsheet
    'bricks': 'bricks.jpeg',
    'formula-bot': 'formulabot.jpeg',
    'gigasheet': 'gigasheet.png',
    'rows-ai': 'Rows_AI_logo.png',
    'sheet-ai': 'sheet ai.svg',
    
    // AI Meeting Notes
    'avoma': 'avoma.png',
    'equal-time': 'equaltime.jpeg',
    'fathom': 'fathom ai.png',
    'fellow-app': 'fellowai.webp',
    'fireflies': 'fireflies.png',
    'krisp': 'crispai.jpeg',
    'otter': 'otter.png',
    
    // AI Workflow Automation
    'integrately': 'integratrly.jpeg',
    'make': 'makeai.jpeg',
    'monday-com': 'monday.com',
    'n8n': 'n8n.png',
    'wrike': 'wrike.png',
    'zapier': 'zapier.png',
    
    // AI Writing Generation
    'copy-ai': 'copy ai.png',
    'grammarly': 'grammerly.jpg',
    'jasper': 'jasper.jpeg',
    'notion-ai': 'notion_logo.jpg',
    'quarkle': 'quarkle.jpeg',
    'quillbot': 'quillbot.jpeg',
    'rytr': 'rytr.png',
    'sudowrite': 'sudowrite.webp',
    'writesonic': 'writesonic.jpeg',
    
    // AI Scheduling
    'calendly': 'calendly.png',
    'clockwise': 'clockwise.jpeg',
    'motion': 'motionai.png',
    'reclaim-ai': 'reclaim.png',
    'taskade': 'taskade.png',
    'trevor-ai': 'trevor.png_w=270',
    
    // AI Graphic Design
    'autodraw': 'autodraw.png',
    'canva': 'canva.png',
    'designcom': 'design.com',
    'framer': 'framer.png',
    'microsoft-designer': 'microsoft designner.png',
    'uizard': 'uizard.jpeg',
    
    // AI Data Visualization
    'deckopilot': 'deckopilot.webp',
    'flourish': 'flourish.jpg',
    'julius': 'julius.jpeg',
    'visme': 'visme.jpg',
    'zing-data': 'zingdata.png',
    
    // AI Knowledge Management
    'mem': 'mem.jpg',
    'notion': 'notion_logo.jpg',
    'tettra': 'tettra.png',
    
    // AI Email Assistance
    'clippit-ai': 'clipit.png',
    'friday': 'friday.png',
    'mailmestro': 'mailmestro.jpeg',
    'shortwave': 'shortwave.png',
    'superhuman': 'superhuman.jpeg',
  };

  // Function to get logo source - prioritize local logos over remote icons
  const getLogoSource = (tool: AITool): string => {
    // Check if we have a specific filename mapping
    if (logoFileMap[tool.id]) {
      return `/logos/${logoFileMap[tool.id]}`;
    }
    
    // For other tools, try standard naming convention
    const localLogo = `/logos/${tool.id}.png`;
    
    // Return local logo if available, otherwise fall back to tool.icon
    return localLogo || tool.icon || '';
  };

  // Group tools by category while preserving exact order
  const toolsByCategory = React.useMemo(() => {
    const grouped: Record<string, AITool[]> = {};
    
    // Initialize all categories in the exact order from the categories array
    categories.forEach(category => {
      grouped[category.id] = [];
    });
    
    // Add tools to their respective categories
    tools.forEach(tool => {
      if (grouped[tool.category]) {
        grouped[tool.category].push(tool);
      }
    });
    
    return grouped;
  }, [tools, categories]);

  // Get categories in the exact order defined in the data file
  const orderedCategories = React.useMemo(() => {
    return categories.map(category => ({
      ...category,
      tools: toolsByCategory[category.id] || []
    })).filter(category => category.tools.length > 0);
  }, [toolsByCategory, categories]);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Categories grid - optimized for 3 per row with STABLE ordering */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {orderedCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 card-hover-enhanced"
          >
            {/* Category Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {category.description}
              </p>
            </div>

            {/* Tools Grid - Show all tools in a responsive grid */}
            <div className="p-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.tools.map((tool) => (
                  <motion.div
                    key={tool.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-2 cursor-pointer"
                    onClick={() => window.open(tool.link, '_blank')}
                  >
                    {/* Tool Logo - Only show if we have a valid logo */}
                    {getLogoSource(tool) && (
                      <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center p-1 shadow-sm">
                        <Image
                          src={getLogoSource(tool)}
                          alt={tool.name}
                          width={48}
                          height={48}
                          className="object-contain rounded"
                          unoptimized={true}
                          onError={(e) => {
                            // Fallback to tool.icon if local logo fails to load
                            const target = e.target as HTMLImageElement;
                            if (target.src.startsWith('/logos/') && tool.icon) {
                              target.src = tool.icon;
                            } else {
                              // Hide the entire logo container if no valid image
                              const logoContainer = target.closest('.w-12.h-12') as HTMLElement;
                              if (logoContainer) {
                                logoContainer.style.display = 'none';
                              }
                            }
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Tool Name */}
                    <div className="text-center">
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full">
                        {tool.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default QuickView;