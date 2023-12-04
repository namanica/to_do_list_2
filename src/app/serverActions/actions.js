"use server"
import { revalidatePath } from "next/cache";
import connectMongoDB from "../../../libs/connect"
import Todo from "../../../models/TodoModel";
import {redirect} from "next/navigation"

export async function addTodo(formData) {
  try {
    const description = formData.get("description");
    connectMongoDB();
    const newTodo = await Todo.create({description});
    // console.log("Todo = ", newTodo);
    redirect("/")
  } catch (error) {
    return {message: "failed to create todo"}
  }
}

export async function updateTodo(formData) {
  try {
    const id = formData.get("id");
    const description = formData.get("description");
    connectMongoDB();
    await Todo.findByIdAndUpdate({_id:id}, {description}, {new:true});
    redirect("/")
  } catch (error) {
    return {message: "failed to update todo"}
  }
}

export async function deleteTodo(formData) {
  try {
    const id = formData.get("id");
    connectMongoDB();
    await Todo.findByIdAndDelete({_id:id});
    revalidatePath("/")
  } catch (error) {
    return {message: "failed to delete todo"}
  }
}