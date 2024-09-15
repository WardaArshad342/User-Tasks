import { Component, Input } from '@angular/core';
import { Patients } from '../../Patients.model';
import { PatientsComponent } from "../../patients/patients.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PatientsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  selectedPatient? : Patients;
  patientList: Patients[] = [
    {id: '01', name: 'John Doe', diagnosis: 'Hypertension', gender: 'Male', age: 46, isSigned: true},
    {id: '02', name: 'Jane Smith', diagnosis: 'Diabetese', gender: 'Female', age: 36, isSigned: true},
    {id: '03', name: 'Mike Johnson', diagnosis: 'Asthma', gender: 'Male', age: 58, isSigned: false},
    {id: '04', name: 'Emily Davis', diagnosis: 'Thyroid Disorder', gender: 'Female', age: 28, isSigned: false},
    {id: '05', name: 'Sarah Brown', diagnosis: 'Anemia', gender: 'Female', age: 71, isSigned: false}
  ]
  selectedId(id: string){
    this.selectedPatient = this.patientList.find((pt) => pt.id === id);
  }
}
