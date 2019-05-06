import { Field } from '../../helpers/fields';


export const DATE_INPUT = (disabled) => ({
  ...Field.field(
    'datepicker', 
    'date-value', 
     {
      label: 'Choose date',
      description: '',
      disabled: disabled
    },
  )
});