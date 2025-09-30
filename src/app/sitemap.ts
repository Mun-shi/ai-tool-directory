import { MetadataRoute } from 'next';

const siteUrl = 'https://ai-toolkit.directory';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static for now; extend with dynamic category pages later
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    }
  ];
}
