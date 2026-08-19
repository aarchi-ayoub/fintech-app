export const isValidPhoneNumber = (phone: string): boolean => {
  const cleanedPhone = phone.replace(/\s/g, '');

  return /^[5-7]\d{8}$/.test(cleanedPhone);
};
