export interface CreateTicketRequest {
  title: string;
  description: string;
}

export interface TicketResponse {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  sentiment: string;
  summary: string;
  solution: string;
  createdAt: string;
}
