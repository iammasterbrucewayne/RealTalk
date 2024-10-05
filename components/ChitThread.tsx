import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ChitActions } from "./ChitActions";
import { Fragment } from "react";

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
    <Fragment>
      <div className="mb-16 grid grid-cols-[auto,1fr,auto] grid-rows-[auto,1fr,auto] gap-2">
        <Button
          variant="default"
          size="icon"
          className="rounded-full relative mb-2 row-start-1 col-start-1 w-12 h-12"
        >
          <Avatar className="w-12 h-12">
            <AvatarImage src={parentChit?.avatar} />
            <AvatarFallback>{parentChit?.user[0]}</AvatarFallback>
          </Avatar>
          <Plus
            className="w-4 h-4 absolute -bottom-1 -right-1 text-white bg-blue-500 text-primary-foreground rounded-full p-1"
            strokeWidth={4}
          />
        </Button>
        <div className="col-span-2 flex flex-col bg-gray-800 p-4 pb-8 rounded-2xl relative min-w-0 snap-start scroll-mt-2">
          <div className="flex items-center mb-1 overflow-hidden">
            <h3 className="font-medium text-sm truncate mr-1 min-w-0">
              {parentChit?.user}
            </h3>
            <a className="max-w-[50%] text-sm text-blue-500 cursor-pointer truncate mr-1 min-w-0">
              in <span className="font-medium">{parentChit?.referenda}</span>
            </a>
            <p className="text-xs text-muted-foreground whitespace-nowrap">
              {parentChit?.time}
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm pt-2 break-words">{parentChit?.content}</p>
          </div>
          <div className="absolute right-0 -bottom-6">
            <ChitActions />
          </div>
        </div>

        <div className="flex gap-2 row-start-2 col-start-2 mt-3 mb-5">
          {threadChits.map((chit, index) => (
            <Avatar key={index} className="w-10 h-10">
              <AvatarImage src={chit?.avatar} />
              <AvatarFallback>{chit?.user[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        {/* Child Chit */}
        {threadChits.length > 0 && (
          <Fragment>
            <div className="flex flex-col bg-gray-800 p-4 pb-8 rounded-2xl relative min-w-0 snap-start scroll-mt-2 row-start-3 col-span-1 col-start-2">
              <div className="flex items-center mb-1 overflow-hidden">
                <h3 className="font-medium text-sm truncate mr-1 min-w-0">
                  {threadChits[0]?.user}
                </h3>
                <a className="max-w-[50%] text-sm text-blue-500 cursor-pointer truncate mr-1 min-w-0">
                  in{" "}
                  <span className="font-medium">
                    {threadChits[0]?.referenda}
                  </span>
                </a>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  {threadChits[0]?.time}
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm pt-2 break-words">
                  {threadChits[0]?.content}
                </p>
              </div>
              <div className="absolute left-0 -bottom-6">
                <ChitActions />
              </div>
            </div>
            <Button
              variant="default"
              size="icon"
              className="rounded-full relative col-start-3 row-start-3"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src={threadChits[0]?.avatar} />
                <AvatarFallback>{threadChits[0]?.user[0]}</AvatarFallback>
              </Avatar>
              <Plus
                className="w-4 h-4 absolute -bottom-1 -right-1 text-white bg-blue-500 text-primary-foreground rounded-full p-1"
                strokeWidth={4}
              />
            </Button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export { ChitThread };
