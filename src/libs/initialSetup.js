import Role from "../models/Role";

export const createRoles = async () => {
  try {
    // this is the docs.
    const count = await Role.estimatedDocumentCount();

    // if exist docs in DB.
    // this means that there is roles.
    if (count > 0) return; // right here ends the TRY if is iquals to 1.

    // but, if not have docs or count.
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
