import { AnimatedTabs } from "@/components/animated-tabs";
import React from "react";

interface Props {}

const TabsComponents: React.FC<Props> = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="my-10">
      <h1 className="mb-1 text-lg font-bold">Tabs Components</h1>
      <div className="h-[20rem] md:h-[40rem] relative b flex flex-col mx-auto w-full items-start justify-start my-3">
        <AnimatedTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default TabsComponents;

const DummyContent = () => {
  return (
    <img
      src="https://t4.ftcdn.net/jpg/05/32/27/51/360_F_532275175_XYkIzusERG8unr6zYXpZ7LDv8Xx6iPjz.jpg"
      alt="dummy image"
      className="object-cover object-left-top w-full h-full m-5 rounded-xl mx-auto"
    />
  );
};
