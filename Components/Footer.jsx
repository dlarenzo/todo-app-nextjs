import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="flex py-3 flex-wrap justify-around bg-gray-600 text-white">
      <section className="text-lg font-semibold">
        <h2>
          2024 &copy; To Do App
          <Link href="https://larenzodegraff.com/" target="_blank">
            larenzodegraff.com
          </Link>
        </h2>
      </section>
    </section>
  );
};

export default Footer;
