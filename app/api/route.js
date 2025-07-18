// HANDLE HTTP REQUESTS

import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";
// function to connect to the database
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// GET METHOD - Fetch all todos
export async function GET(req) {
  try {
    const todos = await TodoModel.find({});
    return NextResponse.json({ todos: todos });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

// POST METHOD
export async function POST(req) {
  const { title, description } = await req.json();

  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created!" });
}

// PUT METHOD - Update a todo
export async function PUT(req) {
  const { id, title, description, isCompleted } = await req.json();

  await TodoModel.findByIdAndUpdate(id, {
    title,
    description,
    isCompleted,
  });
  return NextResponse.json({ msg: "Todo Updated!" });
}

// DELETE METHOD
export async function DELETE(req) {
  const { id } = await req.json();

  await TodoModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Todo Deleted!" });
}
