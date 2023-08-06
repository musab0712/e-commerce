import connect from "@/dbConfig/dbConfig";
import User from "@/models/userMode";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const reqBody = request.json();
    const { email, password } = reqBody;
    console.log("musab");
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }
    console.log("user exist");

    //check if password is correct
    const validPswd = await bcryptjs.compare(password, user.password);
    if (!validPswd) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }

    //create token data
    // const tokenData = {
    //   id: user._id,
    //   username: user.username,
    //   email: user.email,
    // };

    // create Token
    // const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
    //   expiresIn: "1d",
    // });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
