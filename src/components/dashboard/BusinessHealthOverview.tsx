
import { TrendingUp, TrendingDown, Users, DollarSign, Star, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const BusinessHealthOverview = () => {
  const kpis = [
    {
      title: "Monthly Revenue",
      value: "$47,850",
      change: "+5.2%",
      positive: true,
      icon: DollarSign,
      description: "Up from last month"
    },
    {
      title: "Customer Satisfaction",
      value: "85%",
      change: "+2%",
      positive: true,
      icon: Star,
      description: "Based on recent feedback"
    },
    {
      title: "Active Customers",
      value: "1,247",
      change: "+12%",
      positive: true,
      icon: Users,
      description: "New customers this month"
    },
    {
      title: "Issues Reported",
      value: "23",
      change: "+8",
      positive: false,
      icon: AlertCircle,
      description: "Mostly shipping delays"
    }
  ];

  return (
    <Card className="h-full bg-white shadow-lg border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          Business Health Overview
        </CardTitle>
        <p className="text-sm text-gray-600">Your business is performing well this month</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className={`h-5 w-5 ${kpi.positive ? 'text-green-600' : 'text-red-600'}`} />
                <div className={`flex items-center text-sm font-medium ${kpi.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.positive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {kpi.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <div className="text-sm text-gray-600">{kpi.title}</div>
              <div className="text-xs text-gray-500 mt-1">{kpi.description}</div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">🤖 Harmony Engine Insights</h3>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">Customers love Product X - mentioned positively in 78% of emails</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">Shipping delays causing 40% of recent complaints</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">Weekend sales performance up 15% vs weekdays</p>
            </div>
          </div>
        </div>

        {/* Overall Health Score */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Business Health</span>
            <span className="text-2xl font-bold text-green-600">82/100</span>
          </div>
          <Progress value={82} className="h-3 mb-2" />
          <p className="text-xs text-gray-600">Strong performance with room for improvement in customer service</p>
        </div>
      </CardContent>
    </Card>
  );
};
