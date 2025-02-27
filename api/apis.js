import {request} from "@/utils/request.js"



//分页获取首页数据
export function apiQueryList(pageNo,key){
	return request({
		url:'essay/getEssayIndex?page='+pageNo+'&key='+key
	})
}


//分页获取热点数据
export function apiQueryHandUpList(pageNo){
	return request({
		url:'essay/getEssayList?page='+pageNo
	})
}


export function apiGetEssay(essayId){
		
	return request({
		url:"essay/getEssay?essayId="+essayId
	})
}


export function apiGetComment(essayId,pageNo){
	return request({
		url:"comment/getComment?essayId="+essayId+"&pageNo="+pageNo+"&userId="+uni.getStorageSync("userId")
	}) 
}

export function apiIsToEssayLikes(essayId){
	return request({
		url:"likes/isLikesToEssay?essayId="+essayId+"&userId="+uni.getStorageSync("userId"),
	})
}

export function apiAddComment(data={}){
	return request({
		url:"comment/addComment",
		data,
		method:"POST"
	})
}

export function apiLikesEssay(data={}){
	return request({
		url:"likes/likes",
		data,
		method:"POST"
	})
}


export function apiGetUser(userId){
	return request({
		url: "user/getUser?userId="+userId
	})
}


//我的帖子/点赞/评论
export function apiGetMyInfo(data={}){
	return request({
		url:"user/getMyInfo",
		data,
		method:"POST"
	})
}



