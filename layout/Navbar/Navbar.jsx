/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import routePaths from '../../utils/routePaths'

const navigation = [
  { name: 'About us', href: routePaths['about'] },
  { name: 'Terms and Conditions', href: routePaths['terms'] },
  { name: 'FAQs', href: routePaths['faqs'] },
  { name: 'Contact', href: routePaths['contact'] },
]
const Navbar = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center justify-between w-full">
            <Link href={routePaths['index']} passHref={true}>
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link href={link.href} passHref={true} key={link.name}>
                  <a
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
