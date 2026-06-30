package de.samirschabel25.support_ticket_classifier_backend.mapper;

import de.samirschabel25.support_ticket_classifier_backend.dto.TicketAnalysisResponse;
import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketCategory;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketPriority;
import de.samirschabel25.support_ticket_classifier_backend.model.TicketSentiment;

public final class TicketAnalysisMapper {

        private TicketAnalysisMapper() {
        }

        public static void applyAnalysis(
                        Ticket ticket,
                        TicketAnalysisResponse analysis) {

                ticket.setCategory(
                                TicketCategory.valueOf(analysis.category()));

                ticket.setPriority(
                                TicketPriority.valueOf(analysis.priority()));

                ticket.setSentiment(
                                TicketSentiment.valueOf(analysis.sentiment()));

                ticket.setSummary(analysis.summary());

                ticket.setSolution(analysis.solution());
        }
}
