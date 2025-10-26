export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  const base =
    "block p-6 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition";

  const safeHref = href ? `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo` : "#";

  return (
    <a className={`${base} ${className ?? ""}`} href={safeHref} rel="noopener noreferrer" target="_blank">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title} <span className="text-primary-500">-&gt;</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </a>
  );
}
