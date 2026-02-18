import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Navigation } from "@/components/Navigation";
import { HexProfile } from "@/components/HexProfile";
import { CyberCard } from "@/components/ui/cyber-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { Terminal, ExternalLink, Cpu, Shield, Trophy, Award, Github, Linkedin, Mail, Database } from "lucide-react";
import aboutImg from "@assets/IMG_0038_1771419892432.JPG";

export default function Home() {
  const { mutate, isPending } = useSubmitContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scanlines Overlay */}
      <div className="scanlines" />
      
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,157,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-secondary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              SYSTEM INITIALIZED
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <GlitchText text="HELLO_WORLD" />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                I AM A DEVELOPER
              </span>
            </h1>

            <div className="font-mono text-xl text-muted-foreground mb-8 h-20">
              <span className="text-primary mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Initializing developer profile...',
                  1000,
                  'Loading skills: Java, Python, React...',
                  1000,
                  'Accessing mission logs...',
                  1000,
                  'Status: ONLINE & READY TO CODE.',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-black hover:bg-primary/90 font-mono font-bold px-8 py-6 rounded-none border-2 border-primary shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transition-all"
              >
                ACCESS PROJECTS
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-secondary text-secondary hover:bg-secondary/10 font-mono px-8 py-6 rounded-none"
              >
                INITIATE UPLINK
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <HexProfile />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 relative group">
              <div className="absolute inset-0 bg-secondary/20 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              <img 
                src={aboutImg} 
                alt="About Profile" 
                className="relative z-10 w-full h-auto grayscale contrast-125 border border-secondary/50"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur border border-secondary px-3 py-1 font-mono text-xs text-secondary">
                IMG_0038.RAW
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              <CyberCard title="USER_PROFILE" subtitle="IDENTITY & SPECS">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Highly motivated developer with a passion for building gamified experiences and robust systems. 
                  Combining academic excellence with hands-on hacking and development skills. 
                  Currently deployed at Fertig Platform as Founder & Lead Dev.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="border border-white/10 p-4 bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-primary font-mono text-sm">
                      <Cpu size={16} /> EDUCATION_NODE_1
                    </div>
                    <div className="font-bold">Manipal Institute of Technology</div>
                    <div className="text-sm text-muted-foreground">B.Tech in Computer Science</div>
                    <div className="mt-2 inline-block bg-primary/20 text-primary px-2 py-0.5 text-xs font-mono">
                      CGPA: 8.90
                    </div>
                  </div>

                  <div className="border border-white/10 p-4 bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-secondary font-mono text-sm">
                      <Cpu size={16} /> EDUCATION_NODE_2
                    </div>
                    <div className="font-bold">Navkis Educational Centre</div>
                    <div className="text-sm text-muted-foreground">Higher Secondary (CBSE)</div>
                    <div className="mt-2 inline-block bg-secondary/20 text-secondary px-2 py-0.5 text-xs font-mono">
                      SCORE: 93.4%
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-glow">SKILL_MATRIX</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CyberCard title="PROGRAMMING" subtitle="CORE LANGUAGES" variant="default">
              <SkillBar name="Java" level={90} color="primary" />
              <SkillBar name="Python" level={85} color="primary" />
              <SkillBar name="C / C++" level={75} color="primary" />
              <SkillBar name="JavaScript" level={80} color="primary" />
            </CyberCard>

            <CyberCard title="WEB_DEV" subtitle="FULL STACK" variant="secondary">
              <SkillBar name="React / Next.js" level={85} color="secondary" />
              <SkillBar name="Node.js / Express" level={80} color="secondary" />
              <SkillBar name="FastAPI" level={70} color="secondary" />
              <SkillBar name="HTML / CSS" level={95} color="secondary" />
            </CyberCard>

            <CyberCard title="AI / ML" subtitle="INTELLIGENCE" variant="accent">
              <SkillBar name="TensorFlow" level={65} color="accent" />
              <SkillBar name="OpenCV" level={70} color="accent" />
              <SkillBar name="MediaPipe" level={60} color="accent" />
              <SkillBar name="Data Analysis" level={75} color="accent" />
            </CyberCard>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-glow-cyan text-secondary">MISSION_LOG</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent" />
          </div>

          <div className="space-y-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-white/10 md:before:left-1/2">
            
            {/* Experience Item 1 */}
            <div className="relative md:grid md:grid-cols-2 gap-8 items-center group">
              <div className="md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="text-primary font-mono text-sm mb-1">2025 - PRESENT</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Founder & Lead Dev</h3>
                <div className="text-muted-foreground">Fertig Platform</div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] z-20" />
              
              <div className="md:pl-12">
                <div className="bg-white/5 border-l-2 border-primary p-4 hover:bg-white/10 transition-colors">
                  <p className="text-sm text-gray-300">
                    Architecting an AI-driven study platform. Leading a team of 3 developers, implementing gamification features and real-time analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative md:grid md:grid-cols-2 gap-8 items-center group">
              <div className="order-2 md:pl-12 mb-4 md:mb-0">
                <div className="text-secondary font-mono text-sm mb-1">JUL - AUG 2025</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">Intern Trainee</h3>
                <div className="text-muted-foreground">India Space Academy</div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 bg-secondary rounded-full shadow-[0_0_10px_var(--secondary)] z-20" />
              
              <div className="order-1 md:text-right md:pr-12">
                <div className="bg-white/5 border-r-2 md:border-r-2 md:border-l-0 border-l-2 border-secondary p-4 hover:bg-white/10 transition-colors">
                  <p className="text-sm text-gray-300">
                    Developed simulation modules for orbital mechanics. Collaborated with research scientists on data visualization tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative md:grid md:grid-cols-2 gap-8 items-center group">
              <div className="md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="text-accent font-mono text-sm mb-1">2026 - PRESENT</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Student Coordinator</h3>
                <div className="text-muted-foreground">MITBLR</div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] z-20" />
              
              <div className="md:pl-12">
                <div className="bg-white/5 border-l-2 border-accent p-4 hover:bg-white/10 transition-colors">
                  <p className="text-sm text-gray-300">
                    Organizing hackathons and tech talks. Mentoring juniors in web development and competitive programming.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-glow">REPOSITORY_VAULT</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CyberCard className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Terminal className="text-primary" size={24} />
                <span className="text-xs font-mono border border-primary/30 px-2 py-1 rounded text-primary/70">DEPLOYED</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Fertig Platform</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                AI-powered study companion that adapts to learning styles. Features real-time quiz generation and progress tracking.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/5 px-2 py-1">React</span>
                <span className="text-xs font-mono bg-white/5 px-2 py-1">FastAPI</span>
                <span className="text-xs font-mono bg-white/5 px-2 py-1">OpenAI</span>
              </div>
            </CyberCard>

            <CyberCard className="h-full flex flex-col" variant="secondary">
              <div className="flex justify-between items-start mb-4">
                <Shield className="text-secondary" size={24} />
                <span className="text-xs font-mono border border-secondary/30 px-2 py-1 rounded text-secondary/70">RESEARCH</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Drowsiness Detection</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Computer vision system using OpenCV and MediaPipe to detect driver fatigue in real-time. Alerts via audio feedback.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/5 px-2 py-1">Python</span>
                <span className="text-xs font-mono bg-white/5 px-2 py-1">OpenCV</span>
                <span className="text-xs font-mono bg-white/5 px-2 py-1">TensorFlow</span>
              </div>
            </CyberCard>

            <CyberCard className="h-full flex flex-col" variant="accent">
              <div className="flex justify-between items-start mb-4">
                <Database className="text-accent" size={24} />
                <span className="text-xs font-mono border border-accent/30 px-2 py-1 rounded text-accent/70">ARCHIVED</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Credit Card Fraud</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Machine learning model trained on transaction datasets to identify fraudulent patterns with 98% accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                <span className="text-xs font-mono bg-white/5 px-2 py-1">Scikit-Learn</span>
                <span className="text-xs font-mono bg-white/5 px-2 py-1">Pandas</span>
              </div>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
           <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-glow text-yellow-500">BADGE_CONSOLE</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                <Trophy size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Kaspersky CTF 2025</div>
                <div className="font-mono text-sm text-yellow-500">Rank: 13/716</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
                <Award size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">Zenith Hackathon</div>
                <div className="font-mono text-sm text-purple-500">Top 32 Finalist</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                <ExternalLink size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">CBSE XII Topper</div>
                <div className="font-mono text-sm text-blue-500">Academic Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-black/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <CyberCard className="relative overflow-hidden">
            <div className="md:flex gap-12">
              <div className="flex-1 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Terminal className="text-primary" />
                  COMMAND_TERMINAL
                </h2>
                <p className="text-muted-foreground mb-8">
                  Initiate transmission protocol. Send inquiries, collaboration requests, or just say hello. 
                  Encrypted channel open.
                </p>

                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                    <Github className="text-primary" />
                    <span>github.com/developer</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                    <Linkedin className="text-secondary" />
                    <span>linkedin.com/in/developer</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                    <Mail className="text-accent" />
                    <span>contact@developer.com</span>
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase text-primary">User_ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Name" {...field} className="bg-black border-primary/30 focus:border-primary font-mono rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase text-secondary">Return_Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Email" {...field} className="bg-black border-secondary/30 focus:border-secondary font-mono rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase text-accent">Payload_Data</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Type message..." {...field} className="bg-black border-accent/30 focus:border-accent font-mono rounded-none min-h-[120px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isPending}
                      className="w-full bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-black font-mono font-bold uppercase tracking-wider rounded-none h-12 transition-all"
                    >
                      {isPending ? "TRANSMITTING..." : "EXECUTE SEND >>"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CyberCard>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center font-mono text-xs text-muted-foreground">
        <p>SYSTEM STATUS: ONLINE | © 2026 DEV_PORTFOLIO.EXE</p>
      </footer>
    </div>
  );
}
