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
            ? 'bg-primary text-white dark:bg-primary-dark'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
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
              ? 'bg-primary text-white dark:bg-primary-dark'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;