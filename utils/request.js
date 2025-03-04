
const BASE_URL = 'http://148.100.78.168:3000/';

export function request(config={}){	
	let {
		url,
		data={},
		method="GET",
		header={}
	} = config
	
	url = BASE_URL+url
	// header['access-key'] = "xxxxxx"
	
	
	return new Promise((resolve,reject)=>{		
		uni.request({
			url,
			data,
			method,
			header,
			success:res=>{
				resolve(res.data)
				/* if(res.data.code===0){
					resolve(res.data)
				}else if(res.data.code === 400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}	 */			
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}
