
import { TrendingUp, TrendingDown, Users, DollarSign, Star, AlertCircle, MessageCircle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const BusinessHealthOverview = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Hi! I'm your AI insight agent. Ask me anything about your business data, market conditions, or how to interpret these metrics. I have access to all your business intelligence!"
    }
  ]);

  const handleSendQuestion = () => {
    if (!question.trim()) return;
    
    // Add user message
    const userMessage = { type: "user", content: question };
    
    // Simulate AI response based on the question
    let aiResponse = "";
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes("revenue") || lowerQ.includes("sales")) {
      aiResponse = "Your revenue is up 5.2% this month! This growth is driven by strong weekend performance (+15% vs weekdays) and positive customer sentiment around Product X. Consider capitalizing on weekend marketing campaigns.";
    } else if (lowerQ.includes("shipping") || lowerQ.includes("delay")) {
      aiResponse = "Shipping delays are your biggest pain point right now, causing 40% of complaints. I recommend reaching out to alternative logistics partners and setting up proactive customer communication about delays.";
    } else if (lowerQ.includes("customer") || lowerQ.includes("satisfaction")) {
      aiResponse = "Customer satisfaction is at 85% - solid but improvable! The main issues are shipping delays. Your customers love Product X (78% positive mentions). Focus on logistics improvements for quick wins.";
    } else if (lowerQ.includes("market") || lowerQ.includes("competition")) {
      aiResponse = "Based on your data patterns, you're performing well in your market segment. Weekend sales outperforming weekdays suggests strong consumer discretionary spending. Consider weekend-focused promotions.";
    } else {
      aiResponse = "Based on your current business health score of 82/100, you're in a strong position. Your main opportunities are in customer service improvements, particularly around shipping communications. Would you like specific recommendations?";
    }
    
    const aiMessage = { type: "ai", content: aiResponse };
    
    setMessages(prev => [...prev, userMessage, aiMessage]);
    setQuestion("");
  };

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

        {/* Interactive Insight Agent */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center mb-3">
            <MessageCircle className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="font-semibold text-gray-900">AI Insight Agent</h3>
          </div>
          
          {/* Chat Messages */}
          <div className="bg-white rounded-lg p-3 mb-3 max-h-32 overflow-y-auto space-y-2">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="flex space-x-2">
            <Textarea
              placeholder="Ask about your data, market conditions, or business insights..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 min-h-[40px] max-h-[40px] text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendQuestion();
                }
              }}
            />
            <Button 
              onClick={handleSendQuestion}
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!question.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">💡 Try asking: "Why is revenue up?" or "How can I improve customer satisfaction?"</p>
        </div>
      </CardContent>
    </Card>
  );
};
