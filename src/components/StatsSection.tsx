"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, Zap, Users } from "lucide-react";
import { aiTools, categories } from "@/data/aiTools";

export function StatsSection() {
  const featuredToolsCount = aiTools.filter(tool => tool.featured).length;
  const freeToolsCount = aiTools.filter(tool => tool.pricing.toLowerCase().includes('free')).length;
  const averageRating = aiTools
    .filter(tool => tool.rating)
    .reduce((sum, tool) => sum + (tool.rating || 0), 0) / aiTools.filter(tool => tool.rating).length;
  const mostPopularCategory = categories
    .sort((a, b) => b.count - a.count)[0];

  const stats = [
    {
      icon: TrendingUp,
      label: "Total AI Tools",
      value: aiTools.length,
      description: "Curated collection",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      label: "Featured Tools",
      value: featuredToolsCount,
      description: "Highly recommended",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Zap,
      label: "Free Tools",
      value: freeToolsCount,
      description: "No cost to start",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      label: "Categories",
      value: categories.length,
      description: mostPopularCategory.name + " (most popular)",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-12"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
          Platform Statistics
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive insights into our AI tool collection
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {averageRating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/30 dark:to-orange-900/30 dark:text-yellow-300">
            ⭐ Average Rating: {averageRating.toFixed(1)}/5.0
          </Badge>
        </motion.div>
      )}
    </motion.section>
  );
}