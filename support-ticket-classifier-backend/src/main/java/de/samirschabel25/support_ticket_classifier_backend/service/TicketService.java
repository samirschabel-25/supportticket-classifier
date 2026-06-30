package de.samirschabel25.support_ticket_classifier_backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import de.samirschabel25.support_ticket_classifier_backend.dto.CreateTicketRequest;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;
import de.samirschabel25.support_ticket_classifier_backend.mapper.TicketAnalysisMapper;
import de.samirschabel25.support_ticket_classifier_backend.mapper.TicketMapper;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketCategory;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketPriority;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketSentiment;
import de.samirschabel25.support_ticket_classifier_backend.repository.TicketRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TicketService {

        private final TicketRepository ticketRepository;
        private final OllamaService ollamaService;

        public TicketResponse createTicket(CreateTicketRequest request) throws Exception {

                Ticket ticket = TicketMapper.toEntity(request);

                TicketAnalysisResponse analysis = ollamaService.analyzeTicket(
                                ticket.getTitle(),
                                ticket.getDescription());

                TicketAnalysisMapper.applyAnalysis(ticket, analysis);

                ticket.setCreatedAt(LocalDateTime.now());

                Ticket savedTicket = ticketRepository.save(ticket);

                return TicketMapper.toResponse(savedTicket);
        }

        public List<TicketResponse> getAllTickets() {

                return ticketRepository.findAll()
                                .stream()
                                .map(TicketMapper::toResponse)
                                .toList();
        }

}