export function maximumMoneyValidation(control, type) {
  const value = control.value;

  if (value) {
    const unMasked = parseInt(value.replace(/\D/g, ''));

    if (unMasked > 10000) {
      return { maximumMoneyValidation: 'Should be bellow 10.000' };
    }
  }

  return null;
}


export function minimumMoneyValidation(control, type) {
  const value = control.value;

  if (value) {
    const unMasked = parseInt(value.replace(/\D/g, ''));

    if (unMasked < 100) {
      return { minimumMoneyValidation: 'Should be more than 100' };
    }
  }

  return null;
}
