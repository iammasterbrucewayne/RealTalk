import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ChitActions } from "./ChitActions";
import { time } from "console";

interface Chit {
  id: number;
  parentId: number | null;
  user: string;
  content: string;
  referenda: string;
  time: string;
  audioUrl?: string;
  avatar: string;
}

const ChitThread = ({
  chits,
  parentId,
}: {
  chits: Chit[];
  parentId: number | null;
}) => {
  const threadChits = chits.filter((chit) => chit.parentId === parentId);
  const parentChit = chits.find((chit) => chit.id === parentId);

  return (
    <div className="mb-2 grid grid-cols-[auto,1fr,auto] gap-2 items-start bg-slate-950 px-2 py-4 snap-start scroll-mt-2">
      <Button variant="default" size="icon" className="rounded-full relative">
        <Avatar className="w-10 h-10">
          <AvatarImage src={parentChit?.avatar} />
          <AvatarFallback>{parentChit?.user[0]}</AvatarFallback>
        </Avatar>
        <Plus
          className="w-4 h-4 absolute -bottom-1 -right-1 text-white bg-blue-500 text-primary-foreground rounded-full p-1"
          strokeWidth={4}
        />
      </Button>
      <div className="flex flex-col bg-gray-800 p-4 pb-8 rounded-2xl relative min-w-0">
        <div className="flex items-center mb-1 overflow-hidden">
          <h3 className="font-medium text-sm truncate mr-1 min-w-0">
            {parentChit?.user}
          </h3>
          <a className="max-w-[50%] text-sm text-blue-500 cursor-pointer truncate mr-1 min-w-0">
            in <span className="font-medium">{parentChit?.referenda}</span>
          </a>
          <p className="text-xs text-muted-foreground whitespace-nowrap ml-auto">
            {parentChit?.time}
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="text-sm pt-2 break-words">{parentChit?.content}</p>
        </div>
        <div className="absolute -right-2 -bottom-2">
          <ChitActions />
        </div>
      </div>
      {/* <div className="p-4">
        {threadChits.map((chit, index) => (
          <div
            key={chit.id}
            className={`row-span-1 ${index > 0 ? "mt-4 pt-4" : ""}`}
          >
            <Avatar className="w-10 h-10 mr-3">
              <AvatarImage src={chit.avatar} />
              <AvatarFallback>{chit.user[0]}</AvatarFallback>
            </Avatar>
            <div className={`flex-1 max-w-[80%]`}>
              <div className={`p-3 rounded-lg bg-slate-900`}>
                <div
                  className={`flex items-center mb-2 ${index === 0 ? "" : "justify-end"}`}
                >
                  <h3 className="font-semibold text-sm truncate max-w-[50%] w-fit">
                    {chit.user}
                  </h3>
                  <a className="truncate overflow-hidden ml-2 text-blue-600 cursor-pointer w-auto max-w-[50%]">
                    in <span className="font-semibold">{chit.referenda}</span>
                  </a>
                  <p className="text-xs text-muted-foreground ml-2">
                    {chit.time}
                  </p>
                </div>
                <p className="text-sm">{chit.content}</p>
                {chit.audioUrl && (
                  <audio controls src={chit.audioUrl} className="w-full mt-2" />
                )}
              </div>
            </div>
            {index > 0 && (
              <Avatar className="w-10 h-10 ml-3">
                <AvatarImage src={chit.avatar} />
                <AvatarFallback>{chit.user[0]}</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export { ChitThread };
