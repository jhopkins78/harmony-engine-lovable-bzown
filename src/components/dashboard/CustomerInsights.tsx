
import { Users, AlertTriangle, TrendingUp, Heart, MessageSquare, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const CustomerInsights = () => {
  const customerConcerns = [
    { concern: "Pricing", percentage: 30, mentions: 47 },
    { concern: "Shipping delays", percentage: 25, mentions: 39 },
    { concern: "Product quality", percentage: 20, mentions: 31 },
    { concern: "Customer service", percentage: 15, mentions: 23 },
    { concern: "Website issues", percentage: 10, mentions: 16 }
  ];

  const riskAlerts = [
    {
      type: "Contract Risk",
      description: "Supplier Y has high penalty clauses",
      severity: "high",
      potential_impact: "$12,000"
    },
    {
      type: "Customer Churn",
      description: "15 customers showing churn signals",
      severity: "medium",
      potential_impact: "$8,500"
    },
    {
      type: "Payment Delay",
      description: "3 contracts show delayed payment terms",
      severity: "low",
      potential_impact: "$3,200"
    }
  ];

  const positiveNews = [
    {
      title: "Loyal customers increased by 15%",
      impact: "Higher lifetime value",
      icon: Heart
    },
    {
      title: "5-star reviews up 22%",
      impact: "Better brand reputation",
      icon: TrendingUp
    },
    {
      title: "Customer referrals doubled",
      impact: "Lower acquisition costs",
      icon: Users
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full bg-white shadow-lg border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          Customer & Risk Insights
        </CardTitle>
        <p className="text-sm text-gray-600">What customers are saying and potential risks</p>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Customer Concerns */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Top Customer Concerns
          </h3>
          <div className="space-y-2">
            {customerConcerns.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.concern}</span>
                    <span className="text-xs text-gray-500">{item.mentions} mentions</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Alerts */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
            Risk Alerts
          </h3>
          <div className="space-y-2">
            {riskAlerts.map((risk, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge className={getSeverityColor(risk.severity)}>
                    {risk.severity} risk
                  </Badge>
                  <span className="text-sm font-medium text-gray-900">{risk.potential_impact}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{risk.type}</p>
                <p className="text-xs text-gray-600">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Positive Trends */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
            Good News
          </h3>
          <div className="space-y-2">
            {positiveNews.map((news, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <news.icon className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900">{news.title}</span>
                </div>
                <p className="text-xs text-green-700">{news.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Segmentation */}
        <div className="bg-gray-50 rounded-lg p-3">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Customer Segments
          </h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-blue-600">67%</div>
              <div className="text-xs text-gray-600">Repeat Customers</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">33%</div>
              <div className="text-xs text-gray-600">New Customers</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
