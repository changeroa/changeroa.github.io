interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

const TagFilter = ({ tags, selectedTag, setSelectedTag }: TagFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => setSelectedTag('')}
        className={`px-4 py-2 rounded-full font-medium transition-all ${
          selectedTag === ''
            ? 'bg-terra-500 text-white dark:bg-terra-600'
            : 'bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 hover:bg-cream-200 dark:hover:bg-cocoa-700'
        }`}
      >
        All Posts
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selectedTag === tag
              ? 'bg-terra-500 text-white dark:bg-terra-600'
              : 'bg-cream-100 dark:bg-cocoa-800 text-cocoa-600 dark:text-cream-300 hover:bg-cream-200 dark:hover:bg-cocoa-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;