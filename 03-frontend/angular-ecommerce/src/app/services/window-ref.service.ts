// src/app/window-ref.service.ts
import { Injectable } from '@angular/core';

function _window(): any {
  // Return the global native browser window object
  return typeof window !== 'undefined' ? window : null;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow(): any {
    return _window();
  }
}
