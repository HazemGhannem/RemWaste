export const buttonClass = (selected: boolean, notAllowed: boolean) =>
  `w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white ${
    selected  ? "bg-[#5CE65C]" : `bg-[#f68b1e]${!notAllowed ? " hover:bg-[#5CE65C]" : ""}`
  }`;
