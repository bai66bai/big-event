declare interface Result<T> {
    code: number
    message: string
    data: T
}

declare type RetPromise<T> = Promise<Result<T>>