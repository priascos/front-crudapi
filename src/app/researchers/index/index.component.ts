import { Component, OnInit } from '@angular/core';
import { Researchers } from '../researchers';
import { ResearchersService } from '../researchers.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  
  researcherss: Researchers[] = [];
  perPage: number = 2;
  page:any;
  currentPage:number = 1;
  totalPages:number = 0;

  // constructor() { }
  constructor(public researchersService: ResearchersService) { }

  ngOnInit(): void {
   this.loadList();
  }

  loadList(){
    this.researchersService.getAll(this.currentPage, this.perPage).subscribe((data: any)=>{

      const researchersData:Researchers[] = data.data.map(item => ({
        id: item.id,
        orcid: item.orcid,
        givenNames: item["given-names"],
        familyNames: item["family-names"],
        keywords: item.keywords,
        email: item.email,
      }));
      this.researcherss = researchersData;
      this.currentPage = data.current_page;
      this.totalPages = data.last_page;
      
      console.log(this.researcherss);
    })
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadList();
    // console.log(this.currentPage);
  }

  deleteResearchers(orcid: string){
    this.researchersService.delete(orcid).subscribe(res => {
         this.researcherss = this.researcherss.filter(item => item.orcid !== orcid);
         console.log('researcher deleted successfully!');
    })
  }

}
