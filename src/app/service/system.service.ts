import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Profile, ThemeSettings } from '../model/system.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SystemService as FirebaseProductService } from '../firebase/fire-servie/system.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private themeSettingsSubject = new BehaviorSubject<ThemeSettings>(null);
  themeSettings$ = this.themeSettingsSubject.asObservable();

  private profileSubject = new BehaviorSubject<Profile>(null);
  profile$ = this.profileSubject.asObservable();

  constructor(private http: HttpClient,
    private firebaseSystemService: FirebaseProductService
  ) { }

  // Method to update value
  updateThemeSettingsValue(settings: ThemeSettings) {
    this.themeSettingsSubject.next(settings);
  }

  // Optionally get the current value
  getCurrentThemeSettingsValue(): ThemeSettings {
    return this.themeSettingsSubject.value;
  }

  updateProfileValue(profile: Profile) {
    this.profileSubject.next(profile);
  }

  // Optionally get the current value
  getProfileValue(): Profile {
    return this.profileSubject.value;
  }

  // GET: Get theme settings by ID
  getThemeSettings(id: number): Observable<ThemeSettings> {
    if (environment.systemMode == 1) {
      return this.firebaseSystemService.getThemeSettings(id.toString());
    } else {
      return this.http.get<ThemeSettings>(`${environment.apiUrl}api/system/theme-settings/${id}`);
    }
  }

  // Create new theme settings
  createThemeSettings(data: ThemeSettings): Observable<ApiResponse<ThemeSettings>> {
    if (environment.systemMode == 1) {
      this.firebaseSystemService.createThemeSettings(data).pipe(
        map((theme: ThemeSettings) => ({
          data: theme,
          message: 'Success',
          success: true
        })));

    } else {
      return this.http.post<ApiResponse<ThemeSettings>>(`${environment.apiUrl}api/system/theme-settings`, data);
    }
  }

  // Update existing theme settings
  updateThemeSettings(id: number, data: Partial<ThemeSettings>): Observable<ApiResponse<ThemeSettings>> {
    if (environment.systemMode == 1) {
      return this.firebaseSystemService.updateThemeSettings(id.toString(), data).pipe(
        map((theme: ThemeSettings) => ({
          data: theme,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.patch<ApiResponse<ThemeSettings>>(`${environment.apiUrl}api/system/theme-settings/${id}`, data);

    }

  }

  getAllSystemThemeSettings(): Observable<ApiResponse<ThemeSettings[]>> {
    if (environment.systemMode == 1) {
      return this.firebaseSystemService.getAllSystemThemeSettings().pipe(
        map((products: ThemeSettings[]) => ({
          data: products,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.get<ApiResponse<ThemeSettings[]>>(`${environment.apiUrl}api/system/theme-settings`);
    }
  }

  // GET: getProfileData
  getProfileData(id: number): Observable<Profile> {
    if (environment.systemMode == 1) {
      return this.firebaseSystemService.getProfileData(id.toString());
    } else {
      return this.http.get<Profile>(`${environment.apiUrl}api/system/profile/${id}`);

    }
  }

  // createProfile
  createProfile(data: Profile): Observable<ApiResponse<Profile>> {
    if (environment.systemMode == 1) {
      this.firebaseSystemService.createProfile(data).pipe(
        map((theme: Profile) => ({
          data: theme,
          message: 'Success',
          success: true
        })));
    } else {
      return this.http.post<ApiResponse<Profile>>(`${environment.apiUrl}api/system/profile`, data);
    }
  }

  // updateProfile
  updateProfile(id: number, data: Partial<Profile>): Observable<ApiResponse<Profile>> {

    if (environment.systemMode == 1) {
      return this.firebaseSystemService.updateProfile(id.toString(), data).pipe(
        map((product: Profile) => ({
          data: product,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.patch<ApiResponse<Profile>>(`${environment.apiUrl}api/products/${id}`, data);
    }
  }

  // getAllProfile
  getAllProfile(): Observable<ApiResponse<Profile[]>> {
    if (environment.systemMode == 1) {
      return this.firebaseSystemService.getAllProfile().pipe(
        map((products: Profile[]) => ({
          data: products,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.get<ApiResponse<Profile[]>>(`${environment.apiUrl}api/system/profile`);
    }
  }

}
