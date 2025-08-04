import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
   imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email: string = '';
  password: string = '';
  remember: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    // Dummy login logic — replace with real validation
    if (this.email && this.password) {
      console.log('Login successful:', this.email);
      this.router.navigate(['/admindashboard']); // ✅ Redirect to dashboard
    } else {
      alert('Please enter valid credentials');
    }
  }
}
