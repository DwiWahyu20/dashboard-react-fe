export declare const getTasks: (_args: void, context: {
    entities: {
        Task: import(".prisma/client").Prisma.TaskDelegate<import("@prisma/client/runtime/library.js").DefaultArgs>;
    };
    user?: import("../../auth").AuthUser | undefined;
}) => import(".prisma/client").Prisma.PrismaPromise<{
    id: number;
    description: string;
    isDone: boolean;
    userId: number;
}[]>;
