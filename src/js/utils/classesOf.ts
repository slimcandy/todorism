export function classesOf(
  ...classNames: Array<string | undefined | null | boolean>
): string | undefined {
  const onlyDefined = (entry: string | undefined | null | boolean): entry is string => !!entry
  const className = classNames.filter(onlyDefined).join(" ")
  return className || undefined
}