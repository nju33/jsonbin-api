import { pipe } from 'fp-ts/lib/function'
import { chain, map, TaskEither, tryCatch } from 'fp-ts/lib/TaskEither'
import createHttpError from './http-errors'
import { handleFetchError } from './utils'

export const JSON_BIN_BASE_URL = 'https://api.jsonbin.io/v3'

export interface PostResultMetadata {
  // if `X-Collection-Id` exists in request header
  collectionId?: string
  createdAt: string
  id: string
  private: boolean
}

export interface GetResultMetadata {
  // if `X-Collection-Id` exists in request header
  collectionId?: string
  id: string
  private: boolean
}

export interface PutResultMetadata {
  parentId: string
  private: boolean
}

export interface DeleteResultMetadata {
  id: string
  versionsDeleted: number
}

export interface ResultBin<
  M extends
    | PostResultMetadata
    | GetResultMetadata
    | PutResultMetadata
    | DeleteResultMetadata,
  R = unknown
> {
  metadata: M
  record: R
}

export type PostResultBin<R = unknown> = ResultBin<PostResultMetadata, R>
export type GetResultBin<R = unknown> = ResultBin<GetResultMetadata, R>
export type PutResultBin<R = unknown> = ResultBin<PutResultMetadata, R>
export type DeleteResultBin = Omit<
  ResultBin<DeleteResultMetadata, unknown>,
  'record'
> & { message: string }

export type FetchFn = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>

export type UpdateStrategyFn<R> = (bin: GetResultBin<R>) => R

export interface TraitBin {
  /**
   * 削除
   */
  delete: (options: {
    id: string
    secretKey: string
  }) => TaskEither<ReturnType<typeof handleFetchError>, DeleteResultBin>

  /**
   * 取得
   */
  get: <R>(options: {
    id: string
    secretKey: string
  }) => TaskEither<ReturnType<typeof handleFetchError>, GetResultBin<R>>

  /**
   * 作成
   */
  post: <R>(options: {
    binPrivate?: boolean
    collectionId?: string
    record: R
    secretKey: string
  }) => TaskEither<ReturnType<typeof handleFetchError>, PostResultBin<R>>

  /**
   * 更新
   */
  put: <R>(options: {
    binVersioning?: boolean
    id: string
    record: R
    secretKey: string
  }) => TaskEither<ReturnType<typeof handleFetchError>, PutResultBin<R>>

  /**
   * 取得を更新を一度に行う
   */
  update: <R>(
    options: {
      binVersioning?: boolean
      id: string
      secretKey: string
    },
    strategyFn: UpdateStrategyFn<R>
  ) => TaskEither<ReturnType<typeof handleFetchError>, PutResultBin<R>>
}

export class Bin implements TraitBin {
  constructor(private readonly fetch: FetchFn) {}

  delete({
    id,
    secretKey
  }: {
    id: string
    secretKey: string
  }): TaskEither<ReturnType<typeof handleFetchError>, DeleteResultBin> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Master-Key': secretKey
    }

    return tryCatch(
      async () => {
        return await this.fetch(`${JSON_BIN_BASE_URL}/b/${id}`, {
          method: 'DELETE',
          headers
        }).then<DeleteResultBin>(async (response) => {
          if (response.ok) {
            return (await response.json()) as DeleteResultBin
          }

          throw createHttpError(response.status, response.statusText)
        })
      },
      (error) => handleFetchError(error)
    )
  }

  get<R>({
    id,
    secretKey
  }: {
    id: string
    secretKey: string
  }): TaskEither<ReturnType<typeof handleFetchError>, GetResultBin<R>> {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Master-Key': secretKey
    }

    return tryCatch(
      async () => {
        return await this.fetch(`${JSON_BIN_BASE_URL}/b/${id}`, {
          method: 'GET',
          headers
        }).then<GetResultBin<R>>(async (response) => {
          if (response.ok) {
            return (await response.json()) as GetResultBin<R>
          }

          throw createHttpError(response.status, response.statusText)
        })
      },
      (error) => handleFetchError(error)
    )
  }

  post<R>({
    binPrivate,
    collectionId,
    record,
    secretKey
  }: {
    binPrivate?: boolean
    collectionId?: string
    record: R
    secretKey: string
  }): TaskEither<ReturnType<typeof handleFetchError>, PostResultBin<R>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Master-Key': secretKey
    }

    if (typeof collectionId === 'string') {
      headers['X-Collection-Id'] = collectionId
    }

    if (typeof binPrivate === 'boolean') {
      headers['X-Bin-Private'] = binPrivate ? 'true' : 'false'
    }

    return tryCatch(
      async () => {
        return await this.fetch(`${JSON_BIN_BASE_URL}/b`, {
          method: 'POST',
          headers,
          body: JSON.stringify(record)
        }).then<PostResultBin<R>>(async (response) => {
          if (response.ok) {
            return (await response.json()) as PostResultBin<R>
          }

          throw createHttpError(response.status, response.statusText)
        })
      },
      (error) => handleFetchError(error)
    )
  }

  put<R>({
    binVersioning,
    id,
    record,
    secretKey
  }: {
    binVersioning?: boolean
    id: string
    record: R
    secretKey: string
  }): TaskEither<ReturnType<typeof handleFetchError>, PutResultBin<R>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Master-Key': secretKey
    }

    if (typeof binVersioning === 'boolean') {
      headers['X-Bin-Versioning'] = binVersioning ? 'true' : 'false'
    }

    return tryCatch(
      async () => {
        return await this.fetch(`${JSON_BIN_BASE_URL}/b/${id}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(record)
        }).then<PutResultBin<R>>(async (response) => {
          if (response.ok) {
            return (await response.json()) as PutResultBin<R>
          }

          throw createHttpError(response.status, response.statusText)
        })
      },
      (error) => handleFetchError(error)
    )
  }

  update<R>(
    {
      binVersioning,
      id,
      secretKey
    }: {
      binVersioning?: boolean
      id: string
      secretKey: string
    },
    strategyFn: UpdateStrategyFn<R>
  ): TaskEither<ReturnType<typeof handleFetchError>, PutResultBin<R>> {
    return pipe(
      this.get<R>({ id, secretKey }),
      map((bin: GetResultBin<R>) => {
        return strategyFn(bin)
      }),
      chain((record) => {
        return this.put<R>({ id, secretKey, record, binVersioning })
      })
    )
  }
}
