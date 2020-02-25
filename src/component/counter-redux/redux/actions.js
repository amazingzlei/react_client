/**
 * 该文件用于创建action对象
 * @param number
 * @returns {{data: *, type: string}}
 */
// 3.5.1在action.js中创建能返回action对象的方法
export function add(number) {
    return {type:'add',data:number}
}

export function dec(number) {
    return {type:'dec',data:number}
}