import { useLogout } from "@/hooks/useLogout";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Moon, Sun } from "lucide-react";

export function UserNav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='h-12 w-12 rounded-full'
          aria-label='User Menu'
        >
          <Avatar className='h-10 w-10'>
            <span className='flex  dark:border-none text-white bg-[#a90c2c] h-full w-full items-center justify-center rounded-full'>
              {user.firstName.slice(0, 1)}
              {user.lastName.slice(0, 1)}
            </span>
          </Avatar>
          <span className='sr-only'>Account and Logout</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-2'>
            <p className='text-sm font-medium leading-none'>
              {user.firstName} {user.lastName}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} role='menuitem'>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
