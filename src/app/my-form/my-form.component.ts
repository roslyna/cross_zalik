import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ElephantService } from "./service/elephant.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import {LogService} from "./service/logger/log.service";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent  implements OnInit {

  @Output() results: EventEmitter<{ color: string; count: number }[]> = new EventEmitter<{ color: string; count: number }[]>();

  elephantForm!: FormGroup;
  elephant!: ElephantService;

  constructor(private fb: FormBuilder) {
    this.elephantForm = this.fb.group({
      colorNumber: ['', [Validators.required, Validators.min(3), Validators.max(16)]],
      elephantCounts: ['', [Validators.required, Validators.min(10), Validators.max(999)]],
    })
  }

  onSubmit() {
    let m = this.elephantForm.value.colorNumber;
    let n = this.elephantForm.value.elephantCounts;

    let logService = new LogService();
    this.elephant = new ElephantService(logService);
    this.elephant.do(m, n);
    console.log(this.elephant.colorCounts);

    this.results.emit(this.elephant.colorCounts);
  }
  ngOnInit() {}

}
