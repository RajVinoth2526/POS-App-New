export interface ThemeSettings {
    id: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    fontStyle: string;

}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface Profile {
  id: string;
  businessName: string;
  ownerName: string;
  email: string;
  phoneNumber: string;
}

export interface Product {
  id?: String;
  name: string;
  description?: string;
  image?: string;
  price: number;
  sku?: string;
  barcode?: string;
  category?: string;
  stockQuantity?: number;
  unitType: string;
  unit?: string; // e.g., pcs, kg
  unitValue?: number
  taxRate?: number; // in percentage
  isAvailable: boolean;
  manufactureDate?: Date;
  expiryDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

  