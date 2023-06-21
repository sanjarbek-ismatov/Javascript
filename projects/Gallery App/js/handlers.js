export async function addUser(userRef, body) {
  console.log("hey bro");
  const user = await userRef.add(body);
  console.log(user.id);
}
