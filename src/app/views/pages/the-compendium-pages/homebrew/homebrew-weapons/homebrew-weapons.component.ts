import { Component, OnInit } from '@angular/core';
// Services
import { HomebrewWeaponsService } from '../../../../../core/resources/_services/homebrew-services/homebrew-weapons.service';

@Component({
  selector: 'kt-homebrew-weapons',
  templateUrl: './homebrew-weapons.component.html',
  styleUrls: ['./homebrew-weapons.component.scss', '../../tc-global.scss']
})
export class HomebrewWeaponsComponent implements OnInit {

  constructor(private homebrewWeaponsService: HomebrewWeaponsService) { }

  ngOnInit(): void {
  }
}
