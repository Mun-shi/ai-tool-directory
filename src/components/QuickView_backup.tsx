import React from 'react';
import Image from 'next/image';
import { AITool, categories } from '@/data/aiTools';
import { motion } from 'framer-motion';

interface QuickViewProps {
  tools: AITool[];
}

const QuickView: React.FC<QuickViewProps> = ({ tools }) => {
  // Function to get the appropriate logo/icon for each tool
  const getToolLogo = (tool: AITool) => {
    const toolLogos: Record<string, string> = {
      // Image Generation
      'midjourney': 'https://www.midjourney.com/favicon.ico',
      'dalle-3': 'https://openai.com/favicon.ico',
      'stable-diffusion': 'https://stability.ai/favicon.ico',
      'leonardo-ai': 'https://leonardo.ai/favicon.ico',
      'canva': 'https://static.canva.com/web/images/favicon.ico',
      'adobe-firefly': 'https://www.adobe.com/favicon.ico',
      'ideogram': 'https://ideogram.ai/favicon.ico',
      'playground-ai': 'https://playground.com/favicon.ico',
      
      // Video Generation
      'runway': 'https://runwayml.com/favicon.ico',
      'pika-labs': 'https://pika.art/favicon.ico',
      'synthesia': 'https://www.synthesia.io/favicon.ico',
      'descript': 'https://www.descript.com/favicon.ico',
      'wondershare-filmora': 'https://filmora.wondershare.com/favicon.ico',
      'invideo': 'https://invideo.io/favicon.ico',
      'luma-ai': 'https://lumalabs.ai/favicon.ico',
      
      // Voice Tools
      'elevenlabs': 'https://elevenlabs.io/favicon.ico',
      'murf': 'https://murf.ai/favicon.ico',
      'speechify': 'https://speechify.com/favicon.ico',
      'resemble-ai': 'https://www.resemble.ai/favicon.ico',
      'voice-ai': 'https://voice.ai/favicon.ico',
      'wellsaid': 'https://wellsaidlabs.com/favicon.ico',
      
      // Chatbots
      'chatgpt': 'https://openai.com/favicon.ico',
      'claude': 'https://claude.ai/favicon.ico',
      'google-bard': 'https://bard.google.com/favicon.ico',
      'meta-ai': 'https://ai.meta.com/favicon.ico',
      'perplexity': 'https://www.perplexity.ai/favicon.ico',
      'character-ai': 'https://character.ai/favicon.ico',
      'poe': 'https://poe.com/favicon.ico',
      
      // Search Engines
      'google-ai-overviews': 'https://www.google.com/favicon.ico',
      'arc-search': 'https://arc.net/favicon.ico',
      'you-com': 'https://you.com/favicon.ico',
      'brave-search': 'https://search.brave.com/favicon.ico',
      
      // Content Creation & Writing
      'jasper': 'https://www.jasper.ai/favicon.ico',
      'copy-ai': 'https://www.copy.ai/favicon.ico',
      'anyword': 'https://www.anyword.com/favicon.ico',
      'grammarly': 'https://www.grammarly.com/favicon.ico',
      'writesonic': 'https://writesonic.com/favicon.ico',
      'rytr': 'https://rytr.me/favicon.ico',
      'writer': 'https://writer.com/favicon.ico',
      'quillbot': 'https://quillbot.com/favicon.ico',
      'wordtune': 'https://www.wordtune.com/favicon.ico',
      
      // Developer Tools
      'github-copilot': 'https://github.com/favicon.ico',
      'tabnine': 'https://www.tabnine.com/favicon.ico',
      'replit': 'https://replit.com/favicon.ico',
      'cursor': 'https://cursor.sh/favicon.ico',
      'codeium': 'https://codeium.com/favicon.ico',
      'codewiz': 'https://codewiz.ai/favicon.ico',
      
      // Business Tools
      'notion-ai': 'https://www.notion.so/favicon.ico',
      'superhuman': 'https://superhuman.com/favicon.ico',
      'otter-ai': 'https://otter.ai/favicon.ico',
      'zapier': 'https://zapier.com/favicon.ico',
      'monday-ai': 'https://monday.com/favicon.ico',
      'clickup': 'https://clickup.com/favicon.ico',
      'asana': 'https://asana.com/favicon.ico',
      
      // Design Tools
      'figma': 'https://www.figma.com/favicon.ico',
      'sketch': 'https://www.sketch.com/favicon.ico',
      'framer': 'https://www.framer.com/favicon.ico',
      'adobe-illustrator': 'https://www.adobe.com/favicon.ico',
      'photoshop': 'https://www.adobe.com/favicon.ico',
      
      // Music & Audio
      'suno': 'https://suno.ai/favicon.ico',
      'udio': 'https://www.udio.com/favicon.ico',
      'boomy': 'https://boomy.com/favicon.ico',
      'soundraw': 'https://soundraw.io/favicon.ico',
      'beatbot': 'https://beatbot.fm/favicon.ico',
      'aiva': 'https://www.aiva.ai/favicon.ico',
      
      // Social Media
      'hootsuite': 'https://hootsuite.com/favicon.ico',
      'buffer': 'https://buffer.com/favicon.ico',
      'later': 'https://later.com/favicon.ico',
      'sprout-social': 'https://sproutsocial.com/favicon.ico',
      
      // E-commerce
      'shopify': 'https://www.shopify.com/favicon.ico',
      'amazon': 'https://www.amazon.com/favicon.ico',
      'etsy': 'https://www.etsy.com/favicon.ico',
      'ebay': 'https://www.ebay.com/favicon.ico',
      
      // Finance
      'mint': 'https://mint.intuit.com/favicon.ico',
      'robinhood': 'https://robinhood.com/favicon.ico',
      'paypal': 'https://www.paypal.com/favicon.ico',
      'stripe': 'https://stripe.com/favicon.ico',
      
      // Education
      'coursera': 'https://www.coursera.org/favicon.ico',
      'udemy': 'https://www.udemy.com/favicon.ico',
      'khan-academy': 'https://www.khanacademy.org/favicon.ico',
      'duolingo': 'https://www.duolingo.com/favicon.ico',
      
      // Healthcare
      'webmd': 'https://www.webmd.com/favicon.ico',
      'teladoc': 'https://www.teladoc.com/favicon.ico',
      'zocdoc': 'https://www.zocdoc.com/favicon.ico',
      
      // Default fallbacks for common patterns
      'default': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%236366f1" rx="20"/><text x="50" y="55" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="white">AI</text></svg>'
    };

    // Try to get favicon from the tool's domain
    const getFaviconUrl = (url: string) => {
      try {
        const domain = new URL(url).origin;
        return `${domain}/favicon.ico`;
      } catch {
        return toolLogos['default'];
      }
    };

    // Use specific logo if available, otherwise try favicon from domain
    const logoUrl = toolLogos[tool.id] || getFaviconUrl(tool.link);

    // Generate fallback icon with tool name initials
    const initials = tool.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    
    const categoryColors = {
      'image-generation': 'bg-purple-500',
      'video-generation': 'bg-red-500',
      'voice-tools': 'bg-green-500',
      'chatbots': 'bg-blue-500',
      'search-engines': 'bg-orange-500',
      'content-creation': 'bg-yellow-600',
      'writing-tools': 'bg-yellow-600',
      'text-enhancement': 'bg-yellow-700',
      'productivity': 'bg-indigo-500',
      'developer-tools': 'bg-gray-700',
      'business-tools': 'bg-blue-600',
      'data-analysis': 'bg-teal-500',
      'design': 'bg-pink-500',
      'education': 'bg-cyan-500',
      'e-commerce': 'bg-emerald-500',
      'finance': 'bg-amber-500',
      'healthcare': 'bg-rose-500',
      'marketing': 'bg-violet-500',
      'music-audio': 'bg-lime-500',
      'gaming': 'bg-fuchsia-500',
      'automation': 'bg-slate-600',
      'social-media': 'bg-pink-400',
      'transcription': 'bg-green-600',
      'scheduling': 'bg-blue-400',
      'email-management': 'bg-red-400',
      'presentations': 'bg-purple-400',
      'resume-builders': 'bg-gray-500'
    };
    
    const colorClass = categoryColors[tool.category as keyof typeof categoryColors] || 'bg-gray-500';
    
    return (
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
        <Image 
          src={logoUrl}
          alt={tool.name}
          width={56}
          height={56}
          className="w-14 h-14 object-contain"
          onError={(e) => {
            // Fallback to generated icon if logo fails to load
            const target = e.currentTarget;
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-14 h-14 ${colorClass} rounded-lg flex items-center justify-center text-white font-bold text-lg">${initials}</div>`;
            }
          }}
        />
      </div>
    );
  };

  // Group tools by category
  const toolsByCategory = React.useMemo(() => {
    const grouped: Record<string, AITool[]> = {};
    
    tools.forEach(tool => {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
    });
    
    return grouped;
  }, [tools]);

  // Get category info
  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || {
      id: categoryId,
      name: categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      icon: '🔧',
      description: '',
      count: 0
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-6">
      <div className="container mx-auto px-4 max-w-[95vw]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Quick Access
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click any tool to access it directly
          </p>
        </div>

        {/* Optimized category sections in a masonry-like layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {Object.entries(toolsByCategory).map(([categoryId, categoryTools]) => {
            const categoryInfo = getCategoryInfo(categoryId);
            
            return (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                {/* Category header */}
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">{categoryInfo.icon}</span>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {categoryInfo.name}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {categoryTools.length} tools
                    </p>
                  </div>
                </div>

                {/* Tools grid for this category - exactly 3 cards per row */}
                <div className="grid grid-cols-3 gap-6">
                  {categoryTools.map((tool, index) => (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="group"
                    >
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        title={tool.description}
                      >
                        <div className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group-hover:shadow-md min-h-[120px]">
                          {/* Icon container - larger and more visible */}
                          <div className="relative flex items-center justify-center w-16 h-16">
                            {getToolLogo(tool)}
                          </div>
                          
                          {/* Tool name - always visible with perfect readability */}
                          <div className="text-center w-full">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed line-clamp-2">
                              {tool.name}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact stats */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-white dark:bg-gray-800 rounded-xl px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{tools.length}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Tools</div>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                {Object.keys(toolsByCategory).length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;