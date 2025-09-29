"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import { AITool } from "@/data/aiTools";

interface ToolCardProps {
  tool: AITool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="h-full flex flex-col card-hover-enhanced bg-gradient-to-br from-white via-slate-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {tool.name}
              </CardTitle>
              {tool.featured && (
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                </motion.div>
              )}
            </div>
            {tool.rating && (
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                  {tool.rating}
                </span>
              </div>
            )}
          </div>
          <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {tool.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {tool.tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge 
                  key={tagIndex} 
                  variant="secondary" 
                  className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </Badge>
              ))}
              {tool.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tool.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Badge 
                variant="outline" 
                className="text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-300"
              >
                {tool.pricing}
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {tool.features.slice(0, 2).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Classy neutral Visit button (removed bright gradient) */}
            <Button
              asChild
              size="sm"
              className="flex-1 bg-slate-800/90 dark:bg-slate-700/80 hover:bg-slate-800 dark:hover:bg-slate-600 text-slate-100 border border-slate-600 dark:border-slate-500 shadow-sm hover:shadow-md transition-colors duration-200"
            >
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-medium tracking-wide"
              >
                Visit
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-2 hover:bg-slate-100 hover:border-slate-300 dark:hover:bg-gray-800 transition-all duration-200">
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    {tool.name}
                    {tool.featured && <Sparkles className="w-6 h-6 text-yellow-500" />}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {tool.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Pricing</h4>
                    <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      {tool.pricing}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-slate-800/90 dark:bg-slate-700/80 hover:bg-slate-800 dark:hover:bg-slate-600 text-slate-100 border border-slate-600 dark:border-slate-500 shadow-sm hover:shadow-md transition-colors duration-200"
                    >
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 font-medium tracking-wide"
                      >
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}