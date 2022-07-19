export function classesOf(
  ...classNames: Array<string | undefined | null | boolean>
): string {
  const onlyDefined = (
    entry: string | undefined | null | boolean
  ): entry is string => !!entry;
  const className = classNames.filter(onlyDefined).join(" ");
  return className || "";
}
