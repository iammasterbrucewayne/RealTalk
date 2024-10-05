import { time } from "console";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
    <div className="mb-2 grid grid-cols-[auto,1fr,auto] gap-2 items-start bg-gray-900 p-4 snap-start scroll-mt-2">
      <Avatar className="w-10 h-10 mr-3">
        <AvatarImage src={parentChit?.avatar} />
        <AvatarFallback>{parentChit?.user[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center mb-1">
          <h3 className="font-semibold text-sm whitespace-nowrap mr-1 truncate flex-shrink min-w-0">
            {parentChit?.user}
          </h3>
          <a className="text-sm text-blue-500 cursor-pointer truncate flex-shrink min-w-0">
            in <span className="font-semibold">{parentChit?.referenda}</span>
          </a>
          <p className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
            {parentChit?.time}
          </p>
        </div>
        <p className="text-sm pt-2">{parentChit?.content}</p>
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
