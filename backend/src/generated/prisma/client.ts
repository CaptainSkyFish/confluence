
/**
 * Client
 */

import * as runtime from '@prisma/client/runtime/binary'
import * as process from 'node:process'
import * as path from 'node:path'


export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = runtime.Types.Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Message
 * 
 */
export type Message = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageView
 * 
 */
export type MessageView = runtime.Types.Result.DefaultSelection<Prisma.$MessageViewPayload>
/**
 * Model MessageReaction
 * 
 */
export type MessageReaction = runtime.Types.Result.DefaultSelection<Prisma.$MessageReactionPayload>



/**
 * Create the Client
 */
const config: runtime.GetPrismaClientConfig = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client"
    },
    "output": {
      "value": "J:\\Code\\Projects\\confluence\\backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "binary"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "J:\\Code\\Projects\\confluence\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client\"\n  binaryTargets = [\"windows\"]\n  engineType    = \"binary\"\n  output        = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id             String            @id @default(uuid())\n  username       String            @unique\n  password       String\n  messages       Message[]\n  reactions      MessageReaction[]\n  viewedMessages MessageView[]\n  bio            String\n  rooms          Room[]            @relation(\"Membership\")\n  createdRooms   Room[]            @relation(\"Creator\")\n  isDeleted      Boolean           @default(false)\n  profilePicture String?\n}\n\nmodel Room {\n  id             String    @id @default(cuid())\n  roomName       String\n  description    String\n  createdAt      DateTime  @default(now())\n  messages       Message[]\n  users          User[]    @relation(\"Membership\")\n  createdById    String\n  createdBy      User      @relation(\"Creator\", fields: [createdById], references: [id])\n  profilePicture String?\n}\n\nmodel Message {\n  id        String            @id @default(uuid())\n  content   String\n  mediaUrl  String?\n  senderId  String\n  roomId    String\n  timestamp DateTime          @default(now())\n  replyToId String?\n  replyTo   Message?          @relation(\"MessageReplies\", fields: [replyToId], references: [id])\n  replies   Message[]         @relation(\"MessageReplies\")\n  room      Room              @relation(fields: [roomId], references: [id], onDelete: Cascade)\n  sender    User              @relation(fields: [senderId], references: [id])\n  reactions MessageReaction[]\n  views     MessageView[]\n}\n\nmodel MessageView {\n  id        String   @id @default(uuid())\n  messageId String\n  userId    String\n  viewedAt  DateTime @default(now())\n  message   Message  @relation(fields: [messageId], references: [id], onDelete: Cascade)\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([messageId, userId])\n}\n\nmodel MessageReaction {\n  id        String  @id @default(uuid())\n  messageId String\n  userId    String\n  type      String\n  message   Message @relation(fields: [messageId], references: [id], onDelete: Cascade)\n  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, messageId, type])\n}\n",
  "inlineSchemaHash": "a74daaad406b4c0d7ef8fcb78f0ee6d34dac862570eca4539babbe2887be0c9f",
  "copyEngine": true,
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "dirname": ""
}
config.dirname = __dirname

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageReaction\",\"nativeType\":null,\"relationName\":\"MessageReactionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewedMessages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageView\",\"nativeType\":null,\"relationName\":\"MessageViewToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rooms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"nativeType\":null,\"relationName\":\"Membership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdRooms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"nativeType\":null,\"relationName\":\"Creator\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDeleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profilePicture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Room\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToRoom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"Membership\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"Creator\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profilePicture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Message\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mediaUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replyToId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replyTo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageReplies\",\"relationFromFields\":[\"replyToId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageReplies\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"nativeType\":null,\"relationName\":\"MessageToRoom\",\"relationFromFields\":[\"roomId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"MessageToUser\",\"relationFromFields\":[\"senderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageReaction\",\"nativeType\":null,\"relationName\":\"MessageToMessageReaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"views\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageView\",\"nativeType\":null,\"relationName\":\"MessageToMessageView\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessageView\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToMessageView\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"MessageViewToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"messageId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"messageId\",\"userId\"]}],\"isGenerated\":false},\"MessageReaction\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"nativeType\":null,\"relationName\":\"MessageToMessageReaction\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"MessageReactionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"messageId\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"messageId\",\"type\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
config.engineWasm = undefined
config.compilerWasm = undefined



// file annotations for bundling tools to include these files
path.join(__dirname, "query-engine-windows")
path.join(process.cwd(), "src/generated/prisma/query-engine-windows")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma")
path.join(process.cwd(), "src/generated/prisma/schema.prisma")


interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  new <
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  >(options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>): PrismaClient<ClientOptions, U, ExtArgs>
}

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => runtime.Types.Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): runtime.Types.Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): runtime.Types.Utils.JsPromise<R>


  $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageView`: Exposes CRUD operations for the **MessageView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageViews
    * const messageViews = await prisma.messageView.findMany()
    * ```
    */
  get messageView(): Prisma.MessageViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageReaction`: Exposes CRUD operations for the **MessageReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReactions
    * const messageReactions = await prisma.messageReaction.findMany()
    * ```
    */
  get messageReaction(): Prisma.MessageReactionDelegate<ExtArgs, ClientOptions>;
}

export const PrismaClient = runtime.getPrismaClient(config) as unknown as PrismaClientConstructor

export namespace Prisma {
  export type DMMF = typeof runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Validator
   */
  export const validator = runtime.Public.validator

  /**
   * Prisma Errors
   */

  export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError

  export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError

  export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError

  export const PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export type PrismaClientInitializationError = runtime.PrismaClientInitializationError

  export const PrismaClientValidationError = runtime.PrismaClientValidationError
  export type PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export const sql = runtime.sqltag
  export const empty = runtime.empty
  export const join = runtime.join
  export const raw = runtime.raw
  export const Sql = runtime.Sql
  export type Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export const Decimal = runtime.Decimal
  export type Decimal = runtime.Decimal

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
  export type Extension = runtime.Types.Extensions.UserArgs
  export const getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>
  export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>
  export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>
  export type Exact<A, W> = runtime.Types.Public.Exact<A, W>

  export type PrismaVersion = {
    client: string
    engine: string
  }

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export const prismaVersion: PrismaVersion = {
    client: "6.6.0",
    engine: "f676762280b54cd07c770017ed3711ddde35f37a"
  }

  /**
   * Utility Types
   */


  export type JsonObject = runtime.JsonObject
  export type JsonArray = runtime.JsonArray
  export type JsonValue = runtime.JsonValue
  export type InputJsonObject = runtime.InputJsonObject
  export type InputJsonArray = runtime.InputJsonArray
  export type InputJsonValue = runtime.InputJsonValue

