import Chip from "@mui/material/Chip";

interface PriorityChipProps {
  priority: string;
}

function PriorityChip({ priority }: PriorityChipProps) {
  switch (priority) {
    case "LOW":
      return <Chip label="LOW" color="success" />;

    case "MEDIUM":
      return <Chip label="MEDIUM" color="warning" />;

    case "HIGH":
      return <Chip label="HIGH" color="error" />;

    case "CRITICAL":
      return <Chip label="CRITICAL" color="error" variant="filled" />;

    default:
      return <Chip label={priority} />;
  }
}

export default PriorityChip;
