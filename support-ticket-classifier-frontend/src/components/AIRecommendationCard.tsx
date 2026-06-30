import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Stack,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import type { TicketResponse } from "../types/Ticket";
import PriorityChip from "./PriorityChip";
import SentimentChip from "./SentimentChip";

interface Props {
  ticket: TicketResponse | null;
}

function AIRecommendationCard({ ticket }: Props) {
  if (!ticket) {
    return null;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ticket.solution);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          🤖 KI-Ergebnis
        </Typography>

        <Stack spacing={2}>
          <div>
            <Typography variant="subtitle2">Kategorie</Typography>

            <Typography>{ticket.category}</Typography>
          </div>

          <div>
            <Typography variant="subtitle2">Priorität</Typography>

            <PriorityChip priority={ticket.priority} />
          </div>

          <div>
            <Typography variant="subtitle2">Stimmung</Typography>

            <SentimentChip sentiment={ticket.sentiment} />
          </div>

          <Divider />

          <div>
            <Typography variant="subtitle2">Zusammenfassung</Typography>

            <Typography>{ticket.summary}</Typography>
          </div>

          <Divider />

          <div>
            <Typography variant="subtitle2">💡 Lösungsvorschlag</Typography>

            <Typography>{ticket.solution}</Typography>
          </div>

          <Button
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            onClick={handleCopy}
          >
            Lösung kopieren
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AIRecommendationCard;
