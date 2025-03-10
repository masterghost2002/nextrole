import { COMPANY_VERIFCATION_STATUS } from "@/types";

type Tprops = {
  id: string;
};
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export const CompanyBanner = async (props: Tprops) => {
  const respnse = await fetch(`${DOMAIN}/api/company?id=${props.id}`);
  const companyData = await respnse.json();
  return (
    <div className="w-full bg-white  shadow-md overflow-hidden border border-b border-neutral-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src={companyData.logo_url}
              alt={`${companyData.name} logo`}
              className="w-8 h-8 rounded-md"
            />
            <div>
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {companyData.name}
                </h2>
                {companyData.verification_status ===
                  COMPANY_VERIFCATION_STATUS.VERIFIED && (
                  <span className="ml-2 bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                )}
              </div>
              <a
                href={companyData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                {companyData.website}
              </a>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-neutral-500">Added on</span>
            <p className="text-xs font-medium text-neutral-700">
              {formatDate(companyData.created_at)}
            </p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-neutral-200">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <h3 className="text-xs font-medium text-neutral-500">
                Description
              </h3>
              <p className="mt-0.5 text-sm text-neutral-800">
                {companyData.description}
              </p>
            </div>
            <div className="w-1/2 pl-2">
              <h3 className="text-xs font-medium text-neutral-500">
                Platform Users
              </h3>
              <p className="mt-0.5 text-sm text-neutral-800">
                {companyData.num_users_on_app}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
