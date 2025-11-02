import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Eye } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Followers",
      value: "124.5K",
      change: "+12.5%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Total Likes",
      value: "892.3K",
      change: "+8.2%",
      icon: Heart,
      trend: "up",
    },
    {
      title: "Engagement Rate",
      value: "6.8%",
      change: "+2.4%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Post Reach",
      value: "2.1M",
      change: "+15.7%",
      icon: Eye,
      trend: "up",
    },
  ];

  const chartData = [
    { name: "Mon", value: 4000 },
    { name: "Tue", value: 3000 },
    { name: "Wed", value: 5000 },
    { name: "Thu", value: 4500 },
    { name: "Fri", value: 6000 },
    { name: "Sat", value: 5500 },
    { name: "Sun", value: 7000 },
  ];

  const engagementData = [
    { name: "Week 1", engagement: 4.2 },
    { name: "Week 2", engagement: 5.1 },
    { name: "Week 3", engagement: 4.8 },
    { name: "Week 4", engagement: 6.8 },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your social media performance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-success">
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Engagement Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            AI-Powered Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-1">Best Time to Post</h4>
            <p className="text-sm text-muted-foreground">
              Your audience is most active on weekdays between 6-8 PM. Schedule your posts accordingly for maximum reach.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-1">Trending Hashtags</h4>
            <p className="text-sm text-muted-foreground">
              #TechTrends, #DigitalMarketing, and #ContentCreation are trending in your niche. Consider incorporating them.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-1">Audience Mood</h4>
            <p className="text-sm text-muted-foreground">
              Positive sentiment detected! Your recent content has resonated well. Keep the momentum going with similar themes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
