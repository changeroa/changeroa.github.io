import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import SearchBar from '../components/blog/SearchBar';
import TagFilter from '../components/blog/TagFilter';
import { getAllPosts } from '../utils/blogUtils';
import type { BlogPost } from '../types/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const blogPosts = getAllPosts();
    setPosts(blogPosts);
    setFilteredPosts(blogPosts);
    
    // Extract all unique tags
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    setAllTags(Array.from(tags));
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags?.includes(selectedTag)
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedTag, searchQuery, posts]);

  return (
    <>
      <div className="min-h-screen pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tech <span className="gradient-text">Blog</span>
            </motion.h1>
            
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              개발하며 배운 것들, 문제 해결 과정, 그리고 기술적 인사이트를 공유합니다
            </motion.p>

            <div className="mb-8 space-y-6">
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              
              <TagFilter
                tags={allTags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </div>

            {filteredPosts.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  검색 결과가 없습니다. 다른 키워드로 검색해보세요.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;