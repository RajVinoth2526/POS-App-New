(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const dashboard_component_1 = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
const add_product_component_1 = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
const sales_order_component_1 = __webpack_require__(/*! ./components/sales-order/sales-order.component */ "./src/app/components/sales-order/sales-order.component.ts");
const settings_component_1 = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"));
const routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'add-product', component: add_product_component_1.AddProductComponent },
    { path: 'sales-order-process', component: sales_order_component_1.SalesOrderComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
];
class AppRoutingModule {
}
exports.AppRoutingModule = AppRoutingModule;
AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes)],
        router_1.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! ./service/system.service */ "./src/app/service/system.service.ts"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"));
const i3 = tslib_1.__importStar(__webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts"));
const i4 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"));
const i5 = tslib_1.__importStar(__webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts"));
class AppComponent {
    constructor(settingsService, spinner) {
        this.settingsService = settingsService;
        this.spinner = spinner;
        this.getThemeSettings();
    }
    ngOnInit() {
    }
    getThemeSettings() {
        this.spinner.show();
        this.settingsService.getAllSystemThemeSettings()
            .subscribe((response) => {
            this.spinner.hide();
            const themes = response.data;
            const theme = (themes === null || themes === void 0 ? void 0 : themes[0]) || environment_1.environment.defaultThemeSettings;
            this.settingsService.updateThemeSettingsValue(theme);
            document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
            document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
            document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
            document.body.style.setProperty('--theme-font-family', theme.fontStyle);
        });
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.SystemService), i0.ɵɵdirectiveInject(i2.NgxSpinnerService)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "app-container"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-multiple", 3, "fullScreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-header");
        i0.ɵɵelement(2, "router-outlet");
        i0.ɵɵelement(3, "app-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "ngx-spinner", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("fullScreen", true);
    } }, directives: [i3.HeaderComponent, i4.RouterOutlet, i5.FooterComponent, i2.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: i1.SystemService }, { type: i2.NgxSpinnerService }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const product_list_component_1 = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
const cart_component_1 = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
const dashboard_component_1 = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
const header_component_1 = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
const footer_component_1 = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
const add_product_component_1 = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const sales_order_component_1 = __webpack_require__(/*! ./components/sales-order/sales-order.component */ "./src/app/components/sales-order/sales-order.component.ts");
const settings_component_1 = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
const ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            ngx_spinner_1.NgxSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        product_list_component_1.ProductListComponent,
        cart_component_1.CartComponent,
        dashboard_component_1.DashboardComponent,
        header_component_1.HeaderComponent,
        footer_component_1.FooterComponent,
        add_product_component_1.AddProductComponent,
        sales_order_component_1.SalesOrderComponent,
        settings_component_1.SettingsComponent], imports: [platform_browser_1.BrowserModule,
        app_routing_module_1.AppRoutingModule,
        forms_1.ReactiveFormsModule,
        http_1.HttpClientModule,
        forms_1.FormsModule,
        animations_1.BrowserAnimationsModule,
        ngx_spinner_1.NgxSpinnerModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    product_list_component_1.ProductListComponent,
                    cart_component_1.CartComponent,
                    dashboard_component_1.DashboardComponent,
                    header_component_1.HeaderComponent,
                    footer_component_1.FooterComponent,
                    add_product_component_1.AddProductComponent,
                    sales_order_component_1.SalesOrderComponent,
                    settings_component_1.SettingsComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    app_routing_module_1.AppRoutingModule,
                    forms_1.ReactiveFormsModule,
                    http_1.HttpClientModule,
                    forms_1.FormsModule,
                    animations_1.BrowserAnimationsModule,
                    ngx_spinner_1.NgxSpinnerModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! src/app/service/product.service */ "./src/app/service/product.service.ts"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"));
function AddProductComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵtext(2, "Preview Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.imagePreview, i0.ɵɵsanitizeUrl);
} }
function AddProductComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵtext(2, "Preview Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.imagePreview, i0.ɵɵsanitizeUrl);
} }
class AddProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.imagePreview = null; // This will hold the image preview URL
    }
    ngOnInit() {
        this.productForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', forms_1.Validators.required),
            price: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(1)]),
            image: new forms_1.FormControl(null)
        });
    }
    // Method to handle file selection and display image preview
    onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(file);
            this.productForm.patchValue({ image: file }); // Optionally, store the file in the form control
        }
    }
    onSubmit() {
        if (this.productForm.valid) {
            const newProduct = {
                name: this.productForm.value.name,
                imageUrl: this.productForm.value.description,
                price: this.productForm.value.price
                //Assuming you want to store the image URL
            };
            this.productService.addProduct(newProduct).subscribe((response) => {
                console.log('Product added successfully:', response);
                alert('Product added successfully!');
            }, (error) => {
                console.error('Error adding product:', error);
                alert('Error adding product!');
            });
            console.log(this.productForm.value);
        }
    }
}
exports.AddProductComponent = AddProductComponent;
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(i0.ɵɵdirectiveInject(i1.ProductService)); };
AddProductComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 50, vars: 4, consts: [[1, "add-product-container"], [1, "add-product-title"], [1, "add-product-container-scroll"], [1, "shadow", "p-4", "rounded-lg", "bg-white", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "productName", 1, "font-weight-bold"], ["type", "text", "id", "productName", "formControlName", "name", "placeholder", "Enter product name", "required", "", 1, "form-control", "form-control-lg"], ["for", "productDescription", 1, "font-weight-bold"], ["id", "productDescription", "formControlName", "description", "placeholder", "Enter product description", "rows", "4", "required", "", 1, "form-control", "form-control-lg"], ["for", "productPrice", 1, "font-weight-bold"], ["type", "number", "id", "productPrice", "formControlName", "price", "placeholder", "Enter product price", "required", "", 1, "form-control", "form-control-lg"], ["for", "productImage", 1, "font-weight-bold"], ["type", "file", "id", "productImage", 1, "form-control-file", 3, "change"], ["class", "form-group", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "px-4", "py-2", "mt-3", 3, "disabled"], [1, "font-weight-bold"], ["alt", "Image Preview", "width", "150", "height", "150", 1, "img-fluid", "rounded", "shadow-sm", 3, "src"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h1", 1);
        i0.ɵɵtext(2, "Add new product");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "form", 3);
        i0.ɵɵlistener("ngSubmit", function AddProductComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "label", 5);
        i0.ɵɵtext(7, "Product Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵelementStart(10, "label", 7);
        i0.ɵɵtext(11, "Product Description");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "textarea", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 4);
        i0.ɵɵelementStart(14, "label", 9);
        i0.ɵɵtext(15, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 4);
        i0.ɵɵelementStart(18, "label", 9);
        i0.ɵɵtext(19, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 4);
        i0.ɵɵelementStart(22, "label", 9);
        i0.ɵɵtext(23, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 4);
        i0.ɵɵelementStart(26, "label", 9);
        i0.ɵɵtext(27, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 4);
        i0.ɵɵelementStart(30, "label", 9);
        i0.ɵɵtext(31, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(32, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 4);
        i0.ɵɵelementStart(34, "label", 9);
        i0.ɵɵtext(35, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(36, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 4);
        i0.ɵɵelementStart(38, "label", 9);
        i0.ɵɵtext(39, "Product Price");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(40, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 4);
        i0.ɵɵelementStart(42, "label", 11);
        i0.ɵɵtext(43, "Upload Product Image");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "input", 12);
        i0.ɵɵlistener("change", function AddProductComponent_Template_input_change_44_listener($event) { return ctx.onFileChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(45, AddProductComponent_div_45_Template, 4, 1, "div", 13);
        i0.ɵɵtemplate(46, AddProductComponent_div_46_Template, 4, 1, "div", 13);
        i0.ɵɵelementStart(47, "div", 14);
        i0.ɵɵelementStart(48, "button", 15);
        i0.ɵɵtext(49, "Add Product");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.productForm);
        i0.ɵɵadvance(41);
        i0.ɵɵproperty("ngIf", ctx.imagePreview);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.imagePreview);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.productForm.invalid);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i2.RequiredValidator, i2.NumberValueAccessor, i3.NgIf], styles: [".add-product-container[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n    width: 60vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center; \r\n    align-items: center;     \r\n    padding: 20px;\r\n    margin: 0 auto;  \r\n  }\r\n.add-product-container-scroll[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    height: 100%; \r\n    width: 100%;\r\n  }\r\n.add-product-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 2%;\r\n  }\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    border-color: #007bff;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background-color: #0056b3;\r\n    border-color: #004085;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\nimg.img-fluid[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease-in-out;\r\n  }\r\nimg.img-fluid[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n  }\r\n\r\n@media (max-width: 767px) {\r\n    .form-control[_ngcontent-%COMP%], .form-control-file[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n      font-size: 1.1rem; \r\n    }\r\n  \r\n    .form-group[_ngcontent-%COMP%] {\r\n      margin-bottom: 1.5rem;\r\n    }\r\n  }\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n    .form-control[_ngcontent-%COMP%], .form-control-file[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n      font-size: 1.2rem; \r\n    }\r\n  \r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 90%;\r\n    }\r\n  }\r\n@media (min-width: 1025px) {\r\n    .form-control[_ngcontent-%COMP%], .form-control-file[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n      font-size: 1.3rem; \r\n    }\r\n  \r\n    .container[_ngcontent-%COMP%] {\r\n      max-width: 50%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBRSxzQkFBc0I7SUFDL0MsbUJBQW1CLE1BQU0sd0JBQXdCO0lBQ2pELGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxXQUFXO0VBQ2I7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0UscUJBQXFCO0lBQ3JCLGdEQUFnRDtFQUNsRDtBQUVBLHdCQUF3QjtBQUN4QjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsd0NBQXdDO0VBQzFDO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0Usc0NBQXNDO0VBQ3hDO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQSw0REFBNEQ7QUFDNUQ7SUFDRTtNQUNFLGlCQUFpQixFQUFFLHNDQUFzQztJQUMzRDs7SUFFQTtNQUNFLHFCQUFxQjtJQUN2QjtFQUNGO0FBRUE7SUFDRTtNQUNFLGlCQUFpQixFQUFFLGdDQUFnQztJQUNyRDs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxpQkFBaUIsRUFBRSxvQ0FBb0M7SUFDekQ7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFbnN1cmUgZnVsbCBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBhbmQgY2VudGVyZWQgY29udGVudCAqL1xyXG4uYWRkLXByb2R1Y3QtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogdmVydGljYWxseSBjZW50ZXIgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAvKiBob3Jpem9udGFsbHkgY2VudGVyICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87ICBcclxuICB9XHJcblxyXG4gIC5hZGQtcHJvZHVjdC1jb250YWluZXItc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIFRha2UgcmVtYWluaW5nIHNwYWNlICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hZGQtcHJvZHVjdC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgLyogRm9ybSBmaWVsZCBzdHlsaW5nICovXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJ1dHRvbiBob3ZlciBlZmZlY3QgKi9cclxuICAuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNDA4NTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEltYWdlIHN0eWxpbmcgKi9cclxuICBpbWcuaW1nLWZsdWlkIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBpbWcuaW1nLWZsdWlkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZGl0aW9uYWwgcmVzcG9uc2l2ZSB0d2Vha3MgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mb3JtLWNvbnRyb2wsIC5mb3JtLWNvbnRyb2wtZmlsZSwgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAvKiBTbGlnaHRseSBsYXJnZXIgZm9yIHRvdWNoIHNjcmVlbnMgKi9cclxuICAgIH1cclxuICBcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5mb3JtLWNvbnRyb2wsIC5mb3JtLWNvbnRyb2wtZmlsZSwgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyAvKiBNZWRpdW0gZGV2aWNlcyBsaWtlIHRhYmxldHMgKi9cclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbC1maWxlLCAuYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07IC8qIEZvciBsYXJnZSBkZXZpY2VzIGxpa2UgZGVza3RvcHMgKi9cclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddProductComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return [{ type: i1.ProductService }]; }, null); })();


/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"));
function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "h4", 7);
    i0.ɵɵtext(3, "\uD83D\uDED2 Your cart is empty!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 8);
    i0.ɵɵtext(5, "Start adding products to see them here.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CartComponent_ng_template_5_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelement(2, "img", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 20);
    i0.ɵɵelementStart(8, "button", 21);
    i0.ɵɵlistener("click", function CartComponent_ng_template_5_tr_18_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.increaseQuantity(i_r5); });
    i0.ɵɵtext(9, " \u25B2 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 19);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵlistener("click", function CartComponent_ng_template_5_tr_18_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.decreaseQuantity(i_r5); });
    i0.ɵɵtext(13, " \u25BC ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 22);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵelementStart(17, "button", 23);
    i0.ɵɵlistener("click", function CartComponent_ng_template_5_tr_18_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.removeFromCart(i_r5); });
    i0.ɵɵtext(18, " \uD83D\uDDD1\uFE0F Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", item_r4.product.name);
    i0.ɵɵproperty("src", item_r4.product.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", item_r4.product.price, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("$", item_r4.totalPrice.toFixed(2), "");
} }
function CartComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "table", 11);
    i0.ɵɵelementStart(3, "thead", 12);
    i0.ɵɵelementStart(4, "tr", 13);
    i0.ɵɵelementStart(5, "th", 14);
    i0.ɵɵtext(6, "Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 14);
    i0.ɵɵtext(8, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th", 14);
    i0.ɵɵtext(10, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 14);
    i0.ɵɵtext(12, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 14);
    i0.ɵɵtext(14, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th", 14);
    i0.ɵɵtext(16, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, CartComponent_ng_template_5_tr_18_Template, 19, 6, "tr", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 16);
    i0.ɵɵelementStart(20, "h4", 17);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r2.cart);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" \uD83E\uDDFE Grand Total: $", ctx_r2.getTotalAmount().toFixed(2), " ");
} }
class CartComponent {
    constructor() {
        this.cart = [];
        this.cartChange = new core_1.EventEmitter();
    }
    // Define the card object with some dummy data
    get total() {
        return this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    }
    removeItem(index) {
        this.cart.splice(index, 1);
        this.cartChange.emit(this.cart);
    }
    checkout(item) {
        alert('Order placed!');
        this.cart = [];
        this.cartChange.emit([]);
    }
    getTotalAmount() {
        return this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    }
    removeFromCart(index) {
        this.cart.splice(index, 1);
    }
    increaseQuantity(index) {
        this.cart[index].quantity++;
        this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].product.price;
    }
    decreaseQuantity(index) {
        if (this.cart[index].quantity > 1) {
            this.cart[index].quantity--;
            this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].product.price;
        }
        else {
            // Optional: if quantity becomes 0, you can remove the item
            this.removeFromCart(index);
        }
    }
}
exports.CartComponent = CartComponent;
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CartComponent, selectors: [["app-cart"]], inputs: { cart: "cart" }, outputs: { cartChange: "cartChange" }, decls: 7, vars: 2, consts: [[1, "container", "my-5"], [1, "text-center", "mb-4"], [1, "fw-bold"], ["class", "d-flex justify-content-center align-items-center", "style", "height: 300px;", 4, "ngIf", "ngIfElse"], ["cartContent", ""], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "300px"], [1, "bg-light", "rounded-4", "shadow", "p-5", "text-center", 2, "max-width", "400px", "width", "100%"], [1, "text-muted", "mb-3"], [1, "text-secondary"], [1, "shadow", "rounded-4", "p-3"], [2, "max-height", "350px", "overflow-y", "auto"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light", "sticky-top", "bg-light"], [1, "text-center"], ["scope", "col"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "mt-4", "text-end"], [1, "fw-bold", "text-primary"], [2, "height", "60px", "width", "60px", "object-fit", "cover", "border-radius", "10px", 3, "src", "alt"], [1, "fw-semibold"], [1, "d-flex", "flex-column", "align-items-center", "gap-1"], [1, "btn", "btn-light", "btn-sm", "p-1", 2, "width", "30px", "height", "30px", 3, "click"], [1, "fw-semibold", "text-dark"], [1, "btn", "btn-sm", "btn-danger", "rounded-pill", "px-3", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h2", 2);
        i0.ɵɵtext(3, "\uD83D\uDED2 Your Cart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CartComponent_div_4_Template, 6, 0, "div", 3);
        i0.ɵɵtemplate(5, CartComponent_ng_template_5_Template, 22, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.cart.length === 0)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html'
            }]
    }], null, { cart: [{
            type: core_1.Input
        }], cartChange: [{
            type: core_1.Output
        }] }); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"));
