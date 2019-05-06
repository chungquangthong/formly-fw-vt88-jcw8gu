import { PERCENTAGE_INPUT, MONEY_INPUT, DATE_INPUT, } from './form-elements';

export const MONEY_FORM = (disabled = false) => ({
  id: 'MONEY',
  template: [
    {
      key: 'money',
      wrappers: ['panel'],
      templateOptions: {
        label: 'Money Form'
      },
      fieldGroup: [
        MONEY_INPUT(disabled),
        PERCENTAGE_INPUT(disabled),
        DATE_INPUT(disabled)
      ]
    }
  ]
});
