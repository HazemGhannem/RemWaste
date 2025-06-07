// style.ts
export const containerClass = (selected: boolean, isDisabled: boolean) =>
  `group relative rounded-lg border-2 p-4 md:p-6 transition-all text-white ${
    selected ? "border-[#0037C1]" : "border-[#2A2A2A] hover:border-[#0037C1]/50"
  } ${
    isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer bg-[#1C1C1C]"
  }`;

export const buttonClass = (selected: boolean) =>
  `w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white ${
    selected
      ? "bg-[#0037C1] hover:bg-[#002da1] hover:border-[#0040d1]"
      : "bg-[#2A2A2A] hover:bg-[#3A3A3A]"
  }`;
