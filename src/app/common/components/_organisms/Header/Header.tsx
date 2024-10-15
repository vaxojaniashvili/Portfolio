import BurgerMenu from "../../_atoms/Icons/BurgerMenu";

const Header = () => {
  return (
    <header>
      <div className="w-full bg-white h-[80px] flex items-center justify-between px-[30px] sm:px-5 md:px-10 lg:px-20">
        <div className="flex items-center gap-4">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocI1Bzymq6ysEqxe9Fu0yQLn-3wfEL4tPxH99YHKfWStRDg2xTSc=s288-c-no"
            alt="vaxo's-image"
          />
          <h1 className="font-body font-bold">VAXO JANIASHVILI</h1>
        </div>
        <div className="hidden sm:flex gap-[30px] font-body font-bold text-[#333]">
          <button className="hover:text-[#7843E9]">HOME</button>
          <button className="hover:text-[#7843E9]">ABOUT</button>
          <button className="hover:text-[#7843E9]">PROJECTS</button>
          <button className="hover:text-[#7843E9]">CONTACT</button>
        </div>
        <div className="sm:hidden">
          <BurgerMenu width={30} height={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
