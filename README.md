# 🤖 AI Tool Directory

A modern, comprehensive directory of AI tools built with Next.js, TypeScript, and TailwindCSS. Discover and explore the best AI tools across various categories with an intuitive, responsive interface.

![AI Tool Directory](https://img.shields.io/badge/Next.js-15.5.3-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC) ![ShadCN/UI](https://img.shields.io/badge/ShadCN%2FUI-Latest-000000)

## ✨ Features

- **🎨 Modern UI/UX**: Clean, minimalist design with gradient backgrounds and smooth animations
- **🔍 Advanced Search**: Real-time search across all AI tools with intelligent filtering
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode**: Beautiful dark/light theme toggle with system preference detection
- **⚡ Interactive**: Smooth animations powered by Framer Motion
- **🏷️ Categorized**: 18 categories covering all major AI tool types
- **⭐ Featured Tools**: Curated selection of the best AI tools
- **📊 Statistics**: Live statistics about the tool collection
- **🚀 Performance**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Development**: [Turbopack](https://turbo.build/pack) for fast development

## 📋 Categories

Our directory includes AI tools across 18 categories:

- 🎨 Image Generation (Midjourney, DALL-E 3, Stable Diffusion, Leonardo AI)
- 🎬 Video Generation (Runway, Synthesia, Pika Labs, Descript)
- 🎤 Voice Tools (ElevenLabs, Murf, Speechify)
- 🤖 Chatbots (ChatGPT, Claude, Meta AI, Zapier Agents)
- 💻 Developer Tools (GitHub Copilot, Cursor, Codeium)
- ✍️ Writing Tools (Jasper, Copy.ai, Writer)
- 🔍 AI Search Engines (Perplexity, Arc Search)
- 📝 Content Creation (Anyword, Writer)
- 📖 Text Enhancement (Grammarly, Wordtune, ProWritingAid)
- 📱 Social Media Management (FeedHive, Vista Social, Buffer)
- 🎙️ Transcription & Meeting (Fireflies.ai, Avoma, tl;dv)
- 📅 Scheduling & Time Management (Reclaim.ai, Clockwise, Motion)
- 📧 Email Management (Shortwave, Microsoft Copilot Pro)
- 📊 Presentations (Tome, Beautiful.ai, Slidesgo)
- 👤 Resume Builders (Teal, Enhancv, Kickresume)
- ⚙️ Automation (Notion AI, Zapier, Monday.com AI)
- 🎵 Music & Audio (Suno, Mubert, AIVA)
- 📊 Business Tools (Various productivity and management tools)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-tool-directory.git
   cd ai-tool-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
│   ├── ui/               # ShadCN/UI components
│   ├── CategorySection.tsx
│   ├── DarkModeToggle.tsx
│   ├── FilterDropdown.tsx
│   ├── ScrollToTop.tsx
│   ├── SearchBar.tsx
│   ├── StatsSection.tsx
│   └── ToolCard.tsx
└── data/
    └── aiTools.ts        # AI tools data and categories
```

## 🎨 Customization

### Adding New Tools

To add new AI tools, edit the `src/data/aiTools.ts` file:

```typescript
{
  id: "unique-tool-id",
  name: "Tool Name",
  description: "Tool description...",
  link: "https://tool-website.com",
  category: "category-id",
  pricing: "Free/Paid - $X/month",
  features: ["Feature 1", "Feature 2"],
  tags: ["tag1", "tag2"],
  rating: 4.5,
  featured: true // Optional: mark as featured
}
```

### Adding New Categories

Add new categories to the `categories` array in `src/data/aiTools.ts`:

```typescript
{
  id: "new-category",
  name: "New Category",
  description: "Category description",
  icon: "🆕",
  count: 0 // Auto-calculated
}
```

### Styling

The project uses TailwindCSS for styling. You can customize:

- **Colors**: Edit the CSS variables in `src/app/globals.css`
- **Components**: Modify individual component styles
- **Animations**: Adjust Framer Motion animations in components

## 📊 Statistics

- **80+ AI Tools**: Comprehensive collection of AI tools
- **18 Categories**: Covering all major AI use cases
- **Featured Tools**: Hand-picked recommendations
- **Regular Updates**: Continuously updated with new tools

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN/UI](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the amazing AI tool creators featured in this directory

---

**Built with ❤️ for the AI community**

*Helping developers and creators discover the best AI tools for their projects.*
