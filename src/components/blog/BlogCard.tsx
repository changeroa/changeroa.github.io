import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="block h-full group"
    >
      <article className="h-full glass-effect rounded-2xl overflow-hidden hover-lift">
        {post.coverImage && (
          <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-terra-500/20 to-lavender-500/20">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        
        <div className="p-6">
          {post.featured && (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-lavender-500/10 text-lavender-600 dark:text-lavender-400 rounded-full mb-3">
              Featured
            </span>
          )}
          
          <h3 className="text-xl font-semibold mb-2 text-cocoa-700 dark:text-cream-100 group-hover:text-terra-500 dark:group-hover:text-terra-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-cocoa-600 dark:text-cream-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-cocoa-500 dark:text-cream-400">
            <time>
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            
            {post.readingTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}분
              </span>
            )}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium text-cocoa-500 dark:text-cream-400">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;