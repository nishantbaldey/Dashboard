import { Card } from "@/components/ui/card";
import { Trophy, Target, CheckCircle } from "lucide-react";

interface StatMetricsProps {
  scores: {
    rank: number;
    percentile: number;
    correctAnswers: number;
    totalQuestions: number;
  };
}

export default function StatMetrics({ scores }: StatMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <div>
            <div className="text-2xl font-bold text-black">{scores.rank}</div>
            <div className="text-sm text-black">YOUR RANK</div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Target className="w-8 h-8 text-blue-500" />
          <div>
            <div className="text-2xl font-bold text-black">{scores.percentile}%</div>
            <div className="text-sm text-black">PERCENTILE</div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <div className="text-2xl font-bold text-black">{scores.correctAnswers}/{scores.totalQuestions}</div>
            <div className="text-sm text-black">CORRECT ANSWERS</div>
          </div>
        </div>
      </Card>
    </div>
  );
}