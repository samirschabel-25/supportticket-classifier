package de.samirschabel25.support_ticket_classifier_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import de.samirschabel25.support_ticket_classifier_backend.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
