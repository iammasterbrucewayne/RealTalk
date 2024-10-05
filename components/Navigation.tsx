import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ArrowUpRight, Mic, Bell, User, Home, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const replyingTo = false && {
    id: 3,
    parentId: null,
    user: "Brian Norgard",
    content:
      "I'm of the belief that generative AI is going to usher in the most creative time in human history. That's because all we'll have left is taste.",
    time: "8h",
    avatar: "/placeholder-user.jpg",
  };
  const isRecording = false;
  const startRecording = () => console.log("started");
  const stopRecording = () => console.log("stopped");

  return (
    <div className="flex justify-around items-end bg-background fixed bottom-0 w-full max-w-md pb-2 text-gray-500">
      <Button variant="ghost" size="icon" className="text-white">
        <Home className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
      </Button>
      <div className="w-10 h-10 mb-1 flex items-end justify-center">
        {replyingTo ? (
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            className="rounded-full p-1 absolute -top-6 border-4 border-background"
            onClick={isRecording ? stopRecording : startRecording}
          >
            <Avatar className="w-10 h-10">
              <AvatarImage src={replyingTo.avatar} />
              <AvatarFallback>{replyingTo.user[0]}</AvatarFallback>
            </Avatar>
            <ArrowUpRight className="w-4 h-4 absolute bottom-0 left-0 bg-primary text-primary-foreground rounded-full p-1" />
          </Button>
        ) : (
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            className="rounded-full w-16 h-16 absolute -top-4 border-8 border-background"
            onClick={isRecording ? stopRecording : startRecording}
          >
            <Mic className="h-5 w-5" />
          </Button>
        )}
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
};

export { Navigation };
