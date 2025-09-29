"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolCard } from "./ToolCard";
import { AICategory, AITool } from "@/data/aiTools";

interface CategorySectionProps {
  category: AICategory;
  tools: AITool[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export function CategorySection({ category, tools, isExpanded, onToggleExpanded }: CategorySectionProps) {
  const displayedTools = isExpanded ? tools : tools.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <motion.div
        className="cursor-pointer"
        onClick={onToggleExpanded}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Removed category.icon visual (emoji/icon) per request */}
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {category.name}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge 
                  variant="secondary" 
                  className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-semibold"
                >
                  {tools.length} tool{tools.length !== 1 ? 's' : ''}
                </Badge>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : "auto",
          opacity: 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
        
        {!isExpanded && tools.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <motion.button
              onClick={onToggleExpanded}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show {tools.length - 3} more tools in {category.name}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}