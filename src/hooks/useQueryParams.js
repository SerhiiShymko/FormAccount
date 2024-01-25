import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectData = searchParams.get('selectData') ?? null;
  const regNumber = searchParams.get('regNumber') ?? '';
  const nameOut = searchParams.get('nameOut') ?? 'all';
  const nameIn = searchParams.get('nameIn') ?? '';
  const aktNumber = searchParams.get('aktNumber') ?? '';
  const note = searchParams.get('note') ?? '';

  const changeFilters = newFilter => {
    setSearchParams(newFilter);
  };

  const reset = () => {
    setSearchParams({
      //   selectData: null,
      regNumber: '',
      nameOut: 'all',
      nameIn: '',
      aktNumber: '',
      note: '',
    });
  };

  return {
    selectData,
    regNumber,
    nameOut,
    nameIn,
    aktNumber,
    note,
    changeFilters,
    searchParams,
    reset,
  };
};
