import bcrypt from "bcryptjs";

const users = [
  {
    name: "lucifer",
    email: "amateur.fullstackdev@gmail.com",
    password: bcrypt.hashSync("binary1010", 10),
    isAdmin: true,
  },
];

export default users;
