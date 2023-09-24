# Portal Tasks

Tasks related to the portal, including the portal's UI, state, and navigation.

---

## Create Product UI in the portal

- **Description**: You need to create the Product UI in the portal.
- **Tags**: Portal, UI, Menu, Product.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to create the Product UI in the portal, and make sure that the UI is working correctly.
The UI should be able to show product list, and product details, and create, update, delete product.

### Expected Outcome

- Product Table UI using (AndDesign/ProComponents) with the following columns:
    - Product ID (Key: ID, DataIndex: ID, Sortable: true, valueType: digit).
    - Product name. (Key:name, DataIndex: name, Sortable: true).
    - Product price. (Key:price, DataIndex: price, Sortable: true, valueType: money).
    - Product Credit. (Key:credit, DataIndex: credit, Sortable: true, valueType: digit).
    - Product discount (Key:discount, DataIndex: discount, Sortable: true, valueType: percent).
    - Product discount type. (Key:discountType, DataIndex: discountType, Sortable: true, valueType: select, valueEnum:
      {1: {text: 'Percent', status: 'Success'}, 2: {text: 'Fixed', status: 'Error'}}).
    - Product discount end date. (Key:discountEndDate, DataIndex: discountEndDate, Sortable: true, valueType: date).
    - Product Created At. (Key:createdAt, DataIndex: createdAt, Sortable: true, valueType: dateTime).
    - Product actions (Edit, Delete). (Key:actions, valueType: option, render: {edit, delete}).
- Product Add button, to open the added product drawer.
    - Product name. ProFormText.
    - Product price. ProFormMoney.
    - Product Credit. ProFormDigit.
    - Product discount ProFormDigit
    - Product discount type. ProFormSelect.
    - Product discount end date. ProFormDatePicker.
    - Product description. ProFormTextArea.
    - Product Add button.
- Product Edit button, to open the edited product drawer.
    - Product name. ProFormText.
    - Product price. ProFormMoney.
    - Product Credit. ProFormDigit.
    - Product discount ProFormDigit
    - Product discount type. ProFormSelect.
    - Product discount end date. ProFormDatePicker.
    - Product description. ProFormTextArea.
    - Product Edit button.
- Product Delete button, to open the delete product modal.
- Product Delete modal, to delete the product.
- Testing Mock Data for the product list.

### Tasks

- [ ] Create Product Table UI.
- [ ] Create Product Add Drawer.
- [ ] Create Product Edit Drawer.
- [ ] Create Product Delete Modal.
- [ ] Create Product Mock Data.
- [ ] Test The UI

### Help

- Use `ProTable` from `https://procomponents.ant.design/en-US/components/table` for the table.
- Use `ProFormText` from `https://procomponents.ant.design/en-US/components/form` for the text.
- Use `ProFormMoney` from `https://procomponents.ant.design/en-US/components/form` for the money.
- Use `ProFormDigit` from `https://procomponents.ant.design/en-US/components/form` for the digit.
- Use `ProFormSelect` from `https://procomponents.ant.design/en-US/components/form` for the select.
- Use `ProFormDatePicker` from `https://procomponents.ant.design/en-US/components/form` for the date.
- Use `ProFormTextArea` from `https://procomponents.ant.design/en-US/components/form` for the text area.

### Architecture & Design

#### Files structure

- `src/views/Products/components/ProductTable.tsx` - Product Table Component.
- `src/views/Products/components/ProductAddForm.tsx` - Product Adds Form Component.
- `src/views/Products/components/ProductEditForm.tsx` - Product Edit Form Component.
- `src/views/Products/components/ProductDeleteModal.tsx` - Product Delete Modal Component.
- `src/views/Products/index.tsx` - Product Page Component.
- `src/views/Products/columns.ts` - Product Table Columns.
- `src/views/Products/mock.ts` - Product Mock Test Data.

#### Code structure

