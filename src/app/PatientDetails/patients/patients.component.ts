import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { Patient } from '../Patients.model';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, NgStyle],
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
