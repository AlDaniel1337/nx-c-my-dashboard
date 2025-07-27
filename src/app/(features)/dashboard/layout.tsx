import Layout from "@/lib/features/dashboard/layout/Layout";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}