const _c0 = function () { return { color: "var(--primary-color)" }; };
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("click", function DashboardComponent_div_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.navigateTo(item_r1.route); });
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelement(3, "i", 6);
    i0.ɵɵelementStart(4, "h5", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("", item_r1.icon, " fa-3x mb-3");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.name);
} }
class DashboardComponent {
    constructor(router) {
        this.router = router;
        this.dashboardItems = [
            { name: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/sales-order-process' },
            { name: 'Add Product', icon: 'fas fa-plus-square', route: '/add-product' },
            { name: 'View Products', icon: 'fas fa-boxes', route: '/view-products' },
            { name: 'Sales Analysis', icon: 'fas fa-chart-line', route: '/sales-analysis' },
            { name: 'Orders', icon: 'fas fa-shopping-cart', route: '/orders' },
            { name: 'Inventory', icon: 'fas fa-warehouse', route: '/inventory' },
            { name: 'Users', icon: 'fas fa-users', route: '/users' },
            { name: 'Reports', icon: 'fas fa-file-alt', route: '/reports' },
            { name: 'Settings', icon: 'fas fa-cogs', route: '/settings' }
        ];
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
    ngOnInit() {
    }
}
exports.DashboardComponent = DashboardComponent;
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
DashboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 1, consts: [[1, "container", "my-5"], [1, "row"], ["class", "col-md-3 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-4"], [1, "card", "text-center", "shadow-sm", "h-100", "dashboard-card", 3, "click"], [1, "card-body", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [3, "ngStyle"], [1, "card-title"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, DashboardComponent_div_2_Template, 6, 6, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.dashboardItems);
    } }, directives: [i2.NgForOf, i2.NgStyle], styles: [".dashboard-card[_ngcontent-%COMP%] {\r\n    transition: transform 0.2s, background-color 0.2s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .dashboard-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    background-color: #f8f9fa;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpREFBaUQ7SUFDakQsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: i1.Router }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.FooterComponent = FooterComponent;
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "bg-dark", "text-white", "text-center", "py-3", "mt-auto"], [1, "container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "footer", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "small");
        i0.ɵɵtext(3, "\u00A9 2025 MyPOS App. All rights reserved.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyAqL1xyXG5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.HeaderComponent = HeaderComponent;
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "shadow-sm", "pos-header"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "fw-bold", 2, "color", "white"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵtext(3, "\uD83C\uDFE2 MyCompany");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #ffffff33;\r\n    background-color: rgb(1, 27, 80);\r\n  }\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0lBQ0ksa0NBQWtDO0lBQ2xDLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyAqL1xyXG4ubmF2YmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMjcsIDgwKTtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"));
function ProductListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelement(2, "img", 10);
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵelementStart(4, "h5", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 13);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 14);
    i0.ɵɵlistener("click", function ProductListComponent_div_8_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const product_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.addToCart(product_r1); });
    i0.ɵɵtext(9, " Add to Cart ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", product_r1.name);
    i0.ɵɵproperty("src", product_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", product_r1.price.toFixed(2), "");
} }
class ProductListComponent {
    constructor() {
        this.add = new core_1.EventEmitter();
        this.searchQuery = '';
        this.filteredProducts = [];
        this.products = [
            {
                name: 'Ice cream',
                price: 29.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoGiQM749deGW7TWVSgNhlogoKhOhn6RvA1AuI_shsMowIdeDve1WMgphYZjzcmUkIj8&usqp=CAU'
            },
            {
                name: 'Ice cream2',
                price: 27.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoGiQM749deGW7TWVSgNhlogoKhOhn6RvA1AuI_shsMowIdeDve1WMgphYZjzcmUkIj8&usqp=CAU'
            },
            {
                name: 'Ice cream3',
                price: 27.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoGiQM749deGW7TWVSgNhlogoKhOhn6RvA1AuI_shsMowIdeDve1WMgphYZjzcmUkIj8&usqp=CAU'
            },
            {
                name: 'Milk shake',
                price: 49.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3e1FDbW6GxsQNgMUaBOhuSY0XPoq43VAmg&s'
            },
            {
                name: 'Vanilla milk shake',
                price: 89.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H-LQUOQa_UkpLxlCQyuwixXdBz9sWUSF4w&s'
            },
            {
                name: 'Ice cream',
                price: 29.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoGiQM749deGW7TWVSgNhlogoKhOhn6RvA1AuI_shsMowIdeDve1WMgphYZjzcmUkIj8&usqp=CAU'
            },
            {
                name: 'Milk shake',
                price: 49.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3e1FDbW6GxsQNgMUaBOhuSY0XPoq43VAmg&s'
            },
            // {
            //   name: 'Chocolate milk shake',
            //   price: 19.99,
            //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40a3S_b3kPxbUdrJ8-yRltvxDqppk-C45tA&s'
            // },
            {
                name: 'Vanilla milk shake',
                price: 89.99,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H-LQUOQa_UkpLxlCQyuwixXdBz9sWUSF4w&s'
            }
        ];
    }
    addToCart(product) {
        this.add.emit(product);
    }
    onSearch() {
        const query = this.searchQuery.trim().toLowerCase();
        if (query) {
            this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(query));
        }
        else {
            this.filteredProducts = this.products;
        }
    }
}
exports.ProductListComponent = ProductListComponent;
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(); };
ProductListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProductListComponent, selectors: [["app-product-list"]], outputs: { add: "add" }, decls: 9, vars: 2, consts: [[1, "container", "my-4"], [1, "mb-4", "text-center"], [1, "row", "justify-content-center", "mb-4"], [1, "col-md-6"], ["type", "text", "placeholder", "\uD83D\uDD0D Search products...", 1, "form-control", "rounded-pill", "px-4", 3, "ngModel", "ngModelChange", "input"], [1, "scroll-container", 2, "max-height", "60vh", "overflow-y", "auto", "overflow-x", "hidden"], [1, "row", "g-4"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "shadow-sm", "border-0", "rounded-4", "product-card"], [1, "card-img-top", "rounded-top-4", 3, "src", "alt"], [1, "card-body", "text-center"], [1, "card-title", "fw-bold", "text-truncate", 2, "max-width", "100%"], [1, "text-muted"], [1, "btn", "btn-outline-primary", "rounded-pill", "px-2", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3", 1);
        i0.ɵɵtext(2, "\uD83D\uDED2 Products");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "input", 4);
        i0.ɵɵlistener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchQuery = $event; })("input", function ProductListComponent_Template_input_input_5_listener() { return ctx.onSearch(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵtemplate(8, ProductListComponent_div_8_Template, 10, 4, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.searchQuery);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.products);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductListComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html'
            }]
    }], null, { add: [{
            type: core_1.Output
        }] }); })();


