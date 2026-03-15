export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 sm:py-24 px-4 sm:px-6">{children}</div>
  );
}
