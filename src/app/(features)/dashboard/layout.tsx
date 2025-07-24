import { LAYOUT_CONFIG } from "@/lib/config/LayoutConfig";
import { LayoutLogo } from "@/lib/features/dashboard/layout/LayoutLogo";
import { LayoutMenu } from "@/lib/features/dashboard/layout/LayoutMenu";
import { LayoutUserData } from "@/lib/features/dashboard/layout/LayoutUserData";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">

        <div id="menu" 
            style={{ width: LAYOUT_CONFIG.layoutWidth }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
        >
          <LayoutLogo/>
          <LayoutUserData/>
          <LayoutMenu/>
        </div>

        <div className="p-2 w-full to-slate-900">
            {children}
        </div>

      </div>
    </div>
  );
}