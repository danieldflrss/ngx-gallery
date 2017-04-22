import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {GalleryDescriptionConfig} from '../../gallery';

@Component({
  selector: 'thumb-options',
  templateUrl: './thumb-options.component.html',
  styleUrls: ['./thumb-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbOptionsComponent {

  @Input() config: GalleryDescriptionConfig;
  @Output() value = new EventEmitter<GalleryDescriptionConfig>();

  prevConfig: GalleryDescriptionConfig = {};

  positionOptions = [
    'left',
    'top',
    'right',
    'bottom'
  ];

  enabledChanged(e) {
    if (e) {
      this.config = this.prevConfig;
      this.value.emit(this.config);
    } else {
      this.prevConfig = this.config;
      this.value.emit(false);
    }
  }

}
