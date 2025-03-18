import { HttpError } from "wasp/server";
export const createTask = async ({ description }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.create({
        data: {
            description,
            user: { connect: { id: context.user.id } },
        },
    });
};
export const updateTask = async ({ id, isDone }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Task.update({
        where: {
            id,
        },
        data: { isDone },
    });
};
export const deleteTasks = async (idsToDelete, context) => {
    return context.entities.Task.deleteMany({
        where: {
            id: {
                in: idsToDelete,
            },
        },
    });
};
//# sourceMappingURL=actions.js.map