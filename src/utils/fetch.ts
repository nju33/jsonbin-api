import createHttpError from '../http-errors'

export function handleFetchError(
  error: unknown
): createHttpError.HttpError | TypeError {
  if (error instanceof createHttpError.HttpError) {
    return error
  }

  if (error instanceof TypeError) {
    return error
  }

  return new Error(error as string)
}
