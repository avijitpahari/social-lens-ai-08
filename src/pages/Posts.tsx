import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Plus } from "lucide-react";
import { toast } from "sonner";

const Posts = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      platform: "Instagram",
      likes: 12500,
      comments: 342,
      shares: 89,
      date: "2 days ago",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      platform: "Twitter",
      likes: 8900,
      comments: 234,
      shares: 156,
      date: "3 days ago",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      platform: "Instagram",
      likes: 15600,
      comments: 445,
      shares: 201,
      date: "5 days ago",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      platform: "YouTube",
      likes: 23400,
      comments: 789,
      shares: 456,
      date: "1 week ago",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      platform: "Instagram",
      likes: 18700,
      comments: 567,
      shares: 234,
      date: "1 week ago",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      platform: "Twitter",
      likes: 11200,
      comments: 298,
      shares: 134,
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Posts</h1>
          <p className="text-muted-foreground">
            Manage and analyze your social media posts
          </p>
        </div>
        
        <Button onClick={() => toast.success("Add post feature coming soon!")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Post
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 left-2">
                <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {post.platform}
                </span>
              </div>
            </div>
            
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-medium">{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  <span className="font-medium">{post.comments.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Share2 className="h-4 w-4 text-success" />
                  <span className="font-medium">{post.shares.toLocaleString()}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" size="sm">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
