# Navigation  

## Overview  
This document defines the navigation structure for the Inventory Management System. It ensures seamless movement between different pages.  

## Navigation Structure  

### 1. User Login Page  
**Path:** `/login`  
- Users log in with credentials.  
- Redirects to the **Dashboard** upon successful login.  

### 2. Dashboard  
**Path:** `/dashboard`  
- Displays sales, profits, and performance metrics.  
- Links to:  
  - **Employee Page** (`/employees`)  
  - **Product & Stock Page** (`/products`)  
  - **Homepage** (`/home`)  

### 3. Employee Page  
**Path:** `/employees`  
- Manages employee details and attendance.  
- Links to:  
  - **Dashboard** (`/dashboard`)  
  - **Homepage** (`/home`)  

### 4. Product & Stock Page  
**Path:** `/products`  
- Tracks product details and stock availability.  
- Links to:  
  - **Dashboard** (`/dashboard`)  
  - **Homepage** (`/home`)  

### 5. Homepage  
**Path:** `/home`  
- Displays company information and user profile.  
- Links to:  
  - **Dashboard** (`/dashboard`)  
  - **Employee Page** (`/employees`)  
  - **Product & Stock Page** (`/products`)  
  - **Logout** (`/logout`)  

## Additional Navigation  
- A **navigation bar (navbar)** will be present on all pages for quick access.  
- Users can **log out** from any page via a logout button linking to `/logout`.  
