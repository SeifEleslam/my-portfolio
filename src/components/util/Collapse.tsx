export function Collapse({
  children,
  open,
  height,
}: {
  children: React.ReactNode;
  open: boolean;
  height: string;
}) {
  return (
    <div
      className={
        (open ? `scale-y-1 ` : " scale-y-0 ") +
        " overflow-hidden duration-[300ms] ease-out " +
        `h-[${height}] `
      }
    >
      {children}
    </div>
  );
}
