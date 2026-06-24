package de.samirschabel25.support_ticket_classifier_backend.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;
import de.samirschabel25.support_ticket_classifier_backend.repository.TicketRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final OllamaService ollamaService;

    public Ticket createTicket(Ticket ticket) throws Exception {

        TicketAnalysisResponse analysis = ollamaService.analyzeTicket(
                ticket.getTitle(),
                ticket.getDescription());

        ticket.setCategory(analysis.category());
        ticket.setPriority(analysis.priority());
        ticket.setSentiment(analysis.sentiment());
        ticket.setSummary(analysis.summary());

        ticket.setCreatedAt(LocalDateTime.now());

        return ticketRepository.save(ticket);
    }

}
