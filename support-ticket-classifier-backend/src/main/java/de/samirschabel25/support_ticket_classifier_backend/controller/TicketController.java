package de.samirschabel25.support_ticket_classifier_backend.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.samirschabel25.support_ticket_classifier_backend.dto.CreateTicketRequest;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;
import de.samirschabel25.support_ticket_classifier_backend.service.OllamaService;
import de.samirschabel25.support_ticket_classifier_backend.service.TicketService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;
    private final OllamaService ollamaService;

    @PostMapping
    public TicketResponse createTicket(
            @Valid @RequestBody CreateTicketRequest request) throws Exception {

        return ticketService.createTicket(request);
    }

    @GetMapping("/test-ai")
    public String testAi() {

        return ollamaService.ask(
                "Respond only with: Ollama connection successful");
    }

    @GetMapping("/analyze-test")
    public TicketAnalysisResponse analyzeTest() throws Exception {

        return ollamaService.analyzeTicket(
                "Login funktioniert nicht",
                "Seit dem letzten Update bekomme ich Fehler 500.");
    }

    @GetMapping
    public List<TicketResponse> getAllTickets() {

        return ticketService.getAllTickets();
    }

}
