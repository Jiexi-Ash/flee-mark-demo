import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center whitespace-nowrap p-3 text-sm text-gray-600">
      <p>Copyright &copy; {year} Lance Jiexi</p>
    </footer>
  );
}

export default Footer;
