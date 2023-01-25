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
        (open ? `h-[${height}] ` : " h-0 ") +
        " overflow-hidden duration-[300ms] ease-out "
      }
    >
      {children}
    </div>
  );
}
