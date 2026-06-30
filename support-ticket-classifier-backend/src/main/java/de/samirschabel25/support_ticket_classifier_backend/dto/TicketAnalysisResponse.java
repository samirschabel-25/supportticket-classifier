package de.samirschabel25.support_ticket_classifier_backend.dto;

public record TicketAnalysisResponse(String category,
        String priority,
        String sentiment,
        String summary, String solution) {
    
}
