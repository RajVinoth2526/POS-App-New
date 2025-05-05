import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc
} from 'firebase/firestore';
import { from, Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/system.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) {}

  addProduct(product: Product): Observable<any> {
    const colRef = collection(this.firestore, 'pos-products');
    return from(addDoc(colRef, product));
  }

  getAllProducts(): Observable<Product[]> {
    const colRef = collection(this.firestore, 'pos-products');
    return from(getDocs(colRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({
        id: doc.id, 
        ...(doc.data() as Product)
      })))
    );
  }

  getProductById(id: string): Observable<Product | undefined> {
    const docRef = doc(this.firestore, `pos-products/${id}`);
    return from(getDoc(docRef)).pipe(
      map(snapshot => {
        if (snapshot.exists()) {
          return { id: snapshot.id, ...(snapshot.data() as Product) };
        }
        return undefined;
      })
    );
  }

  updateProduct(id: string, updatedData: Partial<Product>): Observable<Product> {
    const docRef = doc(this.firestore, `pos-products/${id}`);
    return from(updateDoc(docRef, updatedData)).pipe(
      switchMap(() => from(getDoc(docRef))),
      map(snapshot => ({ id: snapshot.id, ...(snapshot.data() as Product) }))
    );
  }

}
