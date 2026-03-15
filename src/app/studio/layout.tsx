export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-white dark:bg-black">
      {children}
    </div>
  );
}
