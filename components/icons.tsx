import {
  AlignLeft,
  Command,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
  ChevronsUpDown,
} from "lucide-react";

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: AlignLeft,
  chevronRight: AlignLeft,
  trash: Trash,
  post: File,
  page: File,
  media: Image,
  settings: Settings,
  billing: Pizza,
  ellipsis: MoreVertical,
  add: Plus,
  warning: HelpCircle,
  user: User,
  arrowRight: AlignLeft,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  check: ChevronsUpDown,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};
