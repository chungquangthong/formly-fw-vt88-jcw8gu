import { Field } from '../../helpers/fields';

export const COUNTRIES = (disabled) => ({
  ...Field.field(
    'select',
    'country',
    {
      label: 'Country',
      placeholder: '-- Chọn --',
      options: [
        { label: 'United States of America', value: 'USA' },
        { label: 'Colombia', value: 'COL' },
        { label: 'India', value: 'IDA' }
      ],
      required: true,
      disabled: disabled
    },
    { defaultValue: '' }
  )
});
