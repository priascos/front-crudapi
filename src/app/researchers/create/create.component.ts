import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResearchersService } from '../researchers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  form: FormGroup;

  constructor(
    public researchersService: ResearchersService,
    private router: Router
  ) { 
    this.form = new FormGroup({
      orcid:  new FormControl('', [ Validators.required]),
      givenName:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      familyName:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      keywords:  new FormControl('', [ Validators.required]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
    });
  }

  ngOnInit(): void {

    

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.researchersService.create(this.form.value).subscribe(res => {
         console.log('Researcher created successfully!');
         this.router.navigateByUrl('researchers/index');
    })
  }

}
