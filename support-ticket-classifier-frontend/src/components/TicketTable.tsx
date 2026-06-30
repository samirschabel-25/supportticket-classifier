import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { TicketResponse } from "../types/Ticket";
import PriorityChip from "./PriorityChip";
import SentimentChip from "./SentimentChip";

interface TicketTableProps {
  tickets: TicketResponse[];
}

function TicketTable({ tickets }: TicketTableProps) {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Alle Tickets
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Titel</TableCell>
            <TableCell>Kategorie</TableCell>
            <TableCell>Priorität</TableCell>
            <TableCell>Stimmung</TableCell>
            <TableCell>Zusammenfassung</TableCell>
            <TableCell>Erstellt</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.title}</TableCell>

              <TableCell>{ticket.category}</TableCell>

              <TableCell>
                <PriorityChip priority={ticket.priority} />
              </TableCell>

              <TableCell>
                <SentimentChip sentiment={ticket.sentiment} />
              </TableCell>

              <TableCell>{ticket.summary}</TableCell>

              <TableCell>
                {new Date(ticket.createdAt).toLocaleString("de-DE", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TicketTable;