- `index.tsx` Main Component, Contains:
    - `ProductTable` Component.
    - `ProductAddForm` Component.
    - `ProductEditForm` Component.
    - `ProductDeleteModal` Component.
    - `States` hook.
        - `productList` state.
        - `productAddFormVisible` state,
          with `onAddFormClose`, `onAddFormFinish`, `onAddFormFinishFailed`, `onAddButtonClick`
          functions.
        - `productEditFormVisible` state, with `onEditFormClose`, `onEditFormFinish`, `onEditFormFinishFailed`,
          `onEditButtonClick` functions.
        - `productDeleteModalVisible` state, with `onDeleteModalClose`, `onDeleteModalDelete`, `onDeleteButtonClick`
          functions.
- `ProductTable` Component, Contains:
    - `ProductTable` from `https://procomponents.ant.design/en-US/components/table`.
    - `columns` from `./columns.ts`.
    - `mockData` from `./mock.ts`.
    - `onPressEdit` function, Connected to `ProductEditForm` Component.
    - `onPressDelete` function. Connected to `ProductDeleteModal` Component.
- `ProductAddForm` Component, Contains:
    - `ProductAddForm` from `https://procomponents.ant.design/en-US/components/form`.
    - `productAddFormVisible` from Parent Component.
    - `onFinish` function, with `productID` parameter, Connected to `onAddFormFinish` function in Parent Component.
    - `onFinishFailed` function. Connected to `onAddFormFinishFailed` function in Parent Component.
    - `onClose` function. Connected to `onAddFormClose` function in Parent Component.
- `ProductEditForm` Component, Contains:
    - `ProductEditForm` from `https://procomponents.ant.design/en-US/components/form`.
    - `productEditFormVisible` from Parent Component.
    - `onFinish` function with `productID` parameter Connected to `onEditFormFinish` function in Parent Component.
    - `onFinishFailed` function. Connected to `onEditFormFinishFailed` function in Parent Component.
    - `onClose` function. Connected to `onEditFormClose` function in Parent Component.
- `ProductDeleteModal` Component, Contains:
    - `ProductDeleteModal` from `https://procomponents.ant.design/en-US/components/modal`.
    - `productDeleteModalVisible` from Parent Component.
    - `onClose` function, Connected to `onDeleteModalClose` function in Parent Component.
    - `onDelete` function, Connected to `onDeleteModalDelete` function in Parent Component.

### Guidelines

- Use the same structure as the other pages in the portal.
- The files, code, and UI should be clean and readable.
- Lint the code before pushing it, and fix the lint errors.
- Fix Prettier errors before pushing the code.
- Don't keep the commented, unused, or unnecessary code.
- The `index.tsx` Must include the components, states, and functions.
- `ProductTable`, `ProductAddForm`, `ProductEditForm`, `ProductDeleteModal` Must be in separate files, and just import
  them in `index.tsx`.
- The `ProductTable` Must include the `columns` and `mockData` from separate files.

---

## Implement Product APIs in the portal

- **Description**: You need to implement the Product APIs in the portal.
- **Tags**: Portal, API, Menu, Product.
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

We need to implement the Product APIs in the portal, and make sure that the APIs are working correctly.
The Product UI in the portal should be able to create, read, update, and delete products using the APIs.

### Expected Outcome

- Product APIs.
- Product List With Query Params (Pagination, Search, Sort, Filter, etc.).
- Implement Create Product API.
- Implement Update Product API.
- Implement Delete Product API.
- Implement Get Product API.
- Implement Get Products API.

### Tasks

- [ ] Add the Product APIs to the portal.
- [ ] Create Product List With Query Params (Pagination, Search, Sort, Filter, etc.). (Using Query Engine)
- [ ] Implement Create Product API.
- [ ] Implement Update Product API.
- [ ] Implement Delete Product API.
- [ ] Implement Get Product API.
- [ ] Implement Get Products API.
- [ ] Check the functionality of the Product UI in the portal.

### Help

- You can use the old way to add the APIs to the portal, Using the Query Engine.
- Check `Categories` Page in the portal for an example of the old way.

### Guidelines

- Use the same structure as the other pages in the portal.
- The files, code, and UI should be clean and readable.
- Lint the code before pushing it, and fix the lint errors.
