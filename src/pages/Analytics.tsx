import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Analytics = () => {
  const engagementData = [
    { date: "Jan 1", likes: 4000, comments: 2400, shares: 800 },
    { date: "Jan 8", likes: 3000, comments: 1398, shares: 600 },
    { date: "Jan 15", likes: 5000, comments: 3800, shares: 1200 },
    { date: "Jan 22", likes: 4500, comments: 2908, shares: 900 },
    { date: "Jan 29", likes: 6000, comments: 4800, shares: 1500 },
  ];

  const platformData = [
    { name: "Instagram", value: 45, color: "hsl(var(--primary))" },
    { name: "Twitter", value: 30, color: "hsl(var(--accent))" },
    { name: "YouTube", value: 25, color: "hsl(var(--success))" },
  ];

  const reachData = [
    { week: "Week 1", reach: 125000 },
    { week: "Week 2", reach: 142000 },
    { week: "Week 3", reach: 138000 },
    { week: "Week 4", reach: 210000 },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed insights into your social media performance
          </p>
        </div>
        
        <Tabs defaultValue="7days" className="w-auto">
          <TabsList>
            <TabsTrigger value="7days">Last 7 Days</TabsTrigger>
            <TabsTrigger value="30days">Last 30 Days</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Engagement Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Engagement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Bar dataKey="likes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="comments" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="shares" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Platform Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Post Reach */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Post Reach Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reachData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" />
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
                  dataKey="reach"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Average Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">7.2%</p>
            <p className="text-sm text-success mt-2">↑ 1.3% from last period</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Best Performing Post</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">45.2K</p>
            <p className="text-sm text-muted-foreground mt-2">Total interactions</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Audience Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">+15.7%</p>
            <p className="text-sm text-success mt-2">↑ This month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
