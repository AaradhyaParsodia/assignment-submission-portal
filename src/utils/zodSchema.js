import zod from "zod";

const roleEnum = zod.enum(["user", "admin"]);

const loginMethodEnum = zod.enum(["username_password", "google_oauth"]);

// User schema
export const userSchema = zod.object({
    name: zod.string().max(35, "Name must be at most 35 characters").optional(),
    username: zod.string().min(3, "Username must be at least 3 characters").max(45, "Username must be at most 45 characters"),
    email: zod.string().email("Invalid email address").min(3, "Email must be at least 3 characters").max(45, "Email must be at most 45 characters"),
    password: zod.string().min(8, "Password must be at least 8 characters").max(45, "Password must be at most 18 characters"),
    role: roleEnum.default("user"),
    loginMethod: loginMethodEnum.optional().default("username_password"),
    isDeleted: zod.boolean().default(false),
});

// Login user schema
export const loginUserSchema = zod.object({
    email: zod.string().email().max(45),
    password: zod.string().min(6).max(18),
});

// the assignment schema
export const assignmentSchema = zod.object({
    adminId: zod.string(),
    task: zod.string().min(1, "Tasks must be at least 1 character").max(1000, "Tasks must be at most 1000 characters"),
});