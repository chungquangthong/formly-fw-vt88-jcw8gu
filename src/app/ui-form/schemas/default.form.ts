import { Field } from '../helpers/fields';
import { NAME, EMAIL, COUNTRIES, MESSAGE } from './form-elements';

export const DEFAULT_FORM = (disabled = false) => ({
  id: 'DEFAULT',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Information'
      },
      fieldGroup: [
        NAME(disabled),
        EMAIL(disabled),
        COUNTRIES(disabled),
        MESSAGE(disabled)
      ]
    }
  ]
});
