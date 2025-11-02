import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-analytics.jpg";

const Landing = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your social media performance across all platforms in one unified dashboard.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations on best posting times, trending hashtags, and content strategy.",
    },
    {
      icon: Users,
      title: "Audience Analytics",
      description: "Understand your audience demographics, behavior patterns, and engagement trends.",
    },
    {
      icon: Zap,
      title: "Multi-Platform Support",
      description: "Connect Instagram, Twitter, YouTube, and more to analyze all your accounts in one place.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              The Social Lens
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Analyze. Improve. Grow.
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Unlock the power of AI-driven social media analytics. Track performance, 
              understand your audience, and grow your presence across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                <Link to="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful analytics tools designed to help influencers, businesses, 
              and content creators make data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Amplify Your Social Presence?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of influencers and businesses using The Social Lens to grow their audience.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Link to="/login">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 The Social Lens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
