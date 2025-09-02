import Link from "next/link";

const Index = () => {
  return (
    <div className="flex gap-5 fixed p-10 z-10 text-black">
      <Link scroll={false} href="/">
        Home
      </Link>
      <Link scroll={false} href="/about">
        About
      </Link>
      <Link scroll={false} href="/contect">
        Projects
      </Link>
    </div>
  );
};
export default Index;
