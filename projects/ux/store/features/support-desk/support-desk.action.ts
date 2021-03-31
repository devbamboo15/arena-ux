import { createAction, props } from '@ngrx/store';
import { Ticket, TicketMessage, TicketData } from '../../models';

export const actionCreateTicket = createAction(
    '[support-desk] Create Ticket',
    props<{ ticket: Ticket, message: string, file: File[] }>()
);

export const actionGetTickets = createAction(
    '[support-desk] Get Tickets',
    props<{ page: number, flagStatus: string }>()
);
export const actionAppendTickets = createAction(
    '[support-desk] Append Tickets',
    props<{ page: number, flagStatus: string }>()
);
export const actionAppendTicketsSuccess = createAction(
    '[support-desk] Append Tickets Success',
    props<{ tickets: TicketData }>()
);
export const actionGetTicketMessages = createAction(
    '[support-desk] Get Ticket Info',
    props<{ ticket: Ticket }>()
);
export const actionGetTicketsSuccess = createAction(
    '[support-desk] Get Ticket Success',
    props<{ ticketsData: TicketData }>()
);
export const actionAddTicketMessage = createAction(
    '[support-desk] Add Ticket Message',
    props<{ ticketId: string, message: string, file: File }>()
);

export const actionGetTicketMessagesSuccess = createAction(
    '[support-desk] Get Ticket Messages Success',
    props<{ messages: TicketMessage[] }>()
);
