import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Product, Profile } from '../model/system.model';
import { environment } from 'src/environments/environment';
import { ProductService as FirebaseProductService } from '../firebase/fire-servie/product.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient,
    private firebaseProductService: FirebaseProductService
  ) { }

  // Method to insert a new product
  addProduct(product: Product): Observable<Product> {
    if(environment.systemMode == 1) {
      return this.firebaseProductService.addProduct(product);
    } else {
      return this.http.post<Product>(`${environment.apiUrl}api/products`, product);  
    }
  }

  // getAllProfile
  getAllProducts(): Observable<ApiResponse<Product[]>> {
    if (environment.systemMode == 1) {
      return this.firebaseProductService.getAllProducts().pipe(
        map((products: Product[]) => ({
          data: products,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.get<ApiResponse<Product[]>>(`${environment.apiUrl}api/products`); 
    }
  }
 // GET: Get theme settings by ID
  getProduct(id: number): Observable<ApiResponse<Product>> {
    if (environment.systemMode == 1) {
      return this.firebaseProductService.getProductById(id.toString()).pipe(
        map((product: Product) => ({
          data: product,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.get<ApiResponse<Product>>(`${environment.apiUrl}api/products/${id}`);
    }
  }

  updateProduct(id: number, data: Partial<Product>): Observable<ApiResponse<Product>> {
    if (environment.systemMode == 1) {
      return this.firebaseProductService.updateProduct(id.toString(), data).pipe(
        map((product: Product) => ({
          data: product,
          message: 'Success',
          success: true
        }))
      );
    } else {
      return this.http.patch<ApiResponse<Product>>(`${environment.apiUrl}api/products/${id}`, data);
    }
  }

}
