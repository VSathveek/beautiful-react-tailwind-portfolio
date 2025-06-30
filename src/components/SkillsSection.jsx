// SkillsSection.jsx
import { useState } from "react";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    // Languages
    { 
      name: "Dart", 
      category: "languages", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" 
    },
    { 
      name: "Python", 
      category: "languages", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
    },
    { 
      name: "Java", 
      category: "languages", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" 
    },
    { 
      name: "C++", 
      category: "languages", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" 
    },
    { 
      name: "JavaScript", 
      category: "languages", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
    },

    // Frameworks
    { 
      name: "Flutter", 
      category: "frameworks", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" 
    },
    { 
      name: "Django", 
      category: "frameworks", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" 
    },
    { 
      name: "Firebase", 
      category: "frameworks", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" 
    },

    // CS Fundamentals
    { 
      name: "Data Structures", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
    },
    { 
      name: "Algorithms", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103657.png" 
    },
    { 
      name: "DBMS", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" 
    },
    { 
      name: "OOP", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" 
    },
    { 
      name: "Operating Systems", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/3767/3767086.png" 
    },
    { 
      name: "Computer Architecture", 
      category: "fundamentals", 
      icon: "https://cdn-icons-png.flaticon.com/512/1322/1322156.png" 
    },

    // Tools
    { 
      name: "Git/GitHub", 
      category: "tools", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" 
    },
    { 
      name: "VS Code", 
      category: "tools", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" 
    },
    { 
      name: "Android Studio", 
      category: "tools", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg" 
    },
    { 
      name: "PostgreSQL", 
      category: "tools", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" 
    },
    { 
      name: "SQLite", 
      category: "tools", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg" 
    },
    { 
      name: "Supabase", 
      category: "tools", 
      icon: "https://supabase.com/favicon.ico" 
    },
  ];

  const categories = ["all", "languages", "frameworks", "fundamentals", "tools"];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Tech Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-card rounded-xl shadow-xs card-hover transition-all hover:scale-105"
            >
              <div className="mb-3 p-2 bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3767/3767084.png";
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};