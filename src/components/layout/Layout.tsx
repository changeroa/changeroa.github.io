import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                        Changeroa
                    </Link>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition-colors">Portfolio</Link>
                        <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <a href="/garden" className="hover:text-primary transition-colors">Digital Garden</a>
                    </nav>
                </div>
            </header>

            <main className="pt-16 min-h-[calc(100vh-4rem)]">
                <Outlet />
            </main>

            <footer className="border-t border-border/40 py-6 md:py-0">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Changeroa. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/changeroa" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
