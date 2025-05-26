export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex min-h-screen w-screen items-center justify-center">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </>
  );
}
