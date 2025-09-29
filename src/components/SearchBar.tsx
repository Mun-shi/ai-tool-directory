"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search AI tools..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      <div className={`relative flex items-center bg-white dark:bg-gray-900 rounded-xl border-2 transition-all duration-300 ${
        isFocused 
          ? "border-blue-500 shadow-lg shadow-blue-500/20" 
          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
      }`}>
        <div className="flex items-center pl-3">
          <Search className={`w-4 h-4 transition-colors duration-200 ${
            isFocused ? "text-blue-500" : "text-gray-400"
          }`} />
        </div>
        
        <Input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 border-0 bg-transparent placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 py-3 px-3 text-sm"
        />
        
        {query && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pr-2"
          >
            <Button
              onClick={clearSearch}
              variant="ghost"
              size="sm"
              className="rounded-full w-6 h-6 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-3 h-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
            </Button>
          </motion.div>
        )}
      </div>
      
      {/* Search suggestions or recent searches could go here */}
      {query && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute top-full left-0 right-0 mt-2 text-sm text-gray-500 dark:text-gray-400 text-center"
        >
          Press Enter to search for &ldquo;{query}&rdquo;
        </motion.div>
      )}
    </motion.div>
  );
}