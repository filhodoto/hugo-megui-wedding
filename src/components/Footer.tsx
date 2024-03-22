const Footer = (): JSX.Element => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer>
      <div className="container m-auto text-center mt-3">
        <p className="text-xs leading-5 text-gray-500">
          &copy; Copyright{' '}
          <a
            href="https://goncaloramalho.com"
            target="_blank"
            aria-label="email link"
          >
            Gonçalo Ramalho
          </a>
          , {year}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
