const JWT = require('jsonwebtoken');
const secret = "fHt67hHRIOP89Fgddr5643fg4rhQAvmj7xv0wgxGHUsere";



//Return a token (life for 7 days) with user informations 
const signToken = (user) => {
    return JWT.sign({id:user.id, name:user.name, state:user.state, role:user.position}, secret, { expiresIn: "7 days"})
}

//return informations of a user inside the token 
const decodeToken = (token) => {
    return JWT.verify(token, secret, (err, decode) => {
        if(err) console.log(err);
        return decode; 
    })
}


module.exports={decodeToken, signToken};