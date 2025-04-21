import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border pb-6 max-h-[400px] sm:max-h-[500px]">
      <CardHeader>
        <CardTitle className="font-bold text-base sm:text-lg">Gastos por Categoria</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {expensesPerCategory.map((category => (
            <div key={category.category} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                    <p className="text-sm font-medium">{TRANSACTION_CATEGORY_LABELS[category.category]}</p>
                    <p className="text-sm font-semibold text-right">{category.percentageOfTotal}%</p>
                </div>
                <Progress value={category.percentageOfTotal}/>
            </div>
        )))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;
