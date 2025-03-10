const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export const getCompanyById = async (id: string) => {
  try {
    const response = await fetch(`${DOMAIN}/api/company?id=${id}`);
    const companyData = await response.json();
    return companyData as TCompany;
  } catch (error) {
    return undefined;
  }
};
