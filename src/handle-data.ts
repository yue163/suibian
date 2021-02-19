/**
 * 字符串处理
 * @param value 
 */
const handleData = (value: any)=>{
    if(typeof value === 'string'){
      return value.split('')
    }else{
      return value.toString().split('').join('_')
    }
}
export default handleData;