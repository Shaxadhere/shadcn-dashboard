import NoDataActionBox from "@/components/globals/empty-placeholders/NoDataActionBox";
import React from "react";

interface Props {}

const Sections: React.FC<Props> = () => {
  return (
    <div className="mt-10">
      <h1 className="mb-2 text-lg font-bold">Sections</h1>

      <div className="flex flex-col gap-4 lg:gap-6  h-full">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
        </div>

        <NoDataActionBox
          title="You have no products"
          subtitle="You can start selling as soon as you add a product."
          actionText="Add Product"
          onActionClick={() => console.log("Add Product")}
        />
      </div>
    </div>
  );
};

export default Sections;
