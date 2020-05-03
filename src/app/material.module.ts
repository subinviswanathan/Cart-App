import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatDialogModule
    ]
})

export class MaterialModule { }