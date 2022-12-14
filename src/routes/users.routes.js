import express from "express";
import expressValidator from "../middlewares/express-validator";
import fieldsValidations  from "../utils/validations.utils";
const router = express.Router();

import UsersController from "../controllers/users.controller";

router
  .route("/api/users")
  .get(UsersController.getAll)
  .post(fieldsValidations("users"), expressValidator, UsersController.create);

router
  .route("/api/users/:id")
  .get(UsersController.getOne)
  .put(fieldsValidations("usersUp"), expressValidator, UsersController.update)
  .delete(UsersController.deleteOne);

export default router;
