import PaginationLayout from "@/components/layout-ui/PaginationLayout";
import { homePageLists } from "@/lib/constant";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12 mx-auto w-full ">
      <div className=" font-inter grid grid-cols-3 gap-6">
        {homePageLists.map((homeList) => (
          <div
            key={homeList.id}
            className="border border-secondary-1 rounded-2xl"
          >
            <div className="flex flex-col ">
              <div className="bg-secondary-1 rounded-t-xl">
                <h1 className="font-[700] text-2xl  text-primary-1 text-center py-2">
                  {homeList.title}
                </h1>
              </div>

              <div className="flex flex-col p-4">
                {homeList.lists.map((list) => (
                  <p className="text-secondary-1 text-lg font-[400]" key={list}>
                    {list}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <PaginationLayout />
    </div>
  );
};
export default page;
