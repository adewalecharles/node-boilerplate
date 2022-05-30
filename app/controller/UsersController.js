module.exports = {

   getUsers(req, res) {
     res.status(200).json({ status: "success", message: "Welcome To Users API"});
  },
  
   addTwoNumbers(req,res){
     const { num1, num2 } = req.body;
     const add = (num1, num2) => {
     return num1 + num2;
    };
     res.status(200).json({
     status: "success",
     result: add(num1, num2)
   });
 }
};