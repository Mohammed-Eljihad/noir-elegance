import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`text-2xl font-semibold tracking-[0.2em] text-primary/80 uppercase font-display group cursor-pointer ${className}`}
    >
      <span className="group-hover:text-primary hover-effect">Noir</span>{" "}
      <span className="group-hover:text-primary hover-effect">Élégance</span>
    </Link>
  );
};

export default Logo;
