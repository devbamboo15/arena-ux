import {Action, createReducer, on} from '@ngrx/store';
import {TicketMessage, Ticket} from '../../models';
import {actionGetTicketsSuccess, actionGetTicketMessagesSuccess, actionAppendTicketsSuccess} from './support-desk.action';
import {actionCreateTicket} from './support-desk.action';


export interface SupportDeskState {
  ticket: Ticket[];
  ticketMessage: TicketMessage[];
  totalPages: number;

}

const initialState: SupportDeskState = {
  ticket: [],
  ticketMessage: [],
  totalPages: 0
};

const reducer = createReducer(
  initialState,
  on(actionGetTicketsSuccess, (state, action) => {
    return {
      ...state,
      ticket: [...action.ticketsData.data],
      totalPages: action.ticketsData.lastPage
    };
  }),
  on(actionGetTicketMessagesSuccess, (state, action) => {
    return {
      ...state,
      ticketMessage: action.messages
    };
  }),
  on(actionAppendTicketsSuccess, (state, action) => {
    return {
      ...state,
      ticket: [...state.ticket, ...action.tickets.data]
    };
  }),
  on(actionCreateTicket, (state, action) => {
    return {
      ...state,
      ticket: [...state.ticket, action.ticket]
    };
  }),
);

export function supportdeskReducer(state: SupportDeskState | undefined, action: Action) {
  return reducer(state, action);
}
