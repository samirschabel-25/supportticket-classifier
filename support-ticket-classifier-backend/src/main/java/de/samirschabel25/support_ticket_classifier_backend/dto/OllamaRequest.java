package de.samirschabel25.support_ticket_classifier_backend.dto;

public record OllamaRequest(String model,
        String prompt,
        boolean stream) {
}
