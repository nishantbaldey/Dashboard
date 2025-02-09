import { Progress } from "@/components/ui/progress";

const syllabusData = [
  { topic: "HTML Tools, Forms, History", progress: 80 },
  { topic: "Tags & References in HTML", progress: 60 },
  { topic: "Tables & References in HTML", progress: 24 },
  { topic: "Tables & CSS Basics", progress: 96 },
];

export default function SyllabusAnalysis() {
  return (
    <div className="space-y-6 text-black">
      {syllabusData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{item.topic}</span>
            <span className="text-blue-600">{item.progress}%</span>
          </div>
          <Progress value={item.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
}
