import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function fadeInAnimation(): AnimationTriggerMetadata {
  return trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(1555, style({ opacity: 1 }))
    ])
  ]);
}
