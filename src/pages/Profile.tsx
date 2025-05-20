import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Music, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
 // Dummy data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatarUrl: "",
    plan: "Pro",
    tracksCreated: 24,
    joined: "January 2025",
  };
return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="container py-28 px-4 mx-auto">
        {/* User Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userData.avatarUrl} />
              <AvatarFallback className="bg-music-purple text-white text-3xl">
                {userData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-3 text-center md:text-left">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-muted px-3 py-1 rounded-full text-sm">
                  {userData.plan} Plan
                </div>
                <div className="text-muted-foreground text-sm">
                  {userData.tracksCreated} tracks created
                </div>
                <div className="text-muted-foreground text-sm">
                  Member since {userData.joined}
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="flex gap-2">
              <Settings className="h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </div>
        <Card>
<CardHeader>
  <CardTitle>My Music</CardTitle>
</CardHeader>
<CardContent className="py-10 text-center">
  <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
  <h3 className="text-xl font-semibold mb-2">This is a dummy profile page</h3>
  <p className="text-muted-foreground mb-6">
    In a real application, this would show the user's created music tracks, 
    favorites, and account settings.
  </p>
  <Button className="bg-music-purple hover:bg-music-purple/90">
    Create Sample Track
  </Button>
</CardContent>
</Card>
</div>
</div>
);
};

export default Profile