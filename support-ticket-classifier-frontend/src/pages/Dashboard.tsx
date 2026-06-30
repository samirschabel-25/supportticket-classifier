import { useEffect, useState } from "react";
import { Container, Typography, TextField, Box } from "@mui/material";

import { getAllTickets } from "../api/ticketApi";
import TicketForm from "../components/TicketForm";
import TicketTable from "../components/TicketTable";
import DashboardStats from "../components/DashboardStats";
import PriorityChart from "../components/PriorityChart";

import type { TicketResponse } from "../types/Ticket";
import AIRecommendationCard from "../components/AIRecommendationCard";

function Dashboard() {
  const [tickets, setTickets] = useState<TicketResponse[]>([]);
  const [search, setSearch] = useState("");

  const [latestAnalysis, setLatestAnalysis] = useState<TicketResponse | null>(
    null,
  );

  const filteredTickets = tickets.filter((ticket) => {
    const value = search.toLowerCase();

    return (
      ticket.title.toLowerCase().includes(value) ||
      ticket.description.toLowerCase().includes(value) ||
      ticket.category?.toLowerCase().includes(value) ||
      ticket.priority?.toLowerCase().includes(value) ||
      ticket.sentiment?.toLowerCase().includes(value)
    );
  });

  const loadTickets = async () => {
    try {
      const data = await getAllTickets();
      setTickets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Box
        sx={{
          mb: 5,
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          color: "white",
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          🤖 AI Support Ticket Classifier
        </Typography>

        <Typography variant="h6">
          Analyze customer support tickets using Artificial Intelligence powered
          by Spring Boot, React and Ollama.
        </Typography>
      </Box>

      <TextField
        label="Tickets durchsuchen"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      <DashboardStats tickets={tickets} />

      <PriorityChart tickets={tickets} />

      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Analysiere Support-Tickets automatisch mit KI.
      </Typography>

      <TicketForm
        onTicketCreated={loadTickets}
        onAnalysisCompleted={setLatestAnalysis}
      />

      <AIRecommendationCard ticket={latestAnalysis} />

      <TicketTable tickets={filteredTickets} />
    </Container>
  );
}

export default Dashboard;
