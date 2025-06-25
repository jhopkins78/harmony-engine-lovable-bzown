
import { Mail, Phone, AlertTriangle, Target, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ActionableSteps = () => {
  const actions = [
    {
      id: 1,
      title: "Email 50 at-risk customers",
      description: "Send discount offer to prevent churn",
      impact: "Could boost sales by $8,500",
      urgency: "high",
      icon: Mail,
      estimated_time: "5 min",
      action_type: "marketing"
    },
    {
      id: 2,
      title: "Call top 3 unhappy customers",
      description: "Address their shipping concerns directly",
      impact: "Improve satisfaction score",
      urgency: "high",
      icon: Phone,
      estimated_time: "30 min",
      action_type: "service"
    },
    {
      id: 3,
      title: "Review supplier contract",
      description: "Penalty risk detected in Supplier Y agreement",
      impact: "Avoid $12,000 penalty",
      urgency: "medium",
      icon: AlertTriangle,
      estimated_time: "15 min",
      action_type: "operations"
    },
    {
      id: 4,
      title: "Launch weekend promotion",
      description: "Weekend sales trending up 15%",
      impact: "Estimated +$5,200 revenue",
      urgency: "low",
      icon: Target,
      estimated_time: "10 min",
      action_type: "marketing"
    }
  ];

  const completedActions = [
    {
      title: "Sent newsletter to 500 customers",
      impact: "+12% order increase",
      completed_at: "2 hours ago"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getActionTypeIcon = (type: string) => {
    switch (type) {
      case 'marketing': return '📧';
      case 'service': return '📞';
      case 'operations': return '⚙️';
      default: return '📋';
    }
  };

  return (
    <Card className="h-full bg-white shadow-lg border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
          Next Steps
        </CardTitle>
        <p className="text-sm text-gray-600">Recommended actions from Harmony Engine</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Pending Actions */}
        <div className="space-y-3">
          {actions.map((action, index) => (
            <div key={action.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getActionTypeIcon(action.action_type)}</span>
                  <Badge className={getUrgencyColor(action.urgency)}>
                    {action.urgency} priority
                  </Badge>
                </div>
                <span className="text-xs text-gray-500">{action.estimated_time}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{action.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">{action.impact}</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Take Action
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Recently Completed */}
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
            Recently Completed
          </h3>
          {completedActions.map((action, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-green-600">{action.impact}</p>
                </div>
                <span className="text-xs text-gray-500">{action.completed_at}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-xs text-gray-600">Actions Pending</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-xs text-gray-600">Completed This Week</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
