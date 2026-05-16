
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PatientAccess
 * 
 */
export type PatientAccess = $Result.DefaultSelection<Prisma.$PatientAccessPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model IepGeneration
 * 
 */
export type IepGeneration = $Result.DefaultSelection<Prisma.$IepGenerationPayload>
/**
 * Model Questionnaire
 * 
 */
export type Questionnaire = $Result.DefaultSelection<Prisma.$QuestionnairePayload>
/**
 * Model QuestionnaireResponse
 * 
 */
export type QuestionnaireResponse = $Result.DefaultSelection<Prisma.$QuestionnaireResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.patientAccess`: Exposes CRUD operations for the **PatientAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientAccesses
    * const patientAccesses = await prisma.patientAccess.findMany()
    * ```
    */
  get patientAccess(): Prisma.PatientAccessDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.iepGeneration`: Exposes CRUD operations for the **IepGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IepGenerations
    * const iepGenerations = await prisma.iepGeneration.findMany()
    * ```
    */
  get iepGeneration(): Prisma.IepGenerationDelegate<ExtArgs>;

  /**
   * `prisma.questionnaire`: Exposes CRUD operations for the **Questionnaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questionnaires
    * const questionnaires = await prisma.questionnaire.findMany()
    * ```
    */
  get questionnaire(): Prisma.QuestionnaireDelegate<ExtArgs>;

  /**
   * `prisma.questionnaireResponse`: Exposes CRUD operations for the **QuestionnaireResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionnaireResponses
    * const questionnaireResponses = await prisma.questionnaireResponse.findMany()
    * ```
    */
  get questionnaireResponse(): Prisma.QuestionnaireResponseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PatientAccess: 'PatientAccess',
    Patient: 'Patient',
    Session: 'Session',
    IepGeneration: 'IepGeneration',
    Questionnaire: 'Questionnaire',
    QuestionnaireResponse: 'QuestionnaireResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "patientAccess" | "patient" | "session" | "iepGeneration" | "questionnaire" | "questionnaireResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PatientAccess: {
        payload: Prisma.$PatientAccessPayload<ExtArgs>
        fields: Prisma.PatientAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          findFirst: {
            args: Prisma.PatientAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          findMany: {
            args: Prisma.PatientAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>[]
          }
          create: {
            args: Prisma.PatientAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          createMany: {
            args: Prisma.PatientAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>[]
          }
          delete: {
            args: Prisma.PatientAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          update: {
            args: Prisma.PatientAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          deleteMany: {
            args: Prisma.PatientAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAccessPayload>
          }
          aggregate: {
            args: Prisma.PatientAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientAccess>
          }
          groupBy: {
            args: Prisma.PatientAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientAccessCountArgs<ExtArgs>
            result: $Utils.Optional<PatientAccessCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      IepGeneration: {
        payload: Prisma.$IepGenerationPayload<ExtArgs>
        fields: Prisma.IepGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IepGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IepGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          findFirst: {
            args: Prisma.IepGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IepGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          findMany: {
            args: Prisma.IepGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>[]
          }
          create: {
            args: Prisma.IepGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          createMany: {
            args: Prisma.IepGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IepGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>[]
          }
          delete: {
            args: Prisma.IepGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          update: {
            args: Prisma.IepGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          deleteMany: {
            args: Prisma.IepGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IepGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IepGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IepGenerationPayload>
          }
          aggregate: {
            args: Prisma.IepGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIepGeneration>
          }
          groupBy: {
            args: Prisma.IepGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IepGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IepGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<IepGenerationCountAggregateOutputType> | number
          }
        }
      }
      Questionnaire: {
        payload: Prisma.$QuestionnairePayload<ExtArgs>
        fields: Prisma.QuestionnaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionnaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionnaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          findFirst: {
            args: Prisma.QuestionnaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionnaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          findMany: {
            args: Prisma.QuestionnaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>[]
          }
          create: {
            args: Prisma.QuestionnaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          createMany: {
            args: Prisma.QuestionnaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionnaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>[]
          }
          delete: {
            args: Prisma.QuestionnaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          update: {
            args: Prisma.QuestionnaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          deleteMany: {
            args: Prisma.QuestionnaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionnaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionnaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          aggregate: {
            args: Prisma.QuestionnaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionnaire>
          }
          groupBy: {
            args: Prisma.QuestionnaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionnaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionnaireCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionnaireCountAggregateOutputType> | number
          }
        }
      }
      QuestionnaireResponse: {
        payload: Prisma.$QuestionnaireResponsePayload<ExtArgs>
        fields: Prisma.QuestionnaireResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionnaireResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionnaireResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          findFirst: {
            args: Prisma.QuestionnaireResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionnaireResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          findMany: {
            args: Prisma.QuestionnaireResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>[]
          }
          create: {
            args: Prisma.QuestionnaireResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          createMany: {
            args: Prisma.QuestionnaireResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionnaireResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>[]
          }
          delete: {
            args: Prisma.QuestionnaireResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          update: {
            args: Prisma.QuestionnaireResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuestionnaireResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionnaireResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionnaireResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionnaireResponsePayload>
          }
          aggregate: {
            args: Prisma.QuestionnaireResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionnaireResponse>
          }
          groupBy: {
            args: Prisma.QuestionnaireResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionnaireResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionnaireResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionnaireResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    patientAccess: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    patientAccess?: boolean | UserCountOutputTypeCountPatientAccessArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAccessWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    sessions: number
    iepGenerations: number
    access: number
    questionnaires: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | PatientCountOutputTypeCountSessionsArgs
    iepGenerations?: boolean | PatientCountOutputTypeCountIepGenerationsArgs
    access?: boolean | PatientCountOutputTypeCountAccessArgs
    questionnaires?: boolean | PatientCountOutputTypeCountQuestionnairesArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountIepGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IepGenerationWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAccessWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountQuestionnairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionnaireWhereInput
  }


  /**
   * Count Type QuestionnaireCountOutputType
   */

  export type QuestionnaireCountOutputType = {
    responses: number
  }

  export type QuestionnaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuestionnaireCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionnaireCountOutputType without action
   */
  export type QuestionnaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireCountOutputType
     */
    select?: QuestionnaireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionnaireCountOutputType without action
   */
  export type QuestionnaireCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionnaireResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    patientAccess?: boolean | User$patientAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    patientAccess?: boolean | User$patientAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      patientAccess: Prisma.$PatientAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    patientAccess<T extends User$patientAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$patientAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.patientAccess
   */
  export type User$patientAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    where?: PatientAccessWhereInput
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    cursor?: PatientAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientAccessScalarFieldEnum | PatientAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PatientAccess
   */

  export type AggregatePatientAccess = {
    _count: PatientAccessCountAggregateOutputType | null
    _min: PatientAccessMinAggregateOutputType | null
    _max: PatientAccessMaxAggregateOutputType | null
  }

  export type PatientAccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    patientId: string | null
    accessLevel: string | null
  }

  export type PatientAccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    patientId: string | null
    accessLevel: string | null
  }

  export type PatientAccessCountAggregateOutputType = {
    id: number
    userId: number
    patientId: number
    accessLevel: number
    _all: number
  }


  export type PatientAccessMinAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    accessLevel?: true
  }

  export type PatientAccessMaxAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    accessLevel?: true
  }

  export type PatientAccessCountAggregateInputType = {
    id?: true
    userId?: true
    patientId?: true
    accessLevel?: true
    _all?: true
  }

  export type PatientAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientAccess to aggregate.
     */
    where?: PatientAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAccesses to fetch.
     */
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientAccesses
    **/
    _count?: true | PatientAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientAccessMaxAggregateInputType
  }

  export type GetPatientAccessAggregateType<T extends PatientAccessAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientAccess[P]>
      : GetScalarType<T[P], AggregatePatientAccess[P]>
  }




  export type PatientAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAccessWhereInput
    orderBy?: PatientAccessOrderByWithAggregationInput | PatientAccessOrderByWithAggregationInput[]
    by: PatientAccessScalarFieldEnum[] | PatientAccessScalarFieldEnum
    having?: PatientAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientAccessCountAggregateInputType | true
    _min?: PatientAccessMinAggregateInputType
    _max?: PatientAccessMaxAggregateInputType
  }

  export type PatientAccessGroupByOutputType = {
    id: string
    userId: string
    patientId: string
    accessLevel: string
    _count: PatientAccessCountAggregateOutputType | null
    _min: PatientAccessMinAggregateOutputType | null
    _max: PatientAccessMaxAggregateOutputType | null
  }

  type GetPatientAccessGroupByPayload<T extends PatientAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientAccessGroupByOutputType[P]>
            : GetScalarType<T[P], PatientAccessGroupByOutputType[P]>
        }
      >
    >


  export type PatientAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patientId?: boolean
    accessLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientAccess"]>

  export type PatientAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patientId?: boolean
    accessLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientAccess"]>

  export type PatientAccessSelectScalar = {
    id?: boolean
    userId?: boolean
    patientId?: boolean
    accessLevel?: boolean
  }

  export type PatientAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PatientAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $PatientAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      patientId: string
      accessLevel: string
    }, ExtArgs["result"]["patientAccess"]>
    composites: {}
  }

  type PatientAccessGetPayload<S extends boolean | null | undefined | PatientAccessDefaultArgs> = $Result.GetResult<Prisma.$PatientAccessPayload, S>

  type PatientAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientAccessCountAggregateInputType | true
    }

  export interface PatientAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientAccess'], meta: { name: 'PatientAccess' } }
    /**
     * Find zero or one PatientAccess that matches the filter.
     * @param {PatientAccessFindUniqueArgs} args - Arguments to find a PatientAccess
     * @example
     * // Get one PatientAccess
     * const patientAccess = await prisma.patientAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientAccessFindUniqueArgs>(args: SelectSubset<T, PatientAccessFindUniqueArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatientAccess that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientAccessFindUniqueOrThrowArgs} args - Arguments to find a PatientAccess
     * @example
     * // Get one PatientAccess
     * const patientAccess = await prisma.patientAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatientAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessFindFirstArgs} args - Arguments to find a PatientAccess
     * @example
     * // Get one PatientAccess
     * const patientAccess = await prisma.patientAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientAccessFindFirstArgs>(args?: SelectSubset<T, PatientAccessFindFirstArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatientAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessFindFirstOrThrowArgs} args - Arguments to find a PatientAccess
     * @example
     * // Get one PatientAccess
     * const patientAccess = await prisma.patientAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatientAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientAccesses
     * const patientAccesses = await prisma.patientAccess.findMany()
     * 
     * // Get first 10 PatientAccesses
     * const patientAccesses = await prisma.patientAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientAccessWithIdOnly = await prisma.patientAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientAccessFindManyArgs>(args?: SelectSubset<T, PatientAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatientAccess.
     * @param {PatientAccessCreateArgs} args - Arguments to create a PatientAccess.
     * @example
     * // Create one PatientAccess
     * const PatientAccess = await prisma.patientAccess.create({
     *   data: {
     *     // ... data to create a PatientAccess
     *   }
     * })
     * 
     */
    create<T extends PatientAccessCreateArgs>(args: SelectSubset<T, PatientAccessCreateArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatientAccesses.
     * @param {PatientAccessCreateManyArgs} args - Arguments to create many PatientAccesses.
     * @example
     * // Create many PatientAccesses
     * const patientAccess = await prisma.patientAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientAccessCreateManyArgs>(args?: SelectSubset<T, PatientAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientAccesses and returns the data saved in the database.
     * @param {PatientAccessCreateManyAndReturnArgs} args - Arguments to create many PatientAccesses.
     * @example
     * // Create many PatientAccesses
     * const patientAccess = await prisma.patientAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientAccesses and only return the `id`
     * const patientAccessWithIdOnly = await prisma.patientAccess.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatientAccess.
     * @param {PatientAccessDeleteArgs} args - Arguments to delete one PatientAccess.
     * @example
     * // Delete one PatientAccess
     * const PatientAccess = await prisma.patientAccess.delete({
     *   where: {
     *     // ... filter to delete one PatientAccess
     *   }
     * })
     * 
     */
    delete<T extends PatientAccessDeleteArgs>(args: SelectSubset<T, PatientAccessDeleteArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatientAccess.
     * @param {PatientAccessUpdateArgs} args - Arguments to update one PatientAccess.
     * @example
     * // Update one PatientAccess
     * const patientAccess = await prisma.patientAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientAccessUpdateArgs>(args: SelectSubset<T, PatientAccessUpdateArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatientAccesses.
     * @param {PatientAccessDeleteManyArgs} args - Arguments to filter PatientAccesses to delete.
     * @example
     * // Delete a few PatientAccesses
     * const { count } = await prisma.patientAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientAccessDeleteManyArgs>(args?: SelectSubset<T, PatientAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientAccesses
     * const patientAccess = await prisma.patientAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientAccessUpdateManyArgs>(args: SelectSubset<T, PatientAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientAccess.
     * @param {PatientAccessUpsertArgs} args - Arguments to update or create a PatientAccess.
     * @example
     * // Update or create a PatientAccess
     * const patientAccess = await prisma.patientAccess.upsert({
     *   create: {
     *     // ... data to create a PatientAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientAccess we want to update
     *   }
     * })
     */
    upsert<T extends PatientAccessUpsertArgs>(args: SelectSubset<T, PatientAccessUpsertArgs<ExtArgs>>): Prisma__PatientAccessClient<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatientAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessCountArgs} args - Arguments to filter PatientAccesses to count.
     * @example
     * // Count the number of PatientAccesses
     * const count = await prisma.patientAccess.count({
     *   where: {
     *     // ... the filter for the PatientAccesses we want to count
     *   }
     * })
    **/
    count<T extends PatientAccessCountArgs>(
      args?: Subset<T, PatientAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAccessAggregateArgs>(args: Subset<T, PatientAccessAggregateArgs>): Prisma.PrismaPromise<GetPatientAccessAggregateType<T>>

    /**
     * Group by PatientAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientAccessGroupByArgs['orderBy'] }
        : { orderBy?: PatientAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientAccess model
   */
  readonly fields: PatientAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientAccess model
   */ 
  interface PatientAccessFieldRefs {
    readonly id: FieldRef<"PatientAccess", 'String'>
    readonly userId: FieldRef<"PatientAccess", 'String'>
    readonly patientId: FieldRef<"PatientAccess", 'String'>
    readonly accessLevel: FieldRef<"PatientAccess", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PatientAccess findUnique
   */
  export type PatientAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter, which PatientAccess to fetch.
     */
    where: PatientAccessWhereUniqueInput
  }

  /**
   * PatientAccess findUniqueOrThrow
   */
  export type PatientAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter, which PatientAccess to fetch.
     */
    where: PatientAccessWhereUniqueInput
  }

  /**
   * PatientAccess findFirst
   */
  export type PatientAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter, which PatientAccess to fetch.
     */
    where?: PatientAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAccesses to fetch.
     */
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientAccesses.
     */
    cursor?: PatientAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientAccesses.
     */
    distinct?: PatientAccessScalarFieldEnum | PatientAccessScalarFieldEnum[]
  }

  /**
   * PatientAccess findFirstOrThrow
   */
  export type PatientAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter, which PatientAccess to fetch.
     */
    where?: PatientAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAccesses to fetch.
     */
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientAccesses.
     */
    cursor?: PatientAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientAccesses.
     */
    distinct?: PatientAccessScalarFieldEnum | PatientAccessScalarFieldEnum[]
  }

  /**
   * PatientAccess findMany
   */
  export type PatientAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter, which PatientAccesses to fetch.
     */
    where?: PatientAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAccesses to fetch.
     */
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientAccesses.
     */
    cursor?: PatientAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAccesses.
     */
    skip?: number
    distinct?: PatientAccessScalarFieldEnum | PatientAccessScalarFieldEnum[]
  }

  /**
   * PatientAccess create
   */
  export type PatientAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientAccess.
     */
    data: XOR<PatientAccessCreateInput, PatientAccessUncheckedCreateInput>
  }

  /**
   * PatientAccess createMany
   */
  export type PatientAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientAccesses.
     */
    data: PatientAccessCreateManyInput | PatientAccessCreateManyInput[]
  }

  /**
   * PatientAccess createManyAndReturn
   */
  export type PatientAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatientAccesses.
     */
    data: PatientAccessCreateManyInput | PatientAccessCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientAccess update
   */
  export type PatientAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientAccess.
     */
    data: XOR<PatientAccessUpdateInput, PatientAccessUncheckedUpdateInput>
    /**
     * Choose, which PatientAccess to update.
     */
    where: PatientAccessWhereUniqueInput
  }

  /**
   * PatientAccess updateMany
   */
  export type PatientAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientAccesses.
     */
    data: XOR<PatientAccessUpdateManyMutationInput, PatientAccessUncheckedUpdateManyInput>
    /**
     * Filter which PatientAccesses to update
     */
    where?: PatientAccessWhereInput
  }

  /**
   * PatientAccess upsert
   */
  export type PatientAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientAccess to update in case it exists.
     */
    where: PatientAccessWhereUniqueInput
    /**
     * In case the PatientAccess found by the `where` argument doesn't exist, create a new PatientAccess with this data.
     */
    create: XOR<PatientAccessCreateInput, PatientAccessUncheckedCreateInput>
    /**
     * In case the PatientAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientAccessUpdateInput, PatientAccessUncheckedUpdateInput>
  }

  /**
   * PatientAccess delete
   */
  export type PatientAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    /**
     * Filter which PatientAccess to delete.
     */
    where: PatientAccessWhereUniqueInput
  }

  /**
   * PatientAccess deleteMany
   */
  export type PatientAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientAccesses to delete
     */
    where?: PatientAccessWhereInput
  }

  /**
   * PatientAccess without action
   */
  export type PatientAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    dateOfBirth: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dateOfBirth: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    dateOfBirth: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    dateOfBirth?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    dateOfBirth?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    dateOfBirth?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    dateOfBirth: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dateOfBirth?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    iepGenerations?: boolean | Patient$iepGenerationsArgs<ExtArgs>
    access?: boolean | Patient$accessArgs<ExtArgs>
    questionnaires?: boolean | Patient$questionnairesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dateOfBirth?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    dateOfBirth?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    iepGenerations?: boolean | Patient$iepGenerationsArgs<ExtArgs>
    access?: boolean | Patient$accessArgs<ExtArgs>
    questionnaires?: boolean | Patient$questionnairesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      iepGenerations: Prisma.$IepGenerationPayload<ExtArgs>[]
      access: Prisma.$PatientAccessPayload<ExtArgs>[]
      questionnaires: Prisma.$QuestionnairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dateOfBirth: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Patient$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    iepGenerations<T extends Patient$iepGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$iepGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findMany"> | Null>
    access<T extends Patient$accessArgs<ExtArgs> = {}>(args?: Subset<T, Patient$accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAccessPayload<ExtArgs>, T, "findMany"> | Null>
    questionnaires<T extends Patient$questionnairesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$questionnairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly notes: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.sessions
   */
  export type Patient$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Patient.iepGenerations
   */
  export type Patient$iepGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    where?: IepGenerationWhereInput
    orderBy?: IepGenerationOrderByWithRelationInput | IepGenerationOrderByWithRelationInput[]
    cursor?: IepGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IepGenerationScalarFieldEnum | IepGenerationScalarFieldEnum[]
  }

  /**
   * Patient.access
   */
  export type Patient$accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAccess
     */
    select?: PatientAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAccessInclude<ExtArgs> | null
    where?: PatientAccessWhereInput
    orderBy?: PatientAccessOrderByWithRelationInput | PatientAccessOrderByWithRelationInput[]
    cursor?: PatientAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientAccessScalarFieldEnum | PatientAccessScalarFieldEnum[]
  }

  /**
   * Patient.questionnaires
   */
  export type Patient$questionnairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    where?: QuestionnaireWhereInput
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    cursor?: QuestionnaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    therapistId: string | null
    sessionDate: Date | null
    startTime: string | null
    endTime: string | null
    location: string | null
    participants: string | null
    materials: string | null
    notes: string | null
    isPrivate: boolean | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    therapistId: string | null
    sessionDate: Date | null
    startTime: string | null
    endTime: string | null
    location: string | null
    participants: string | null
    materials: string | null
    notes: string | null
    isPrivate: boolean | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    patientId: number
    therapistId: number
    sessionDate: number
    startTime: number
    endTime: number
    location: number
    participants: number
    materials: number
    notes: number
    isPrivate: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    patientId?: true
    therapistId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    location?: true
    participants?: true
    materials?: true
    notes?: true
    isPrivate?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    patientId?: true
    therapistId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    location?: true
    participants?: true
    materials?: true
    notes?: true
    isPrivate?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    patientId?: true
    therapistId?: true
    sessionDate?: true
    startTime?: true
    endTime?: true
    location?: true
    participants?: true
    materials?: true
    notes?: true
    isPrivate?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    patientId: string
    therapistId: string
    sessionDate: Date
    startTime: string | null
    endTime: string | null
    location: string | null
    participants: string | null
    materials: string | null
    notes: string | null
    isPrivate: boolean
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    therapistId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    participants?: boolean
    materials?: boolean
    notes?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    therapist?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    therapistId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    participants?: boolean
    materials?: boolean
    notes?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    therapist?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    patientId?: boolean
    therapistId?: boolean
    sessionDate?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    participants?: boolean
    materials?: boolean
    notes?: boolean
    isPrivate?: boolean
    createdAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    therapist?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    therapist?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      therapist: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      therapistId: string
      sessionDate: Date
      startTime: string | null
      endTime: string | null
      location: string | null
      participants: string | null
      materials: string | null
      notes: string | null
      isPrivate: boolean
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    therapist<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly patientId: FieldRef<"Session", 'String'>
    readonly therapistId: FieldRef<"Session", 'String'>
    readonly sessionDate: FieldRef<"Session", 'DateTime'>
    readonly startTime: FieldRef<"Session", 'String'>
    readonly endTime: FieldRef<"Session", 'String'>
    readonly location: FieldRef<"Session", 'String'>
    readonly participants: FieldRef<"Session", 'String'>
    readonly materials: FieldRef<"Session", 'String'>
    readonly notes: FieldRef<"Session", 'String'>
    readonly isPrivate: FieldRef<"Session", 'Boolean'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model IepGeneration
   */

  export type AggregateIepGeneration = {
    _count: IepGenerationCountAggregateOutputType | null
    _min: IepGenerationMinAggregateOutputType | null
    _max: IepGenerationMaxAggregateOutputType | null
  }

  export type IepGenerationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    inputData: string | null
    generatedGoals: string | null
    createdAt: Date | null
  }

  export type IepGenerationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    inputData: string | null
    generatedGoals: string | null
    createdAt: Date | null
  }

  export type IepGenerationCountAggregateOutputType = {
    id: number
    patientId: number
    inputData: number
    generatedGoals: number
    createdAt: number
    _all: number
  }


  export type IepGenerationMinAggregateInputType = {
    id?: true
    patientId?: true
    inputData?: true
    generatedGoals?: true
    createdAt?: true
  }

  export type IepGenerationMaxAggregateInputType = {
    id?: true
    patientId?: true
    inputData?: true
    generatedGoals?: true
    createdAt?: true
  }

  export type IepGenerationCountAggregateInputType = {
    id?: true
    patientId?: true
    inputData?: true
    generatedGoals?: true
    createdAt?: true
    _all?: true
  }

  export type IepGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IepGeneration to aggregate.
     */
    where?: IepGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IepGenerations to fetch.
     */
    orderBy?: IepGenerationOrderByWithRelationInput | IepGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IepGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IepGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IepGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IepGenerations
    **/
    _count?: true | IepGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IepGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IepGenerationMaxAggregateInputType
  }

  export type GetIepGenerationAggregateType<T extends IepGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateIepGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIepGeneration[P]>
      : GetScalarType<T[P], AggregateIepGeneration[P]>
  }




  export type IepGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IepGenerationWhereInput
    orderBy?: IepGenerationOrderByWithAggregationInput | IepGenerationOrderByWithAggregationInput[]
    by: IepGenerationScalarFieldEnum[] | IepGenerationScalarFieldEnum
    having?: IepGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IepGenerationCountAggregateInputType | true
    _min?: IepGenerationMinAggregateInputType
    _max?: IepGenerationMaxAggregateInputType
  }

  export type IepGenerationGroupByOutputType = {
    id: string
    patientId: string
    inputData: string
    generatedGoals: string
    createdAt: Date
    _count: IepGenerationCountAggregateOutputType | null
    _min: IepGenerationMinAggregateOutputType | null
    _max: IepGenerationMaxAggregateOutputType | null
  }

  type GetIepGenerationGroupByPayload<T extends IepGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IepGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IepGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IepGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], IepGenerationGroupByOutputType[P]>
        }
      >
    >


  export type IepGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    inputData?: boolean
    generatedGoals?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iepGeneration"]>

  export type IepGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    inputData?: boolean
    generatedGoals?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iepGeneration"]>

  export type IepGenerationSelectScalar = {
    id?: boolean
    patientId?: boolean
    inputData?: boolean
    generatedGoals?: boolean
    createdAt?: boolean
  }

  export type IepGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type IepGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $IepGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IepGeneration"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      inputData: string
      generatedGoals: string
      createdAt: Date
    }, ExtArgs["result"]["iepGeneration"]>
    composites: {}
  }

  type IepGenerationGetPayload<S extends boolean | null | undefined | IepGenerationDefaultArgs> = $Result.GetResult<Prisma.$IepGenerationPayload, S>

  type IepGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IepGenerationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IepGenerationCountAggregateInputType | true
    }

  export interface IepGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IepGeneration'], meta: { name: 'IepGeneration' } }
    /**
     * Find zero or one IepGeneration that matches the filter.
     * @param {IepGenerationFindUniqueArgs} args - Arguments to find a IepGeneration
     * @example
     * // Get one IepGeneration
     * const iepGeneration = await prisma.iepGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IepGenerationFindUniqueArgs>(args: SelectSubset<T, IepGenerationFindUniqueArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IepGeneration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IepGenerationFindUniqueOrThrowArgs} args - Arguments to find a IepGeneration
     * @example
     * // Get one IepGeneration
     * const iepGeneration = await prisma.iepGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IepGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, IepGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IepGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationFindFirstArgs} args - Arguments to find a IepGeneration
     * @example
     * // Get one IepGeneration
     * const iepGeneration = await prisma.iepGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IepGenerationFindFirstArgs>(args?: SelectSubset<T, IepGenerationFindFirstArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IepGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationFindFirstOrThrowArgs} args - Arguments to find a IepGeneration
     * @example
     * // Get one IepGeneration
     * const iepGeneration = await prisma.iepGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IepGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, IepGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IepGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IepGenerations
     * const iepGenerations = await prisma.iepGeneration.findMany()
     * 
     * // Get first 10 IepGenerations
     * const iepGenerations = await prisma.iepGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iepGenerationWithIdOnly = await prisma.iepGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IepGenerationFindManyArgs>(args?: SelectSubset<T, IepGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IepGeneration.
     * @param {IepGenerationCreateArgs} args - Arguments to create a IepGeneration.
     * @example
     * // Create one IepGeneration
     * const IepGeneration = await prisma.iepGeneration.create({
     *   data: {
     *     // ... data to create a IepGeneration
     *   }
     * })
     * 
     */
    create<T extends IepGenerationCreateArgs>(args: SelectSubset<T, IepGenerationCreateArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IepGenerations.
     * @param {IepGenerationCreateManyArgs} args - Arguments to create many IepGenerations.
     * @example
     * // Create many IepGenerations
     * const iepGeneration = await prisma.iepGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IepGenerationCreateManyArgs>(args?: SelectSubset<T, IepGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IepGenerations and returns the data saved in the database.
     * @param {IepGenerationCreateManyAndReturnArgs} args - Arguments to create many IepGenerations.
     * @example
     * // Create many IepGenerations
     * const iepGeneration = await prisma.iepGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IepGenerations and only return the `id`
     * const iepGenerationWithIdOnly = await prisma.iepGeneration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IepGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, IepGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IepGeneration.
     * @param {IepGenerationDeleteArgs} args - Arguments to delete one IepGeneration.
     * @example
     * // Delete one IepGeneration
     * const IepGeneration = await prisma.iepGeneration.delete({
     *   where: {
     *     // ... filter to delete one IepGeneration
     *   }
     * })
     * 
     */
    delete<T extends IepGenerationDeleteArgs>(args: SelectSubset<T, IepGenerationDeleteArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IepGeneration.
     * @param {IepGenerationUpdateArgs} args - Arguments to update one IepGeneration.
     * @example
     * // Update one IepGeneration
     * const iepGeneration = await prisma.iepGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IepGenerationUpdateArgs>(args: SelectSubset<T, IepGenerationUpdateArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IepGenerations.
     * @param {IepGenerationDeleteManyArgs} args - Arguments to filter IepGenerations to delete.
     * @example
     * // Delete a few IepGenerations
     * const { count } = await prisma.iepGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IepGenerationDeleteManyArgs>(args?: SelectSubset<T, IepGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IepGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IepGenerations
     * const iepGeneration = await prisma.iepGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IepGenerationUpdateManyArgs>(args: SelectSubset<T, IepGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IepGeneration.
     * @param {IepGenerationUpsertArgs} args - Arguments to update or create a IepGeneration.
     * @example
     * // Update or create a IepGeneration
     * const iepGeneration = await prisma.iepGeneration.upsert({
     *   create: {
     *     // ... data to create a IepGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IepGeneration we want to update
     *   }
     * })
     */
    upsert<T extends IepGenerationUpsertArgs>(args: SelectSubset<T, IepGenerationUpsertArgs<ExtArgs>>): Prisma__IepGenerationClient<$Result.GetResult<Prisma.$IepGenerationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IepGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationCountArgs} args - Arguments to filter IepGenerations to count.
     * @example
     * // Count the number of IepGenerations
     * const count = await prisma.iepGeneration.count({
     *   where: {
     *     // ... the filter for the IepGenerations we want to count
     *   }
     * })
    **/
    count<T extends IepGenerationCountArgs>(
      args?: Subset<T, IepGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IepGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IepGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IepGenerationAggregateArgs>(args: Subset<T, IepGenerationAggregateArgs>): Prisma.PrismaPromise<GetIepGenerationAggregateType<T>>

    /**
     * Group by IepGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IepGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IepGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IepGenerationGroupByArgs['orderBy'] }
        : { orderBy?: IepGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IepGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIepGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IepGeneration model
   */
  readonly fields: IepGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IepGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IepGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IepGeneration model
   */ 
  interface IepGenerationFieldRefs {
    readonly id: FieldRef<"IepGeneration", 'String'>
    readonly patientId: FieldRef<"IepGeneration", 'String'>
    readonly inputData: FieldRef<"IepGeneration", 'String'>
    readonly generatedGoals: FieldRef<"IepGeneration", 'String'>
    readonly createdAt: FieldRef<"IepGeneration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IepGeneration findUnique
   */
  export type IepGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter, which IepGeneration to fetch.
     */
    where: IepGenerationWhereUniqueInput
  }

  /**
   * IepGeneration findUniqueOrThrow
   */
  export type IepGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter, which IepGeneration to fetch.
     */
    where: IepGenerationWhereUniqueInput
  }

  /**
   * IepGeneration findFirst
   */
  export type IepGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter, which IepGeneration to fetch.
     */
    where?: IepGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IepGenerations to fetch.
     */
    orderBy?: IepGenerationOrderByWithRelationInput | IepGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IepGenerations.
     */
    cursor?: IepGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IepGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IepGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IepGenerations.
     */
    distinct?: IepGenerationScalarFieldEnum | IepGenerationScalarFieldEnum[]
  }

  /**
   * IepGeneration findFirstOrThrow
   */
  export type IepGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter, which IepGeneration to fetch.
     */
    where?: IepGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IepGenerations to fetch.
     */
    orderBy?: IepGenerationOrderByWithRelationInput | IepGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IepGenerations.
     */
    cursor?: IepGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IepGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IepGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IepGenerations.
     */
    distinct?: IepGenerationScalarFieldEnum | IepGenerationScalarFieldEnum[]
  }

  /**
   * IepGeneration findMany
   */
  export type IepGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter, which IepGenerations to fetch.
     */
    where?: IepGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IepGenerations to fetch.
     */
    orderBy?: IepGenerationOrderByWithRelationInput | IepGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IepGenerations.
     */
    cursor?: IepGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IepGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IepGenerations.
     */
    skip?: number
    distinct?: IepGenerationScalarFieldEnum | IepGenerationScalarFieldEnum[]
  }

  /**
   * IepGeneration create
   */
  export type IepGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a IepGeneration.
     */
    data: XOR<IepGenerationCreateInput, IepGenerationUncheckedCreateInput>
  }

  /**
   * IepGeneration createMany
   */
  export type IepGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IepGenerations.
     */
    data: IepGenerationCreateManyInput | IepGenerationCreateManyInput[]
  }

  /**
   * IepGeneration createManyAndReturn
   */
  export type IepGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IepGenerations.
     */
    data: IepGenerationCreateManyInput | IepGenerationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IepGeneration update
   */
  export type IepGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a IepGeneration.
     */
    data: XOR<IepGenerationUpdateInput, IepGenerationUncheckedUpdateInput>
    /**
     * Choose, which IepGeneration to update.
     */
    where: IepGenerationWhereUniqueInput
  }

  /**
   * IepGeneration updateMany
   */
  export type IepGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IepGenerations.
     */
    data: XOR<IepGenerationUpdateManyMutationInput, IepGenerationUncheckedUpdateManyInput>
    /**
     * Filter which IepGenerations to update
     */
    where?: IepGenerationWhereInput
  }

  /**
   * IepGeneration upsert
   */
  export type IepGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the IepGeneration to update in case it exists.
     */
    where: IepGenerationWhereUniqueInput
    /**
     * In case the IepGeneration found by the `where` argument doesn't exist, create a new IepGeneration with this data.
     */
    create: XOR<IepGenerationCreateInput, IepGenerationUncheckedCreateInput>
    /**
     * In case the IepGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IepGenerationUpdateInput, IepGenerationUncheckedUpdateInput>
  }

  /**
   * IepGeneration delete
   */
  export type IepGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
    /**
     * Filter which IepGeneration to delete.
     */
    where: IepGenerationWhereUniqueInput
  }

  /**
   * IepGeneration deleteMany
   */
  export type IepGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IepGenerations to delete
     */
    where?: IepGenerationWhereInput
  }

  /**
   * IepGeneration without action
   */
  export type IepGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IepGeneration
     */
    select?: IepGenerationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IepGenerationInclude<ExtArgs> | null
  }


  /**
   * Model Questionnaire
   */

  export type AggregateQuestionnaire = {
    _count: QuestionnaireCountAggregateOutputType | null
    _min: QuestionnaireMinAggregateOutputType | null
    _max: QuestionnaireMaxAggregateOutputType | null
  }

  export type QuestionnaireMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionnaireMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionnaireCountAggregateOutputType = {
    id: number
    patientId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionnaireMinAggregateInputType = {
    id?: true
    patientId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionnaireMaxAggregateInputType = {
    id?: true
    patientId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionnaireCountAggregateInputType = {
    id?: true
    patientId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionnaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questionnaire to aggregate.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questionnaires
    **/
    _count?: true | QuestionnaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionnaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionnaireMaxAggregateInputType
  }

  export type GetQuestionnaireAggregateType<T extends QuestionnaireAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionnaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionnaire[P]>
      : GetScalarType<T[P], AggregateQuestionnaire[P]>
  }




  export type QuestionnaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionnaireWhereInput
    orderBy?: QuestionnaireOrderByWithAggregationInput | QuestionnaireOrderByWithAggregationInput[]
    by: QuestionnaireScalarFieldEnum[] | QuestionnaireScalarFieldEnum
    having?: QuestionnaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionnaireCountAggregateInputType | true
    _min?: QuestionnaireMinAggregateInputType
    _max?: QuestionnaireMaxAggregateInputType
  }

  export type QuestionnaireGroupByOutputType = {
    id: string
    patientId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionnaireCountAggregateOutputType | null
    _min: QuestionnaireMinAggregateOutputType | null
    _max: QuestionnaireMaxAggregateOutputType | null
  }

  type GetQuestionnaireGroupByPayload<T extends QuestionnaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionnaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionnaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionnaireGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionnaireGroupByOutputType[P]>
        }
      >
    >


  export type QuestionnaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    responses?: boolean | Questionnaire$responsesArgs<ExtArgs>
    _count?: boolean | QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionnaire"]>

  export type QuestionnaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionnaire"]>

  export type QuestionnaireSelectScalar = {
    id?: boolean
    patientId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionnaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    responses?: boolean | Questionnaire$responsesArgs<ExtArgs>
    _count?: boolean | QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionnaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $QuestionnairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questionnaire"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      responses: Prisma.$QuestionnaireResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionnaire"]>
    composites: {}
  }

  type QuestionnaireGetPayload<S extends boolean | null | undefined | QuestionnaireDefaultArgs> = $Result.GetResult<Prisma.$QuestionnairePayload, S>

  type QuestionnaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionnaireFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionnaireCountAggregateInputType | true
    }

  export interface QuestionnaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questionnaire'], meta: { name: 'Questionnaire' } }
    /**
     * Find zero or one Questionnaire that matches the filter.
     * @param {QuestionnaireFindUniqueArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionnaireFindUniqueArgs>(args: SelectSubset<T, QuestionnaireFindUniqueArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Questionnaire that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionnaireFindUniqueOrThrowArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionnaireFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionnaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Questionnaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindFirstArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionnaireFindFirstArgs>(args?: SelectSubset<T, QuestionnaireFindFirstArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Questionnaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindFirstOrThrowArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionnaireFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionnaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questionnaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questionnaires
     * const questionnaires = await prisma.questionnaire.findMany()
     * 
     * // Get first 10 Questionnaires
     * const questionnaires = await prisma.questionnaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionnaireWithIdOnly = await prisma.questionnaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionnaireFindManyArgs>(args?: SelectSubset<T, QuestionnaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Questionnaire.
     * @param {QuestionnaireCreateArgs} args - Arguments to create a Questionnaire.
     * @example
     * // Create one Questionnaire
     * const Questionnaire = await prisma.questionnaire.create({
     *   data: {
     *     // ... data to create a Questionnaire
     *   }
     * })
     * 
     */
    create<T extends QuestionnaireCreateArgs>(args: SelectSubset<T, QuestionnaireCreateArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questionnaires.
     * @param {QuestionnaireCreateManyArgs} args - Arguments to create many Questionnaires.
     * @example
     * // Create many Questionnaires
     * const questionnaire = await prisma.questionnaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionnaireCreateManyArgs>(args?: SelectSubset<T, QuestionnaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questionnaires and returns the data saved in the database.
     * @param {QuestionnaireCreateManyAndReturnArgs} args - Arguments to create many Questionnaires.
     * @example
     * // Create many Questionnaires
     * const questionnaire = await prisma.questionnaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questionnaires and only return the `id`
     * const questionnaireWithIdOnly = await prisma.questionnaire.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionnaireCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionnaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Questionnaire.
     * @param {QuestionnaireDeleteArgs} args - Arguments to delete one Questionnaire.
     * @example
     * // Delete one Questionnaire
     * const Questionnaire = await prisma.questionnaire.delete({
     *   where: {
     *     // ... filter to delete one Questionnaire
     *   }
     * })
     * 
     */
    delete<T extends QuestionnaireDeleteArgs>(args: SelectSubset<T, QuestionnaireDeleteArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Questionnaire.
     * @param {QuestionnaireUpdateArgs} args - Arguments to update one Questionnaire.
     * @example
     * // Update one Questionnaire
     * const questionnaire = await prisma.questionnaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionnaireUpdateArgs>(args: SelectSubset<T, QuestionnaireUpdateArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questionnaires.
     * @param {QuestionnaireDeleteManyArgs} args - Arguments to filter Questionnaires to delete.
     * @example
     * // Delete a few Questionnaires
     * const { count } = await prisma.questionnaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionnaireDeleteManyArgs>(args?: SelectSubset<T, QuestionnaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questionnaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questionnaires
     * const questionnaire = await prisma.questionnaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionnaireUpdateManyArgs>(args: SelectSubset<T, QuestionnaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questionnaire.
     * @param {QuestionnaireUpsertArgs} args - Arguments to update or create a Questionnaire.
     * @example
     * // Update or create a Questionnaire
     * const questionnaire = await prisma.questionnaire.upsert({
     *   create: {
     *     // ... data to create a Questionnaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questionnaire we want to update
     *   }
     * })
     */
    upsert<T extends QuestionnaireUpsertArgs>(args: SelectSubset<T, QuestionnaireUpsertArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questionnaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireCountArgs} args - Arguments to filter Questionnaires to count.
     * @example
     * // Count the number of Questionnaires
     * const count = await prisma.questionnaire.count({
     *   where: {
     *     // ... the filter for the Questionnaires we want to count
     *   }
     * })
    **/
    count<T extends QuestionnaireCountArgs>(
      args?: Subset<T, QuestionnaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionnaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questionnaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionnaireAggregateArgs>(args: Subset<T, QuestionnaireAggregateArgs>): Prisma.PrismaPromise<GetQuestionnaireAggregateType<T>>

    /**
     * Group by Questionnaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionnaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionnaireGroupByArgs['orderBy'] }
        : { orderBy?: QuestionnaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionnaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionnaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questionnaire model
   */
  readonly fields: QuestionnaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questionnaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionnaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responses<T extends Questionnaire$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questionnaire model
   */ 
  interface QuestionnaireFieldRefs {
    readonly id: FieldRef<"Questionnaire", 'String'>
    readonly patientId: FieldRef<"Questionnaire", 'String'>
    readonly createdBy: FieldRef<"Questionnaire", 'String'>
    readonly createdAt: FieldRef<"Questionnaire", 'DateTime'>
    readonly updatedAt: FieldRef<"Questionnaire", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Questionnaire findUnique
   */
  export type QuestionnaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where: QuestionnaireWhereUniqueInput
  }

  /**
   * Questionnaire findUniqueOrThrow
   */
  export type QuestionnaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where: QuestionnaireWhereUniqueInput
  }

  /**
   * Questionnaire findFirst
   */
  export type QuestionnaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questionnaires.
     */
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }

  /**
   * Questionnaire findFirstOrThrow
   */
  export type QuestionnaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questionnaires.
     */
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }

  /**
   * Questionnaire findMany
   */
  export type QuestionnaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaires to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }

  /**
   * Questionnaire create
   */
  export type QuestionnaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Questionnaire.
     */
    data: XOR<QuestionnaireCreateInput, QuestionnaireUncheckedCreateInput>
  }

  /**
   * Questionnaire createMany
   */
  export type QuestionnaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questionnaires.
     */
    data: QuestionnaireCreateManyInput | QuestionnaireCreateManyInput[]
  }

  /**
   * Questionnaire createManyAndReturn
   */
  export type QuestionnaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questionnaires.
     */
    data: QuestionnaireCreateManyInput | QuestionnaireCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questionnaire update
   */
  export type QuestionnaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Questionnaire.
     */
    data: XOR<QuestionnaireUpdateInput, QuestionnaireUncheckedUpdateInput>
    /**
     * Choose, which Questionnaire to update.
     */
    where: QuestionnaireWhereUniqueInput
  }

  /**
   * Questionnaire updateMany
   */
  export type QuestionnaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questionnaires.
     */
    data: XOR<QuestionnaireUpdateManyMutationInput, QuestionnaireUncheckedUpdateManyInput>
    /**
     * Filter which Questionnaires to update
     */
    where?: QuestionnaireWhereInput
  }

  /**
   * Questionnaire upsert
   */
  export type QuestionnaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Questionnaire to update in case it exists.
     */
    where: QuestionnaireWhereUniqueInput
    /**
     * In case the Questionnaire found by the `where` argument doesn't exist, create a new Questionnaire with this data.
     */
    create: XOR<QuestionnaireCreateInput, QuestionnaireUncheckedCreateInput>
    /**
     * In case the Questionnaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionnaireUpdateInput, QuestionnaireUncheckedUpdateInput>
  }

  /**
   * Questionnaire delete
   */
  export type QuestionnaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter which Questionnaire to delete.
     */
    where: QuestionnaireWhereUniqueInput
  }

  /**
   * Questionnaire deleteMany
   */
  export type QuestionnaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questionnaires to delete
     */
    where?: QuestionnaireWhereInput
  }

  /**
   * Questionnaire.responses
   */
  export type Questionnaire$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    where?: QuestionnaireResponseWhereInput
    orderBy?: QuestionnaireResponseOrderByWithRelationInput | QuestionnaireResponseOrderByWithRelationInput[]
    cursor?: QuestionnaireResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionnaireResponseScalarFieldEnum | QuestionnaireResponseScalarFieldEnum[]
  }

  /**
   * Questionnaire without action
   */
  export type QuestionnaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireInclude<ExtArgs> | null
  }


  /**
   * Model QuestionnaireResponse
   */

  export type AggregateQuestionnaireResponse = {
    _count: QuestionnaireResponseCountAggregateOutputType | null
    _avg: QuestionnaireResponseAvgAggregateOutputType | null
    _sum: QuestionnaireResponseSumAggregateOutputType | null
    _min: QuestionnaireResponseMinAggregateOutputType | null
    _max: QuestionnaireResponseMaxAggregateOutputType | null
  }

  export type QuestionnaireResponseAvgAggregateOutputType = {
    questionIndex: number | null
    score: number | null
  }

  export type QuestionnaireResponseSumAggregateOutputType = {
    questionIndex: number | null
    score: number | null
  }

  export type QuestionnaireResponseMinAggregateOutputType = {
    id: string | null
    questionnaireId: string | null
    dimension: string | null
    questionIndex: number | null
    ageTier: string | null
    score: number | null
    notes: string | null
  }

  export type QuestionnaireResponseMaxAggregateOutputType = {
    id: string | null
    questionnaireId: string | null
    dimension: string | null
    questionIndex: number | null
    ageTier: string | null
    score: number | null
    notes: string | null
  }

  export type QuestionnaireResponseCountAggregateOutputType = {
    id: number
    questionnaireId: number
    dimension: number
    questionIndex: number
    ageTier: number
    score: number
    notes: number
    _all: number
  }


  export type QuestionnaireResponseAvgAggregateInputType = {
    questionIndex?: true
    score?: true
  }

  export type QuestionnaireResponseSumAggregateInputType = {
    questionIndex?: true
    score?: true
  }

  export type QuestionnaireResponseMinAggregateInputType = {
    id?: true
    questionnaireId?: true
    dimension?: true
    questionIndex?: true
    ageTier?: true
    score?: true
    notes?: true
  }

  export type QuestionnaireResponseMaxAggregateInputType = {
    id?: true
    questionnaireId?: true
    dimension?: true
    questionIndex?: true
    ageTier?: true
    score?: true
    notes?: true
  }

  export type QuestionnaireResponseCountAggregateInputType = {
    id?: true
    questionnaireId?: true
    dimension?: true
    questionIndex?: true
    ageTier?: true
    score?: true
    notes?: true
    _all?: true
  }

  export type QuestionnaireResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionnaireResponse to aggregate.
     */
    where?: QuestionnaireResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionnaireResponses to fetch.
     */
    orderBy?: QuestionnaireResponseOrderByWithRelationInput | QuestionnaireResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionnaireResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionnaireResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionnaireResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionnaireResponses
    **/
    _count?: true | QuestionnaireResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionnaireResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionnaireResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionnaireResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionnaireResponseMaxAggregateInputType
  }

  export type GetQuestionnaireResponseAggregateType<T extends QuestionnaireResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionnaireResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionnaireResponse[P]>
      : GetScalarType<T[P], AggregateQuestionnaireResponse[P]>
  }




  export type QuestionnaireResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionnaireResponseWhereInput
    orderBy?: QuestionnaireResponseOrderByWithAggregationInput | QuestionnaireResponseOrderByWithAggregationInput[]
    by: QuestionnaireResponseScalarFieldEnum[] | QuestionnaireResponseScalarFieldEnum
    having?: QuestionnaireResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionnaireResponseCountAggregateInputType | true
    _avg?: QuestionnaireResponseAvgAggregateInputType
    _sum?: QuestionnaireResponseSumAggregateInputType
    _min?: QuestionnaireResponseMinAggregateInputType
    _max?: QuestionnaireResponseMaxAggregateInputType
  }

  export type QuestionnaireResponseGroupByOutputType = {
    id: string
    questionnaireId: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes: string | null
    _count: QuestionnaireResponseCountAggregateOutputType | null
    _avg: QuestionnaireResponseAvgAggregateOutputType | null
    _sum: QuestionnaireResponseSumAggregateOutputType | null
    _min: QuestionnaireResponseMinAggregateOutputType | null
    _max: QuestionnaireResponseMaxAggregateOutputType | null
  }

  type GetQuestionnaireResponseGroupByPayload<T extends QuestionnaireResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionnaireResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionnaireResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionnaireResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionnaireResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuestionnaireResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionnaireId?: boolean
    dimension?: boolean
    questionIndex?: boolean
    ageTier?: boolean
    score?: boolean
    notes?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionnaireResponse"]>

  export type QuestionnaireResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionnaireId?: boolean
    dimension?: boolean
    questionIndex?: boolean
    ageTier?: boolean
    score?: boolean
    notes?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionnaireResponse"]>

  export type QuestionnaireResponseSelectScalar = {
    id?: boolean
    questionnaireId?: boolean
    dimension?: boolean
    questionIndex?: boolean
    ageTier?: boolean
    score?: boolean
    notes?: boolean
  }

  export type QuestionnaireResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }
  export type QuestionnaireResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }

  export type $QuestionnaireResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionnaireResponse"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionnaireId: string
      dimension: string
      questionIndex: number
      ageTier: string
      score: number
      notes: string | null
    }, ExtArgs["result"]["questionnaireResponse"]>
    composites: {}
  }

  type QuestionnaireResponseGetPayload<S extends boolean | null | undefined | QuestionnaireResponseDefaultArgs> = $Result.GetResult<Prisma.$QuestionnaireResponsePayload, S>

  type QuestionnaireResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionnaireResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionnaireResponseCountAggregateInputType | true
    }

  export interface QuestionnaireResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionnaireResponse'], meta: { name: 'QuestionnaireResponse' } }
    /**
     * Find zero or one QuestionnaireResponse that matches the filter.
     * @param {QuestionnaireResponseFindUniqueArgs} args - Arguments to find a QuestionnaireResponse
     * @example
     * // Get one QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionnaireResponseFindUniqueArgs>(args: SelectSubset<T, QuestionnaireResponseFindUniqueArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuestionnaireResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionnaireResponseFindUniqueOrThrowArgs} args - Arguments to find a QuestionnaireResponse
     * @example
     * // Get one QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionnaireResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionnaireResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuestionnaireResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseFindFirstArgs} args - Arguments to find a QuestionnaireResponse
     * @example
     * // Get one QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionnaireResponseFindFirstArgs>(args?: SelectSubset<T, QuestionnaireResponseFindFirstArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuestionnaireResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseFindFirstOrThrowArgs} args - Arguments to find a QuestionnaireResponse
     * @example
     * // Get one QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionnaireResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionnaireResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuestionnaireResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionnaireResponses
     * const questionnaireResponses = await prisma.questionnaireResponse.findMany()
     * 
     * // Get first 10 QuestionnaireResponses
     * const questionnaireResponses = await prisma.questionnaireResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionnaireResponseWithIdOnly = await prisma.questionnaireResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionnaireResponseFindManyArgs>(args?: SelectSubset<T, QuestionnaireResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuestionnaireResponse.
     * @param {QuestionnaireResponseCreateArgs} args - Arguments to create a QuestionnaireResponse.
     * @example
     * // Create one QuestionnaireResponse
     * const QuestionnaireResponse = await prisma.questionnaireResponse.create({
     *   data: {
     *     // ... data to create a QuestionnaireResponse
     *   }
     * })
     * 
     */
    create<T extends QuestionnaireResponseCreateArgs>(args: SelectSubset<T, QuestionnaireResponseCreateArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuestionnaireResponses.
     * @param {QuestionnaireResponseCreateManyArgs} args - Arguments to create many QuestionnaireResponses.
     * @example
     * // Create many QuestionnaireResponses
     * const questionnaireResponse = await prisma.questionnaireResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionnaireResponseCreateManyArgs>(args?: SelectSubset<T, QuestionnaireResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionnaireResponses and returns the data saved in the database.
     * @param {QuestionnaireResponseCreateManyAndReturnArgs} args - Arguments to create many QuestionnaireResponses.
     * @example
     * // Create many QuestionnaireResponses
     * const questionnaireResponse = await prisma.questionnaireResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionnaireResponses and only return the `id`
     * const questionnaireResponseWithIdOnly = await prisma.questionnaireResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionnaireResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionnaireResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuestionnaireResponse.
     * @param {QuestionnaireResponseDeleteArgs} args - Arguments to delete one QuestionnaireResponse.
     * @example
     * // Delete one QuestionnaireResponse
     * const QuestionnaireResponse = await prisma.questionnaireResponse.delete({
     *   where: {
     *     // ... filter to delete one QuestionnaireResponse
     *   }
     * })
     * 
     */
    delete<T extends QuestionnaireResponseDeleteArgs>(args: SelectSubset<T, QuestionnaireResponseDeleteArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuestionnaireResponse.
     * @param {QuestionnaireResponseUpdateArgs} args - Arguments to update one QuestionnaireResponse.
     * @example
     * // Update one QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionnaireResponseUpdateArgs>(args: SelectSubset<T, QuestionnaireResponseUpdateArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuestionnaireResponses.
     * @param {QuestionnaireResponseDeleteManyArgs} args - Arguments to filter QuestionnaireResponses to delete.
     * @example
     * // Delete a few QuestionnaireResponses
     * const { count } = await prisma.questionnaireResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionnaireResponseDeleteManyArgs>(args?: SelectSubset<T, QuestionnaireResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionnaireResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionnaireResponses
     * const questionnaireResponse = await prisma.questionnaireResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionnaireResponseUpdateManyArgs>(args: SelectSubset<T, QuestionnaireResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionnaireResponse.
     * @param {QuestionnaireResponseUpsertArgs} args - Arguments to update or create a QuestionnaireResponse.
     * @example
     * // Update or create a QuestionnaireResponse
     * const questionnaireResponse = await prisma.questionnaireResponse.upsert({
     *   create: {
     *     // ... data to create a QuestionnaireResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionnaireResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuestionnaireResponseUpsertArgs>(args: SelectSubset<T, QuestionnaireResponseUpsertArgs<ExtArgs>>): Prisma__QuestionnaireResponseClient<$Result.GetResult<Prisma.$QuestionnaireResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuestionnaireResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseCountArgs} args - Arguments to filter QuestionnaireResponses to count.
     * @example
     * // Count the number of QuestionnaireResponses
     * const count = await prisma.questionnaireResponse.count({
     *   where: {
     *     // ... the filter for the QuestionnaireResponses we want to count
     *   }
     * })
    **/
    count<T extends QuestionnaireResponseCountArgs>(
      args?: Subset<T, QuestionnaireResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionnaireResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionnaireResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionnaireResponseAggregateArgs>(args: Subset<T, QuestionnaireResponseAggregateArgs>): Prisma.PrismaPromise<GetQuestionnaireResponseAggregateType<T>>

    /**
     * Group by QuestionnaireResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionnaireResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionnaireResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuestionnaireResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionnaireResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionnaireResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionnaireResponse model
   */
  readonly fields: QuestionnaireResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionnaireResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionnaireResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionnaireResponse model
   */ 
  interface QuestionnaireResponseFieldRefs {
    readonly id: FieldRef<"QuestionnaireResponse", 'String'>
    readonly questionnaireId: FieldRef<"QuestionnaireResponse", 'String'>
    readonly dimension: FieldRef<"QuestionnaireResponse", 'String'>
    readonly questionIndex: FieldRef<"QuestionnaireResponse", 'Int'>
    readonly ageTier: FieldRef<"QuestionnaireResponse", 'String'>
    readonly score: FieldRef<"QuestionnaireResponse", 'Int'>
    readonly notes: FieldRef<"QuestionnaireResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionnaireResponse findUnique
   */
  export type QuestionnaireResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionnaireResponse to fetch.
     */
    where: QuestionnaireResponseWhereUniqueInput
  }

  /**
   * QuestionnaireResponse findUniqueOrThrow
   */
  export type QuestionnaireResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionnaireResponse to fetch.
     */
    where: QuestionnaireResponseWhereUniqueInput
  }

  /**
   * QuestionnaireResponse findFirst
   */
  export type QuestionnaireResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionnaireResponse to fetch.
     */
    where?: QuestionnaireResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionnaireResponses to fetch.
     */
    orderBy?: QuestionnaireResponseOrderByWithRelationInput | QuestionnaireResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionnaireResponses.
     */
    cursor?: QuestionnaireResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionnaireResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionnaireResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionnaireResponses.
     */
    distinct?: QuestionnaireResponseScalarFieldEnum | QuestionnaireResponseScalarFieldEnum[]
  }

  /**
   * QuestionnaireResponse findFirstOrThrow
   */
  export type QuestionnaireResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionnaireResponse to fetch.
     */
    where?: QuestionnaireResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionnaireResponses to fetch.
     */
    orderBy?: QuestionnaireResponseOrderByWithRelationInput | QuestionnaireResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionnaireResponses.
     */
    cursor?: QuestionnaireResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionnaireResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionnaireResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionnaireResponses.
     */
    distinct?: QuestionnaireResponseScalarFieldEnum | QuestionnaireResponseScalarFieldEnum[]
  }

  /**
   * QuestionnaireResponse findMany
   */
  export type QuestionnaireResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionnaireResponses to fetch.
     */
    where?: QuestionnaireResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionnaireResponses to fetch.
     */
    orderBy?: QuestionnaireResponseOrderByWithRelationInput | QuestionnaireResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionnaireResponses.
     */
    cursor?: QuestionnaireResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionnaireResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionnaireResponses.
     */
    skip?: number
    distinct?: QuestionnaireResponseScalarFieldEnum | QuestionnaireResponseScalarFieldEnum[]
  }

  /**
   * QuestionnaireResponse create
   */
  export type QuestionnaireResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionnaireResponse.
     */
    data: XOR<QuestionnaireResponseCreateInput, QuestionnaireResponseUncheckedCreateInput>
  }

  /**
   * QuestionnaireResponse createMany
   */
  export type QuestionnaireResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionnaireResponses.
     */
    data: QuestionnaireResponseCreateManyInput | QuestionnaireResponseCreateManyInput[]
  }

  /**
   * QuestionnaireResponse createManyAndReturn
   */
  export type QuestionnaireResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuestionnaireResponses.
     */
    data: QuestionnaireResponseCreateManyInput | QuestionnaireResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionnaireResponse update
   */
  export type QuestionnaireResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionnaireResponse.
     */
    data: XOR<QuestionnaireResponseUpdateInput, QuestionnaireResponseUncheckedUpdateInput>
    /**
     * Choose, which QuestionnaireResponse to update.
     */
    where: QuestionnaireResponseWhereUniqueInput
  }

  /**
   * QuestionnaireResponse updateMany
   */
  export type QuestionnaireResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionnaireResponses.
     */
    data: XOR<QuestionnaireResponseUpdateManyMutationInput, QuestionnaireResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionnaireResponses to update
     */
    where?: QuestionnaireResponseWhereInput
  }

  /**
   * QuestionnaireResponse upsert
   */
  export type QuestionnaireResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionnaireResponse to update in case it exists.
     */
    where: QuestionnaireResponseWhereUniqueInput
    /**
     * In case the QuestionnaireResponse found by the `where` argument doesn't exist, create a new QuestionnaireResponse with this data.
     */
    create: XOR<QuestionnaireResponseCreateInput, QuestionnaireResponseUncheckedCreateInput>
    /**
     * In case the QuestionnaireResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionnaireResponseUpdateInput, QuestionnaireResponseUncheckedUpdateInput>
  }

  /**
   * QuestionnaireResponse delete
   */
  export type QuestionnaireResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
    /**
     * Filter which QuestionnaireResponse to delete.
     */
    where: QuestionnaireResponseWhereUniqueInput
  }

  /**
   * QuestionnaireResponse deleteMany
   */
  export type QuestionnaireResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionnaireResponses to delete
     */
    where?: QuestionnaireResponseWhereInput
  }

  /**
   * QuestionnaireResponse without action
   */
  export type QuestionnaireResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireResponse
     */
    select?: QuestionnaireResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionnaireResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientAccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    patientId: 'patientId',
    accessLevel: 'accessLevel'
  };

  export type PatientAccessScalarFieldEnum = (typeof PatientAccessScalarFieldEnum)[keyof typeof PatientAccessScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dateOfBirth: 'dateOfBirth',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    therapistId: 'therapistId',
    sessionDate: 'sessionDate',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    participants: 'participants',
    materials: 'materials',
    notes: 'notes',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const IepGenerationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    inputData: 'inputData',
    generatedGoals: 'generatedGoals',
    createdAt: 'createdAt'
  };

  export type IepGenerationScalarFieldEnum = (typeof IepGenerationScalarFieldEnum)[keyof typeof IepGenerationScalarFieldEnum]


  export const QuestionnaireScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionnaireScalarFieldEnum = (typeof QuestionnaireScalarFieldEnum)[keyof typeof QuestionnaireScalarFieldEnum]


  export const QuestionnaireResponseScalarFieldEnum: {
    id: 'id',
    questionnaireId: 'questionnaireId',
    dimension: 'dimension',
    questionIndex: 'questionIndex',
    ageTier: 'ageTier',
    score: 'score',
    notes: 'notes'
  };

  export type QuestionnaireResponseScalarFieldEnum = (typeof QuestionnaireResponseScalarFieldEnum)[keyof typeof QuestionnaireResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    patientAccess?: PatientAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    patientAccess?: PatientAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    patientAccess?: PatientAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientAccessWhereInput = {
    AND?: PatientAccessWhereInput | PatientAccessWhereInput[]
    OR?: PatientAccessWhereInput[]
    NOT?: PatientAccessWhereInput | PatientAccessWhereInput[]
    id?: StringFilter<"PatientAccess"> | string
    userId?: StringFilter<"PatientAccess"> | string
    patientId?: StringFilter<"PatientAccess"> | string
    accessLevel?: StringFilter<"PatientAccess"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }

  export type PatientAccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    accessLevel?: SortOrder
    user?: UserOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type PatientAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_patientId?: PatientAccessUserIdPatientIdCompoundUniqueInput
    AND?: PatientAccessWhereInput | PatientAccessWhereInput[]
    OR?: PatientAccessWhereInput[]
    NOT?: PatientAccessWhereInput | PatientAccessWhereInput[]
    userId?: StringFilter<"PatientAccess"> | string
    patientId?: StringFilter<"PatientAccess"> | string
    accessLevel?: StringFilter<"PatientAccess"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }, "id" | "userId_patientId">

  export type PatientAccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    accessLevel?: SortOrder
    _count?: PatientAccessCountOrderByAggregateInput
    _max?: PatientAccessMaxOrderByAggregateInput
    _min?: PatientAccessMinOrderByAggregateInput
  }

  export type PatientAccessScalarWhereWithAggregatesInput = {
    AND?: PatientAccessScalarWhereWithAggregatesInput | PatientAccessScalarWhereWithAggregatesInput[]
    OR?: PatientAccessScalarWhereWithAggregatesInput[]
    NOT?: PatientAccessScalarWhereWithAggregatesInput | PatientAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientAccess"> | string
    userId?: StringWithAggregatesFilter<"PatientAccess"> | string
    patientId?: StringWithAggregatesFilter<"PatientAccess"> | string
    accessLevel?: StringWithAggregatesFilter<"PatientAccess"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    sessions?: SessionListRelationFilter
    iepGenerations?: IepGenerationListRelationFilter
    access?: PatientAccessListRelationFilter
    questionnaires?: QuestionnaireListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    iepGenerations?: IepGenerationOrderByRelationAggregateInput
    access?: PatientAccessOrderByRelationAggregateInput
    questionnaires?: QuestionnaireOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    sessions?: SessionListRelationFilter
    iepGenerations?: IepGenerationListRelationFilter
    access?: PatientAccessListRelationFilter
    questionnaires?: QuestionnaireListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    patientId?: StringFilter<"Session"> | string
    therapistId?: StringFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    startTime?: StringNullableFilter<"Session"> | string | null
    endTime?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    participants?: StringNullableFilter<"Session"> | string | null
    materials?: StringNullableFilter<"Session"> | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    isPrivate?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    therapist?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    therapistId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    participants?: SortOrderInput | SortOrder
    materials?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    therapist?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    patientId?: StringFilter<"Session"> | string
    therapistId?: StringFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    startTime?: StringNullableFilter<"Session"> | string | null
    endTime?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    participants?: StringNullableFilter<"Session"> | string | null
    materials?: StringNullableFilter<"Session"> | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    isPrivate?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    therapist?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    therapistId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    participants?: SortOrderInput | SortOrder
    materials?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    patientId?: StringWithAggregatesFilter<"Session"> | string
    therapistId?: StringWithAggregatesFilter<"Session"> | string
    sessionDate?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    startTime?: StringNullableWithAggregatesFilter<"Session"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"Session"> | string | null
    location?: StringNullableWithAggregatesFilter<"Session"> | string | null
    participants?: StringNullableWithAggregatesFilter<"Session"> | string | null
    materials?: StringNullableWithAggregatesFilter<"Session"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Session"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"Session"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type IepGenerationWhereInput = {
    AND?: IepGenerationWhereInput | IepGenerationWhereInput[]
    OR?: IepGenerationWhereInput[]
    NOT?: IepGenerationWhereInput | IepGenerationWhereInput[]
    id?: StringFilter<"IepGeneration"> | string
    patientId?: StringFilter<"IepGeneration"> | string
    inputData?: StringFilter<"IepGeneration"> | string
    generatedGoals?: StringFilter<"IepGeneration"> | string
    createdAt?: DateTimeFilter<"IepGeneration"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }

  export type IepGenerationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    inputData?: SortOrder
    generatedGoals?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type IepGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IepGenerationWhereInput | IepGenerationWhereInput[]
    OR?: IepGenerationWhereInput[]
    NOT?: IepGenerationWhereInput | IepGenerationWhereInput[]
    patientId?: StringFilter<"IepGeneration"> | string
    inputData?: StringFilter<"IepGeneration"> | string
    generatedGoals?: StringFilter<"IepGeneration"> | string
    createdAt?: DateTimeFilter<"IepGeneration"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
  }, "id">

  export type IepGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    inputData?: SortOrder
    generatedGoals?: SortOrder
    createdAt?: SortOrder
    _count?: IepGenerationCountOrderByAggregateInput
    _max?: IepGenerationMaxOrderByAggregateInput
    _min?: IepGenerationMinOrderByAggregateInput
  }

  export type IepGenerationScalarWhereWithAggregatesInput = {
    AND?: IepGenerationScalarWhereWithAggregatesInput | IepGenerationScalarWhereWithAggregatesInput[]
    OR?: IepGenerationScalarWhereWithAggregatesInput[]
    NOT?: IepGenerationScalarWhereWithAggregatesInput | IepGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IepGeneration"> | string
    patientId?: StringWithAggregatesFilter<"IepGeneration"> | string
    inputData?: StringWithAggregatesFilter<"IepGeneration"> | string
    generatedGoals?: StringWithAggregatesFilter<"IepGeneration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IepGeneration"> | Date | string
  }

  export type QuestionnaireWhereInput = {
    AND?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    OR?: QuestionnaireWhereInput[]
    NOT?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    id?: StringFilter<"Questionnaire"> | string
    patientId?: StringFilter<"Questionnaire"> | string
    createdBy?: StringFilter<"Questionnaire"> | string
    createdAt?: DateTimeFilter<"Questionnaire"> | Date | string
    updatedAt?: DateTimeFilter<"Questionnaire"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    responses?: QuestionnaireResponseListRelationFilter
  }

  export type QuestionnaireOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    responses?: QuestionnaireResponseOrderByRelationAggregateInput
  }

  export type QuestionnaireWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    OR?: QuestionnaireWhereInput[]
    NOT?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    patientId?: StringFilter<"Questionnaire"> | string
    createdBy?: StringFilter<"Questionnaire"> | string
    createdAt?: DateTimeFilter<"Questionnaire"> | Date | string
    updatedAt?: DateTimeFilter<"Questionnaire"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    responses?: QuestionnaireResponseListRelationFilter
  }, "id">

  export type QuestionnaireOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionnaireCountOrderByAggregateInput
    _max?: QuestionnaireMaxOrderByAggregateInput
    _min?: QuestionnaireMinOrderByAggregateInput
  }

  export type QuestionnaireScalarWhereWithAggregatesInput = {
    AND?: QuestionnaireScalarWhereWithAggregatesInput | QuestionnaireScalarWhereWithAggregatesInput[]
    OR?: QuestionnaireScalarWhereWithAggregatesInput[]
    NOT?: QuestionnaireScalarWhereWithAggregatesInput | QuestionnaireScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Questionnaire"> | string
    patientId?: StringWithAggregatesFilter<"Questionnaire"> | string
    createdBy?: StringWithAggregatesFilter<"Questionnaire"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Questionnaire"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Questionnaire"> | Date | string
  }

  export type QuestionnaireResponseWhereInput = {
    AND?: QuestionnaireResponseWhereInput | QuestionnaireResponseWhereInput[]
    OR?: QuestionnaireResponseWhereInput[]
    NOT?: QuestionnaireResponseWhereInput | QuestionnaireResponseWhereInput[]
    id?: StringFilter<"QuestionnaireResponse"> | string
    questionnaireId?: StringFilter<"QuestionnaireResponse"> | string
    dimension?: StringFilter<"QuestionnaireResponse"> | string
    questionIndex?: IntFilter<"QuestionnaireResponse"> | number
    ageTier?: StringFilter<"QuestionnaireResponse"> | string
    score?: IntFilter<"QuestionnaireResponse"> | number
    notes?: StringNullableFilter<"QuestionnaireResponse"> | string | null
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type QuestionnaireResponseOrderByWithRelationInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
    dimension?: SortOrder
    questionIndex?: SortOrder
    ageTier?: SortOrder
    score?: SortOrder
    notes?: SortOrderInput | SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type QuestionnaireResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionnaireResponseWhereInput | QuestionnaireResponseWhereInput[]
    OR?: QuestionnaireResponseWhereInput[]
    NOT?: QuestionnaireResponseWhereInput | QuestionnaireResponseWhereInput[]
    questionnaireId?: StringFilter<"QuestionnaireResponse"> | string
    dimension?: StringFilter<"QuestionnaireResponse"> | string
    questionIndex?: IntFilter<"QuestionnaireResponse"> | number
    ageTier?: StringFilter<"QuestionnaireResponse"> | string
    score?: IntFilter<"QuestionnaireResponse"> | number
    notes?: StringNullableFilter<"QuestionnaireResponse"> | string | null
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id">

  export type QuestionnaireResponseOrderByWithAggregationInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
    dimension?: SortOrder
    questionIndex?: SortOrder
    ageTier?: SortOrder
    score?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: QuestionnaireResponseCountOrderByAggregateInput
    _avg?: QuestionnaireResponseAvgOrderByAggregateInput
    _max?: QuestionnaireResponseMaxOrderByAggregateInput
    _min?: QuestionnaireResponseMinOrderByAggregateInput
    _sum?: QuestionnaireResponseSumOrderByAggregateInput
  }

  export type QuestionnaireResponseScalarWhereWithAggregatesInput = {
    AND?: QuestionnaireResponseScalarWhereWithAggregatesInput | QuestionnaireResponseScalarWhereWithAggregatesInput[]
    OR?: QuestionnaireResponseScalarWhereWithAggregatesInput[]
    NOT?: QuestionnaireResponseScalarWhereWithAggregatesInput | QuestionnaireResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionnaireResponse"> | string
    questionnaireId?: StringWithAggregatesFilter<"QuestionnaireResponse"> | string
    dimension?: StringWithAggregatesFilter<"QuestionnaireResponse"> | string
    questionIndex?: IntWithAggregatesFilter<"QuestionnaireResponse"> | number
    ageTier?: StringWithAggregatesFilter<"QuestionnaireResponse"> | string
    score?: IntWithAggregatesFilter<"QuestionnaireResponse"> | number
    notes?: StringNullableWithAggregatesFilter<"QuestionnaireResponse"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutTherapistInput
    patientAccess?: PatientAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutTherapistInput
    patientAccess?: PatientAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutTherapistNestedInput
    patientAccess?: PatientAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutTherapistNestedInput
    patientAccess?: PatientAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientAccessCreateInput = {
    id?: string
    accessLevel: string
    user: UserCreateNestedOneWithoutPatientAccessInput
    patient: PatientCreateNestedOneWithoutAccessInput
  }

  export type PatientAccessUncheckedCreateInput = {
    id?: string
    userId: string
    patientId: string
    accessLevel: string
  }

  export type PatientAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPatientAccessNestedInput
    patient?: PatientUpdateOneRequiredWithoutAccessNestedInput
  }

  export type PatientAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type PatientAccessCreateManyInput = {
    id?: string
    userId: string
    patientId: string
    accessLevel: string
  }

  export type PatientAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type PatientAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationCreateNestedManyWithoutPatientInput
    access?: PatientAccessCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationUncheckedCreateNestedManyWithoutPatientInput
    access?: PatientAccessUncheckedCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUncheckedUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUncheckedUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutSessionsInput
    therapist: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    patientId: string
    therapistId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
    therapist?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    patientId: string
    therapistId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationCreateInput = {
    id?: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutIepGenerationsInput
  }

  export type IepGenerationUncheckedCreateInput = {
    id?: string
    patientId: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
  }

  export type IepGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutIepGenerationsNestedInput
  }

  export type IepGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationCreateManyInput = {
    id?: string
    patientId: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
  }

  export type IepGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionnaireCreateInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutQuestionnairesInput
    responses?: QuestionnaireResponseCreateNestedManyWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateInput = {
    id?: string
    patientId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: QuestionnaireResponseUncheckedCreateNestedManyWithoutQuestionnaireInput
  }

  export type QuestionnaireUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutQuestionnairesNestedInput
    responses?: QuestionnaireResponseUpdateManyWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionnaireResponseUncheckedUpdateManyWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateManyInput = {
    id?: string
    patientId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionnaireUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionnaireUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionnaireResponseCreateInput = {
    id?: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
    questionnaire: QuestionnaireCreateNestedOneWithoutResponsesInput
  }

  export type QuestionnaireResponseUncheckedCreateInput = {
    id?: string
    questionnaireId: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
  }

  export type QuestionnaireResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type QuestionnaireResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionnaireId?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionnaireResponseCreateManyInput = {
    id?: string
    questionnaireId: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
  }

  export type QuestionnaireResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionnaireResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionnaireId?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PatientAccessListRelationFilter = {
    every?: PatientAccessWhereInput
    some?: PatientAccessWhereInput
    none?: PatientAccessWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientAccessUserIdPatientIdCompoundUniqueInput = {
    userId: string
    patientId: string
  }

  export type PatientAccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    accessLevel?: SortOrder
  }

  export type PatientAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    accessLevel?: SortOrder
  }

  export type PatientAccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patientId?: SortOrder
    accessLevel?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IepGenerationListRelationFilter = {
    every?: IepGenerationWhereInput
    some?: IepGenerationWhereInput
    none?: IepGenerationWhereInput
  }

  export type QuestionnaireListRelationFilter = {
    every?: QuestionnaireWhereInput
    some?: QuestionnaireWhereInput
    none?: QuestionnaireWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IepGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionnaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    therapistId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    participants?: SortOrder
    materials?: SortOrder
    notes?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    therapistId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    participants?: SortOrder
    materials?: SortOrder
    notes?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    therapistId?: SortOrder
    sessionDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    participants?: SortOrder
    materials?: SortOrder
    notes?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IepGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    inputData?: SortOrder
    generatedGoals?: SortOrder
    createdAt?: SortOrder
  }

  export type IepGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    inputData?: SortOrder
    generatedGoals?: SortOrder
    createdAt?: SortOrder
  }

  export type IepGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    inputData?: SortOrder
    generatedGoals?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionnaireResponseListRelationFilter = {
    every?: QuestionnaireResponseWhereInput
    some?: QuestionnaireResponseWhereInput
    none?: QuestionnaireResponseWhereInput
  }

  export type QuestionnaireResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionnaireCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionnaireMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionnaireMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionnaireRelationFilter = {
    is?: QuestionnaireWhereInput
    isNot?: QuestionnaireWhereInput
  }

  export type QuestionnaireResponseCountOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
    dimension?: SortOrder
    questionIndex?: SortOrder
    ageTier?: SortOrder
    score?: SortOrder
    notes?: SortOrder
  }

  export type QuestionnaireResponseAvgOrderByAggregateInput = {
    questionIndex?: SortOrder
    score?: SortOrder
  }

  export type QuestionnaireResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
    dimension?: SortOrder
    questionIndex?: SortOrder
    ageTier?: SortOrder
    score?: SortOrder
    notes?: SortOrder
  }

  export type QuestionnaireResponseMinOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
    dimension?: SortOrder
    questionIndex?: SortOrder
    ageTier?: SortOrder
    score?: SortOrder
    notes?: SortOrder
  }

  export type QuestionnaireResponseSumOrderByAggregateInput = {
    questionIndex?: SortOrder
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutTherapistInput = {
    create?: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput> | SessionCreateWithoutTherapistInput[] | SessionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTherapistInput | SessionCreateOrConnectWithoutTherapistInput[]
    createMany?: SessionCreateManyTherapistInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PatientAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput> | PatientAccessCreateWithoutUserInput[] | PatientAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutUserInput | PatientAccessCreateOrConnectWithoutUserInput[]
    createMany?: PatientAccessCreateManyUserInputEnvelope
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput> | SessionCreateWithoutTherapistInput[] | SessionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTherapistInput | SessionCreateOrConnectWithoutTherapistInput[]
    createMany?: SessionCreateManyTherapistInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PatientAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput> | PatientAccessCreateWithoutUserInput[] | PatientAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutUserInput | PatientAccessCreateOrConnectWithoutUserInput[]
    createMany?: PatientAccessCreateManyUserInputEnvelope
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput> | SessionCreateWithoutTherapistInput[] | SessionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTherapistInput | SessionCreateOrConnectWithoutTherapistInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTherapistInput | SessionUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: SessionCreateManyTherapistInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTherapistInput | SessionUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTherapistInput | SessionUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PatientAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput> | PatientAccessCreateWithoutUserInput[] | PatientAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutUserInput | PatientAccessCreateOrConnectWithoutUserInput[]
    upsert?: PatientAccessUpsertWithWhereUniqueWithoutUserInput | PatientAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientAccessCreateManyUserInputEnvelope
    set?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    disconnect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    delete?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    update?: PatientAccessUpdateWithWhereUniqueWithoutUserInput | PatientAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientAccessUpdateManyWithWhereWithoutUserInput | PatientAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput> | SessionCreateWithoutTherapistInput[] | SessionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTherapistInput | SessionCreateOrConnectWithoutTherapistInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTherapistInput | SessionUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: SessionCreateManyTherapistInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTherapistInput | SessionUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTherapistInput | SessionUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PatientAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput> | PatientAccessCreateWithoutUserInput[] | PatientAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutUserInput | PatientAccessCreateOrConnectWithoutUserInput[]
    upsert?: PatientAccessUpsertWithWhereUniqueWithoutUserInput | PatientAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientAccessCreateManyUserInputEnvelope
    set?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    disconnect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    delete?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    update?: PatientAccessUpdateWithWhereUniqueWithoutUserInput | PatientAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientAccessUpdateManyWithWhereWithoutUserInput | PatientAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientAccessInput = {
    create?: XOR<UserCreateWithoutPatientAccessInput, UserUncheckedCreateWithoutPatientAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAccessInput
    connect?: UserWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAccessInput = {
    create?: XOR<PatientCreateWithoutAccessInput, PatientUncheckedCreateWithoutAccessInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAccessInput
    connect?: PatientWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPatientAccessNestedInput = {
    create?: XOR<UserCreateWithoutPatientAccessInput, UserUncheckedCreateWithoutPatientAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAccessInput
    upsert?: UserUpsertWithoutPatientAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientAccessInput, UserUpdateWithoutPatientAccessInput>, UserUncheckedUpdateWithoutPatientAccessInput>
  }

  export type PatientUpdateOneRequiredWithoutAccessNestedInput = {
    create?: XOR<PatientCreateWithoutAccessInput, PatientUncheckedCreateWithoutAccessInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAccessInput
    upsert?: PatientUpsertWithoutAccessInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAccessInput, PatientUpdateWithoutAccessInput>, PatientUncheckedUpdateWithoutAccessInput>
  }

  export type SessionCreateNestedManyWithoutPatientInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type IepGenerationCreateNestedManyWithoutPatientInput = {
    create?: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput> | IepGenerationCreateWithoutPatientInput[] | IepGenerationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IepGenerationCreateOrConnectWithoutPatientInput | IepGenerationCreateOrConnectWithoutPatientInput[]
    createMany?: IepGenerationCreateManyPatientInputEnvelope
    connect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
  }

  export type PatientAccessCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput> | PatientAccessCreateWithoutPatientInput[] | PatientAccessUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutPatientInput | PatientAccessCreateOrConnectWithoutPatientInput[]
    createMany?: PatientAccessCreateManyPatientInputEnvelope
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
  }

  export type QuestionnaireCreateNestedManyWithoutPatientInput = {
    create?: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput> | QuestionnaireCreateWithoutPatientInput[] | QuestionnaireUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutPatientInput | QuestionnaireCreateOrConnectWithoutPatientInput[]
    createMany?: QuestionnaireCreateManyPatientInputEnvelope
    connect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type IepGenerationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput> | IepGenerationCreateWithoutPatientInput[] | IepGenerationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IepGenerationCreateOrConnectWithoutPatientInput | IepGenerationCreateOrConnectWithoutPatientInput[]
    createMany?: IepGenerationCreateManyPatientInputEnvelope
    connect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
  }

  export type PatientAccessUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput> | PatientAccessCreateWithoutPatientInput[] | PatientAccessUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutPatientInput | PatientAccessCreateOrConnectWithoutPatientInput[]
    createMany?: PatientAccessCreateManyPatientInputEnvelope
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
  }

  export type QuestionnaireUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput> | QuestionnaireCreateWithoutPatientInput[] | QuestionnaireUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutPatientInput | QuestionnaireCreateOrConnectWithoutPatientInput[]
    createMany?: QuestionnaireCreateManyPatientInputEnvelope
    connect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPatientInput | SessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPatientInput | SessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPatientInput | SessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IepGenerationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput> | IepGenerationCreateWithoutPatientInput[] | IepGenerationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IepGenerationCreateOrConnectWithoutPatientInput | IepGenerationCreateOrConnectWithoutPatientInput[]
    upsert?: IepGenerationUpsertWithWhereUniqueWithoutPatientInput | IepGenerationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IepGenerationCreateManyPatientInputEnvelope
    set?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    disconnect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    delete?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    connect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    update?: IepGenerationUpdateWithWhereUniqueWithoutPatientInput | IepGenerationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IepGenerationUpdateManyWithWhereWithoutPatientInput | IepGenerationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IepGenerationScalarWhereInput | IepGenerationScalarWhereInput[]
  }

  export type PatientAccessUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput> | PatientAccessCreateWithoutPatientInput[] | PatientAccessUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutPatientInput | PatientAccessCreateOrConnectWithoutPatientInput[]
    upsert?: PatientAccessUpsertWithWhereUniqueWithoutPatientInput | PatientAccessUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientAccessCreateManyPatientInputEnvelope
    set?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    disconnect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    delete?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    update?: PatientAccessUpdateWithWhereUniqueWithoutPatientInput | PatientAccessUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientAccessUpdateManyWithWhereWithoutPatientInput | PatientAccessUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
  }

  export type QuestionnaireUpdateManyWithoutPatientNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput> | QuestionnaireCreateWithoutPatientInput[] | QuestionnaireUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutPatientInput | QuestionnaireCreateOrConnectWithoutPatientInput[]
    upsert?: QuestionnaireUpsertWithWhereUniqueWithoutPatientInput | QuestionnaireUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: QuestionnaireCreateManyPatientInputEnvelope
    set?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    disconnect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    delete?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    connect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    update?: QuestionnaireUpdateWithWhereUniqueWithoutPatientInput | QuestionnaireUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: QuestionnaireUpdateManyWithWhereWithoutPatientInput | QuestionnaireUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: QuestionnaireScalarWhereInput | QuestionnaireScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPatientInput | SessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPatientInput | SessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPatientInput | SessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IepGenerationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput> | IepGenerationCreateWithoutPatientInput[] | IepGenerationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: IepGenerationCreateOrConnectWithoutPatientInput | IepGenerationCreateOrConnectWithoutPatientInput[]
    upsert?: IepGenerationUpsertWithWhereUniqueWithoutPatientInput | IepGenerationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: IepGenerationCreateManyPatientInputEnvelope
    set?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    disconnect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    delete?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    connect?: IepGenerationWhereUniqueInput | IepGenerationWhereUniqueInput[]
    update?: IepGenerationUpdateWithWhereUniqueWithoutPatientInput | IepGenerationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: IepGenerationUpdateManyWithWhereWithoutPatientInput | IepGenerationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: IepGenerationScalarWhereInput | IepGenerationScalarWhereInput[]
  }

  export type PatientAccessUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput> | PatientAccessCreateWithoutPatientInput[] | PatientAccessUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAccessCreateOrConnectWithoutPatientInput | PatientAccessCreateOrConnectWithoutPatientInput[]
    upsert?: PatientAccessUpsertWithWhereUniqueWithoutPatientInput | PatientAccessUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientAccessCreateManyPatientInputEnvelope
    set?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    disconnect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    delete?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    connect?: PatientAccessWhereUniqueInput | PatientAccessWhereUniqueInput[]
    update?: PatientAccessUpdateWithWhereUniqueWithoutPatientInput | PatientAccessUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientAccessUpdateManyWithWhereWithoutPatientInput | PatientAccessUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
  }

  export type QuestionnaireUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput> | QuestionnaireCreateWithoutPatientInput[] | QuestionnaireUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutPatientInput | QuestionnaireCreateOrConnectWithoutPatientInput[]
    upsert?: QuestionnaireUpsertWithWhereUniqueWithoutPatientInput | QuestionnaireUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: QuestionnaireCreateManyPatientInputEnvelope
    set?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    disconnect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    delete?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    connect?: QuestionnaireWhereUniqueInput | QuestionnaireWhereUniqueInput[]
    update?: QuestionnaireUpdateWithWhereUniqueWithoutPatientInput | QuestionnaireUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: QuestionnaireUpdateManyWithWhereWithoutPatientInput | QuestionnaireUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: QuestionnaireScalarWhereInput | QuestionnaireScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    upsert?: PatientUpsertWithoutSessionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutSessionsInput, PatientUpdateWithoutSessionsInput>, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientCreateNestedOneWithoutIepGenerationsInput = {
    create?: XOR<PatientCreateWithoutIepGenerationsInput, PatientUncheckedCreateWithoutIepGenerationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIepGenerationsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutIepGenerationsNestedInput = {
    create?: XOR<PatientCreateWithoutIepGenerationsInput, PatientUncheckedCreateWithoutIepGenerationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutIepGenerationsInput
    upsert?: PatientUpsertWithoutIepGenerationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutIepGenerationsInput, PatientUpdateWithoutIepGenerationsInput>, PatientUncheckedUpdateWithoutIepGenerationsInput>
  }

  export type PatientCreateNestedOneWithoutQuestionnairesInput = {
    create?: XOR<PatientCreateWithoutQuestionnairesInput, PatientUncheckedCreateWithoutQuestionnairesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutQuestionnairesInput
    connect?: PatientWhereUniqueInput
  }

  export type QuestionnaireResponseCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput> | QuestionnaireResponseCreateWithoutQuestionnaireInput[] | QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput | QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: QuestionnaireResponseCreateManyQuestionnaireInputEnvelope
    connect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
  }

  export type QuestionnaireResponseUncheckedCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput> | QuestionnaireResponseCreateWithoutQuestionnaireInput[] | QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput | QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: QuestionnaireResponseCreateManyQuestionnaireInputEnvelope
    connect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutQuestionnairesNestedInput = {
    create?: XOR<PatientCreateWithoutQuestionnairesInput, PatientUncheckedCreateWithoutQuestionnairesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutQuestionnairesInput
    upsert?: PatientUpsertWithoutQuestionnairesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutQuestionnairesInput, PatientUpdateWithoutQuestionnairesInput>, PatientUncheckedUpdateWithoutQuestionnairesInput>
  }

  export type QuestionnaireResponseUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput> | QuestionnaireResponseCreateWithoutQuestionnaireInput[] | QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput | QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: QuestionnaireResponseUpsertWithWhereUniqueWithoutQuestionnaireInput | QuestionnaireResponseUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: QuestionnaireResponseCreateManyQuestionnaireInputEnvelope
    set?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    disconnect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    delete?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    connect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    update?: QuestionnaireResponseUpdateWithWhereUniqueWithoutQuestionnaireInput | QuestionnaireResponseUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: QuestionnaireResponseUpdateManyWithWhereWithoutQuestionnaireInput | QuestionnaireResponseUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: QuestionnaireResponseScalarWhereInput | QuestionnaireResponseScalarWhereInput[]
  }

  export type QuestionnaireResponseUncheckedUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput> | QuestionnaireResponseCreateWithoutQuestionnaireInput[] | QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput | QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: QuestionnaireResponseUpsertWithWhereUniqueWithoutQuestionnaireInput | QuestionnaireResponseUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: QuestionnaireResponseCreateManyQuestionnaireInputEnvelope
    set?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    disconnect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    delete?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    connect?: QuestionnaireResponseWhereUniqueInput | QuestionnaireResponseWhereUniqueInput[]
    update?: QuestionnaireResponseUpdateWithWhereUniqueWithoutQuestionnaireInput | QuestionnaireResponseUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: QuestionnaireResponseUpdateManyWithWhereWithoutQuestionnaireInput | QuestionnaireResponseUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: QuestionnaireResponseScalarWhereInput | QuestionnaireResponseScalarWhereInput[]
  }

  export type QuestionnaireCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuestionnaireCreateWithoutResponsesInput, QuestionnaireUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutResponsesInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionnaireUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutResponsesInput, QuestionnaireUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutResponsesInput
    upsert?: QuestionnaireUpsertWithoutResponsesInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutResponsesInput, QuestionnaireUpdateWithoutResponsesInput>, QuestionnaireUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessionCreateWithoutTherapistInput = {
    id?: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutTherapistInput = {
    id?: string
    patientId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutTherapistInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput>
  }

  export type SessionCreateManyTherapistInputEnvelope = {
    data: SessionCreateManyTherapistInput | SessionCreateManyTherapistInput[]
  }

  export type PatientAccessCreateWithoutUserInput = {
    id?: string
    accessLevel: string
    patient: PatientCreateNestedOneWithoutAccessInput
  }

  export type PatientAccessUncheckedCreateWithoutUserInput = {
    id?: string
    patientId: string
    accessLevel: string
  }

  export type PatientAccessCreateOrConnectWithoutUserInput = {
    where: PatientAccessWhereUniqueInput
    create: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput>
  }

  export type PatientAccessCreateManyUserInputEnvelope = {
    data: PatientAccessCreateManyUserInput | PatientAccessCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutTherapistInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutTherapistInput, SessionUncheckedUpdateWithoutTherapistInput>
    create: XOR<SessionCreateWithoutTherapistInput, SessionUncheckedCreateWithoutTherapistInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutTherapistInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutTherapistInput, SessionUncheckedUpdateWithoutTherapistInput>
  }

  export type SessionUpdateManyWithWhereWithoutTherapistInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutTherapistInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    patientId?: StringFilter<"Session"> | string
    therapistId?: StringFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    startTime?: StringNullableFilter<"Session"> | string | null
    endTime?: StringNullableFilter<"Session"> | string | null
    location?: StringNullableFilter<"Session"> | string | null
    participants?: StringNullableFilter<"Session"> | string | null
    materials?: StringNullableFilter<"Session"> | string | null
    notes?: StringNullableFilter<"Session"> | string | null
    isPrivate?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PatientAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: PatientAccessWhereUniqueInput
    update: XOR<PatientAccessUpdateWithoutUserInput, PatientAccessUncheckedUpdateWithoutUserInput>
    create: XOR<PatientAccessCreateWithoutUserInput, PatientAccessUncheckedCreateWithoutUserInput>
  }

  export type PatientAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: PatientAccessWhereUniqueInput
    data: XOR<PatientAccessUpdateWithoutUserInput, PatientAccessUncheckedUpdateWithoutUserInput>
  }

  export type PatientAccessUpdateManyWithWhereWithoutUserInput = {
    where: PatientAccessScalarWhereInput
    data: XOR<PatientAccessUpdateManyMutationInput, PatientAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type PatientAccessScalarWhereInput = {
    AND?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
    OR?: PatientAccessScalarWhereInput[]
    NOT?: PatientAccessScalarWhereInput | PatientAccessScalarWhereInput[]
    id?: StringFilter<"PatientAccess"> | string
    userId?: StringFilter<"PatientAccess"> | string
    patientId?: StringFilter<"PatientAccess"> | string
    accessLevel?: StringFilter<"PatientAccess"> | string
  }

  export type UserCreateWithoutPatientAccessInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutTherapistInput
  }

  export type UserUncheckedCreateWithoutPatientAccessInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type UserCreateOrConnectWithoutPatientAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientAccessInput, UserUncheckedCreateWithoutPatientAccessInput>
  }

  export type PatientCreateWithoutAccessInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAccessInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationUncheckedCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAccessInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAccessInput, PatientUncheckedCreateWithoutAccessInput>
  }

  export type UserUpsertWithoutPatientAccessInput = {
    update: XOR<UserUpdateWithoutPatientAccessInput, UserUncheckedUpdateWithoutPatientAccessInput>
    create: XOR<UserCreateWithoutPatientAccessInput, UserUncheckedCreateWithoutPatientAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientAccessInput, UserUncheckedUpdateWithoutPatientAccessInput>
  }

  export type UserUpdateWithoutPatientAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutTherapistNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type PatientUpsertWithoutAccessInput = {
    update: XOR<PatientUpdateWithoutAccessInput, PatientUncheckedUpdateWithoutAccessInput>
    create: XOR<PatientCreateWithoutAccessInput, PatientUncheckedCreateWithoutAccessInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAccessInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAccessInput, PatientUncheckedUpdateWithoutAccessInput>
  }

  export type PatientUpdateWithoutAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUncheckedUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type SessionCreateWithoutPatientInput = {
    id?: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
    therapist: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutPatientInput = {
    id?: string
    therapistId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutPatientInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput>
  }

  export type SessionCreateManyPatientInputEnvelope = {
    data: SessionCreateManyPatientInput | SessionCreateManyPatientInput[]
  }

  export type IepGenerationCreateWithoutPatientInput = {
    id?: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
  }

  export type IepGenerationUncheckedCreateWithoutPatientInput = {
    id?: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
  }

  export type IepGenerationCreateOrConnectWithoutPatientInput = {
    where: IepGenerationWhereUniqueInput
    create: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput>
  }

  export type IepGenerationCreateManyPatientInputEnvelope = {
    data: IepGenerationCreateManyPatientInput | IepGenerationCreateManyPatientInput[]
  }

  export type PatientAccessCreateWithoutPatientInput = {
    id?: string
    accessLevel: string
    user: UserCreateNestedOneWithoutPatientAccessInput
  }

  export type PatientAccessUncheckedCreateWithoutPatientInput = {
    id?: string
    userId: string
    accessLevel: string
  }

  export type PatientAccessCreateOrConnectWithoutPatientInput = {
    where: PatientAccessWhereUniqueInput
    create: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput>
  }

  export type PatientAccessCreateManyPatientInputEnvelope = {
    data: PatientAccessCreateManyPatientInput | PatientAccessCreateManyPatientInput[]
  }

  export type QuestionnaireCreateWithoutPatientInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: QuestionnaireResponseCreateNestedManyWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutPatientInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: QuestionnaireResponseUncheckedCreateNestedManyWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutPatientInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput>
  }

  export type QuestionnaireCreateManyPatientInputEnvelope = {
    data: QuestionnaireCreateManyPatientInput | QuestionnaireCreateManyPatientInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutPatientInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutPatientInput, SessionUncheckedUpdateWithoutPatientInput>
    create: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutPatientInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutPatientInput, SessionUncheckedUpdateWithoutPatientInput>
  }

  export type SessionUpdateManyWithWhereWithoutPatientInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutPatientInput>
  }

  export type IepGenerationUpsertWithWhereUniqueWithoutPatientInput = {
    where: IepGenerationWhereUniqueInput
    update: XOR<IepGenerationUpdateWithoutPatientInput, IepGenerationUncheckedUpdateWithoutPatientInput>
    create: XOR<IepGenerationCreateWithoutPatientInput, IepGenerationUncheckedCreateWithoutPatientInput>
  }

  export type IepGenerationUpdateWithWhereUniqueWithoutPatientInput = {
    where: IepGenerationWhereUniqueInput
    data: XOR<IepGenerationUpdateWithoutPatientInput, IepGenerationUncheckedUpdateWithoutPatientInput>
  }

  export type IepGenerationUpdateManyWithWhereWithoutPatientInput = {
    where: IepGenerationScalarWhereInput
    data: XOR<IepGenerationUpdateManyMutationInput, IepGenerationUncheckedUpdateManyWithoutPatientInput>
  }

  export type IepGenerationScalarWhereInput = {
    AND?: IepGenerationScalarWhereInput | IepGenerationScalarWhereInput[]
    OR?: IepGenerationScalarWhereInput[]
    NOT?: IepGenerationScalarWhereInput | IepGenerationScalarWhereInput[]
    id?: StringFilter<"IepGeneration"> | string
    patientId?: StringFilter<"IepGeneration"> | string
    inputData?: StringFilter<"IepGeneration"> | string
    generatedGoals?: StringFilter<"IepGeneration"> | string
    createdAt?: DateTimeFilter<"IepGeneration"> | Date | string
  }

  export type PatientAccessUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientAccessWhereUniqueInput
    update: XOR<PatientAccessUpdateWithoutPatientInput, PatientAccessUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientAccessCreateWithoutPatientInput, PatientAccessUncheckedCreateWithoutPatientInput>
  }

  export type PatientAccessUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientAccessWhereUniqueInput
    data: XOR<PatientAccessUpdateWithoutPatientInput, PatientAccessUncheckedUpdateWithoutPatientInput>
  }

  export type PatientAccessUpdateManyWithWhereWithoutPatientInput = {
    where: PatientAccessScalarWhereInput
    data: XOR<PatientAccessUpdateManyMutationInput, PatientAccessUncheckedUpdateManyWithoutPatientInput>
  }

  export type QuestionnaireUpsertWithWhereUniqueWithoutPatientInput = {
    where: QuestionnaireWhereUniqueInput
    update: XOR<QuestionnaireUpdateWithoutPatientInput, QuestionnaireUncheckedUpdateWithoutPatientInput>
    create: XOR<QuestionnaireCreateWithoutPatientInput, QuestionnaireUncheckedCreateWithoutPatientInput>
  }

  export type QuestionnaireUpdateWithWhereUniqueWithoutPatientInput = {
    where: QuestionnaireWhereUniqueInput
    data: XOR<QuestionnaireUpdateWithoutPatientInput, QuestionnaireUncheckedUpdateWithoutPatientInput>
  }

  export type QuestionnaireUpdateManyWithWhereWithoutPatientInput = {
    where: QuestionnaireScalarWhereInput
    data: XOR<QuestionnaireUpdateManyMutationInput, QuestionnaireUncheckedUpdateManyWithoutPatientInput>
  }

  export type QuestionnaireScalarWhereInput = {
    AND?: QuestionnaireScalarWhereInput | QuestionnaireScalarWhereInput[]
    OR?: QuestionnaireScalarWhereInput[]
    NOT?: QuestionnaireScalarWhereInput | QuestionnaireScalarWhereInput[]
    id?: StringFilter<"Questionnaire"> | string
    patientId?: StringFilter<"Questionnaire"> | string
    createdBy?: StringFilter<"Questionnaire"> | string
    createdAt?: DateTimeFilter<"Questionnaire"> | Date | string
    updatedAt?: DateTimeFilter<"Questionnaire"> | Date | string
  }

  export type PatientCreateWithoutSessionsInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iepGenerations?: IepGenerationCreateNestedManyWithoutPatientInput
    access?: PatientAccessCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iepGenerations?: IepGenerationUncheckedCreateNestedManyWithoutPatientInput
    access?: PatientAccessUncheckedCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutSessionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    patientAccess?: PatientAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password?: string
    name: string
    role: string
    createdAt?: Date | string
    patientAccess?: PatientAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type PatientUpsertWithoutSessionsInput = {
    update: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iepGenerations?: IepGenerationUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iepGenerations?: IepGenerationUncheckedUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUncheckedUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientAccess?: PatientAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientAccess?: PatientAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PatientCreateWithoutIepGenerationsInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutPatientInput
    access?: PatientAccessCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutIepGenerationsInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
    access?: PatientAccessUncheckedCreateNestedManyWithoutPatientInput
    questionnaires?: QuestionnaireUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutIepGenerationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutIepGenerationsInput, PatientUncheckedCreateWithoutIepGenerationsInput>
  }

  export type PatientUpsertWithoutIepGenerationsInput = {
    update: XOR<PatientUpdateWithoutIepGenerationsInput, PatientUncheckedUpdateWithoutIepGenerationsInput>
    create: XOR<PatientCreateWithoutIepGenerationsInput, PatientUncheckedCreateWithoutIepGenerationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutIepGenerationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutIepGenerationsInput, PatientUncheckedUpdateWithoutIepGenerationsInput>
  }

  export type PatientUpdateWithoutIepGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutIepGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUncheckedUpdateManyWithoutPatientNestedInput
    questionnaires?: QuestionnaireUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutQuestionnairesInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationCreateNestedManyWithoutPatientInput
    access?: PatientAccessCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutQuestionnairesInput = {
    id?: string
    name: string
    dateOfBirth?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
    iepGenerations?: IepGenerationUncheckedCreateNestedManyWithoutPatientInput
    access?: PatientAccessUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutQuestionnairesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutQuestionnairesInput, PatientUncheckedCreateWithoutQuestionnairesInput>
  }

  export type QuestionnaireResponseCreateWithoutQuestionnaireInput = {
    id?: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
  }

  export type QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput = {
    id?: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
  }

  export type QuestionnaireResponseCreateOrConnectWithoutQuestionnaireInput = {
    where: QuestionnaireResponseWhereUniqueInput
    create: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput>
  }

  export type QuestionnaireResponseCreateManyQuestionnaireInputEnvelope = {
    data: QuestionnaireResponseCreateManyQuestionnaireInput | QuestionnaireResponseCreateManyQuestionnaireInput[]
  }

  export type PatientUpsertWithoutQuestionnairesInput = {
    update: XOR<PatientUpdateWithoutQuestionnairesInput, PatientUncheckedUpdateWithoutQuestionnairesInput>
    create: XOR<PatientCreateWithoutQuestionnairesInput, PatientUncheckedCreateWithoutQuestionnairesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutQuestionnairesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutQuestionnairesInput, PatientUncheckedUpdateWithoutQuestionnairesInput>
  }

  export type PatientUpdateWithoutQuestionnairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutQuestionnairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
    iepGenerations?: IepGenerationUncheckedUpdateManyWithoutPatientNestedInput
    access?: PatientAccessUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type QuestionnaireResponseUpsertWithWhereUniqueWithoutQuestionnaireInput = {
    where: QuestionnaireResponseWhereUniqueInput
    update: XOR<QuestionnaireResponseUpdateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<QuestionnaireResponseCreateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedCreateWithoutQuestionnaireInput>
  }

  export type QuestionnaireResponseUpdateWithWhereUniqueWithoutQuestionnaireInput = {
    where: QuestionnaireResponseWhereUniqueInput
    data: XOR<QuestionnaireResponseUpdateWithoutQuestionnaireInput, QuestionnaireResponseUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type QuestionnaireResponseUpdateManyWithWhereWithoutQuestionnaireInput = {
    where: QuestionnaireResponseScalarWhereInput
    data: XOR<QuestionnaireResponseUpdateManyMutationInput, QuestionnaireResponseUncheckedUpdateManyWithoutQuestionnaireInput>
  }

  export type QuestionnaireResponseScalarWhereInput = {
    AND?: QuestionnaireResponseScalarWhereInput | QuestionnaireResponseScalarWhereInput[]
    OR?: QuestionnaireResponseScalarWhereInput[]
    NOT?: QuestionnaireResponseScalarWhereInput | QuestionnaireResponseScalarWhereInput[]
    id?: StringFilter<"QuestionnaireResponse"> | string
    questionnaireId?: StringFilter<"QuestionnaireResponse"> | string
    dimension?: StringFilter<"QuestionnaireResponse"> | string
    questionIndex?: IntFilter<"QuestionnaireResponse"> | number
    ageTier?: StringFilter<"QuestionnaireResponse"> | string
    score?: IntFilter<"QuestionnaireResponse"> | number
    notes?: StringNullableFilter<"QuestionnaireResponse"> | string | null
  }

  export type QuestionnaireCreateWithoutResponsesInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutQuestionnairesInput
  }

  export type QuestionnaireUncheckedCreateWithoutResponsesInput = {
    id?: string
    patientId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionnaireCreateOrConnectWithoutResponsesInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutResponsesInput, QuestionnaireUncheckedCreateWithoutResponsesInput>
  }

  export type QuestionnaireUpsertWithoutResponsesInput = {
    update: XOR<QuestionnaireUpdateWithoutResponsesInput, QuestionnaireUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuestionnaireCreateWithoutResponsesInput, QuestionnaireUncheckedCreateWithoutResponsesInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutResponsesInput, QuestionnaireUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionnaireUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutQuestionnairesNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyTherapistInput = {
    id?: string
    patientId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type PatientAccessCreateManyUserInput = {
    id?: string
    patientId: string
    accessLevel: string
  }

  export type SessionUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutAccessNestedInput
  }

  export type PatientAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type PatientAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyPatientInput = {
    id?: string
    therapistId: string
    sessionDate: Date | string
    startTime?: string | null
    endTime?: string | null
    location?: string | null
    participants?: string | null
    materials?: string | null
    notes?: string | null
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type IepGenerationCreateManyPatientInput = {
    id?: string
    inputData: string
    generatedGoals: string
    createdAt?: Date | string
  }

  export type PatientAccessCreateManyPatientInput = {
    id?: string
    userId: string
    accessLevel: string
  }

  export type QuestionnaireCreateManyPatientInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IepGenerationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputData?: StringFieldUpdateOperationsInput | string
    generatedGoals?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientAccessUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPatientAccessNestedInput
  }

  export type PatientAccessUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type PatientAccessUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionnaireUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionnaireResponseUpdateManyWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionnaireResponseUncheckedUpdateManyWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionnaireResponseCreateManyQuestionnaireInput = {
    id?: string
    dimension: string
    questionIndex: number
    ageTier: string
    score: number
    notes?: string | null
  }

  export type QuestionnaireResponseUpdateWithoutQuestionnaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionnaireResponseUncheckedUpdateWithoutQuestionnaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionnaireResponseUncheckedUpdateManyWithoutQuestionnaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    dimension?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    ageTier?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionnaireCountOutputTypeDefaultArgs instead
     */
    export type QuestionnaireCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientAccessDefaultArgs instead
     */
    export type PatientAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientAccessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IepGenerationDefaultArgs instead
     */
    export type IepGenerationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IepGenerationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionnaireDefaultArgs instead
     */
    export type QuestionnaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionnaireDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionnaireResponseDefaultArgs instead
     */
    export type QuestionnaireResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionnaireResponseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}