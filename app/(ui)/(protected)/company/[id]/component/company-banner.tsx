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
    <div className="w-full bg-white shadow-sm border-b border-neutral-200 p-4">
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-3">
          <img
            src={companyData.logo_url}
            alt={`${companyData.name} logo`}
            className="w-8 h-8 rounded-md flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-2">
              <h2 className="text-lg font-semibold text-neutral-900">
                {companyData.name}
              </h2>
              {companyData.verification_status === "VERIFIED" && (
                <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
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
        <div className="text-left sm:text-right">
          <span className="text-xs text-neutral-500">Added on</span>
          <p className="text-xs font-medium text-neutral-700">
            {formatDate(companyData.created_at)}
          </p>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-neutral-200">
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <h3 className="text-xs font-medium text-neutral-500">
              Description
            </h3>
            <p className="mt-0.5 text-sm text-neutral-800">
              {companyData.description}
            </p>
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
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
  );
};
