import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../Patients.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent {
  @Input({required: true}) patient!: Patient;
  @Output() selectedPatientId = new EventEmitter<string>();

  onClickPatient(id: string){
    this.selectedPatientId?.emit(id);
  }
}
