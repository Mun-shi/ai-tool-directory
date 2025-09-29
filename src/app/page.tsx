"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchBar";
import { FilterDropdown } from "@/components/FilterDropdown";
import { CategorySection } from "@/components/CategorySection";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ToolCard } from "@/components/ToolCard";
import { ScrollToTop } from "@/components/ScrollToTop";
import ViewToggle from "@/components/ViewToggle";
import PricingFilter from "@/components/PricingFilter";
import QuickView from "@/components/QuickView";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Github, Twitter, Zap, TrendingUp } from "lucide-react";
import { aiTools, searchTools, getToolsByCategory, getCategoriesWithCounts } from "@/data/aiTools";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState<'detail' | 'quick'>('quick');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Get stable categories with counts - ensures SSR/client consistency
  const stableCategories = useMemo(() => getCategoriesWithCounts(), []);

  // Filter tools based on search, category, and pricing filters
  const filteredTools = useMemo(() => {
    let tools = aiTools;

    // Apply search filter
    if (searchQuery.trim()) {
      tools = searchTools(searchQuery);
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      tools = tools.filter(tool => selectedCategories.includes(tool.category));
    }

    // Apply pricing filter
    if (selectedPricing.length > 0) {
      tools = tools.filter(tool => selectedPricing.includes(tool.pricingType));
    }

    return tools;
  }, [searchQuery, selectedCategories, selectedPricing]);

  const hasFilters = searchQuery.trim() || selectedCategories.length > 0 || selectedPricing.length > 0;

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // If Quick View is selected, show the QuickView component
  if (currentView === 'quick') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-100 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-100/95 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Tool Directory
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Discover the best AI tools
                </p>
              </div>
            </motion.div>

            {/* Center section with search and filters */}
            <motion.div 
              className="flex items-center gap-3 flex-1 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Compact Search Bar */}
              <div className="flex-1 min-w-0">
                <SearchBar onSearch={setSearchQuery} />
              </div>
              
              {/* Filters */}
              <FilterDropdown
                categories={stableCategories}
                selectedCategories={selectedCategories}
                onFilterChange={setSelectedCategories}
              />
              <PricingFilter
                selectedPricing={selectedPricing}
                onPricingChange={setSelectedPricing}
              />
            </motion.div>

            {/* Right section with view toggle and dark mode */}
            <motion.div 
              className="flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
              <DarkModeToggle />
            </motion.div>
          </div>
        </div>
      </header>        {/* Quick Access Header */}
        <motion.section 
          className="container mx-auto px-4 py-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            Quick Access to AI Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find and access AI tools instantly - 3 tools per category for quick discovery
          </p>
        </motion.section>

        <QuickView tools={filteredTools} categories={stableCategories} />
        
        {/* Filtered Results for Quick View */}
        {hasFilters && filteredTools.length > 0 && (
          <motion.div
            className="container mx-auto px-4 py-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {searchQuery ? `Search Results for "${searchQuery}"` : "Filtered Results"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {hasFilters && filteredTools.length === 0 && (
          <motion.div 
            className="container mx-auto px-4 py-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search query or filters
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
                setSelectedPricing([]);
              }}
              variant="outline"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}

        {/* Platform Statistics Section - moved to bottom above footer */}
        {!hasFilters && (
          <motion.section 
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                Platform Statistics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive insights into our AI tool collection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Total AI Tools */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {aiTools.length}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Total AI Tools</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Curated collection</p>
              </motion.div>

              {/* Free Tools */}
              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {aiTools.filter(tool => tool.pricingType === 'free').length}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-1">Free Tools</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">No cost to start</p>
              </motion.div>

              {/* Categories */}
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stableCategories.length}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">Categories</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI Chatbots (most popular)</p>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Footer */}
        <footer className="bg-gray-200 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Tool Directory
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built with ❤️ for the AI community. Helping you discover the best AI tools for your needs. 
                Our curated collection features {aiTools.length} tools across {stableCategories.length} categories.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-6">
                <p>© 2024 AI Tool Directory. All rights reserved.</p>
                <p className="mt-2">Regularly updated with the latest AI tools and technologies.</p>
              </div>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-100 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-100/95 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Tool Directory
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Discover the best AI tools
                </p>
              </div>
            </motion.div>

            {/* Center section with search and filters */}
            <motion.div 
              className="flex items-center gap-3 flex-1 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Compact Search Bar */}
              <div className="flex-1 min-w-0">
                <SearchBar onSearch={setSearchQuery} />
              </div>
              
              {/* Filters */}
              <FilterDropdown
                categories={stableCategories}
                selectedCategories={selectedCategories}
                onFilterChange={setSelectedCategories}
              />
              <PricingFilter
                selectedPricing={selectedPricing}
                onPricingChange={setSelectedPricing}
              />
            </motion.div>

            {/* Right section with view toggle and dark mode */}
            <motion.div 
              className="flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
              <DarkModeToggle />
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Amazing AI Tools
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our curated collection of the best AI tools across different categories. 
              From image generation to coding assistants, find the perfect AI solution for your needs.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Zap className="w-3 h-3 mr-1" />
              {aiTools.length} AI Tools
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              <TrendingUp className="w-3 h-3 mr-1" />
              {stableCategories.length} Categories
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <Sparkles className="w-3 h-3 mr-1" />
              Updated Daily
            </Badge>
          </motion.div>
        </motion.section>

        {/* Search and Filter Section - REMOVED (now in navbar) */}

        {/* Search Results */}
        {hasFilters && (
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                {searchQuery ? `Search Results for "${searchQuery}"` : "Filtered Results"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>

            {filteredTools.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your search query or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedPricing([]);
                  }}
                  variant="outline"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* Categories Section */}
        {!hasFilters && (
          <motion.section 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Browse by Category
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore AI tools organized by their primary use case
              </p>
            </div>

            {stableCategories.map((category) => {
              const categoryTools = getToolsByCategory(category.id);
              if (categoryTools.length === 0) return null;

              return (
                <CategorySection
                  key={category.id}
                  category={category}
                  tools={categoryTools}
                  isExpanded={expandedCategories[category.id] || false}
                  onToggleExpanded={() => toggleCategoryExpansion(category.id)}
                />
              );
            })}
          </motion.section>
        )}
      </main>

      {/* Platform Statistics Section - moved to bottom above footer */}
      {!hasFilters && (
        <motion.section 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              Platform Statistics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights into our AI tool collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total AI Tools */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {aiTools.length}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Total AI Tools</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Curated collection</p>
            </motion.div>

            {/* Free Tools */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {aiTools.filter(tool => tool.pricingType === 'free').length}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-1">Free Tools</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">No cost to start</p>
            </motion.div>

            {/* Categories */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stableCategories.length}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">Categories</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI Chatbots (most popular)</p>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tool Directory
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with ❤️ for the AI community. Helping you discover the best AI tools for your needs. 
              Our curated collection features {aiTools.length} tools across {stableCategories.length} categories.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </Button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-6">
              <p>© 2024 AI Tool Directory. All rights reserved.</p>
              <p className="mt-2">Regularly updated with the latest AI tools and technologies.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
