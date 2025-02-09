import { Progress } from "@/components/ui/progress";

interface QuestionAnalysisProps {
  scores: {
    correctAnswers: number;
    totalQuestions: number;
  };
}

export default function QuestionAnalysis({ scores }: QuestionAnalysisProps) {
  const percentage = (scores.correctAnswers / scores.totalQuestions) * 100;

  return (
    <div className="space-y-4 bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Question Analysis</h3>
        <span className="text-blue-600 font-medium">{scores.correctAnswers}/{scores.totalQuestions}</span>
      </div>
      
      <p className="text-sm text-black">
        <b>You scored {scores.correctAnswers} question correct out of {scores.totalQuestions}.</b> However it still needs some improvements
      </p>

      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-black"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-blue-600"
            strokeWidth="10"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (251.2 * percentage) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{Math.round(percentage)}%</span>
        </div>
      </div>
    </div>
  );
}
