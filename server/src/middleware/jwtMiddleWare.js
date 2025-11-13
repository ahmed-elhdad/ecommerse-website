import jwt from 'jsonwebtoken'
export const jwtmiddleware=(jwt)=>{
    try {
        const isValid=jwt.verify()
    } catch (err) {
        
    }
}