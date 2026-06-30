package de.samirschabel25.support_ticket_classifier_backend.dto;

import java.time.LocalDateTime;

import de.samirschabel25.support_ticket_classifier_backend.model.TicketCategory;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketPriority;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketSentiment;

public record TicketResponse(

                Long id,
                String title,
                String description,
                TicketCategory category,
                TicketPriority priority,
                TicketSentiment sentiment,
                String summary,
                String solution,
                LocalDateTime createdAt

) {
}
