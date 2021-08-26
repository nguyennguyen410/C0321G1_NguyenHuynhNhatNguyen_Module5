import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {Dictionary} from "../dictionary";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.dictionary = this.dictionaryService.findById(id);
  }

  ngOnInit(): void {
  }

}
