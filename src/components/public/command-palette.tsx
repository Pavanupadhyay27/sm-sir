"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Keyboard, ShieldAlert } from "lucide-react";

interface CommandItem {
  name: string;
  category: string;
  href?: string;
  action?: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: CommandItem[] = [
    { name: "Navigate to Home", category: "Navigation", href: "/" },
    { name: "Navigate to About Biography", category: "Navigation", href: "/about" },
    { name: "Navigate to Research Lab", category: "Navigation", href: "/research-lab" },
    { name: "Navigate to Publications", category: "Navigation", href: "/publications" },
    { name: "Navigate to Patents & Innovations", category: "Navigation", href: "/patents" },
    { name: "Navigate to Conferred Awards", category: "Navigation", href: "/awards" },
    { name: "Navigate to Course Syllabus & Teaching", category: "Navigation", href: "/teaching" },
    { name: "Navigate to Leadership Roles", category: "Navigation", href: "/leadership" },
    { name: "Navigate to Visual Gallery", category: "Navigation", href: "/gallery" },
    { name: "Navigate to News Blog", category: "Navigation", href: "/blog" },
    { name: "Navigate to Contact Coordinates", category: "Navigation", href: "/contact" },
    {
      name: "Toggle Dark / Light Theme",
      category: "Settings",
      action: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }
    }
  ];

  // Hotkey listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        setActiveIndex(0);
      }, 80);
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.href) {
      router.push(cmd.href);
    } else if (cmd.action) {
      cmd.action();
    }
    setIsOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        handleSelect(filteredCommands[activeIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      {/* Backdrop Close Click */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Palette Panel */}
      <div className="w-full max-w-lg bg-custom-card glass rounded-3xl border border-custom-border/80 shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[450px]">
        {/* Search header */}
        <div className="flex items-center space-x-3 px-5 py-4 border-b border-custom-border">
          <Search className="w-4 h-4 text-custom-muted" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or page name..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-xs text-custom-fg placeholder-custom-muted border-none focus:outline-none focus:ring-0"
          />
          <kbd className="text-[9px] font-mono bg-custom-fg/5 text-custom-muted px-1.5 py-0.5 rounded border border-custom-border flex items-center space-x-0.5">
            <Keyboard className="w-3 h-3" />
            <span>ESC</span>
          </kbd>
        </div>

        {/* Commands List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => handleSelect(cmd)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isActive
                      ? "bg-primary-emerald text-white shadow-md shadow-primary-emerald/10"
                      : "text-custom-fg/80 hover:bg-custom-fg/5 hover:text-custom-fg"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs">
                    <FileText className={`w-4 h-4 ${isActive ? "text-white" : "text-custom-muted"}`} />
                    <span className="font-medium">{cmd.name}</span>
                  </div>
                  <span
                    className={`text-[9px] font-mono tracking-wide uppercase px-2 py-0.5 rounded border ${
                      isActive
                        ? "text-white border-white/20 bg-white/10"
                        : "text-custom-muted border-custom-border bg-custom-fg/5"
                    }`}
                  >
                    {cmd.category}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10">
              <ShieldAlert className="w-8 h-8 text-custom-muted mx-auto mb-2" />
              <span className="text-xs text-custom-muted">No commands match your query.</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-custom-border bg-custom-fg/5 text-[9px] font-mono text-custom-muted flex items-center justify-between">
          <span>USE ↑↓ ARROWS & ENTER TO CHOOSE</span>
          <span>RAYCAST PALETTE INTEGRATED</span>
        </div>
      </div>
    </div>
  );
}
