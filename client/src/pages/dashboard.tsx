import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiHtml5 } from "react-icons/si";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import StatMetrics from "@/components/dashboard/widgets/StatMetrics";
import ComparisonGraph from "@/components/dashboard/widgets/ComparisonGraph";
import SyllabusAnalysis from "@/components/dashboard/widgets/SyllabusAnalysis";
import QuestionAnalysis from "@/components/dashboard/widgets/QuestionAnalysis";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Dashboard() {
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
    totalQuestions: 15
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleUpdateScores = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newScores = {
      rank: parseInt(formData.get('rank') as string) || scores.rank,
      percentile: parseInt(formData.get('percentile') as string) || scores.percentile,
      correctAnswers: parseInt(formData.get('correctAnswers') as string) || scores.correctAnswers,
      totalQuestions: scores.totalQuestions
    };
    setScores(newScores);
    setDialogOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-base font-medium text-black">DashBoard</h2>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm border-black ">
            <div className="flex items-center gap-4">
              <SiHtml5 className="w-12 h-12 text-orange-600" />
              <div>
                <h2 className="text-lg font-medium text-black">Hyper Text Markup Language</h2>
                <p className="text-sm text-black">
                  Questions: {scores.totalQuestions} | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-blue-700 hover:bg-blue-800 ">
                  Update
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-black">Update scores</h2>
                  <SiHtml5 className="w-12 h-12 text-orange-600" />
                </div>
                <form onSubmit={handleUpdateScores} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 text-black">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-800  text-black flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="rank" className="block text-sm font-medium mb-1  text-black">
                          Update your Rank
                        </label>
                        <Input id="rank" name="rank" type="number" defaultValue={scores.rank} className="w-full text-black" />
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-800  text-black flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="percentile" className="block text-sm font-medium mb-1  text-black">
                          Update your Percentile
                        </label>
                        <Input 
                          id="percentile" 
                          name="percentile" 
                          type="number" 
                          defaultValue={scores.percentile}
                          min="0"
                          max="100"
                          className="w-full text-black" 
                        />
                        <p className="text-xs text-red-500 mt-1">
                          required | precentile 0-100
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-800  text-black flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-grow">
                        <label htmlFor="correctAnswers" className="block text-sm   font-medium mb-1  text-black">
                          Current Score (out of 15)
                        </label>
                        <Input 
                          id="correctAnswers" 
                          name="correctAnswers" 
                          type="number"
                          min="0"
                          max="15"
                          defaultValue={scores.correctAnswers} 
                          className="w-full text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-6 text-black">
                    <DialogClose asChild>
                      <Button variant="outline" type="button">
                        cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" className="bg-blue-800 hover:bg-blue-900">
                      save 
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <StatMetrics scores={scores} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-black">Comparison Graph</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ComparisonGraph percentile={scores.percentile} />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-black">Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <SyllabusAnalysis />
                </CardContent>
              </Card>

              <Card className="p-6 ">
                <CardContent className="px-0 text-black">
                  <QuestionAnalysis scores={scores} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}