import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ticket, TicketMessage, TicketData } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface SupportTicketsResponse {
  data: SupportResponseData;
}
interface SupportResponseData {
  data: any[];
  from: number;
  current_page: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}
interface SupportMessageResponse {
  data: TicketMessage[];
  meta: any[];
}

@Injectable()
export class SupportService {
  constructor(private http: HttpClient) { }

  getSupportTickets(page: number, flagstatus = null): Observable<TicketData> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    if (flagstatus != null && flagstatus !== '') {
      params = params.append('flag_status', flagstatus);
    }
    return this.http.get<SupportTicketsResponse>(`core/services/support/tickets?`, { params }).pipe(map(res => ({
      lastPage: res.data.last_page,
      currentPage: res.data.current_page,
      data: res.data.data.map(ticket => new Ticket(ticket))
    })));
  }

  getTicketMessages(ticket: Ticket, perPage?): Observable<TicketMessage[]> {
    return this.http.get<SupportMessageResponse>(`core/services/support/ticket/${ticket}/messages`).pipe(map(res => {
      res.data = res.data.map(message => {
        return new TicketMessage(message);
      });
      return res.data;
    }));
  }

  addTicket(ticket: Ticket, message: string, files: File[]): Observable<Ticket> {
    const formData = new FormData();
    formData.append('support', ticket.support.supportCategory);
    formData.append('title', ticket.ticketTitle);
    formData.append('message[text]', message);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`files[${i}]`, files[i]);
      }
    }

    return this.http.post<any>(`core/services/support/ticket`, formData).
      pipe(map(res => {
        return res.data;
      }));
  }

  addMessage(ticket: string, message: string, files): Observable<TicketMessage> {
    const formData = new FormData();
    formData.append('ticket', ticket);
    formData.append('flag_officeonly', '0');
    formData.append('flag_office', '1');
    formData.append('message_text', message);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`files[${i}]`, files[i]);
      }
    }
    return this.http.post<any>(`core/services/support/ticket/message`, formData);
  }

}
