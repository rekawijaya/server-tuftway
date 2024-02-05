

let self = module.exports = {
    addProduct: async function(req, res) {
        const {product_name, price, description} = req.body
        const file = req.file
        const currentDate = new Date()

        const inputProduct = {
            product_name: product_name,
            file: file.path,
            price: price,
            description: description,
            created_at: currentDate,
            updated_at: currentDate
        }

        if (!product_name|| !file || !price || !description) {
            response.NOTFOUND(res, {status: "filed", message: "field harus di isi", data: []})
        }else{
            await query.insert("product", inputProduct)
            response.CREATED(res, {status: "success", message: "product berhasil Di tambahkan", data: inputProduct})
        }
    },

    readAllProduct: async function(req, res){
        const getProduct = await query.selectAll("product")
        response.OK(res, {status: "success", message: "product berhasil Di select", data: getProduct})
    },

    deleteProduct: async function(req, res) {
        const product_id = req.body.product_id

        if(!product_id){
            response.NOTFOUND(res, {status: "failed", message: "product tidak ada", data: []})
        }else if (getProduct.length > 0) {
            const getProduct = await query.select("product", {product_id: product_id})
            const deleteData = await query.delete("product", getProduct[0])
            response.OK(res, {status: "success", message: "product berhasil di delete", data:deleteData[0]})
        }else{
            response.NOTFOUND(res, {status: "failed", message: "product tidak ada", data: []})
        }
    }
}