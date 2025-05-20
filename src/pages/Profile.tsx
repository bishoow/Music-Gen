
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Music, Play, Download, Settings, Plus, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("tracks");
  
  // Mock data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatarUrl: "",
    plan: "Pro",
    tracksCreated: 24,
    joined: "January 2025",
  };
  
  const userTracks = [
    {
      id: 1,
      title: "Ambient Dreams",
      genre: "Ambient",
      duration: "2:45",
      created: "2 days ago",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Electric Sunset",
      genre: "Electronic",
      duration: "3:12",
      created: "1 week ago",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Jazz Impromptu",
      genre: "Jazz",
      duration: "4:05",
      created: "2 weeks ago",
      imageUrl: "",
    },
    {
      id: 4,
      title: "Rock Anthem",
      genre: "Rock",
      duration: "3:30",
      created: "3 weeks ago",
      imageUrl: "",
    }
  ];
  
  const handlePlayTrack = (trackId: number) => {
    toast({
      title: "Playing track",
      description: `Now playing track #${trackId}`,
    });
  };
  
  const handleDownloadTrack = (trackId: number) => {
    toast({
      title: "Downloading",
      description: `Track #${trackId} is being downloaded`,
    });
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
        
        {/* Tabs */}
        <Tabs defaultValue="tracks" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 max-w-md">
            <TabsTrigger value="tracks">My Tracks</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          {/* Tracks Tab */}
          <TabsContent value="tracks" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">My Tracks</h2>
              <Button className="bg-music-purple hover:bg-music-purple/90">
                <Plus className="h-4 w-4 mr-2" /> Create New Track
              </Button>
            </div>
            
            {userTracks.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {userTracks.map((track) => (
                  <Card key={track.id} className="overflow-hidden border-border/50 transition-all hover:shadow-md">
                    <div className="h-36 bg-gradient-to-br from-music-purple/20 to-music-blue/20 flex items-center justify-center">
                      <Music className="h-10 w-10 text-music-purple opacity-50" />
                    </div>
                    
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{track.genre}</span>
                        <span>{track.duration}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handlePlayTrack(track.id)}
                        >
                          <Play className="h-4 w-4 mr-1" /> Play
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleDownloadTrack(track.id)}
                        >
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-10 text-center">
                  <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No tracks yet</h3>
                  <p className="text-muted-foreground mb-6">You haven't created any tracks yet.</p>
                  <Button className="bg-music-purple hover:bg-music-purple/90">
                    <Plus className="h-4 w-4 mr-2" /> Create Your First Track
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardContent className="py-10 text-center">
                <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No favorite tracks yet</h3>
                <p className="text-muted-foreground mb-6">You haven't added any tracks to your favorites.</p>
                <Button variant="outline">
                  Explore Tracks
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Profile Information</h3>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-sm text-muted-foreground">Name</div>
                        <div className="col-span-2">{userData.name}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="col-span-2">{userData.email}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="text-sm">
                        <User className="h-4 w-4 mr-2" /> Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Subscription</h3>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-sm text-muted-foreground">Current Plan</div>
                        <div className="col-span-2">
                          <span className="font-medium text-music-purple">{userData.plan}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-sm text-muted-foreground">Billing Cycle</div>
                        <div className="col-span-2">Monthly</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="text-sm">
                        Manage Subscription
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Manage your password and security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" size="sm" className="text-sm">
                    Change Password
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    Two-Factor Authentication
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" size="sm">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
