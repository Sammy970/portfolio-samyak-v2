export default function BlogPostLoading() {
  return (
    <section className="animate-pulse">
      {/* Title */}
      <div className="h-8 bg-muted rounded-md w-3/4 mb-4" />
      {/* Date */}
      <div className="h-4 bg-muted rounded-md w-32 mb-8" />

      {/* Article body shimmer lines */}
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-4/6" />

        {/* Fake paragraph break */}
        <div className="h-4" />

        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-3/4" />
        <div className="h-4 bg-muted rounded-md w-full" />

        {/* Fake code block */}
        <div className="h-4" />
        <div className="h-32 bg-muted rounded-md w-full" />
        <div className="h-4" />

        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-2/3" />
        <div className="h-4 bg-muted rounded-md w-5/6" />
        <div className="h-4 bg-muted rounded-md w-full" />
        <div className="h-4 bg-muted rounded-md w-3/4" />
      </div>
    </section>
  );
}
