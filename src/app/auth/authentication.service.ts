import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs/operators';
interface TokenPayload {
  id: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  DEV_API_URL = 'http://api.esikampus.ac.id';

  constructor(private http: HttpClient) {}

  login(authentication: string, password: string) {
    return this.http.post<any>(`${this.DEV_API_URL}/auth/login`, { authentication, password }, { withCredentials: true }).pipe(
      tap((res) => {
        this.setToken(res.token);
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded: TokenPayload = jwtDecode(token);
      return decoded.role;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