/***/ }),

/***/ "./src/app/components/sales-order/sales-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sales-order/sales-order.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! ../product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! ../cart/cart.component */ "./src/app/components/cart/cart.component.ts"));
class SalesOrderComponent {
    constructor() {
        this.cart = [];
    }
    ngOnInit() {
    }
    addToCart(product) {
        const existingItem = this.cart.find(item => item.product.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice = existingItem.quantity * product.price;
        }
        else {
            this.cart.push({
                product,
                quantity: 1,
                totalPrice: product.price
            });
        }
    }
}
exports.SalesOrderComponent = SalesOrderComponent;
SalesOrderComponent.ɵfac = function SalesOrderComponent_Factory(t) { return new (t || SalesOrderComponent)(); };
SalesOrderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SalesOrderComponent, selectors: [["app-sales-order"]], decls: 5, vars: 1, consts: [[1, "row"], [1, "col-md-6"], [3, "add"], [3, "cart", "cartChange"]], template: function SalesOrderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "app-product-list", 2);
        i0.ɵɵlistener("add", function SalesOrderComponent_Template_app_product_list_add_2_listener($event) { return ctx.addToCart($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "app-cart", 3);
        i0.ɵɵlistener("cartChange", function SalesOrderComponent_Template_app_cart_cartChange_4_listener($event) { return ctx.cart = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cart", ctx.cart);
    } }, directives: [i1.ProductListComponent, i2.CartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZXMtb3JkZXIvc2FsZXMtb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SalesOrderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-sales-order',
                templateUrl: './sales-order.component.html',
                styleUrls: ['./sales-order.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"));
const i2 = tslib_1.__importStar(__webpack_require__(/*! src/app/service/system.service */ "./src/app/service/system.service.ts"));
const i3 = tslib_1.__importStar(__webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"));
class SettingsComponent {
    constructor(fb, systemSettings, spinnerService) {
        this.fb = fb;
        this.systemSettings = systemSettings;
        this.spinnerService = spinnerService;
        this.themeId = null;
    }
    ngOnInit() {
        this.systemSettings.themeSettings$.subscribe((data) => {
            if (data == null)
                return;
            this.themeForm = this.fb.group({
                primaryColor: [data.primaryColor],
                secondaryColor: [data.secondaryColor],
                backgroundColor: [data.backgroundColor],
                fontStyle: [data.fontStyle]
            });
        });
    }
    onApplyTheme() {
        var _a, _b;
        const theme = this.themeForm.value;
        // If theme exists, update, otherwise create a new one
        if ((_a = this.systemSettings.getCurrentThemeSettingsValue()) === null || _a === void 0 ? void 0 : _a.id) {
            // Update the theme settings
            this.spinnerService.show();
            this.systemSettings.updateThemeSettings((_b = this.systemSettings.getCurrentThemeSettingsValue()) === null || _b === void 0 ? void 0 : _b.id, theme).subscribe(response => {
                if (response.success) {
                    this.applyThemeValue(response.data); // Use the data from response
                    this.spinnerService.hide();
                }
            });
        }
        else {
            // Create a new theme settings
            this.spinnerService.show();
            this.systemSettings.createThemeSettings(theme).subscribe(response => {
                if (response.success) {
                    this.spinnerService.hide();
                    this.applyThemeValue(response.data); // Use the data from response
                }
            });
        }
    }
    applyThemeValue(theme) {
        // Update the theme settings
        this.systemSettings.updateThemeSettingsValue(theme);
        // Apply theme styles dynamically to the document
        document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.body.style.setProperty('--theme-font-family', theme.fontStyle);
    }
    onResetTheme() {
        this.themeForm.reset({
            primaryColor: environment_1.environment.defaultThemeSettings.primaryColor,
            secondaryColor: environment_1.environment.defaultThemeSettings.secondaryColor,
            backgroundColor: environment_1.environment.defaultThemeSettings.backgroundColor,
            fontStyle: environment_1.environment.defaultThemeSettings.fontStyle
        });
        this.onApplyTheme();
    }
}
exports.SettingsComponent = SettingsComponent;
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.SystemService), i0.ɵɵdirectiveInject(i3.NgxSpinnerService)); };
SettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["app-settings"]], decls: 120, vars: 1, consts: [[1, "container", "my-4"], [1, "card", "shadow-sm", "border-0", "rounded-4", "p-4"], [1, "mb-4", "text-center", "fw-bold"], ["id", "settingsTabs", "role", "tablist", 1, "nav", "nav-pills", "justify-content-center", "mb-4"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "pill", "data-bs-target", "#profileSettings", "type", "button", "role", "tab", 1, "nav-link", "active"], ["data-bs-toggle", "pill", "data-bs-target", "#paymentSettings", "type", "button", "role", "tab", 1, "nav-link"], ["data-bs-toggle", "pill", "data-bs-target", "#printerSettings", "type", "button", "role", "tab", 1, "nav-link"], ["data-bs-toggle", "pill", "data-bs-target", "#themeSettings", "type", "button", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "profileSettings", 1, "tab-pane", "fade", "show", "active"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "Enter business name", 1, "form-control"], ["type", "text", "placeholder", "Enter owner name", 1, "form-control"], ["type", "tel", "placeholder", "Enter phone number", 1, "form-control"], ["type", "email", "placeholder", "Enter email", 1, "form-control"], [1, "col-12", "text-end"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill", "px-4"], ["id", "paymentSettings", 1, "tab-pane", "fade"], [1, "form-select"], ["value", "cash"], ["value", "card"], ["value", "upi"], ["type", "text", "placeholder", "Enter currency symbol", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "rounded-pill", "px-4"], ["id", "printerSettings", 1, "tab-pane", "fade"], ["type", "text", "placeholder", "Enter printer name", 1, "form-control"], ["value", "thermal"], ["value", "a4"], ["type", "submit", 1, "btn", "btn-dark", "rounded-pill", "px-4"], ["id", "themeSettings", 1, "tab-pane", "fade"], [1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-md-4"], ["type", "color", "formControlName", "primaryColor", 1, "form-control", "form-control-color"], ["type", "color", "formControlName", "secondaryColor", 1, "form-control", "form-control-color"], ["type", "color", "formControlName", "backgroundColor", 1, "form-control", "form-control-color"], ["formControlName", "fontStyle", 1, "form-select"], ["value", "'Gill Sans', sans-serif"], ["value", "serif"], ["value", "cursive"], ["value", "system-ui"], ["value", "'Segoe UI', sans-serif"], ["value", "'Arial', sans-serif"], ["value", "'Roboto', sans-serif"], ["value", "'Georgia', serif"], ["value", "'Courier New', monospace"], ["value", "'Times New Roman', serif"], [1, "col-12", "d-flex", "justify-content-end", "gap-2"], ["type", "submit", 1, "btn", "btn-info", "rounded-pill", "px-4"], ["type", "button", 1, "btn", "btn-danger", "rounded-pill", "px-4", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-2"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h4", 2);
        i0.ɵɵtext(3, "\u2699\uFE0F POS System Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ul", 3);
        i0.ɵɵelementStart(5, "li", 4);
        i0.ɵɵelementStart(6, "button", 5);
        i0.ɵɵtext(7, " Profile ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "li", 4);
        i0.ɵɵelementStart(9, "button", 6);
        i0.ɵɵtext(10, " Payment ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "li", 4);
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵtext(13, " Printer ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "li", 4);
        i0.ɵɵelementStart(15, "button", 8);
        i0.ɵɵtext(16, " Theme ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 9);
        i0.ɵɵelementStart(18, "div", 10);
        i0.ɵɵelementStart(19, "form");
        i0.ɵɵelementStart(20, "div", 11);
        i0.ɵɵelementStart(21, "div", 12);
        i0.ɵɵelementStart(22, "label", 13);
        i0.ɵɵtext(23, "Business Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 12);
        i0.ɵɵelementStart(26, "label", 13);
        i0.ɵɵtext(27, "Owner Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 12);
        i0.ɵɵelementStart(30, "label", 13);
        i0.ɵɵtext(31, "Phone Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(32, "input", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 12);
        i0.ɵɵelementStart(34, "label", 13);
        i0.ɵɵtext(35, "Email Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(36, "input", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 18);
        i0.ɵɵelementStart(38, "button", 19);
        i0.ɵɵtext(39, "Save Changes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 20);
        i0.ɵɵelementStart(41, "form", 11);
        i0.ɵɵelementStart(42, "div", 12);
        i0.ɵɵelementStart(43, "label", 13);
        i0.ɵɵtext(44, "Preferred Payment Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "select", 21);
        i0.ɵɵelementStart(46, "option", 22);
        i0.ɵɵtext(47, "Cash");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "option", 23);
        i0.ɵɵtext(49, "Card");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "option", 24);
        i0.ɵɵtext(51, "UPI");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 12);
        i0.ɵɵelementStart(53, "label", 13);
        i0.ɵɵtext(54, "Currency");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(55, "input", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "div", 18);
        i0.ɵɵelementStart(57, "button", 26);
        i0.ɵɵtext(58, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "div", 27);
        i0.ɵɵelementStart(60, "form", 11);
        i0.ɵɵelementStart(61, "div", 12);
        i0.ɵɵelementStart(62, "label", 13);
        i0.ɵɵtext(63, "Printer Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(64, "input", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "div", 12);
        i0.ɵɵelementStart(66, "label", 13);
        i0.ɵɵtext(67, "Print Format");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "select", 21);
        i0.ɵɵelementStart(69, "option", 29);
        i0.ɵɵtext(70, "Thermal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "option", 30);
        i0.ɵɵtext(72, "A4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "div", 18);
        i0.ɵɵelementStart(74, "button", 31);
        i0.ɵɵtext(75, "Apply");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "div", 32);
        i0.ɵɵelementStart(77, "form", 33);
        i0.ɵɵlistener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_77_listener() { return ctx.onApplyTheme(); });
        i0.ɵɵelementStart(78, "div", 34);
        i0.ɵɵelementStart(79, "label", 13);
        i0.ɵɵtext(80, "Primary Color");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(81, "input", 35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "div", 34);
        i0.ɵɵelementStart(83, "label", 13);
        i0.ɵɵtext(84, "Secondary Color");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(85, "input", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "div", 34);
        i0.ɵɵelementStart(87, "label", 13);
        i0.ɵɵtext(88, "Background Color");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(89, "input", 37);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(90, "div", 34);
        i0.ɵɵelementStart(91, "label", 13);
        i0.ɵɵtext(92, "Font Family");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(93, "select", 38);
        i0.ɵɵelementStart(94, "option", 39);
        i0.ɵɵtext(95, "Gill Sans");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(96, "option", 40);
        i0.ɵɵtext(97, "Serif");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(98, "option", 41);
        i0.ɵɵtext(99, "Cursive");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(100, "option", 42);
        i0.ɵɵtext(101, "System UI");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "option", 43);
        i0.ɵɵtext(103, "Segoe UI");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "option", 44);
        i0.ɵɵtext(105, "Arial");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(106, "option", 45);
        i0.ɵɵtext(107, "Roboto");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(108, "option", 46);
        i0.ɵɵtext(109, "Georgia");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(110, "option", 47);
        i0.ɵɵtext(111, "Courier New");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(112, "option", 48);
        i0.ɵɵtext(113, "Times New Roman");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(114, "div", 49);
        i0.ɵɵelementStart(115, "button", 50);
        i0.ɵɵtext(116, " Apply Theme ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(117, "button", 51);
        i0.ɵɵlistener("click", function SettingsComponent_Template_button_click_117_listener() { return ctx.onResetTheme(); });
        i0.ɵɵelement(118, "i", 52);
        i0.ɵɵtext(119, " Reset ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(77);
        i0.ɵɵproperty("formGroup", ctx.themeForm);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.SystemService }, { type: i3.NgxSpinnerService }]; }, null); })();


/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"));
class ProductService {
    constructor(http) {
        this.http = http;
        // Set the backend URL here
        this.apiUrl = 'https://localhost:5001/api/products'; // Replace with your backend URL
    }
    // Method to insert a new product
    addProduct(product) {
        return this.http.post(this.apiUrl, product);
    }
}
exports.ProductService = ProductService;
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(i0.ɵɵinject(i1.HttpClient)); };
ProductService.ɵprov = i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/app/service/system.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/system.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const environment_1 = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"));
class SystemService {
    constructor(http) {
        this.http = http;
        this.themeSettingsSubject = new rxjs_1.BehaviorSubject(null);
        this.themeSettings$ = this.themeSettingsSubject.asObservable();
    }
    // Method to update value
    updateThemeSettingsValue(settings) {
        this.themeSettingsSubject.next(settings);
    }
    // Optionally get the current value
    getCurrentThemeSettingsValue() {
        return this.themeSettingsSubject.value;
    }
    // GET: Get theme settings by ID
    getThemeSettings(id) {
        return this.http.get(`${environment_1.environment.apiUrl}api/system/theme-settings/${id}`);
    }
    // Create new theme settings
    createThemeSettings(data) {
        return this.http.post(`${environment_1.environment.apiUrl}api/system/theme-settings`, data);
    }
    // Update existing theme settings
    updateThemeSettings(id, data) {
        return this.http.patch(`${environment_1.environment.apiUrl}api/system/theme-settings/${id}`, data);
    }
    getAllSystemThemeSettings() {
        return this.http.get(`${environment_1.environment.apiUrl}api/system/theme-settings`);
    }
    // GET: getProfileData
    getProfileData(id) {
        return this.http.get(`${environment_1.environment.apiUrl}api/system/profile/${id}`);
    }
    // createProfile
    createProfile(data) {
        return this.http.post(`${environment_1.environment.apiUrl}api/system/profile`, data);
    }
    // updateProfile
    updateProfile(id, data) {
        return this.http.patch(`${environment_1.environment.apiUrl}api/system/profile/${id}`, data);
    }
    // getAllProfile
    getAllProfile() {
        return this.http.get(`${environment_1.environment.apiUrl}api/system/profile`);
    }
}
exports.SystemService = SystemService;
SystemService.ɵfac = function SystemService_Factory(t) { return new (t || SystemService)(i0.ɵɵinject(i1.HttpClient)); };
SystemService.ɵprov = i0.ɵɵdefineInjectable({ token: SystemService, factory: SystemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SystemService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: 'https://localhost:44376/',
    defaultThemeSettings: {
        primaryColor: '#001e3d',
        secondaryColor: '#33475b',
        backgroundColor: '#b4c2cb',
        fontStyle: 'system-ui',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
const __NgCli_bootstrap_1 = tslib_1.__importStar(__webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts"));
const __NgCli_bootstrap_2 = tslib_1.__importStar(__webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"));
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\pos_sytem\pos-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map