  export const NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull),
    JsonNull: runtime.objectEnumValues.classes.JsonNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull),
    AnyNull: runtime.objectEnumValues.classes.AnyNull as (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull),
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull = runtime.objectEnumValues.instances.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull = runtime.objectEnumValues.instances.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull = runtime.objectEnumValues.instances.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

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
  export type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  export type Boolean = True | False

  export type True = 1

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


  export const ModelName = {
    User: 'User',
    Room: 'Room',
    Message: 'Message',
    MessageView: 'MessageView',
    MessageReaction: 'MessageReaction'
  } as const

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export interface TypeMapCb<ClientOptions = {}> extends runtime.Types.Utils.Fn<{extArgs: runtime.Types.Extensions.InternalArgs }, runtime.Types.Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "message" | "messageView" | "messageReaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageView: {
        payload: Prisma.$MessageViewPayload<ExtArgs>
        fields: Prisma.MessageViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageViewFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageViewFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          findFirst: {
            args: Prisma.MessageViewFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageViewFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          findMany: {
            args: Prisma.MessageViewFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>[]
          }
          create: {
            args: Prisma.MessageViewCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          createMany: {
            args: Prisma.MessageViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageViewCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>[]
          }
          delete: {
            args: Prisma.MessageViewDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          update: {
            args: Prisma.MessageViewUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          deleteMany: {
            args: Prisma.MessageViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageViewUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>[]
          }
          upsert: {
            args: Prisma.MessageViewUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageViewPayload>
          }
          aggregate: {
            args: Prisma.MessageViewAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateMessageView>
          }
          groupBy: {
            args: Prisma.MessageViewGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageViewCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageViewCountAggregateOutputType> | number
          }
        }
      }
      MessageReaction: {
        payload: Prisma.$MessageReactionPayload<ExtArgs>
        fields: Prisma.MessageReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReactionFindUniqueArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReactionFindUniqueOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          findFirst: {
            args: Prisma.MessageReactionFindFirstArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReactionFindFirstOrThrowArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          findMany: {
            args: Prisma.MessageReactionFindManyArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          create: {
            args: Prisma.MessageReactionCreateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          createMany: {
            args: Prisma.MessageReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageReactionCreateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          delete: {
            args: Prisma.MessageReactionDeleteArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          update: {
            args: Prisma.MessageReactionUpdateArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          deleteMany: {
            args: Prisma.MessageReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageReactionUpdateManyAndReturnArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>[]
          }
          upsert: {
            args: Prisma.MessageReactionUpsertArgs<ExtArgs>
            result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageReactionPayload>
          }
          aggregate: {
            args: Prisma.MessageReactionAggregateArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<AggregateMessageReaction>
          }
          groupBy: {
            args: Prisma.MessageReactionGroupByArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReactionCountArgs<ExtArgs>
            result: runtime.Types.Utils.Optional<MessageReactionCountAggregateOutputType> | number
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
  export const defineExtension = runtime.Extensions.defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<"define", Prisma.TypeMapCb, runtime.Types.Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    message?: MessageOmit
    messageView?: MessageViewOmit
    messageReaction?: MessageReactionOmit
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
    | 'updateManyAndReturn'
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
    next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>,
  ) => runtime.Types.Utils.JsPromise<T>

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
    messages: number
    reactions: number
    viewedMessages: number
    rooms: number
    createdRooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    viewedMessages?: boolean | UserCountOutputTypeCountViewedMessagesArgs
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    createdRooms?: boolean | UserCountOutputTypeCountCreatedRoomsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewedMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    messages: number
    users: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
    users?: boolean | RoomCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    replies: number
    reactions: number
    views: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
    reactions?: boolean | MessageCountOutputTypeCountReactionsArgs
    views?: boolean | MessageCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountViewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageViewWhereInput
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
    username: string | null
    password: string | null
    bio: string | null
    isDeleted: boolean | null
    profilePicture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    bio: string | null
    isDeleted: boolean | null
    profilePicture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    bio: number
    isDeleted: number
    profilePicture: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    bio?: true
    isDeleted?: true
    profilePicture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    bio?: true
    isDeleted?: true
    profilePicture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    bio?: true
    isDeleted?: true
    profilePicture?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    username: string
    password: string
    bio: string
    isDeleted: boolean
    profilePicture: string | null
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


  export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    isDeleted?: boolean
    profilePicture?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    viewedMessages?: boolean | User$viewedMessagesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    isDeleted?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    isDeleted?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    isDeleted?: boolean
    profilePicture?: boolean
  }

  export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password" | "bio" | "isDeleted" | "profilePicture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    viewedMessages?: boolean | User$viewedMessagesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      reactions: Prisma.$MessageReactionPayload<ExtArgs>[]
      viewedMessages: Prisma.$MessageViewPayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      createdRooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      bio: string
      isDeleted: boolean
      profilePicture: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>

  export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends runtime.Types.Utils.Record<'select', any>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedMessages<T extends User$viewedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$viewedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRooms<T extends User$createdRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  export interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly profilePicture: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    cursor?: MessageReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * User.viewedMessages
   */
  export type User$viewedMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    where?: MessageViewWhereInput
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    cursor?: MessageViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageViewScalarFieldEnum | MessageViewScalarFieldEnum[]
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.createdRooms
   */
  export type User$createdRoomsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    roomName: string | null
    description: string | null
    createdAt: Date | null
    createdById: string | null
    profilePicture: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    roomName: string | null
    description: string | null
    createdAt: Date | null
    createdById: string | null
    profilePicture: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomName: number
    description: number
    createdAt: number
    createdById: number
    profilePicture: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    roomName?: true
    description?: true
    createdAt?: true
    createdById?: true
    profilePicture?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomName?: true
    description?: true
    createdAt?: true
    createdById?: true
    profilePicture?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomName?: true
    description?: true
    createdAt?: true
    createdById?: true
    profilePicture?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    roomName: string
    description: string
    createdAt: Date
    createdById: string
    profilePicture: string | null
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    description?: boolean
    createdAt?: boolean
    createdById?: boolean
    profilePicture?: boolean
    messages?: boolean | Room$messagesArgs<ExtArgs>
    users?: boolean | Room$usersArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    description?: boolean
    createdAt?: boolean
    createdById?: boolean
    profilePicture?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    roomName?: boolean
    description?: boolean
    createdAt?: boolean
    createdById?: boolean
    profilePicture?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomName?: boolean
    description?: boolean
    createdAt?: boolean
    createdById?: boolean
    profilePicture?: boolean
  }

  export type RoomOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "roomName" | "description" | "createdAt" | "createdById" | "profilePicture", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | Room$messagesArgs<ExtArgs>
    users?: boolean | Room$usersArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: string
      roomName: string
      description: string
      createdAt: Date
      createdById: string
      profilePicture: string | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  export type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoomPayload, S>

  export type RoomCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Room$usersArgs<ExtArgs> = {}>(args?: Subset<T, Room$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  export interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly roomName: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly createdById: FieldRef<"Room", 'String'>
    readonly profilePicture: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Room.users
   */
  export type Room$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    mediaUrl: string | null
    senderId: string | null
    roomId: string | null
    timestamp: Date | null
    replyToId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    mediaUrl: string | null
    senderId: string | null
    roomId: string | null
    timestamp: Date | null
    replyToId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    mediaUrl: number
    senderId: number
    roomId: number
    timestamp: number
    replyToId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    senderId?: true
    roomId?: true
    timestamp?: true
    replyToId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    senderId?: true
    roomId?: true
    timestamp?: true
    replyToId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    senderId?: true
    roomId?: true
    timestamp?: true
    replyToId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    mediaUrl: string | null
    senderId: string
    roomId: string
    timestamp: Date
    replyToId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    roomId?: boolean
    timestamp?: boolean
    replyToId?: boolean
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    views?: boolean | Message$viewsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    roomId?: boolean
    timestamp?: boolean
    replyToId?: boolean
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    roomId?: boolean
    timestamp?: boolean
    replyToId?: boolean
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    roomId?: boolean
    timestamp?: boolean
    replyToId?: boolean
  }

  export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "mediaUrl" | "senderId" | "roomId" | "timestamp" | "replyToId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    views?: boolean | Message$viewsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      replyTo: Prisma.$MessagePayload<ExtArgs> | null
      replies: Prisma.$MessagePayload<ExtArgs>[]
      room: Prisma.$RoomPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      reactions: Prisma.$MessageReactionPayload<ExtArgs>[]
      views: Prisma.$MessageViewPayload<ExtArgs>[]
    }
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: string
      content: string
      mediaUrl: string | null
      senderId: string
      roomId: string
      timestamp: Date
      replyToId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>

  export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    replyTo<T extends Message$replyToArgs<ExtArgs> = {}>(args?: Subset<T, Message$replyToArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<runtime.Types.Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reactions<T extends Message$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Message$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Message$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Message$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  export interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly mediaUrl: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly roomId: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly replyToId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.replyTo
   */
  export type Message$replyToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message.reactions
   */
  export type Message$reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    cursor?: MessageReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * Message.views
   */
  export type Message$viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    where?: MessageViewWhereInput
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    cursor?: MessageViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageViewScalarFieldEnum | MessageViewScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageView
   */

  export type AggregateMessageView = {
    _count: MessageViewCountAggregateOutputType | null
    _min: MessageViewMinAggregateOutputType | null
    _max: MessageViewMaxAggregateOutputType | null
  }

  export type MessageViewMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type MessageViewMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type MessageViewCountAggregateOutputType = {
    id: number
    messageId: number
    userId: number
    viewedAt: number
    _all: number
  }


  export type MessageViewMinAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    viewedAt?: true
  }

  export type MessageViewMaxAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    viewedAt?: true
  }

  export type MessageViewCountAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    viewedAt?: true
    _all?: true
  }

  export type MessageViewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageView to aggregate.
     */
    where?: MessageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageViews to fetch.
     */
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageViews
    **/
    _count?: true | MessageViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageViewMaxAggregateInputType
  }

  export type GetMessageViewAggregateType<T extends MessageViewAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageView[P]>
      : GetScalarType<T[P], AggregateMessageView[P]>
  }




  export type MessageViewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageViewWhereInput
    orderBy?: MessageViewOrderByWithAggregationInput | MessageViewOrderByWithAggregationInput[]
    by: MessageViewScalarFieldEnum[] | MessageViewScalarFieldEnum
    having?: MessageViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageViewCountAggregateInputType | true
    _min?: MessageViewMinAggregateInputType
    _max?: MessageViewMaxAggregateInputType
  }

  export type MessageViewGroupByOutputType = {
    id: string
    messageId: string
    userId: string
    viewedAt: Date
    _count: MessageViewCountAggregateOutputType | null
    _min: MessageViewMinAggregateOutputType | null
    _max: MessageViewMaxAggregateOutputType | null
  }

  type GetMessageViewGroupByPayload<T extends MessageViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageViewGroupByOutputType[P]>
            : GetScalarType<T[P], MessageViewGroupByOutputType[P]>
        }
      >
    >


  export type MessageViewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    viewedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageView"]>

  export type MessageViewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    viewedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageView"]>

  export type MessageViewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    viewedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageView"]>

  export type MessageViewSelectScalar = {
    id?: boolean
    messageId?: boolean
    userId?: boolean
    viewedAt?: boolean
  }

  export type MessageViewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "messageId" | "userId" | "viewedAt", ExtArgs["result"]["messageView"]>
  export type MessageViewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageViewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageViewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageViewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageView"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: string
      messageId: string
      userId: string
      viewedAt: Date
    }, ExtArgs["result"]["messageView"]>
    composites: {}
  }

  export type MessageViewGetPayload<S extends boolean | null | undefined | MessageViewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageViewPayload, S>

  export type MessageViewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<MessageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageViewCountAggregateInputType | true
    }

  export interface MessageViewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageView'], meta: { name: 'MessageView' } }
    /**
     * Find zero or one MessageView that matches the filter.
     * @param {MessageViewFindUniqueArgs} args - Arguments to find a MessageView
     * @example
     * // Get one MessageView
     * const messageView = await prisma.messageView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageViewFindUniqueArgs>(args: SelectSubset<T, MessageViewFindUniqueArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageViewFindUniqueOrThrowArgs} args - Arguments to find a MessageView
     * @example
     * // Get one MessageView
     * const messageView = await prisma.messageView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageViewFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewFindFirstArgs} args - Arguments to find a MessageView
     * @example
     * // Get one MessageView
     * const messageView = await prisma.messageView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageViewFindFirstArgs>(args?: SelectSubset<T, MessageViewFindFirstArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewFindFirstOrThrowArgs} args - Arguments to find a MessageView
     * @example
     * // Get one MessageView
     * const messageView = await prisma.messageView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageViewFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageViews
     * const messageViews = await prisma.messageView.findMany()
     * 
     * // Get first 10 MessageViews
     * const messageViews = await prisma.messageView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageViewWithIdOnly = await prisma.messageView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageViewFindManyArgs>(args?: SelectSubset<T, MessageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageView.
     * @param {MessageViewCreateArgs} args - Arguments to create a MessageView.
     * @example
     * // Create one MessageView
     * const MessageView = await prisma.messageView.create({
     *   data: {
     *     // ... data to create a MessageView
     *   }
     * })
     * 
     */
    create<T extends MessageViewCreateArgs>(args: SelectSubset<T, MessageViewCreateArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageViews.
     * @param {MessageViewCreateManyArgs} args - Arguments to create many MessageViews.
     * @example
     * // Create many MessageViews
     * const messageView = await prisma.messageView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageViewCreateManyArgs>(args?: SelectSubset<T, MessageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageViews and returns the data saved in the database.
     * @param {MessageViewCreateManyAndReturnArgs} args - Arguments to create many MessageViews.
     * @example
     * // Create many MessageViews
     * const messageView = await prisma.messageView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageViews and only return the `id`
     * const messageViewWithIdOnly = await prisma.messageView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageViewCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageView.
     * @param {MessageViewDeleteArgs} args - Arguments to delete one MessageView.
     * @example
     * // Delete one MessageView
     * const MessageView = await prisma.messageView.delete({
     *   where: {
     *     // ... filter to delete one MessageView
     *   }
     * })
     * 
     */
    delete<T extends MessageViewDeleteArgs>(args: SelectSubset<T, MessageViewDeleteArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageView.
     * @param {MessageViewUpdateArgs} args - Arguments to update one MessageView.
     * @example
     * // Update one MessageView
     * const messageView = await prisma.messageView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageViewUpdateArgs>(args: SelectSubset<T, MessageViewUpdateArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageViews.
     * @param {MessageViewDeleteManyArgs} args - Arguments to filter MessageViews to delete.
     * @example
     * // Delete a few MessageViews
     * const { count } = await prisma.messageView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageViewDeleteManyArgs>(args?: SelectSubset<T, MessageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageViews
     * const messageView = await prisma.messageView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageViewUpdateManyArgs>(args: SelectSubset<T, MessageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageViews and returns the data updated in the database.
     * @param {MessageViewUpdateManyAndReturnArgs} args - Arguments to update many MessageViews.
     * @example
     * // Update many MessageViews
     * const messageView = await prisma.messageView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageViews and only return the `id`
     * const messageViewWithIdOnly = await prisma.messageView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageViewUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageView.
     * @param {MessageViewUpsertArgs} args - Arguments to update or create a MessageView.
     * @example
     * // Update or create a MessageView
     * const messageView = await prisma.messageView.upsert({
     *   create: {
     *     // ... data to create a MessageView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageView we want to update
     *   }
     * })
     */
    upsert<T extends MessageViewUpsertArgs>(args: SelectSubset<T, MessageViewUpsertArgs<ExtArgs>>): Prisma__MessageViewClient<runtime.Types.Result.GetResult<Prisma.$MessageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewCountArgs} args - Arguments to filter MessageViews to count.
     * @example
     * // Count the number of MessageViews
     * const count = await prisma.messageView.count({
     *   where: {
     *     // ... the filter for the MessageViews we want to count
     *   }
     * })
    **/
    count<T extends MessageViewCountArgs>(
      args?: Subset<T, MessageViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageViewAggregateArgs>(args: Subset<T, MessageViewAggregateArgs>): Prisma.PrismaPromise<GetMessageViewAggregateType<T>>

    /**
     * Group by MessageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageViewGroupByArgs} args - Group by arguments.
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
      T extends MessageViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageViewGroupByArgs['orderBy'] }
        : { orderBy?: MessageViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageView model
   */
  readonly fields: MessageViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageViewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageView model
   */
  export interface MessageViewFieldRefs {
    readonly id: FieldRef<"MessageView", 'String'>
    readonly messageId: FieldRef<"MessageView", 'String'>
    readonly userId: FieldRef<"MessageView", 'String'>
    readonly viewedAt: FieldRef<"MessageView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageView findUnique
   */
  export type MessageViewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter, which MessageView to fetch.
     */
    where: MessageViewWhereUniqueInput
  }

  /**
   * MessageView findUniqueOrThrow
   */
  export type MessageViewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter, which MessageView to fetch.
     */
    where: MessageViewWhereUniqueInput
  }

  /**
   * MessageView findFirst
   */
  export type MessageViewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter, which MessageView to fetch.
     */
    where?: MessageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageViews to fetch.
     */
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageViews.
     */
    cursor?: MessageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageViews.
     */
    distinct?: MessageViewScalarFieldEnum | MessageViewScalarFieldEnum[]
  }

  /**
   * MessageView findFirstOrThrow
   */
  export type MessageViewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter, which MessageView to fetch.
     */
    where?: MessageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageViews to fetch.
     */
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageViews.
     */
    cursor?: MessageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageViews.
     */
    distinct?: MessageViewScalarFieldEnum | MessageViewScalarFieldEnum[]
  }

  /**
   * MessageView findMany
   */
  export type MessageViewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter, which MessageViews to fetch.
     */
    where?: MessageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageViews to fetch.
     */
    orderBy?: MessageViewOrderByWithRelationInput | MessageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageViews.
     */
    cursor?: MessageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageViews.
     */
    skip?: number
    distinct?: MessageViewScalarFieldEnum | MessageViewScalarFieldEnum[]
  }

  /**
   * MessageView create
   */
  export type MessageViewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageView.
     */
    data: XOR<MessageViewCreateInput, MessageViewUncheckedCreateInput>
  }

  /**
   * MessageView createMany
   */
  export type MessageViewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageViews.
     */
    data: MessageViewCreateManyInput | MessageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageView createManyAndReturn
   */
  export type MessageViewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * The data used to create many MessageViews.
     */
    data: MessageViewCreateManyInput | MessageViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageView update
   */
  export type MessageViewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageView.
     */
    data: XOR<MessageViewUpdateInput, MessageViewUncheckedUpdateInput>
    /**
     * Choose, which MessageView to update.
     */
    where: MessageViewWhereUniqueInput
  }

  /**
   * MessageView updateMany
   */
  export type MessageViewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageViews.
     */
    data: XOR<MessageViewUpdateManyMutationInput, MessageViewUncheckedUpdateManyInput>
    /**
     * Filter which MessageViews to update
     */
    where?: MessageViewWhereInput
    /**
     * Limit how many MessageViews to update.
     */
    limit?: number
  }

  /**
   * MessageView updateManyAndReturn
   */
  export type MessageViewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * The data used to update MessageViews.
     */
    data: XOR<MessageViewUpdateManyMutationInput, MessageViewUncheckedUpdateManyInput>
    /**
     * Filter which MessageViews to update
     */
    where?: MessageViewWhereInput
    /**
     * Limit how many MessageViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageView upsert
   */
  export type MessageViewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageView to update in case it exists.
     */
    where: MessageViewWhereUniqueInput
    /**
     * In case the MessageView found by the `where` argument doesn't exist, create a new MessageView with this data.
     */
    create: XOR<MessageViewCreateInput, MessageViewUncheckedCreateInput>
    /**
     * In case the MessageView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageViewUpdateInput, MessageViewUncheckedUpdateInput>
  }

  /**
   * MessageView delete
   */
  export type MessageViewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
    /**
     * Filter which MessageView to delete.
     */
    where: MessageViewWhereUniqueInput
  }

  /**
   * MessageView deleteMany
   */
  export type MessageViewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageViews to delete
     */
    where?: MessageViewWhereInput
    /**
     * Limit how many MessageViews to delete.
     */
    limit?: number
  }

  /**
   * MessageView without action
   */
  export type MessageViewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageView
     */
    select?: MessageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageView
     */
    omit?: MessageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageViewInclude<ExtArgs> | null
  }


  /**
   * Model MessageReaction
   */

  export type AggregateMessageReaction = {
    _count: MessageReactionCountAggregateOutputType | null
    _min: MessageReactionMinAggregateOutputType | null
    _max: MessageReactionMaxAggregateOutputType | null
  }

  export type MessageReactionMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    type: string | null
  }

  export type MessageReactionMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    type: string | null
  }

  export type MessageReactionCountAggregateOutputType = {
    id: number
    messageId: number
    userId: number
    type: number
    _all: number
  }


  export type MessageReactionMinAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    type?: true
  }

  export type MessageReactionMaxAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    type?: true
  }

  export type MessageReactionCountAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    type?: true
    _all?: true
  }

  export type MessageReactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReaction to aggregate.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReactions
    **/
    _count?: true | MessageReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReactionMaxAggregateInputType
  }

  export type GetMessageReactionAggregateType<T extends MessageReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageReaction[P]>
      : GetScalarType<T[P], AggregateMessageReaction[P]>
  }




  export type MessageReactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: MessageReactionWhereInput
    orderBy?: MessageReactionOrderByWithAggregationInput | MessageReactionOrderByWithAggregationInput[]
    by: MessageReactionScalarFieldEnum[] | MessageReactionScalarFieldEnum
    having?: MessageReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReactionCountAggregateInputType | true
    _min?: MessageReactionMinAggregateInputType
    _max?: MessageReactionMaxAggregateInputType
  }

  export type MessageReactionGroupByOutputType = {
    id: string
    messageId: string
    userId: string
    type: string
    _count: MessageReactionCountAggregateOutputType | null
    _min: MessageReactionMinAggregateOutputType | null
    _max: MessageReactionMaxAggregateOutputType | null
  }

  type GetMessageReactionGroupByPayload<T extends MessageReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReactionGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReactionGroupByOutputType[P]>
        }
      >
    >


  export type MessageReactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReaction"]>

  export type MessageReactionSelectScalar = {
    id?: boolean
    messageId?: boolean
    userId?: boolean
    type?: boolean
  }

  export type MessageReactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "messageId" | "userId" | "type", ExtArgs["result"]["messageReaction"]>
  export type MessageReactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageReactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageReactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageReaction"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: runtime.Types.Extensions.GetPayloadResult<{
      id: string
      messageId: string
      userId: string
      type: string
    }, ExtArgs["result"]["messageReaction"]>
    composites: {}
  }

  export type MessageReactionGetPayload<S extends boolean | null | undefined | MessageReactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload, S>

  export type MessageReactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
    Omit<MessageReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageReactionCountAggregateInputType | true
    }

  export interface MessageReactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageReaction'], meta: { name: 'MessageReaction' } }
    /**
     * Find zero or one MessageReaction that matches the filter.
     * @param {MessageReactionFindUniqueArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageReactionFindUniqueArgs>(args: SelectSubset<T, MessageReactionFindUniqueArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageReactionFindUniqueOrThrowArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindFirstArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageReactionFindFirstArgs>(args?: SelectSubset<T, MessageReactionFindFirstArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindFirstOrThrowArgs} args - Arguments to find a MessageReaction
     * @example
     * // Get one MessageReaction
     * const messageReaction = await prisma.messageReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReactions
     * const messageReactions = await prisma.messageReaction.findMany()
     * 
     * // Get first 10 MessageReactions
     * const messageReactions = await prisma.messageReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageReactionFindManyArgs>(args?: SelectSubset<T, MessageReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageReaction.
     * @param {MessageReactionCreateArgs} args - Arguments to create a MessageReaction.
     * @example
     * // Create one MessageReaction
     * const MessageReaction = await prisma.messageReaction.create({
     *   data: {
     *     // ... data to create a MessageReaction
     *   }
     * })
     * 
     */
    create<T extends MessageReactionCreateArgs>(args: SelectSubset<T, MessageReactionCreateArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageReactions.
     * @param {MessageReactionCreateManyArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReaction = await prisma.messageReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageReactionCreateManyArgs>(args?: SelectSubset<T, MessageReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageReactions and returns the data saved in the database.
     * @param {MessageReactionCreateManyAndReturnArgs} args - Arguments to create many MessageReactions.
     * @example
     * // Create many MessageReactions
     * const messageReaction = await prisma.messageReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageReactions and only return the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageReaction.
     * @param {MessageReactionDeleteArgs} args - Arguments to delete one MessageReaction.
     * @example
     * // Delete one MessageReaction
     * const MessageReaction = await prisma.messageReaction.delete({
     *   where: {
     *     // ... filter to delete one MessageReaction
     *   }
     * })
     * 
     */
    delete<T extends MessageReactionDeleteArgs>(args: SelectSubset<T, MessageReactionDeleteArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageReaction.
     * @param {MessageReactionUpdateArgs} args - Arguments to update one MessageReaction.
     * @example
     * // Update one MessageReaction
     * const messageReaction = await prisma.messageReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageReactionUpdateArgs>(args: SelectSubset<T, MessageReactionUpdateArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageReactions.
     * @param {MessageReactionDeleteManyArgs} args - Arguments to filter MessageReactions to delete.
     * @example
     * // Delete a few MessageReactions
     * const { count } = await prisma.messageReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageReactionDeleteManyArgs>(args?: SelectSubset<T, MessageReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReactions
     * const messageReaction = await prisma.messageReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageReactionUpdateManyArgs>(args: SelectSubset<T, MessageReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReactions and returns the data updated in the database.
     * @param {MessageReactionUpdateManyAndReturnArgs} args - Arguments to update many MessageReactions.
     * @example
     * // Update many MessageReactions
     * const messageReaction = await prisma.messageReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageReactions and only return the `id`
     * const messageReactionWithIdOnly = await prisma.messageReaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageReaction.
     * @param {MessageReactionUpsertArgs} args - Arguments to update or create a MessageReaction.
     * @example
     * // Update or create a MessageReaction
     * const messageReaction = await prisma.messageReaction.upsert({
     *   create: {
     *     // ... data to create a MessageReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageReaction we want to update
     *   }
     * })
     */
    upsert<T extends MessageReactionUpsertArgs>(args: SelectSubset<T, MessageReactionUpsertArgs<ExtArgs>>): Prisma__MessageReactionClient<runtime.Types.Result.GetResult<Prisma.$MessageReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionCountArgs} args - Arguments to filter MessageReactions to count.
     * @example
     * // Count the number of MessageReactions
     * const count = await prisma.messageReaction.count({
     *   where: {
     *     // ... the filter for the MessageReactions we want to count
     *   }
     * })
    **/
    count<T extends MessageReactionCountArgs>(
      args?: Subset<T, MessageReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageReactionAggregateArgs>(args: Subset<T, MessageReactionAggregateArgs>): Prisma.PrismaPromise<GetMessageReactionAggregateType<T>>

    /**
     * Group by MessageReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReactionGroupByArgs} args - Group by arguments.
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
      T extends MessageReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReactionGroupByArgs['orderBy'] }
        : { orderBy?: MessageReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageReaction model
   */
  readonly fields: MessageReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageReaction model
   */
  export interface MessageReactionFieldRefs {
    readonly id: FieldRef<"MessageReaction", 'String'>
    readonly messageId: FieldRef<"MessageReaction", 'String'>
    readonly userId: FieldRef<"MessageReaction", 'String'>
    readonly type: FieldRef<"MessageReaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageReaction findUnique
   */
  export type MessageReactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction findUniqueOrThrow
   */
  export type MessageReactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction findFirst
   */
  export type MessageReactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction findFirstOrThrow
   */
  export type MessageReactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReaction to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReactions.
     */
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction findMany
   */
  export type MessageReactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter, which MessageReactions to fetch.
     */
    where?: MessageReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReactions to fetch.
     */
    orderBy?: MessageReactionOrderByWithRelationInput | MessageReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReactions.
     */
    cursor?: MessageReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReactions.
     */
    skip?: number
    distinct?: MessageReactionScalarFieldEnum | MessageReactionScalarFieldEnum[]
  }

  /**
   * MessageReaction create
   */
  export type MessageReactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageReaction.
     */
    data: XOR<MessageReactionCreateInput, MessageReactionUncheckedCreateInput>
  }

  /**
   * MessageReaction createMany
   */
  export type MessageReactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionCreateManyInput | MessageReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageReaction createManyAndReturn
   */
  export type MessageReactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * The data used to create many MessageReactions.
     */
    data: MessageReactionCreateManyInput | MessageReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReaction update
   */
  export type MessageReactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageReaction.
     */
    data: XOR<MessageReactionUpdateInput, MessageReactionUncheckedUpdateInput>
    /**
     * Choose, which MessageReaction to update.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction updateMany
   */
  export type MessageReactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
  }

  /**
   * MessageReaction updateManyAndReturn
   */
  export type MessageReactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * The data used to update MessageReactions.
     */
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyInput>
    /**
     * Filter which MessageReactions to update
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReaction upsert
   */
  export type MessageReactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageReaction to update in case it exists.
     */
    where: MessageReactionWhereUniqueInput
    /**
     * In case the MessageReaction found by the `where` argument doesn't exist, create a new MessageReaction with this data.
     */
    create: XOR<MessageReactionCreateInput, MessageReactionUncheckedCreateInput>
    /**
     * In case the MessageReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReactionUpdateInput, MessageReactionUncheckedUpdateInput>
  }

  /**
   * MessageReaction delete
   */
  export type MessageReactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
    /**
     * Filter which MessageReaction to delete.
     */
    where: MessageReactionWhereUniqueInput
  }

  /**
   * MessageReaction deleteMany
   */
  export type MessageReactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReactions to delete
     */
    where?: MessageReactionWhereInput
    /**
     * Limit how many MessageReactions to delete.
     */
    limit?: number
  }

  /**
   * MessageReaction without action
   */
  export type MessageReactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReaction
     */
    select?: MessageReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageReaction
     */
    omit?: MessageReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  } as const)

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password',
    bio: 'bio',
    isDeleted: 'isDeleted',
    profilePicture: 'profilePicture'
  } as const

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum = {
    id: 'id',
    roomName: 'roomName',
    description: 'description',
    createdAt: 'createdAt',
    createdById: 'createdById',
    profilePicture: 'profilePicture'
  } as const

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const MessageScalarFieldEnum = {
    id: 'id',
    content: 'content',
    mediaUrl: 'mediaUrl',
    senderId: 'senderId',
    roomId: 'roomId',
    timestamp: 'timestamp',
    replyToId: 'replyToId'
  } as const

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageViewScalarFieldEnum = {
    id: 'id',
    messageId: 'messageId',
    userId: 'userId',
    viewedAt: 'viewedAt'
  } as const

  export type MessageViewScalarFieldEnum = (typeof MessageViewScalarFieldEnum)[keyof typeof MessageViewScalarFieldEnum]


  export const MessageReactionScalarFieldEnum = {
    id: 'id',
    messageId: 'messageId',
    userId: 'userId',
    type: 'type'
  } as const

  export type MessageReactionScalarFieldEnum = (typeof MessageReactionScalarFieldEnum)[keyof typeof MessageReactionScalarFieldEnum]


  export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
  } as const

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
  } as const

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder = {
    first: 'first',
    last: 'last'
  } as const

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    profilePicture?: StringNullableFilter<"User"> | string | null
    messages?: MessageListRelationFilter
    reactions?: MessageReactionListRelationFilter
    viewedMessages?: MessageViewListRelationFilter
    rooms?: RoomListRelationFilter
    createdRooms?: RoomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    isDeleted?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
    reactions?: MessageReactionOrderByRelationAggregateInput
    viewedMessages?: MessageViewOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    createdRooms?: RoomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    profilePicture?: StringNullableFilter<"User"> | string | null
    messages?: MessageListRelationFilter
    reactions?: MessageReactionListRelationFilter
    viewedMessages?: MessageViewListRelationFilter
    rooms?: RoomListRelationFilter
    createdRooms?: RoomListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    isDeleted?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    bio?: StringWithAggregatesFilter<"User"> | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    roomName?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    profilePicture?: StringNullableFilter<"Room"> | string | null
    messages?: MessageListRelationFilter
    users?: UserListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomName?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    profilePicture?: StringNullableFilter<"Room"> | string | null
    messages?: MessageListRelationFilter
    users?: UserListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    roomName?: StringWithAggregatesFilter<"Room"> | string
    description?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    createdById?: StringWithAggregatesFilter<"Room"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Room"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    replyToId?: StringNullableFilter<"Message"> | string | null
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    reactions?: MessageReactionListRelationFilter
    views?: MessageViewListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    replyTo?: MessageOrderByWithRelationInput
    replies?: MessageOrderByRelationAggregateInput
    room?: RoomOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    reactions?: MessageReactionOrderByRelationAggregateInput
    views?: MessageViewOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    replyToId?: StringNullableFilter<"Message"> | string | null
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    reactions?: MessageReactionListRelationFilter
    views?: MessageViewListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    senderId?: StringWithAggregatesFilter<"Message"> | string
    roomId?: StringWithAggregatesFilter<"Message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    replyToId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type MessageViewWhereInput = {
    AND?: MessageViewWhereInput | MessageViewWhereInput[]
    OR?: MessageViewWhereInput[]
    NOT?: MessageViewWhereInput | MessageViewWhereInput[]
    id?: StringFilter<"MessageView"> | string
    messageId?: StringFilter<"MessageView"> | string
    userId?: StringFilter<"MessageView"> | string
    viewedAt?: DateTimeFilter<"MessageView"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageViewOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_userId?: MessageViewMessageIdUserIdCompoundUniqueInput
    AND?: MessageViewWhereInput | MessageViewWhereInput[]
    OR?: MessageViewWhereInput[]
    NOT?: MessageViewWhereInput | MessageViewWhereInput[]
    messageId?: StringFilter<"MessageView"> | string
    userId?: StringFilter<"MessageView"> | string
    viewedAt?: DateTimeFilter<"MessageView"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_userId">

  export type MessageViewOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    _count?: MessageViewCountOrderByAggregateInput
    _max?: MessageViewMaxOrderByAggregateInput
    _min?: MessageViewMinOrderByAggregateInput
  }

  export type MessageViewScalarWhereWithAggregatesInput = {
    AND?: MessageViewScalarWhereWithAggregatesInput | MessageViewScalarWhereWithAggregatesInput[]
    OR?: MessageViewScalarWhereWithAggregatesInput[]
    NOT?: MessageViewScalarWhereWithAggregatesInput | MessageViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageView"> | string
    messageId?: StringWithAggregatesFilter<"MessageView"> | string
    userId?: StringWithAggregatesFilter<"MessageView"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"MessageView"> | Date | string
  }

  export type MessageReactionWhereInput = {
    AND?: MessageReactionWhereInput | MessageReactionWhereInput[]
    OR?: MessageReactionWhereInput[]
    NOT?: MessageReactionWhereInput | MessageReactionWhereInput[]
    id?: StringFilter<"MessageReaction"> | string
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
    type?: StringFilter<"MessageReaction"> | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageReactionOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_messageId_type?: MessageReactionUserIdMessageIdTypeCompoundUniqueInput
    AND?: MessageReactionWhereInput | MessageReactionWhereInput[]
    OR?: MessageReactionWhereInput[]
    NOT?: MessageReactionWhereInput | MessageReactionWhereInput[]
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
    type?: StringFilter<"MessageReaction"> | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_messageId_type">

  export type MessageReactionOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    _count?: MessageReactionCountOrderByAggregateInput
    _max?: MessageReactionMaxOrderByAggregateInput
    _min?: MessageReactionMinOrderByAggregateInput
  }

  export type MessageReactionScalarWhereWithAggregatesInput = {
    AND?: MessageReactionScalarWhereWithAggregatesInput | MessageReactionScalarWhereWithAggregatesInput[]
    OR?: MessageReactionScalarWhereWithAggregatesInput[]
    NOT?: MessageReactionScalarWhereWithAggregatesInput | MessageReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageReaction"> | string
    messageId?: StringWithAggregatesFilter<"MessageReaction"> | string
    userId?: StringWithAggregatesFilter<"MessageReaction"> | string
    type?: StringWithAggregatesFilter<"MessageReaction"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewCreateNestedManyWithoutUserInput
    rooms?: RoomCreateNestedManyWithoutUsersInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUncheckedCreateNestedManyWithoutUsersInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUpdateManyWithoutUserNestedInput
    rooms?: RoomUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutRoomInput
    users?: UserCreateNestedManyWithoutRoomsInput
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    createdById: string
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    users?: UserUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutRoomNestedInput
    users?: UserUpdateManyWithoutRoomsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    users?: UserUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    createdById: string
    profilePicture?: string | null
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    room: RoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageViewCreateInput = {
    id?: string
    viewedAt?: Date | string
    message: MessageCreateNestedOneWithoutViewsInput
    user: UserCreateNestedOneWithoutViewedMessagesInput
  }

  export type MessageViewUncheckedCreateInput = {
    id?: string
    messageId: string
    userId: string
    viewedAt?: Date | string
  }

  export type MessageViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutViewsNestedInput
    user?: UserUpdateOneRequiredWithoutViewedMessagesNestedInput
  }

  export type MessageViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageViewCreateManyInput = {
    id?: string
    messageId: string
    userId: string
    viewedAt?: Date | string
  }

  export type MessageViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionCreateInput = {
    id?: string
    type: string
    message: MessageCreateNestedOneWithoutReactionsInput
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type MessageReactionUncheckedCreateInput = {
    id?: string
    messageId: string
    userId: string
    type: string
  }

  export type MessageReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionCreateManyInput = {
    id?: string
    messageId: string
    userId: string
    type: string
  }

  export type MessageReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageReactionListRelationFilter = {
    every?: MessageReactionWhereInput
    some?: MessageReactionWhereInput
    none?: MessageReactionWhereInput
  }

  export type MessageViewListRelationFilter = {
    every?: MessageViewWhereInput
    some?: MessageViewWhereInput
    none?: MessageViewWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    isDeleted?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    isDeleted?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    isDeleted?: SortOrder
    profilePicture?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    profilePicture?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    profilePicture?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    profilePicture?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    replyToId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    replyToId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    replyToId?: SortOrder
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageViewMessageIdUserIdCompoundUniqueInput = {
    messageId: string
    userId: string
  }

  export type MessageViewCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type MessageViewMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type MessageViewMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type MessageReactionUserIdMessageIdTypeCompoundUniqueInput = {
    userId: string
    messageId: string
    type: string
  }

  export type MessageReactionCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type MessageReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type MessageReactionMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type MessageViewCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput> | MessageViewCreateWithoutUserInput[] | MessageViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutUserInput | MessageViewCreateOrConnectWithoutUserInput[]
    createMany?: MessageViewCreateManyUserInputEnvelope
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput> | RoomCreateWithoutUsersInput[] | RoomUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput | RoomCreateOrConnectWithoutUsersInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type MessageViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput> | MessageViewCreateWithoutUserInput[] | MessageViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutUserInput | MessageViewCreateOrConnectWithoutUserInput[]
    createMany?: MessageViewCreateManyUserInputEnvelope
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput> | RoomCreateWithoutUsersInput[] | RoomUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput | RoomCreateOrConnectWithoutUsersInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutUserInput | MessageReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutUserInput | MessageReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutUserInput | MessageReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type MessageViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput> | MessageViewCreateWithoutUserInput[] | MessageViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutUserInput | MessageViewCreateOrConnectWithoutUserInput[]
    upsert?: MessageViewUpsertWithWhereUniqueWithoutUserInput | MessageViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageViewCreateManyUserInputEnvelope
    set?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    disconnect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    delete?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    update?: MessageViewUpdateWithWhereUniqueWithoutUserInput | MessageViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageViewUpdateManyWithWhereWithoutUserInput | MessageViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput> | RoomCreateWithoutUsersInput[] | RoomUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput | RoomCreateOrConnectWithoutUsersInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutUsersInput | RoomUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutUsersInput | RoomUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutUsersInput | RoomUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreatedByInput | RoomUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreatedByInput | RoomUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreatedByInput | RoomUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput> | MessageReactionCreateWithoutUserInput[] | MessageReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutUserInput | MessageReactionCreateOrConnectWithoutUserInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutUserInput | MessageReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageReactionCreateManyUserInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutUserInput | MessageReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutUserInput | MessageReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type MessageViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput> | MessageViewCreateWithoutUserInput[] | MessageViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutUserInput | MessageViewCreateOrConnectWithoutUserInput[]
    upsert?: MessageViewUpsertWithWhereUniqueWithoutUserInput | MessageViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageViewCreateManyUserInputEnvelope
    set?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    disconnect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    delete?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    update?: MessageViewUpdateWithWhereUniqueWithoutUserInput | MessageViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageViewUpdateManyWithWhereWithoutUserInput | MessageViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput> | RoomCreateWithoutUsersInput[] | RoomUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutUsersInput | RoomCreateOrConnectWithoutUsersInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutUsersInput | RoomUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutUsersInput | RoomUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutUsersInput | RoomUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreatedByInput | RoomUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreatedByInput | RoomUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreatedByInput | RoomUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput> | UserCreateWithoutRoomsInput[] | UserUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput | UserCreateOrConnectWithoutRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput> | UserCreateWithoutRoomsInput[] | UserUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput | UserCreateOrConnectWithoutRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput> | UserCreateWithoutRoomsInput[] | UserUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput | UserCreateOrConnectWithoutRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomsInput | UserUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomsInput | UserUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomsInput | UserUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    upsert?: UserUpsertWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRoomsInput, UserUpdateWithoutCreatedRoomsInput>, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type MessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput> | UserCreateWithoutRoomsInput[] | UserUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput | UserCreateOrConnectWithoutRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoomsInput | UserUpsertWithWhereUniqueWithoutRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoomsInput | UserUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoomsInput | UserUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type MessageViewCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput> | MessageViewCreateWithoutMessageInput[] | MessageViewUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutMessageInput | MessageViewCreateOrConnectWithoutMessageInput[]
    createMany?: MessageViewCreateManyMessageInputEnvelope
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
  }

  export type MessageViewUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput> | MessageViewCreateWithoutMessageInput[] | MessageViewUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutMessageInput | MessageViewCreateOrConnectWithoutMessageInput[]
    createMany?: MessageViewCreateManyMessageInputEnvelope
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
  }

  export type MessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutRepliesInput, MessageUpdateWithoutRepliesInput>, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutMessageInput | MessageReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutMessageInput | MessageReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutMessageInput | MessageReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type MessageViewUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput> | MessageViewCreateWithoutMessageInput[] | MessageViewUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutMessageInput | MessageViewCreateOrConnectWithoutMessageInput[]
    upsert?: MessageViewUpsertWithWhereUniqueWithoutMessageInput | MessageViewUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageViewCreateManyMessageInputEnvelope
    set?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    disconnect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    delete?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    update?: MessageViewUpdateWithWhereUniqueWithoutMessageInput | MessageViewUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageViewUpdateManyWithWhereWithoutMessageInput | MessageViewUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput> | MessageReactionCreateWithoutMessageInput[] | MessageReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReactionCreateOrConnectWithoutMessageInput | MessageReactionCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReactionUpsertWithWhereUniqueWithoutMessageInput | MessageReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReactionCreateManyMessageInputEnvelope
    set?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    disconnect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    delete?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    connect?: MessageReactionWhereUniqueInput | MessageReactionWhereUniqueInput[]
    update?: MessageReactionUpdateWithWhereUniqueWithoutMessageInput | MessageReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReactionUpdateManyWithWhereWithoutMessageInput | MessageReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
  }

  export type MessageViewUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput> | MessageViewCreateWithoutMessageInput[] | MessageViewUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageViewCreateOrConnectWithoutMessageInput | MessageViewCreateOrConnectWithoutMessageInput[]
    upsert?: MessageViewUpsertWithWhereUniqueWithoutMessageInput | MessageViewUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageViewCreateManyMessageInputEnvelope
    set?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    disconnect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    delete?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    connect?: MessageViewWhereUniqueInput | MessageViewWhereUniqueInput[]
    update?: MessageViewUpdateWithWhereUniqueWithoutMessageInput | MessageViewUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageViewUpdateManyWithWhereWithoutMessageInput | MessageViewUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutViewsInput = {
    create?: XOR<MessageCreateWithoutViewsInput, MessageUncheckedCreateWithoutViewsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutViewsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutViewedMessagesInput = {
    create?: XOR<UserCreateWithoutViewedMessagesInput, UserUncheckedCreateWithoutViewedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<MessageCreateWithoutViewsInput, MessageUncheckedCreateWithoutViewsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutViewsInput
    upsert?: MessageUpsertWithoutViewsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutViewsInput, MessageUpdateWithoutViewsInput>, MessageUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateOneRequiredWithoutViewedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutViewedMessagesInput, UserUncheckedCreateWithoutViewedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewedMessagesInput
    upsert?: UserUpsertWithoutViewedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewedMessagesInput, UserUpdateWithoutViewedMessagesInput>, UserUncheckedUpdateWithoutViewedMessagesInput>
  }

  export type MessageCreateNestedOneWithoutReactionsInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    upsert?: MessageUpsertWithoutReactionsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReactionsInput, MessageUpdateWithoutReactionsInput>, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    room: RoomCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageReactionCreateWithoutUserInput = {
    id?: string
    type: string
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type MessageReactionUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    type: string
  }

  export type MessageReactionCreateOrConnectWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    create: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput>
  }

  export type MessageReactionCreateManyUserInputEnvelope = {
    data: MessageReactionCreateManyUserInput | MessageReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageViewCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    message: MessageCreateNestedOneWithoutViewsInput
  }

  export type MessageViewUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    viewedAt?: Date | string
  }

  export type MessageViewCreateOrConnectWithoutUserInput = {
    where: MessageViewWhereUniqueInput
    create: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput>
  }

  export type MessageViewCreateManyUserInputEnvelope = {
    data: MessageViewCreateManyUserInput | MessageViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutUsersInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutRoomInput
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
  }

  export type RoomUncheckedCreateWithoutUsersInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    createdById: string
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutUsersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
  }

  export type RoomCreateWithoutCreatedByInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutRoomInput
    users?: UserCreateNestedManyWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutCreatedByInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    users?: UserUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomCreateOrConnectWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomCreateManyCreatedByInputEnvelope = {
    data: RoomCreateManyCreatedByInput | RoomCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    roomId?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    replyToId?: StringNullableFilter<"Message"> | string | null
  }

  export type MessageReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    update: XOR<MessageReactionUpdateWithoutUserInput, MessageReactionUncheckedUpdateWithoutUserInput>
    create: XOR<MessageReactionCreateWithoutUserInput, MessageReactionUncheckedCreateWithoutUserInput>
  }

  export type MessageReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageReactionWhereUniqueInput
    data: XOR<MessageReactionUpdateWithoutUserInput, MessageReactionUncheckedUpdateWithoutUserInput>
  }

  export type MessageReactionUpdateManyWithWhereWithoutUserInput = {
    where: MessageReactionScalarWhereInput
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageReactionScalarWhereInput = {
    AND?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
    OR?: MessageReactionScalarWhereInput[]
    NOT?: MessageReactionScalarWhereInput | MessageReactionScalarWhereInput[]
    id?: StringFilter<"MessageReaction"> | string
    messageId?: StringFilter<"MessageReaction"> | string
    userId?: StringFilter<"MessageReaction"> | string
    type?: StringFilter<"MessageReaction"> | string
  }

  export type MessageViewUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageViewWhereUniqueInput
    update: XOR<MessageViewUpdateWithoutUserInput, MessageViewUncheckedUpdateWithoutUserInput>
    create: XOR<MessageViewCreateWithoutUserInput, MessageViewUncheckedCreateWithoutUserInput>
  }

  export type MessageViewUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageViewWhereUniqueInput
    data: XOR<MessageViewUpdateWithoutUserInput, MessageViewUncheckedUpdateWithoutUserInput>
  }

  export type MessageViewUpdateManyWithWhereWithoutUserInput = {
    where: MessageViewScalarWhereInput
    data: XOR<MessageViewUpdateManyMutationInput, MessageViewUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageViewScalarWhereInput = {
    AND?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
    OR?: MessageViewScalarWhereInput[]
    NOT?: MessageViewScalarWhereInput | MessageViewScalarWhereInput[]
    id?: StringFilter<"MessageView"> | string
    messageId?: StringFilter<"MessageView"> | string
    userId?: StringFilter<"MessageView"> | string
    viewedAt?: DateTimeFilter<"MessageView"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutUsersInput, RoomUncheckedUpdateWithoutUsersInput>
    create: XOR<RoomCreateWithoutUsersInput, RoomUncheckedCreateWithoutUsersInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutUsersInput, RoomUncheckedUpdateWithoutUsersInput>
  }

  export type RoomUpdateManyWithWhereWithoutUsersInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    roomName?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    profilePicture?: StringNullableFilter<"Room"> | string | null
  }

  export type RoomUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCreatedByInput, RoomUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCreatedByInput, RoomUncheckedUpdateWithoutCreatedByInput>
  }

  export type RoomUpdateManyWithWhereWithoutCreatedByInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MessageCreateWithoutRoomInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    sender: UserCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRoomInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    timestamp?: Date | string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageCreateManyRoomInputEnvelope = {
    data: MessageCreateManyRoomInput | MessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type UserCreateWithoutCreatedRoomsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewCreateNestedManyWithoutUserInput
    rooms?: RoomCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedRoomsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCreatedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoomsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoomsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateManyWithWhereWithoutRoomsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoomsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    profilePicture?: StringNullableFilter<"User"> | string | null
  }

  export type UserUpsertWithoutCreatedRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type UserUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUpdateManyWithoutUserNestedInput
    rooms?: RoomUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MessageCreateWithoutRepliesInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    room: RoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageCreateWithoutReplyToInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replies?: MessageCreateNestedManyWithoutReplyToInput
    room: RoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReplyToInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageCreateManyReplyToInputEnvelope = {
    data: MessageCreateManyReplyToInput | MessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutMessagesInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
    users?: UserCreateNestedManyWithoutRoomsInput
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    createdById: string
    profilePicture?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    reactions?: MessageReactionCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewCreateNestedManyWithoutUserInput
    rooms?: RoomCreateNestedManyWithoutUsersInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
    viewedMessages?: MessageViewUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUncheckedCreateNestedManyWithoutUsersInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type MessageReactionCreateWithoutMessageInput = {
    id?: string
    type: string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type MessageReactionUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    type: string
  }

  export type MessageReactionCreateOrConnectWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    create: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionCreateManyMessageInputEnvelope = {
    data: MessageReactionCreateManyMessageInput | MessageReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageViewCreateWithoutMessageInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutViewedMessagesInput
  }

  export type MessageViewUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type MessageViewCreateOrConnectWithoutMessageInput = {
    where: MessageViewWhereUniqueInput
    create: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput>
  }

  export type MessageViewCreateManyMessageInputEnvelope = {
    data: MessageViewCreateManyMessageInput | MessageViewCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
  }

  export type MessageUpdateManyWithWhereWithoutReplyToInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoomsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUpdateManyWithoutUserNestedInput
    rooms?: RoomUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MessageReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    update: XOR<MessageReactionUpdateWithoutMessageInput, MessageReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReactionCreateWithoutMessageInput, MessageReactionUncheckedCreateWithoutMessageInput>
  }

  export type MessageReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReactionWhereUniqueInput
    data: XOR<MessageReactionUpdateWithoutMessageInput, MessageReactionUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReactionUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReactionScalarWhereInput
    data: XOR<MessageReactionUpdateManyMutationInput, MessageReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageViewUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageViewWhereUniqueInput
    update: XOR<MessageViewUpdateWithoutMessageInput, MessageViewUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageViewCreateWithoutMessageInput, MessageViewUncheckedCreateWithoutMessageInput>
  }

  export type MessageViewUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageViewWhereUniqueInput
    data: XOR<MessageViewUpdateWithoutMessageInput, MessageViewUncheckedUpdateWithoutMessageInput>
  }

  export type MessageViewUpdateManyWithWhereWithoutMessageInput = {
    where: MessageViewScalarWhereInput
    data: XOR<MessageViewUpdateManyMutationInput, MessageViewUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutViewsInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    room: RoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    reactions?: MessageReactionCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutViewsInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutViewsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutViewsInput, MessageUncheckedCreateWithoutViewsInput>
  }

  export type UserCreateWithoutViewedMessagesInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionCreateNestedManyWithoutUserInput
    rooms?: RoomCreateNestedManyWithoutUsersInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutViewedMessagesInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reactions?: MessageReactionUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUncheckedCreateNestedManyWithoutUsersInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutViewedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewedMessagesInput, UserUncheckedCreateWithoutViewedMessagesInput>
  }

  export type MessageUpsertWithoutViewsInput = {
    update: XOR<MessageUpdateWithoutViewsInput, MessageUncheckedUpdateWithoutViewsInput>
    create: XOR<MessageCreateWithoutViewsInput, MessageUncheckedCreateWithoutViewsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutViewsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutViewsInput, MessageUncheckedUpdateWithoutViewsInput>
  }

  export type MessageUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutViewedMessagesInput = {
    update: XOR<UserUpdateWithoutViewedMessagesInput, UserUncheckedUpdateWithoutViewedMessagesInput>
    create: XOR<UserCreateWithoutViewedMessagesInput, UserUncheckedCreateWithoutViewedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewedMessagesInput, UserUncheckedUpdateWithoutViewedMessagesInput>
  }

  export type UserUpdateWithoutViewedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUpdateManyWithoutUserNestedInput
    rooms?: RoomUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutViewedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MessageCreateWithoutReactionsInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    timestamp?: Date | string
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    room: RoomCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    views?: MessageViewCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReactionsInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    views?: MessageViewUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReactionsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageCreateNestedManyWithoutSenderInput
    viewedMessages?: MessageViewCreateNestedManyWithoutUserInput
    rooms?: RoomCreateNestedManyWithoutUsersInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    username: string
    password: string
    bio: string
    isDeleted?: boolean
    profilePicture?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    viewedMessages?: MessageViewUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUncheckedCreateNestedManyWithoutUsersInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type MessageUpsertWithoutReactionsInput = {
    update: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReactionsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutSenderNestedInput
    viewedMessages?: MessageViewUpdateManyWithoutUserNestedInput
    rooms?: RoomUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    viewedMessages?: MessageViewUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutUsersNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    roomId: string
    timestamp?: Date | string
    replyToId?: string | null
  }

  export type MessageReactionCreateManyUserInput = {
    id?: string
    messageId: string
    type: string
  }

  export type MessageViewCreateManyUserInput = {
    id?: string
    messageId: string
    viewedAt?: Date | string
  }

  export type RoomCreateManyCreatedByInput = {
    id?: string
    roomName: string
    description: string
    createdAt?: Date | string
    profilePicture?: string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageViewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutViewsNestedInput
  }

  export type MessageViewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageViewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutRoomNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutRoomNestedInput
    users?: UserUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    users?: UserUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyRoomInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    timestamp?: Date | string
    replyToId?: string | null
  }

  export type MessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutUserNestedInput
    viewedMessages?: MessageViewUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyReplyToInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    senderId: string
    roomId: string
    timestamp?: Date | string
  }

  export type MessageReactionCreateManyMessageInput = {
    id?: string
    userId: string
    type: string
  }

  export type MessageViewCreateManyMessageInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type MessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    reactions?: MessageReactionUpdateManyWithoutMessageNestedInput
    views?: MessageViewUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: MessageReactionUncheckedUpdateManyWithoutMessageNestedInput
    views?: MessageViewUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReactionUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type MessageReactionUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageReactionUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageViewUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewedMessagesNestedInput
  }

  export type MessageViewUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageViewUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }
}