import Api from "@/api";
const getCategoriePrestation={
    methods: {
        async getOptionsCategoriesPrestation(){
            let response=await Api.get("/accountService/prestationCategorie/all")
            let categories=response.data
            let options=[]
            categories.forEach((categorie)=>{
                options.push({"name":categorie['label'],"value":categorie['ID']})
            })
            return options
        }
    },
}

export default getCategoriePrestation