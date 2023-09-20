import { Component, OnInit } from '@angular/core';
import { Researchers } from '../researchers';
import { ResearchersService } from '../researchers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent  implements OnInit{

  researcher:Researchers;
  orcid:string;
  constructor(public researchersService: ResearchersService,private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['orcid']);
    this.orcid = this.route.snapshot.params['orcid'];
    this.researchersService.find(this.orcid).subscribe((data: any)=>{
      const researchersData:Researchers[] = data.map(item => ({
        id: item.id,
        orcid: item.orcid,
        givenNames: item["given-names"],
        familyNames: item["family-names"],
        keywords: item.keywords,
        email: item.email,
      }));

      this.researcher = researchersData[0];
      
      
      console.log(this.researcher);
    })
  }

}
