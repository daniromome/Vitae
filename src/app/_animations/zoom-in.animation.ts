import { animate, animation, AnimationTriggerMetadata, group, keyframes, style, transition, trigger } from '@angular/animations';

export function zoomInAnimation(): AnimationTriggerMetadata {
  return trigger('zoomIn', [
    transition(':enter', [
      style({
        transform: 'translateX(100%)',
      }),
      animation(
        group([
          animate(
            1000,
            keyframes([
              style({ opacity: 0, easing: 'ease', offset: 0 }),
              style({ opacity: 1, easing: 'ease', offset: 0.5 }),
              style({ opacity: 1, easing: 'ease', offset: 1 }),
            ])
          ),
          animate(
            1000,
            keyframes([
              style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
              style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
            ])
          )
        ])
      )
    ])
  ]);
}
