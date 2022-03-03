export const generateFilterParamValue = (filters: object): string => {
  let filterParamValue = '';

  for (const [key, value] of Object.entries(filters)) {
    if (filterParamValue.length != 0) filterParamValue += ',';
    filterParamValue += `${key}:${value}`;
  }

  return filterParamValue;
};
