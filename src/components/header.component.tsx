import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle/mode-toggle.component";
import { TypewriterEffect } from '../../.history/src/components/ui/typewriter-effect_20240410171601';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 bg-white shadow z-50 dark:bg-gray-950">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center space-x-2">
            <UserIcon className="h-6 w-6" />
            <span className="font-semibold">Lachsfilet</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              className="flex items-center space-x-2 text-sm font-medium rounded-md px-2 py-1.5 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              My Projects
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium rounded-md px-2 py-1.5 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              Contact Me
            </Link>
            <Link
              className="flex items-center space-x-2 text-sm font-medium rounded-md bg-gray-900 px-2 py-1.5 transition-colors hover:bg-gray-900/90 text-gray-50 dark:bg-gray-50 dark:hover:bg-gray-50/90 dark:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              About Me
            </Link>
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}