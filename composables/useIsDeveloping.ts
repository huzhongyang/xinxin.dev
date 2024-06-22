export function useIsDeveloping() {
  const config = useRuntimeConfig()
  return config.public.showProgressPage
}
