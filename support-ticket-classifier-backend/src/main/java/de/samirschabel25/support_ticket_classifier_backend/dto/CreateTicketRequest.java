package de.samirschabel25.support_ticket_classifier_backend.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateTicketRequest(

        @NotBlank(message = "Title must not be empty") String title,

        @NotBlank(message = "Description must not be empty") String description

) {
}