import { Card, CardContent, Grid, Typography } from "@mui/material";
import type { TicketResponse } from "../types/Ticket";

interface DashboardStatsProps {
  tickets: TicketResponse[];
}

function DashboardStats({ tickets }: DashboardStatsProps) {
  const totalTickets = tickets.length;

  const highPriorityTickets = tickets.filter(
    (ticket) => ticket.priority === "HIGH" || ticket.priority === "CRITICAL",
  ).length;

  const negativeTickets = tickets.filter(
    (ticket) => ticket.sentiment === "NEGATIVE",
  ).length;

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Gesamt</Typography>

            <Typography variant="h4">{totalTickets}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Hohe Priorität</Typography>

            <Typography variant="h4">{highPriorityTickets}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Negative Stimmung</Typography>

            <Typography variant="h4">{negativeTickets}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DashboardStats;
