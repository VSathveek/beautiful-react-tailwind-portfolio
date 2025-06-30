// AboutSection.jsx
import { Briefcase, Code, User, School, Cpu, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Engineer & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a 3rd year Computer Science student at NIT Andhra Pradesh with 
              a CGPA of 8.70. Passionate about building practical solutions through 
              code, I've developed several projects ranging from mobile apps to 
              web applications and AI models.
            </p>

            <p className="text-muted-foreground">
              With strong academic performance (98.5 percentile in JEE Mains) and 
              hands-on experience in technologies like Flutter, Django, and 
              Firebase, I'm constantly expanding my skills in software development 
              and graph algorithms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building complete solutions with Flutter, Django, Firebase and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    8.70 CGPA at NIT AP, 98.5%ile in JEE Mains, and strong foundation in CS fundamentals.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Research & Innovation</h4>
                  <p className="text-muted-foreground">
                    Currently interning at IIT Ropar on Fair Graph Algorithms and developing college portals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};