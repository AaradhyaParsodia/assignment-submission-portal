import zod from "zod";

const roleEnum = zod.enum(["user", "admin"]);

const loginMethodEnum = zod.enum(["username_password", "google_oauth"]);

// User schema
export const userSchema = zod.object({
    name: zod.string().trim().lowercase().max(35, "Name must be at most 35 characters"),
    username: zod.string().trim().lowercase().min(3, "Username must be at least 3 characters").max(45, "Username must be at most 45 characters"),
    email: zod.string().trim().lowercase().email("Invalid email address").min(3, "Email must be at least 3 characters").max(45, "Email must be at most 45 characters"),
    password: zod.string().nonEmpty("Password is required"),
    role: roleEnum.default("user"),
    loginMethod: loginMethodEnum.optional().default("username_password"),
    isDeleted: zod.boolean().default(false),
});

// Login user schema
export const loginUserSchema = zod.object({
    email: zod.string().email().max(45),
    password: zod.string().min(6).max(18),
});