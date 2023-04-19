import React from "react";

import { User } from "../types/User";

interface Props {
  user: User | null;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className=" mx-10 mt-10">
      <div className=" bg-slate-400 rounded-md px-4 sm:px-0">
        <h3 className="ps-10 py-4 text-base font-semibold leading-7 text-gray-900">
          User Information
        </h3>
      </div>
      <div className="pt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-100 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.name.firstname} {user?.name.lastname}
            </dd>
          </div>
          <div className="bg-slate-300 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Username
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.username}
            </dd>
          </div>
          <div className="bg-gray-100 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.email}
            </dd>
          </div>

          <div className="bg-slate-300 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              `{user?.address.city} - {user?.address.street}{" "}
              {user?.address.number} `
            </dd>
          </div>
          <div className=" bg-gray-100 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Zipcode
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.address.zipcode}
            </dd>
          </div>
          <div className="bg-slate-300 rounded-md px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="ps-10 text-sm font-medium leading-6 text-gray-900">
              Phone Number
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.phone}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserCard;
