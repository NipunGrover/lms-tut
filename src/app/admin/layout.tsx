import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { canAccessAdminPages } from "@/permissions/general";
import { getCurrentUser } from "@/services/clerk";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container ">
        <div className="mr-auto flex items-center gap-2">
          <Link className="text-lg hover:underline" href="/">
            LMS Tutorial
          </Link>
          <Badge>Admin</Badge>
          <AdminLink />
        </div>
        <Link
          className="hover:bg-accent/10 bg flex px-2 h-full items-center"
          href="/admin/courses"
        >
          Courses
        </Link>
        <Link
          className="hover:bg-accent/10 bg flex px-2 h-full items-center"
          href="/admin/sales"
        >
          Sales
        </Link>
        <Link
          className="hover:bg-accent/10 flex px-2 h-full items-center"
          href="/admin/products"
        >
          Products
        </Link>

        <div className="size-8 self-center">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: { width: "100%", height: "100%" },
              },
            }}
          />
        </div>
      </nav>
    </header>
  );
}

async function AdminLink() {
  const user = await getCurrentUser({ allData: true });
  console.log(user.user?.name);
  if (!canAccessAdminPages(user)) return null;

  return (
    <Link className="hover:bg-accent/10 flex items-center px-2" href="/admin">
      Admin
    </Link>
  );
}
