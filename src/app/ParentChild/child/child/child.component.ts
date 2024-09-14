import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../patient.model';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input({ required: true }) patientList : Patient[] = [];
  @Output() selectedPatientId = new EventEmitter<string>();

  onSelectPatient(id: string){
    this.selectedPatientId.emit(id);
  }
}
