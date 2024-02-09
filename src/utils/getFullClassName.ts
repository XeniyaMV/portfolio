function getFullClassName(currentClassName: string, additionalClassName?: string): string {
  return `${currentClassName} ${additionalClassName || ''}`;
}

export default getFullClassName;
