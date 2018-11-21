import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IGame, ICompany } from 'src/models/game-model';
import { BrowseGamesComponent } from '../../browse-games/browse-games.component';
import { IgdbService } from 'src/app/services/igdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  gameObject: IGame;
  imageString: string;
  dev: ICompany;
  comp : number;
  deve: Observable<ICompany>
  cos:string;




  constructor(
    public dialogRef: MatDialogRef<GameInfoComponent>,private _gameService: IgdbService,
    @Inject(MAT_DIALOG_DATA) public data: IGame) {
      console.log("GIC: data.cover.url = "+data.cover.url)
      console.log("GIC: data.DEVELOPER = "+data.developers)
      console.log("GIC: data = "+JSON.stringify(data))
      this.gameObject = data
     }

     onDev(type:number): string {
     this.comp = this.gameObject.developers;

   this._gameService.getDev(type).subscribe(x => {
    this.dev = x
    console.log(x);
    }) 

       

     console.log('in' + this.dev);
     return "name"
      
   } 
     
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imageString = 'http:'+ this.gameObject.cover.url
  }

  
  onBack(): void {
  
   this.dialogRef.close();
  }
  
}
