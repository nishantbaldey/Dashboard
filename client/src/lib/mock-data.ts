export interface Activity {
  title: string;
  time: string;
}

export const mockMetrics = [
  { title: "Total Revenue", value: "$12,345", change: 12, trend: "up" as const },
  { title: "Active Users", value: "1,234", change: 8, trend: "up" as const },
  { title: "Conversion Rate", value: "2.4%", change: 3, trend: "down" as const },
  { title: "Avg. Order Value", value: "$89", change: 5, trend: "up" as const },
];

export const mockChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 400 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

export const mockActivity: Activity[] = [
  { title: "New order #1234", time: "2 minutes ago" },
  { title: "Payment received from John", time: "15 minutes ago" },
  { title: "New user registration", time: "1 hour ago" },
  { title: "Server update completed", time: "2 hours ago" },
  { title: "Database backup", time: "4 hours ago" },
];
