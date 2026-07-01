package de.samirschabel25.support_ticket_classifier_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

import de.samirschabel25.support_ticket_classifier_backend.model.TicketCategory;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketPriority;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketSentiment;

@Entity
@Table(name = "tickets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private TicketCategory category;

    @Enumerated(EnumType.STRING)
    private TicketPriority priority;

    @Enumerated(EnumType.STRING)
    private TicketSentiment sentiment;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String solution;

    private LocalDateTime createdAt;
}
