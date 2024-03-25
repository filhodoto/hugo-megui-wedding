import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'A nossa história', href: '#our_history' },
  { name: 'O Dia', href: '#day' },
  { name: 'RSVP', href: '#rsvp' },
  { name: 'Outras informações', href: '#other_info' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Get element based on setting "id" in elements with same value as href in links
    const target = e.target as HTMLAnchorElement;
    const id = target.getAttribute('href')?.replace('#', '');
    const element = document.getElementById(String(id));

    element?.scrollIntoView({
      behavior: 'smooth',
    });

    // Close menu if it's mobile navigation
    mobileMenuOpen && setMobileMenuOpen(false);
  };

  return (
    <header className="fixed px-6 sm:px-0 inset-x-0 top-0 z-50 flex justify-between items-center w-full bg-white">
      <div className="flex py-6 sm:px-8 xl:px-20 sm:flex-1">
        <a
          href="#initial"
          className="-m-1.5 p-1.5 text-headings"
          onClick={handleNavClick}
        >
          Margarida & Hugo
        </a>
      </div>
      {/* Desktop Menu */}
      <nav
        className="flex items-center justify-between sm:px-8 xl:px-20"
        aria-label="Global"
      >
        <div className="flex sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md  text-headings hover:text-action-400 transition-all"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm md:text-base font-semibold leading-6 text-headings transition-all"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-headings"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-headings hover:bg-gray-50"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
