export function useFormatDate() {
  const formatDate = inject('formatDate');

  if (!formatDate) {
    throw new Error('formatDate plugin is not installed');
  }

  return formatDate;
}
