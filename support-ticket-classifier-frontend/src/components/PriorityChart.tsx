import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, Typography } from "@mui/material";

import type { TicketResponse } from "../types/Ticket";

interface Props {
  tickets: TicketResponse[];
}

function PriorityChart({ tickets }: Props) {
  const data = [
    {
      priority: "LOW",
      count: tickets.filter((t) => t.priority === "LOW").length,
    },
    {
      priority: "MEDIUM",
      count: tickets.filter((t) => t.priority === "MEDIUM").length,
    },
    {
      priority: "HIGH",
      count: tickets.filter((t) => t.priority === "HIGH").length,
    },
    {
      priority: "CRITICAL",
      count: tickets.filter((t) => t.priority === "CRITICAL").length,
    },
  ];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Tickets nach Priorität
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="priority" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default PriorityChart;
