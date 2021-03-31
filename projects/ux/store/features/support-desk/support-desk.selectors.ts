import { createSelector } from '@ngrx/store';
import { State } from '../../state';
import { SupportDeskState } from './support-desk.state';

export const selectSupportDeskState = (state: State) => state.supportDesk;

export const selectGetAllTickets = createSelector(
    selectSupportDeskState,
    (state: SupportDeskState) => state.ticket
);
export const selectGetAllMessages = createSelector(
    selectSupportDeskState,
    (state: SupportDeskState) => state.ticketMessage
);
export const selectGetTotalPages = createSelector(
    selectSupportDeskState,
    (state: SupportDeskState) => state.totalPages
);
