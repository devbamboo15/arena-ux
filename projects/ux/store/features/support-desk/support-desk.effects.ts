import { Actions, ofType, Effect } from '@ngrx/effects';
import { concatMap, map, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  actionCreateTicket,
  actionGetTickets,
  actionGetTicketsSuccess,
  actionAddTicketMessage,
  actionGetTicketMessagesSuccess,
  actionGetTicketMessages,
  actionAppendTickets,
  actionAppendTicketsSuccess
} from './support-desk.action';
import {SupportService} from '../../services';

@Injectable()
export class SupportDeskEffects {
  constructor(
    private actions$: Actions,
    private supportService: SupportService
  ) {
  }

  @Effect({ dispatch: false })
  createTicket$ = this.actions$.pipe(
    ofType(actionCreateTicket),
    concatMap((action) => this.supportService.addTicket(action.ticket, action.message, action.file)),
  );

  @Effect({ dispatch: false })
  addTicketMessage$ =
    this.actions$.pipe(
      ofType(actionAddTicketMessage),
      concatMap((action) =>
        this.supportService.addMessage(action.ticketId, action.message, action.file)),
    );

  @Effect()
  getTickets$ =
    this.actions$.pipe(
      ofType(actionGetTickets),
      exhaustMap((action) => this.supportService.getSupportTickets(action.page, action.flagStatus)),
      map(ticketsData => actionGetTicketsSuccess({ ticketsData }))
    );

  @Effect()
  appendTickets =
    this.actions$.pipe(
      ofType(actionAppendTickets),
      concatMap((action) => this.supportService.getSupportTickets(action.page, action.flagStatus)),
      map(tickets => actionAppendTicketsSuccess({ tickets })),
    );

  @Effect()
  getTicketMessage$ =
    this.actions$.pipe(
      ofType(actionGetTicketMessages),
      exhaustMap((action) => this.supportService.getTicketMessages(action.ticket)),
      map((messages) => actionGetTicketMessagesSuccess({ messages }))
    );

}
