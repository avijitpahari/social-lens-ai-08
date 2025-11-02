import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account and connected platforms
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-foreground">John Doe</h3>
                <p className="text-sm text-muted-foreground">Content Creator</p>
              </div>
              <Button variant="outline" className="w-full">
                Change Photo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="Content creator passionate about technology and digital marketing. Helping brands grow their online presence."
              />
            </div>

            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Connected Accounts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Instagram</h4>
                <p className="text-sm text-muted-foreground">@johndoe • 124.5K followers</p>
              </div>
            </div>
            <Button variant="outline">Reconnect</Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Twitter</h4>
                <p className="text-sm text-muted-foreground">@johndoe • 89.2K followers</p>
              </div>
            </div>
            <Button variant="outline">Reconnect</Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">YouTube</h4>
                <p className="text-sm text-muted-foreground">@johndoe • 256K subscribers</p>
              </div>
            </div>
            <Button variant="outline">Reconnect</Button>
          </div>

          <Button variant="outline" className="w-full">
            + Connect New Platform
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
