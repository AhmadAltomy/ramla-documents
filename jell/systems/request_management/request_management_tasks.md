# Request Management Tasks

## Create request form handler component

### Description

Create a component that handles the request form.

### Explanation

The request form handler component will be used to handle the request form. It will be used to handle the request data from the request form.

Like:

- Request name.
- Request description.
- Request fields.
  - Text field.
  - Number field.
  - Date field.
  - Select field.
  - Radio field.
  - Checkbox field.
  - File field.
  - Image field.

### Expected Outcome

- A component that handles the request form.
- A component that handles the request form fields.
- A component that handles the request form field types.
- A component that handles the request form field types options.


### Example

```tsx
import React from 'react';

import { RequestFormHandler } from '@jell/portal/request-management';

const RequestFormHandlerExample = () => {
  return (
    <RequestFormHandler
      request={{
        name: 'Request Name',
        description: 'Request Description',
        fields: [
          {
            name: 'Text Field',
            type: 'text',
            options: {
              required: true,
              placeholder: 'Text Field Placeholder',
            },
          },
          {
            name: 'Number Field',
            type: 'number',
            options: {
              required: true,
              placeholder: 'Number Field Placeholder',
            },
          },
          {
            name: 'Date Field',
            type: 'date',
            options: {
              required: true,
              placeholder: 'Date Field Placeholder',
            },
          },
          {
            name: 'Select Field',
            type: 'select',
            options: {
              required: true,
              placeholder: 'Select Field Placeholder',
              options: [
                {
                  label: 'Option 1',
                  value: 'option-1',
                },
                {
                  label: 'Option 2',
                  value: 'option-2',
                },
                {
                  label: 'Option 3',
                  value: 'option-3',
                },
              ],
            },
          },
          {
            name: 'Radio Field',
            type: 'radio',
            options: {
              required: true,
              placeholder: 'Radio Field Placeholder',
              options: [
                {
                  label: 'Option 1',
                  value: 'option-1',
                },
                {
                  label: 'Option 2',
                  value: 'option-2',
                },
                {
                  label: 'Option 3',
                  value: 'option-3',
                },
              ],
            },
          },
          {
            name: 'Checkbox Field',
            type: 'checkbox',
            options: {
              required: true,
              placeholder: 'Checkbox Field Placeholder',
              options: [
                {
                  label: 'Option 1',
                  value: 'option-1',
                },
                {
                  label: 'Option 2',
                  value: 'option-2',
                },
                {
                  label: 'Option 3',
                  value: 'option-3',
                },
              ],
            },
          },
          {
            name: 'File Field',
            type: 'file',
            options: {
              required: true,
              placeholder: 'File Field Placeholder',
            },
          },
          {
            name: 'Image Field',
            type: 'image',
            options: {
              required: true,
              placeholder: 'Image Field Placeholder',
            },
            },
      },
    }}
    />
    );
};

export default RequestFormHandlerExample;
```

### Help

- The request form handler component should be a form.
- Loop through the request fields and render the request field component.

Example for looping through the request fields:

```tsx
import React from 'react';

const data = [
  {
    name: 'Text Field',
    type: 'text',
    options: {
      required: true,
      placeholder: 'Text Field Placeholder',
    },
  },
  {
    name: 'Number Field',
    type: 'number',
    options: {
      required: true,
      placeholder: 'Number Field Placeholder',
    },
  },
  {
    name: 'Date Field',
    type: 'date',
    options: {
      required: true,
      placeholder: 'Date Field Placeholder',
    },
  },
  {
    name: 'Select Field',
    type: 'select',
    options: {
      required: true,
      placeholder: 'Select Field Placeholder',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
      ],
    },
  },
  {
    name: 'Radio Field',
    type: 'radio',
    options: {
      required: true,
      placeholder: 'Radio Field Placeholder',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
      ],
    },
  },
  {
    name: 'Checkbox Field',
    type: 'checkbox',
    options: {
      required: true,
      placeholder: 'Checkbox Field Placeholder',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
      ],
    },
  },
  {
    name: 'File Field',
    type: 'file',
    options: {
      required: true,
      placeholder: 'File Field Placeholder',
    },
  },
  {
    name: 'Image Field',
    type: 'image',
    options: {
      required: true,
      placeholder: 'Image Field Placeholder',
    },
  },
];

// Using ant design pro components

const RequestFormHandler = () => {
  return (
    <ProForm>
      {data.map((field) => {
        if (field.type === 'text') {
          return (
            <ProFormText
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'number') {
          return (
            <ProFormDigit
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'date') {
          return (
            <ProFormDatePicker
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'select') {
          return (
            <ProFormSelect
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              options={field.options.options}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'radio') {
          return (
            <ProFormRadio.Group
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              options={field.options.options}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'checkbox') {
          return (
            <ProFormCheckbox.Group
              name={field.name}
              label={field.name}
              placeholder={field.options.placeholder}
              options={field.options.options}
              rules={[
                {
                  required: field.options.required,
                  message: `${field.name} is required`,
                },
              ]}
            />
          );
        }

        if (field.type === 'file') {
          return (
            <ProFormUploadButton
              name={field.name}
              label={field.name
                placeholder={field.options.placeholder}
                rules={[
                  {
                    required: field.options.required,
                    message: `${field.name} is required`,
                  },
                ]}
                />
                );
                }
      })}
    </ProForm>
    );
};

export default RequestFormHandler;
```

### Note 

It's okay to not using options for the field types for now we will add it later to the API.