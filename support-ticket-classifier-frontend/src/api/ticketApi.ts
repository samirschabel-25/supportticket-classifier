import api from "./axios";
import type { TicketResponse, CreateTicketRequest } from "../types/Ticket";

export const getAllTickets = async (): Promise<TicketResponse[]> => {
  const response = await api.get<TicketResponse[]>("/tickets");
  return response.data;
};

export const createTicket = async (
  request: CreateTicketRequest,
): Promise<TicketResponse> => {
  const response = await api.post<TicketResponse>("/tickets", request);
  return response.data;
};
