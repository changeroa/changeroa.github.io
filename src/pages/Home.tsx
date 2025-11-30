import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout as LayoutIcon, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
                        Building Digital <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Experiences & Gardens
                        </span>
                    </h1>
                    <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl sm:leading-8">
                        I'm a developer and designer crafting beautiful, performant web applications.
                        Welcome to my portfolio and digital garden.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
                    >
                        Read Blog
                    </Link>
                    <Link
                        to="/garden"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8"
                    >
                        Explore Garden
                    </Link>
                </motion.div>
            </section>

            {/* Features / Skills Section */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm"
                    >
                        <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                            <Code className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                        <p className="text-muted-foreground">
                            Writing maintainable, scalable, and efficient code is my priority. TypeScript and React are my tools of choice.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm"
                    >
                        <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                            <LayoutIcon className="h-6 w-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Modern Design</h3>
                        <p className="text-muted-foreground">
                            I believe in aesthetics that serve function. Minimalist, accessible, and beautiful interfaces.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm"
                    >
                        <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                            <Terminal className="h-6 w-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Digital Garden</h3>
                        <p className="text-muted-foreground">
                            A collection of evolving notes, thoughts, and experiments. Learning in public.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Recent Work Preview (Placeholder) */}
            <section className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <Link to="/projects" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                        View all <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="group relative overflow-hidden rounded-xl border border-border bg-muted/50 aspect-video flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                            <span className="text-muted-foreground font-medium">Project Preview {i}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
