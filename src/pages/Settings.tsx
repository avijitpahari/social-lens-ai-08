import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and account settings
        </p>
      </div>

      {/* Appearance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how The Social Lens looks on your device
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="theme" className="flex flex-col space-y-1">
              <span className="font-medium">Theme</span>
              <span className="text-sm text-muted-foreground">
                Select your preferred theme
              </span>
            </Label>
            <div className="flex items-center gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
              <span className="font-medium">Email Notifications</span>
              <span className="text-sm text-muted-foreground">
                Receive updates via email
              </span>
            </Label>
            <Switch id="email-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
              <span className="font-medium">Push Notifications</span>
              <span className="text-sm text-muted-foreground">
                Get real-time alerts
              </span>
            </Label>
            <Switch id="push-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="weekly-report" className="flex flex-col space-y-1">
              <span className="font-medium">Weekly Reports</span>
              <span className="text-sm text-muted-foreground">
                Receive weekly performance summaries
              </span>
            </Label>
            <Switch id="weekly-report" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Account */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Manage your account settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor" className="flex flex-col space-y-1">
              <span className="font-medium">Two-Factor Authentication</span>
              <span className="text-sm text-muted-foreground">
                Add an extra layer of security
              </span>
            </Label>
            <Switch id="two-factor" />
          </div>

          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Export Data
            </Button>
            <Button
              variant="destructive"
              className="w-full justify-start"
              onClick={() => toast.error("Account deletion requires confirmation")}
            >
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
