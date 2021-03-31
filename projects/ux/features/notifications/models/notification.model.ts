export class Notification {
  notificationAction?: string;
  notificationDetail?: {
    notificationState: string;
    flagCanArchive: number;
    flagCanDelete: number;
  };
  notificationMemo?: string;
  notificationName?: string;
  notificationUUID?: string;
  stampCreated: number;
  stampCreatedBy: {
    uuid: string,
    name: string
  };
  stampUpdated: number;
  stampUpdatedBy: {
    uuid: string,
    name: string
  };

  constructor(input?: any) {
    if (!input) {
      return;
    }

    this.notificationAction = input.notification_action;
    this.notificationDetail = {
      notificationState: input.notification_detail?.notification_state,
      flagCanArchive: input.notification_detail?.flag_canarchive,
      flagCanDelete: input.notification_detail?.flag_candelete,
    };
    this.notificationMemo = input.notification_memo;
    this.notificationName = input.notification_name;
    this.notificationUUID = input.notification_uuid;
    this.stampCreated = input.stamp_created;
    this.stampUpdated = input.stamp_updated;
  }

}

export class NotificationRequest {
  state: 'unread' | null;
  page = 1;
  perPage = 10;

  static serialize(request: NotificationRequest) {
    return {
      state: request.state,
      page: request.page,
      per_page: request.perPage,
    };
  }
}

export class NotificationsMeta {
  count: number;
  currentPage: number;
  links: any;
  perPage: number;
  total: number;
  totalPages: number;

  constructor(input?: any) {
    if (!input) {
      return;
    }

    this.count = input.pagination.count;
    this.currentPage = input.pagination.current_page;
    this.links = input.pagination.links;
    this.perPage = input.pagination.per_page;
    this.total = input.pagination.total;
    this.totalPages = input.pagination.total_pages;
  }
}

export class NotificationsResponse {
  notifications: Notification[];
  meta: NotificationsMeta;

  constructor(input?: any) {
    if (!input) {
      return;
    }

    this.notifications = input.data.map(n => new Notification(n));
    this.meta = new NotificationsMeta(input.meta);
  }
}

export class NotificationsSettings {
  appUUID: string;
  flagAccount: boolean;
  flagApparel: boolean;
  flagArena: boolean;
  flagCatalog: boolean;
  flagEmbroidery: boolean;
  flagFaceCoverings: boolean;
  flagIO: boolean;
  flagMerchandising: boolean;
  flagMusic: boolean;
  flagOffice: boolean;
  flagPrints: boolean;
  flagScreenBurning: boolean;
  flagSewing: boolean;
  flagSoundBlock: boolean;
  flagTourMask: boolean;
  flagUX: boolean;
  playSound: boolean;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showTime: 5;
  perPage: 10;
  userUUID: string;
  web: number;
  stampCreated: number;
  stampCreatedBy: {
    uuid: string,
    name: string
  };
  stampUpdated: number;
  stampUpdatedBy: {
    uuid: string,
    name: string
  };

  constructor(input?) {
    if (!input) {
      return;
    }

    this.appUUID = input.app_uuid;
    this.flagAccount = input.flag_account;
    this.flagApparel = input.flag_apparel;
    this.flagArena = input.flag_arena;
    this.flagCatalog = input.flag_catalog;
    this.flagEmbroidery = input.flag_embroidery;
    this.flagFaceCoverings = input.flag_dacecoverings;
    this.flagIO = input.flag_io;
    this.flagMerchandising = input.flag_merchandising;
    this.flagMusic = input.flag_music;
    this.flagOffice = input.flag_office;
    this.flagPrints = input.flag_prints;
    this.flagScreenBurning = input.flag_screenburning;
    this.flagSewing = input.flag_sewing;
    this.flagSoundBlock = input.flag_soundblock;
    this.flagTourMask = input.flag_tourmask;
    this.flagUX = input.flag_ux;
    this.playSound = input.setting.play_sound;
    this.position = input.setting.position;
    this.showTime = input.setting.show_time;
    this.perPage = input.setting.per_page;
    this.userUUID = input.user_uuid;
    this.web = input.web;
    this.stampCreated = input.stamp_created;
    this.stampCreatedBy = input.stamp_created_by;
    this.stampUpdated = input.stamp_updated;
    this.stampUpdatedBy = input.stamp_updated_by;
  }

  static serialize(n: NotificationsSettings): any {
    return {
      app_uuid: n.appUUID,
      flag_account: n.flagAccount,
      flag_apparel: n.flagApparel,
      flag_arena: n.flagArena,
      flag_catalog: n.flagCatalog,
      flag_embroidery: n.flagEmbroidery,
      flag_facecoverings: n.flagFaceCoverings,
      flag_io: n.flagIO,
      flag_merchandising: n.flagMerchandising,
      flag_music: n.flagMusic,
      flag_office: n.flagOffice,
      flag_prints: n.flagPrints,
      flag_screenburning: n.flagScreenBurning,
      flag_sewing: n.flagSewing,
      flag_soundblock: n.flagSoundBlock,
      flag_tourmask: n.flagTourMask,
      flag_ux: n.flagUX,
      setting: {
        play_sound: n.playSound,
        position: n.position,
        show_time: n.showTime,
        per_page: n.perPage
      },
      web: n.web,
    };
  }
}
