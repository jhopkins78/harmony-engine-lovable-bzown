
import { BusinessHealthOverview } from "@/components/dashboard/BusinessHealthOverview";
import { ActionableSteps } from "@/components/dashboard/ActionableSteps";
import { CustomerInsights } from "@/components/dashboard/CustomerInsights";
import { SystemStatus } from "@/components/dashboard/SystemStatus";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
          
          {/* Business Health Overview - Top Center, spans 2 columns */}
          <div className="lg:col-span-2 lg:row-span-2">
            <BusinessHealthOverview />
          </div>
          
          {/* Actionable Next Steps - Left column */}
          <div className="lg:col-span-1 lg:row-span-2">
            <ActionableSteps />
          </div>
          
          {/* Customer and Risk Insights - Right column */}
          <div className="lg:col-span-1 lg:row-span-2">
            <CustomerInsights />
          </div>
          
          {/* System Status - Bottom, spans full width */}
          <div className="lg:col-span-4">
            <SystemStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
