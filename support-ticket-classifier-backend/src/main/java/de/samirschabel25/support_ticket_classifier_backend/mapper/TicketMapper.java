package de.samirschabel25.support_ticket_classifier_backend.mapper;

import de.samirschabel25.support_ticket_classifier_backend.dto.CreateTicketRequest;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;

public final class TicketMapper {

    private TicketMapper() {
    }

    public static Ticket toEntity(CreateTicketRequest request) {

        return Ticket.builder()
                .title(request.title())
                .description(request.description())
                .build();
    }

    public static TicketResponse toResponse(Ticket ticket) {

        return new TicketResponse(
                ticket.getId(),
                ticket.getTitle(),
                ticket.getDescription(),
                ticket.getCategory(),
                ticket.getPriority(),
                ticket.getSentiment(),
                ticket.getSummary(),
                ticket.getSolution(),
                ticket.getCreatedAt());
    }
}