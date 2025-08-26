export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  tags?: string[];
  coverImage?: string;
  featured?: boolean;
  readingTime?: number;
}