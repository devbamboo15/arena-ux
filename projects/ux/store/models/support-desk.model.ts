import {APIModel} from './common.model';

export interface TicketData {
  lastPage: number;
  currentPage: number;
  data: Ticket[];
}

export class SupportDesk {
  ticket: Ticket;
  message: TicketMessage;
}

export class TicketMessage implements APIModel {

  messageUuid?: string;
  ticketUuid?: string;
  user?: any;
  messageText?: string;
  flagAttachment?: number;
  flagStatus?: string;
  attachments?: any;
  stampCreated: number;
  stampCreatedBy?: any;
  stampUpdated?: number;
  stampUpdatedBy?: any;

  constructor(input: any) {
    this.ticketUuid = input.ticket_uuid;
    this.messageUuid = input.message_uuid;
    this.messageText = input.message_text;
    this.flagAttachment = input.flag_attachment;
    this.flagStatus = input.flag_status;
    this.stampCreated = input.stamp_created;
    this.stampCreatedBy = input.stamp_created_by;
    this.stampUpdated = input.stamp_updated;
    this.stampUpdatedBy = input.stamp_updated_by;
    this.user = input.user.data;
    this.attachments = input.attachments.data;
    return this;
  }

  serialize(): any {
  }
}

export class TicketInfo implements APIModel {

  supportUuid?: string;
  supportCategory?: string;
  app?: any;
  stampCreated: number;
  stampCreatedBy?: any;
  stampUpdated?: number;
  stampUpdatedBy?: any;

  constructor(input: any) {
    if (input) {
      this.supportUuid = input.support_uuid;
      this.supportCategory = input.support_category;
      this.app = input.app;
      this.stampCreated = input.stamp_created;
      this.stampCreatedBy = input.stamp_created_by;
      this.stampUpdated = input.stamp_updated;
      this.stampUpdatedBy = input.stamp_updated_by;
    }
  }

  serialize(): any {
  }
}

export class Ticket implements APIModel {
  ticketUuid?: string;
  user?: any;
  ticketTitle?: string;
  flagStatus?: string;
  stampCreated: number;
  stampCreatedBy?: any;
  stampUpdated?: number;
  stampUpdatedBy?: any;
  support?: TicketInfo;
  userUuid?: string;

  constructor(input?: any) {
    if (input) {
      this.ticketUuid = input.ticket_uuid;
      this.user = input.user;
      this.ticketTitle = input.ticket_title;
      this.flagStatus = input.flag_status;
      this.stampCreated = input.stamp_created;
      this.stampCreatedBy = input.stamp_created_by;
      this.stampUpdated = input.stamp_updated;
      this.stampUpdatedBy = input.stamp_updated_by;
      this.userUuid = input.user_uuid;
      this.support = new TicketInfo(input.support);
    }
  }

  serialize(): any {
  }
}
