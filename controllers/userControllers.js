
let self = module.exports = {
    Register: async function(req, res) {
        const {username, password, email, name, birthday, address, phone_number} = req.body
        const currentDate = new Date()
        const getUser = await query.select("user", {email: email})
        const inputDataUser = {
            username: username,
            password: password,
            email: email,
            name: name,
            birthday: birthday,
            address: address,
            phone_number: phone_number,
            created_at: currentDate,
            updated_at: currentDate
        }

        if(!username, !password, !email, !name, !birthday, !address, !phone_number){
            response.NOTFOUND(res, {status: "failed", mesage: "ada field yang belum di isi"})
        }else if (getUser.length > 0) {
            response.ERROR(res, {status: "failed", message: "email sudah terdaftar", data: []})
        }else{
            const userRegist = await query.insertUser("user", inputDataUser)
            const user_id = userRegist[0]
            const userData = await query.select("user", user_id)
            response.CREATED(res, {status:"success", message: "register berhasil", data: userData})
        }
    },

    login: async function(req, res) {
        const {username, password} = req.body
        const getuser = await query.select("user", {username: username})
        
        if (!username || !password) {
            response.NOTFOUND(res, {status: "failed", message: "username / password belum di isi", data: []})
        }else if(!getuser[0]){
            response.NOTFOUND(res, {status: "failed", message: "gagal login username atau password tidak salah", data: []})
        }else if(getuser[0].password == password  ) {
            response.OK(res, {status: "success", message: "login berhasil", data: getuser[0]})
        }else {
            response.NOTFOUND(res, {status: "failed", message: "gagal login username atau password salah", data: []})
        }
    }
}