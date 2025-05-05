import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../model/system.model';
import { ProductService } from 'src/app/service/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  isDragging = false;
  productId: number;
  availableUnits = [];
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  unitTypes = [
    { value: 'volume', label: 'Volume' },
    { value: 'weight', label: 'Weight' }
  ];

  unitOptions = {
    volume: [
      { value: 'l', label: 'Liters' },
      { value: 'ml', label: 'Milliliters' }
    ],
    weight: [
      { value: 'kg', label: 'Kilograms' },
      { value: 'g', label: 'Grams' },
      { value: 'lb', label: 'Pounds' }
    ]
  };

  constructor(private productService: ProductService,
    private tosterService: ToastrService,
    private route: ActivatedRoute,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    // Initialize the form with empty/default values
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      sku: new FormControl(''),
      barcode: new FormControl(''),
      category: new FormControl(''),
      stockQuantity: new FormControl('', Validators.required),
      unitType: new FormControl(''),
      unit: new FormControl(''),
      unitValue: new FormControl(''),
      taxRate: new FormControl(''),
      isAvailable: new FormControl(true),
      manufactureDate: new FormControl(''),
      expiryDate: new FormControl(''),
      image: new FormControl(null),
    });

    // Check for optional route param "id" and load product if present
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = params.get('id') ? parseInt(params.get('id')!) : null;
          return this.productId ? this.productService.getProduct(this.productId) : EMPTY;
        })
      )
      .subscribe((response) => {
        // Patch form values with the fetched product data
        let product: Product = response.data;
        this.imagePreview = product.image;
        this.productForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          sku: product.sku,
          barcode: product.barcode,
          category: product.category,
          stockQuantity: product.stockQuantity,
          unitType: product.unitType,
          unit: product.unit,
          unitValue: product.unitValue,
          taxRate: product.taxRate,
          isAvailable: product.isAvailable,
          manufactureDate: product.manufactureDate
            ? new Date(product.manufactureDate).toISOString().split('T')[0]
            : null,
          expiryDate: product.expiryDate
            ? new Date(product.expiryDate).toISOString().split('T')[0]
            : null,
          image: product.image
        });
        this.onUnitTypeChange();
      });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = {
        ...this.productForm.value,
        //Assuming you want to store the image URL
      };

      ['taxRate', 'sku', 'barcode', 'category', 'unit', 'manufactureDate', 'expiryDate', 'unitType', 'unitValue'].forEach(field => {
        if (product[field] === '') {
          product[field] = null;
        }
      });
      
      if (this.productId) { 
        this.spinnerService.show();
        this.productService.updateProduct(this.productId, product).subscribe((response) => {

          if (response.success) {
            this.productForm.patchValue({
              ...response.data,
              manufactureDate: response.data.manufactureDate
              ? new Date(product.manufactureDate).toISOString().split('T')[0]
              : null,
            expiryDate: response.data.expiryDate
              ? new Date(product.expiryDate).toISOString().split('T')[0]
              : null,
            });
            this.spinnerService.hide();
            this.tosterService.success('Product updated successfully!', 'Success');
          } else {
            this.spinnerService.hide();
            this.tosterService.error('Failed to add product.', 'Error');
          }
        },
          (error) => {
            this.tosterService.error('Failed to add product.', 'Error');
          }

        );
      } else {
        this.spinnerService.show();
        this.productService.addProduct(product).subscribe(
          (response) => {
            this.tosterService.success('Product added successfully!', 'Success');
            this.spinnerService.hide();
            this.productForm.reset();
            this.productForm.get('isAvailable').setValue(true);
          },
          (error) => {
            this.tosterService.error('Failed to add product.', 'Error');
          }
        );
      }

    } else {
      this.productForm.markAllAsTouched(); // Force error messages to display
    }
  }

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    this.handleFile(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const file = event.dataTransfer?.files?.[0];
    this.handleFile(file);
  }

  handleFile(file: File | undefined) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.productForm.patchValue({
        image: this.imagePreview, // Update form with the image preview
      });
    };
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.imagePreview = null;
    this.productForm.get('image')?.reset(); // Optional, if you use a form control for image
  }

  // ViewChild to reference the input

  triggerFileSelect() {
    this.fileInput.nativeElement.click();
  }

  onUnitTypeChange(): void {
    const selectedType = this.productForm.get('unitType')?.value;
    this.availableUnits = this.unitOptions[selectedType] || [];

    const unitControl = this.productForm.get('unit');
    const unitValueControl = this.productForm.get('unitValue');
    if (selectedType) {
      unitControl?.setValidators([Validators.required]);
      unitValueControl?.setValidators([Validators.required, Validators.min(0.01)]);
    } else {
      unitControl?.clearValidators();
      unitValueControl?.clearValidators();
    }
  
    // ⚠️ Important: Update value and validity
    unitControl?.updateValueAndValidity();
    unitValueControl?.updateValueAndValidity();

    unitControl?.updateValueAndValidity();
    unitValueControl?.updateValueAndValidity();
  
  }
}

