export default function BlogListLoading() {
  return (
    <section className="animate-pulse">
      <div className="h-8 bg-muted rounded-md w-20 mb-8" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="mb-6 space-y-2">
          <div className="h-4 bg-muted rounded-md w-2/3" />
          <div className="h-3 bg-muted rounded-md w-24" />
          <div className="flex gap-2">
            <div className="h-5 bg-muted rounded-full w-16" />
            <div className="h-5 bg-muted rounded-full w-20" />
          </div>
        </div>
      ))}
    </section>
  );
}
