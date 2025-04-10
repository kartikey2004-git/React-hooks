export const loginUser = async (username,password) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(username === "user" && password === "pass"){
        resolve({
          sucess: true,
          data: {
            username,
            email: "user@example.com",
            token:"a7f9e1c4b2d84f0a9c3e75d12b6f8e9a"
          }
        })
      } else {
        reject({success : false , error: "Invalid Credentials"})
      }
    }, 1000);
  })
}