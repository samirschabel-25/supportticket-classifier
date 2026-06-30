import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

import { createTicket } from "../api/ticketApi";
import type { TicketResponse } from "../types/Ticket";

interface TicketFormProps {
  onTicketCreated: () => void;
  onAnalysisCompleted: (ticket: TicketResponse) => void;
}

function TicketForm({
  onTicketCreated,
  onAnalysisCompleted,
}: TicketFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description) {
      return;
    }

    try {
      setLoading(true);

      const createdTicket = await createTicket({
        title,
        description,
      });

      setTitle("");
      setDescription("");

      onAnalysisCompleted(createdTicket);

      onTicketCreated();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            label="Beschreibung"
            multiline
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />

          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? "KI analysiert..." : "Ticket analysieren"}
          </Button>
        </Box>
      </Typography>
    </Paper>
  );
}

export default TicketForm;
