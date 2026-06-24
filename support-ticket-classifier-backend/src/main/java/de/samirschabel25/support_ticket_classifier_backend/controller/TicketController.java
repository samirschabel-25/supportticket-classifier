package de.samirschabel25.support_ticket_classifier_backend.controller;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;
import de.samirschabel25.support_ticket_classifier_backend.service.OllamaService;
import de.samirschabel25.support_ticket_classifier_backend.service.TicketService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;
    private final OllamaService ollamaService;

    @PostMapping
    public Ticket createTicket(
            @RequestBody Ticket ticket) throws Exception {

        return ticketService.createTicket(ticket);
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

}
