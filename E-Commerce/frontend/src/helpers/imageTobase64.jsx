const imageTobase64 = async(image)=>{
    const render = new FileReader()
    render.readAsDataURL(image)

    const data = await new Promise((res,rej)=>{
        render.onload=()=>res(render.result)

        render.onerror = errror=>rej(errror)
    })
    return data
}
export default imageTobase64;