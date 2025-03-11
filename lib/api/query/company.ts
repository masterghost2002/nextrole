type TCompanySearch = {
  name: string;
  id: string;
  logo_url: string;
};
export const companyQueries = {
  searchCompany: async (searchTerm: string) => {
    const params = new URLSearchParams();
    params.set('name', searchTerm);
    const response = await fetch(`/api/company/search?name=${searchTerm}`);
    if (!response.ok) throw new Error('Failed to search company');
    return response.json() as Promise<TCompanySearch[]>;
  }
};
