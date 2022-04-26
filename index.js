import { Component } from "@angular/core
eComponent ({
selector: 'app-root',
template:
<input #phone placeholder="phone" />
<button (click)="callPhone (phone.value)">Call</but
})
export class AppComponent {
callPhone (phone: string) {
console.log(phone);
