function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white bg-gray-900 p-4 text-center shadow">
      &copy; {currentYear} All rights reserved.
    </div>
  );
}

export default Footer;
