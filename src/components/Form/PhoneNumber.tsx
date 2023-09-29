import { MuiTelInput } from "mui-tel-input";
import { useState } from 'react';

export default function PhoneNumber() {

  const [phone, setPhone] = useState('');

  const maxNonEmptyDigits = 14;

  const handlePhoneChange = (newPhone: string) => {
    const phoneNumberWithoutSpaces = newPhone.replace(/\s/g, '');

    if (phoneNumberWithoutSpaces.length <= maxNonEmptyDigits) {
      setPhone(newPhone);
    }
  };
  return (
    <MuiTelInput
      defaultCountry='BR'
      value={phone}
      onChange={handlePhoneChange}
      required
      label="Telefone"
      helperText="(xx) xxxxx-xxxx"
      fullWidth
      variant='filled'
    />
  )
}
