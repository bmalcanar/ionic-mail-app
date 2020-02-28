import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  public mails = [
    {
      status: 'Unread',
      from: 'Blu',
      subject: 'Request Meeting',
      emailBody:
        'Hi Blu, I hope youre doing well! I wanted to reach out to inform you that weve recently had a meeting with the DILG team regarding their proposed new features to be included in DevLive. They are requesting to have a followup meeting to further discuss the said features but the contract is not yet available. ',
    },
    {
      status: 'Read',
      from: 'Yellow',
      subject: 'Me',
      emailBody: 'Lorem ipsum, or lipsum as it is sometimes known',
    },
    {
      status: 'Read',
      from: 'Green',
      subject: 'Good Morning',
      emailBody: 'Lorem ipsum, or lipsum as it is sometimes known',
    },
    {
      status: 'Unread',
      from: 'Blu',
      subject: 'Password reset',
      emailBody:
        'Lorem ipsum, or lipsum as it is sometimes known.Lorem ipsum, or lipsum as it is sometimes known ,or lipsum as it is sometimes known , or lipsum as it is sometimes known.',
    },
    {
      status: 'Read',
      from: 'Red',
      subject: 'Request Meeting',
      emailBody: 'Lorem ipsum, or lipsum as it is sometimes known',
    },
    {
      status: 'Read',
      from: 'Red',
      subject: 'Request Meeting',
      emailBody: 'Lorem ipsum, or lipsum as it is sometimes known',
    },
    {
      status: 'Read',
      from: 'Red',
      subject: 'Request Meeting',
      emailBody: 'Lorem ipsum, or lipsum as it is sometimes known',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
