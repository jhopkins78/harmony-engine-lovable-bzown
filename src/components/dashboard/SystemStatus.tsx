
import { CheckCircle, AlertCircle, Clock, Activity, Database, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const SystemStatus = () => {
  const systemMetrics = [
    {
      title: "Data Processing",
      status: "healthy",
      value: "200 files processed",
      lastUpdate: "2 minutes ago",
      icon: Database
    },
    {
      title: "AI Analysis",
      status: "healthy",
      value: "All models running",
      lastUpdate: "Just now",
      icon: Zap
    },
    {
      title: "Data Sources",
      status: "healthy",
      value: "5/5 connected",
      lastUpdate: "5 minutes ago",
      icon: Activity
    }
  ];

  const criticalAlerts = [
    {
      type: "Low Stock Alert",
      message: "Product X inventory below 10 units",
      priority: "high",
      source: "Sales data analysis",
      time: "15 minutes ago"
    },
    {
      type: "Payment Due",
      message: "Invoice #1247 overdue by 5 days",
      priority: "medium",
      source: "Contract monitoring",
      time: "1 hour ago"
    }
  ];

  const successNotifications = [
    {
      message: "Email campaign increased orders by 12%",
      time: "2 hours ago",
      impact: "+$3,200"
    },
    {
      message: "Customer satisfaction improved to 85%",
      time: "1 day ago",
      impact: "+2% vs last week"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Harmony Engine Status
          </div>
          <Badge className="bg-green-100 text-green-800">All Systems Operational</Badge>
        </CardTitle>
        <p className="text-sm text-gray-600">System health and important alerts</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* System Health */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Activity className="h-4 w-4 mr-2 text-green-500" />
              System Health
            </h3>
            <div className="space-y-3">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <metric.icon className="h-4 w-4 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{metric.title}</p>
                      <p className="text-xs text-gray-600">{metric.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                    <span className="text-xs text-gray-500">{metric.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Processing Status</span>
                <span className="text-sm font-bold text-blue-600">94%</span>
              </div>
              <Progress value={94} className="h-2" />
              <p className="text-xs text-gray-600 mt-1">Currently analyzing customer emails</p>
            </div>
          </div>

          {/* Critical Alerts */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
              Critical Alerts
            </h3>
            <div className="space-y-3">
              {criticalAlerts.map((alert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getPriorityColor(alert.priority)}>
                      {alert.priority} priority
                    </Badge>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{alert.type}</h4>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">Source: {alert.source}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Notifications */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Recent Wins
            </h3>
            <div className="space-y-3">
              {successNotifications.map((notification, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                  <p className="text-sm font-semibold text-green-600">{notification.impact}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
                <div className="text-xs text-gray-500 mt-1">Harmony is working hard for you!</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
