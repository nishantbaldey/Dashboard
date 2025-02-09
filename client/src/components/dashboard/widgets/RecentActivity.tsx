import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity } from "@/lib/mock-data";

interface RecentActivityProps {
  items: Activity[];
}

export default function RecentActivity({ items }: RecentActivityProps) {
  return (
    <ScrollArea className="h-[300px] px-4">
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className={`w-2 h-2 mt-2 rounded-full bg-[#F59E0B]`} />
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
