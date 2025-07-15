import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Leaf, 
  Github,
  ExternalLink,
  BookOpen,
  Rocket,
  Users,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";
import workspaceImage from "@/assets/web3-workspace.jpg";

const Index = () => {
  const techStack = [
    { name: "Solidity", icon: Code, description: "Smart contract development" },
    { name: "React", icon: Rocket, description: "Modern frontend framework" },
    { name: "Ethers.js", icon: Database, description: "Ethereum library" },
    { name: "Hardhat", icon: Shield, description: "Development environment" },
    { name: "MetaMask", icon: Zap, description: "Web3 wallet integration" },
    { name: "Node.js", icon: Database, description: "Backend development" },
  ];

  const projectStats = [
    { label: "Smart Contracts", value: "5+", icon: Code },
    { label: "Test Coverage", value: "95%", icon: Shield },
    { label: "Gas Optimized", value: "30%", icon: TrendingUp },
    { label: "CO2 Impact", value: "Tracked", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Web3 Developer Portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                GreenFund dApp
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionizing green financing through blockchain technology. 
              Community-driven loans for sustainable projects powered by Ethereum smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" size="lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  View Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="outline" size="lg" className="hover:bg-muted">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Technical Docs
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="hover:bg-muted">
                <Github className="w-5 h-5 mr-2" />
                View Code
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Project Overview
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive Web3 application demonstrating advanced blockchain development 
              skills and real-world decentralized finance implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Core Functionality</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Decentralized loan disbursement and tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>MetaMask wallet authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Smart contract automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Environmental impact tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Technical Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {projectStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="text-center p-3 bg-background/50 rounded-lg">
                          <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="font-bold text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <img 
                src={workspaceImage} 
                alt="Web3 Development Workspace" 
                className="rounded-lg shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern Web3 technologies and frameworks powering the decentralized application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Icon className="w-8 h-8 text-primary" />
                      <span>{tech.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Explore the Future of Green Finance
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience how blockchain technology can democratize access to sustainable financing 
              and create transparent, community-driven environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Try Interactive Demo
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="outline" size="lg" className="hover:bg-muted">
                  <Code className="w-5 h-5 mr-2" />
                  Read Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
