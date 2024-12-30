import mongoose from "mongoose";
import tasks from "../models/tasks.js";
import { check, validationResult } from "express-validator";

export const getAllTasks = async (req, res) => {
  try {
    const { completed } = req.query;
    const tasksList = await tasks.find(
      completed == undefined ? {} : { completed: completed },
      { _id: 1, title: 1, description: 1, completed: 1, createdAt: 1 }
    );
    res.status(200).json(tasksList);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las tareas.",
      error: error.message,
    });
  }
};

export const postTasks = [
  check("title")
    .notEmpty()
    .withMessage("El título es obligatorio.")
    .isString()
    .withMessage("El título debe ser una cadena de texto.")
    .isLength({ min: 5 })
    .withMessage("El título debe tener al menos 5 caracteres."),
  check("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto."),
  check("completed")
    .optional()
    .isBoolean()
    .withMessage("El estado completado debe ser un valor booleano."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Errores de validación.",
        errors: errors.array(),
      });
    }
    next();
  },
  async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const newTask = new tasks({ title, description, completed });
      const saveTask = await newTask.save();
      return res.status(201).json(saveTask);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(400).json({
          message: "Error de validación en los datos proporcionados.",
          details: error.errors,
        });
      }
      return res.status(500).json({
        message: "Error interno del servidor al crear la tarea.",
        error: error.message,
      });
    }
  },
];

export const putTasks = [
  check("_id").notEmpty().withMessage("Id no puede ser Vacio"),
  check("title")
    .optional()
    .isString()
    .withMessage("El título debe ser una cadena de texto.")
    .isLength({ min: 5 })
    .withMessage("El título debe tener al menos 5 caracteres."),
  check("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto."),
  check("completed")
    .optional()
    .isBoolean()
    .withMessage("El estado completado debe ser un valor booleano."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Errores de validación.",
        errors: errors.array(),
      });
    }
    next();
  },
  async (req, res) => {
    try {
      const { _id } = req.params;
      const updateData = req.body;
      const updatedTask = await tasks.findByIdAndUpdate(_id, updateData, {
        new: true,
      });
      if (!updatedTask) {
        return res.status(404).json({ message: "Tarea no encontrada." });
      }
      return res.status(200).json(updatedTask);
    } catch (error) {
      return res.status(500).json({
        message: "Error interno del servidor al actualizar la tarea.",
        error: error.message,
      });
    }
  },
];

export const deleteTask = [
  check("_id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("El id proporcionado no es válido."),
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Errores de validación.",
        errors: errors.array(),
      });
    }
    try {
      const { _id } = req.params;
      const deletedTask = await tasks.findByIdAndDelete(_id);

      if (!deletedTask) {
        return res.status(404).json({
          message: "Tarea no encontrada.",
        });
      }

      res.status(200).json({
        message: "Tarea eliminada exitosamente.",
        task: deletedTask,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error interno del servidor al eliminar la tarea.",
        error: error.message,
      });
    }
  },
];


