import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable } from 'rxjs';
import { Profile, ThemeSettings } from 'src/app/model/system.model';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) {}

  // GET: Get theme settings by ID
  getThemeSettings(id: string): Observable<ThemeSettings | undefined> {
    const docRef = doc(this.firestore, `pos-theme-settings/${id}`);
    return from(getDoc(docRef)).pipe(
      map(snapshot => snapshot.exists() ? { id: snapshot.id, ...(snapshot.data() as ThemeSettings) } : undefined)
    );
  }

  // Create new theme settings
  createThemeSettings(theme: ThemeSettings): Observable<ThemeSettings & { id: string }> {
    const colRef = collection(this.firestore, 'pos-theme-settings');
    return from(addDoc(colRef, theme)).pipe(
      switchMap(docRef =>
        from(getDoc(docRef)).pipe(
          map(snapshot => {
            if (!snapshot.exists()) throw new Error('Document not found after creation.');
            return { id: snapshot.id, ...(snapshot.data() as ThemeSettings) };
          })
        )
      )
    );
  }

  // Update existing theme settings
  updateThemeSettings(id: string, updatedData: Partial<ThemeSettings>): Observable<ThemeSettings> {
    const docRef = doc(this.firestore, `pos-theme-settings/${id}`);
    return from(updateDoc(docRef, updatedData)).pipe(
      switchMap(() => from(getDoc(docRef))),
      map(snapshot => snapshot.data() as ThemeSettings)
    );
  }

  // Get all theme settings
  getAllSystemThemeSettings(): Observable<ThemeSettings[]> {
    const colRef = collection(this.firestore, 'pos-theme-settings');
    return from(getDocs(colRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as ThemeSettings) })))
    );
  }

  // GET: Get profile data by ID
  getProfileData(id: string): Observable<Profile | undefined> {
    const docRef = doc(this.firestore, `pos-profile/${id}`);
    return from(getDoc(docRef)).pipe(
      map(snapshot => snapshot.exists() ? { id: snapshot.id, ...(snapshot.data() as Profile) } : undefined)
    );
  }

  // Create new profile
  createProfile(profile: Profile): Observable<Profile & { id: string }> {
    const colRef = collection(this.firestore, 'pos-profile');
    return from(addDoc(colRef, profile)).pipe(
      switchMap(docRef =>
        from(getDoc(docRef)).pipe(
          map(snapshot => {
            if (!snapshot.exists()) throw new Error('Document not found after creation.');
            return { id: snapshot.id, ...(snapshot.data() as Profile) };
          })
        )
      )
    );
  }

  // Update existing profile
  updateProfile(id: string, updatedData: Partial<Profile>): Observable<Profile> {
    const docRef = doc(this.firestore, `pos-profile/${id}`);
    return from(updateDoc(docRef, updatedData)).pipe(
      switchMap(() => from(getDoc(docRef))),
      map(snapshot => snapshot.data() as Profile)
    );
  }

  // Get all profiles
  getAllProfile(): Observable<Profile[]> {
    const colRef = collection(this.firestore, 'pos-profile');
    return from(getDocs(colRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Profile) })))
    );
  }
}