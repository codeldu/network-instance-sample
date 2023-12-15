const network = {
    url : 'https://northwind.vercel.app/api/products/',


    getAll : async function(){
       let res= await axios.get(this.url);
       return res.data;
    },
    getById : async function(id){
        let res = await axios.get(this.url+id);
        return res.data;
    },
    add : async function(body){
        let res = await axios.post(this.url, body)
        return res.data;
    }
}