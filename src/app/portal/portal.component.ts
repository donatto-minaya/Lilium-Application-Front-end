import { Component, OnInit } from '@angular/core';
import { Advertisements } from '../shared/advertisements.model';
import { AdvertisementsService } from '../shared/advertisements.service';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  faBriefcase = faBriefcase

  constructor(public service: AdvertisementsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateJob(selectedRecord: Advertisements) {
    this.service.formData = selectedRecord;
  }

  onSubmit(form: NgForm) {
    this.service.postAnuncio().subscribe(
      res => {
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
