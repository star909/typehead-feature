import { Component, OnInit } from '@angular/core';
import { Repo } from '../../shared/models/repo';
import { TypeMockService } from '../../services/type-mock.service';

@Component({
  selector: 'app-repo-typehead',
  templateUrl: './repo-typehead.component.html',
  styleUrls: ['./repo-typehead.component.css']
})
export class RepoTypeheadComponent implements OnInit {
  selected: string;
  names: string[];
  selectedValue: string;
  apiUrl = "repositories?q=";


  constructor(private service: TypeMockService) { }

  ngOnInit() {
  }
  /**Detecting the typehead value */
  public changeValue(selected): void {
    this.selectedValue = selected;
    this.repoList();
  }

  /**Subscribing the Repo data from github API */
  private repoList(): void {
    this.names = [];
    this.service.getRepoApidata(this.apiUrl, this.selectedValue).subscribe(data => {
      data.items.map((result: Repo) => {
        this.names.push(result.name);
      })
    })
  }
}
