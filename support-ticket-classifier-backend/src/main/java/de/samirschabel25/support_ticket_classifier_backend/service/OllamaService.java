package de.samirschabel25.support_ticket_classifier_backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.samirschabel25.support_ticket_classifier_backend.dto.OllamaRequest;
import de.samirschabel25.support_ticket_classifier_backend.dto.OllamaResponse;
import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OllamaService {

    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    public String ask(String prompt) {

        OllamaRequest request = new OllamaRequest(
                "gemma3:4b",
                prompt,
                false);

        OllamaResponse response = restClient.post()
                .uri("http://localhost:11434/api/generate")
                .body(request)
                .retrieve()
                .body(OllamaResponse.class);

        return response.response();
    }

    public TicketAnalysisResponse analyzeTicket(
            String title,
            String description) throws Exception {

        String prompt = """
                You are a support ticket classifier.

                Analyze the ticket and return ONLY valid JSON.

                Allowed categories:
                LOGIN_PROBLEM
                PAYMENT_PROBLEM
                TECHNICAL_ERROR
                ACCOUNT_MANAGEMENT
                FEATURE_REQUEST
                OTHER

                Allowed priorities:
                LOW
                MEDIUM
                HIGH
                CRITICAL

                Allowed sentiments:
                POSITIVE
                NEUTRAL
                NEGATIVE

                Ticket title:
                %s

                Ticket description:
                %s

                Return ONLY this JSON format:

                {
                  "category": "...",
                  "priority": "...",
                  "sentiment": "...",
                  "summary": "..."
                }
                """.formatted(title, description);

        String json = ask(prompt);

        return objectMapper.readValue(
                json,
                TicketAnalysisResponse.class);
    }

}
