import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Ticket, TicketMessage, selectGetToken, actionSignUp, actionLogin, selectAuthState } from '@arenaops/arena.ux/store';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  State,
  actionAddTicketMessage,
  selectGetTotalPages,
  actionAppendTickets,
  actionGetTickets,
  selectGetAllTickets,
  actionGetTicketMessages,
  selectGetAllMessages,
  actionCreateTicket
} from '@arenaops/arena.ux/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aux-support-desk',
  templateUrl: './support-desk.component.html',
  styleUrls: ['./support-desk.component.scss'],
})
export class SupportDeskComponent implements OnInit, OnDestroy {

  constructor(private spinner: NgxSpinnerService, private store$: Store<State>) {
  }
  @Output() showSupport = new EventEmitter<boolean>();
  @ViewChild('ticketContainer') private container: ElementRef;

  public ticketsObs: Ticket[];
  public messagesObs: TicketMessage[];
  public loading = false;
  public ticket: Ticket;
  public showTickets = true;
  public filterBy = ['open', 'Awaiting User', 'closed'];
  public newTicket = false;
  public ticketDetail = false;
  public ticketTypes = ['Customer Service', 'Technical Support', 'Feedback'];
  public file = null;
  public message: string;
  public newTicketMessage = false;
  public icon = 'fal fa-eye-slash';
  public isPassword = true;
  public isError = false;
  public icon2 = 'fal fa-eye-slash';
  public isConfirmPassword = true;
  public isConfirmPasswordError = false;

  public ticketForm: FormGroup;
  public ticketMessage: FormGroup;
  public filterForm: FormGroup;
  public submitted = false;
  public isSignIn = false;
  public isSigningIn = true;
  public signInSubmitted = false;
  public signupSubmitted = false;

  private createdTicket: Ticket;
  private totalPagesSubscription$: Subscription;
  private messageSubscription$: Subscription;
  private ticketsSubscription$: Subscription;
  private page = 1;
  private totalPages: number;
  public signupForm: FormGroup;
  public signInForm: FormGroup;
  public signupError = '';
  public loginFail = false;

  ngOnInit() {
    this.spinner.show();
    this.initForm();
    this.store$.select(selectGetToken).subscribe(token => {
      if (token) {
        this.store$.dispatch(actionGetTickets(
          {
            page: this.page,
            flagStatus: ''
          }
        ));
        this.ticketsSubscription$ = this.store$.select(selectGetAllTickets).subscribe(tickets => {
          if (tickets) {
            return this.ticketsObs = tickets;
          }
          else {
            this.showTickets = false;
            this.newTicket = true;
            this.newTicketMessage = true;
            return this.ticketsObs = null;
          }

        });
        this.messageSubscription$ = this.store$.select(selectGetAllMessages).subscribe(messages => this.messagesObs = messages);
        this.totalPagesSubscription$ = this.store$.select(selectGetTotalPages).subscribe(pages => this.totalPages = pages);
        this.isSignIn = true;
      }
    });
  }

  public ticketToggle(): void {
    this.showSupport.emit(false);
    this.file = null;
    this.ticketForm.reset();
    this.ticketMessage.reset();
  }

  public showCreateTicket(): void {
    this.showTickets = false;
    this.newTicket = true;
  }

  public createTicket(form): void {
    this.submitted = true;
    if (this.ticketForm.valid) {
      this.createdTicket = new Ticket();
      this.createdTicket.ticketTitle = form.title;
      this.createdTicket.support.supportCategory = form.type;
      this.showTickets = false;
      this.newTicket = true;
      this.store$.dispatch(actionCreateTicket({
        ticket: this.createdTicket,
        message: form.message,
        file: this.file
      }));
      this.submitted = false;
    }
    this.file = null;
    this.ticketForm.reset();
  }

  public ticketsShow(): void {
    this.newTicket = false;
    this.ticketDetail = false;
    this.showTickets = true;
    this.ticketForm.reset();
    this.ticketMessage.reset();
    this.file = null;
  }

  public showTicketMessage(ticket): void {
    this.showTickets = false;
    this.ticketDetail = true;
    this.ticket = ticket;
    this.store$.dispatch(actionGetTicketMessages({
      ticket: ticket.ticketUuid
    }));
    this.message = '';
    this.file = null;
  }

  public attachFiles(event: File): void {
    this.file = event;
  }

  public onSend(message): void {
    this.store$.dispatch(actionAddTicketMessage(
      {
        ticketId: this.ticket.ticketUuid,
        message: message.inputMessage,
        file: this.file
      }
    ));
    this.file = null;
    this.ticketMessage.reset();
  }

  public download(file): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', file.attachment_url);
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  public onScroll(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loading = true;
      this.store$.dispatch(actionAppendTickets(
        {
          page: this.page,
          flagStatus: this.filterForm.get('flagStatus').value
        }
      ));
    } else {
      this.loading = false;
    }
  }

  public filter($event): void {
    this.container.nativeElement.scrollTo(0, 0);
    this.page = 1;
    this.store$.dispatch(actionGetTickets(
      {
        page: this.page,
        flagStatus: this.filterForm.get('flagStatus').value
      }
    ));
  }

  public ngOnDestroy(): void {
    this.ticketsSubscription$.unsubscribe();
    this.totalPagesSubscription$.unsubscribe();
    if (this.messageSubscription$) {
      this.messageSubscription$.unsubscribe();
    }
  }
  public ticketSignup(): void {
    this.signupSubmitted = true;
    if (this.signupForm.valid) {
      if (this.signupForm.get('userPassword').value === this.signupForm.get('userPasswordConfirmation').value) {
        this.store$.dispatch(actionSignUp({
          credentials: this.signupForm.value
        }));
        this.signupForm.reset();
        this.signupSubmitted = false;
      }
      else {
        this.isError = true;
        this.signupError = 'Your Password Didn\'t Match';
        this.signupSubmitted = false;
        this.icon = '';
      }
    }
    else {
      this.isError = true;
      this.isConfirmPasswordError = true;
    }

  }


  public onIconClick(): void {
    if (this.isPassword) {
      this.icon = 'fal fa-eye';
      this.isPassword = false;
      return;
    }
    this.icon = 'fal fa-eye-slash';
    this.isPassword = true;
  }

  public onIconTwoClick(): void {
    if (this.isConfirmPassword) {
      this.icon2 = 'fal fa-eye';
      this.isConfirmPassword = false;
      return;
    }
    this.icon2 = 'fal fa-eye-slash';
    this.isConfirmPassword = true;
  }
  public login(): void {
    this.loginFail = false;
    this.signInSubmitted = true;
    if (this.signInForm.valid) {
      this.store$.dispatch(actionLogin(
        {
          credentials: this.signInForm.value
        }
      ));
      this.store$.select(selectAuthState).subscribe((authState) => {
        if (!authState.token && !authState.isAuthorizing) {
          this.loginFail = true;
          this.signInSubmitted = false;
        }
      });
    }
    else {
       this.loginFail = true;
       this.signInSubmitted = false;
    }
  }

  private initForm(): void {
    this.ticketForm = new FormGroup({
      type: new FormControl('Customer Service', Validators.required),
      title: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });

    this.ticketMessage = new FormGroup({
      inputMessage: new FormControl(null, Validators.required)
    });

    this.filterForm = new FormGroup({
      flagStatus: new FormControl(null, Validators.required)
    });

    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      nameFirst: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
      userPasswordConfirmation: new FormControl(null, Validators.required)
    });

    this.signInForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

}
