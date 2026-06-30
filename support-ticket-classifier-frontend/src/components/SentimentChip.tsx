import Chip from "@mui/material/Chip";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

interface SentimentChipProps {
  sentiment: string;
}

function SentimentChip({ sentiment }: SentimentChipProps) {
  switch (sentiment) {
    case "POSITIVE":
      return (
        <Chip
          icon={<SentimentSatisfiedAltIcon />}
          label="Positive"
          color="success"
        />
      );

    case "NEUTRAL":
      return <Chip icon={<SentimentNeutralIcon />} label="Neutral" />;

    case "NEGATIVE":
      return (
        <Chip
          icon={<SentimentVeryDissatisfiedIcon />}
          label="Negative"
          color="error"
        />
      );

    default:
      return <Chip label={sentiment} />;
  }
}

export default SentimentChip;
