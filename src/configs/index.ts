export const getAppMode = (): string | undefined => {
  return process.env.NEXT_PUBLIC_MODE
}

export const getInfuraKey = (): string => {
  return process.env.NEXT_PUBLIC_INFURA_KEY as string
}

export const getAnkrKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}

export const getFormaticKey = (): string => {
  return process.env.NEXT_PUBLIC_ANKR_KEY as string
}