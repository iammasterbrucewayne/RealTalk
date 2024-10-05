import {
  ChartNoAxesColumnIncreasing,
  Heart,
  Repeat,
  Share,
} from "lucide-react";

const liked = {
  fill: "rgb(239 68 68)",
  stroke: "rgb(239 68 68)",
};

const ChitActions = () => (
  <div className="flex gap-4 border-2 bg-gray-800 border-slate-950 rounded-full py-2 px-4 items-center">
    <div className="flex items-center gap-1">
      <Heart className="h-4 w-4" />
      <span className="text-xs">0</span>
    </div>
    <div className="flex items-center gap-1">
      <Repeat className="h-4 w-4" />
      <span className="text-xs">0</span>
    </div>
    <div className="flex items-center gap-1">
      <ChartNoAxesColumnIncreasing className="h-4 w-4" />
      <span className="text-xs">0</span>
    </div>
    <Share className="h-4 w-4" />
  </div>
);

export { ChitActions };
