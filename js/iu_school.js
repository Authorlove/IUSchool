
function URL(){
	var ab = "http://www.iu8co.com/iu_school/index.php/home/";
	return ab;
}

function uid(){
   return window.localStorage['uid'];
}
function univs_id(){
	 return window.localStorage['univs_id'];
}
function academy_id(){
 return window.localStorage['academy_id'];
}
function grade(){
	 return window.localStorage['grade'];
}
function class_id(){
	 return window.localStorage['class_id'];
}
function lpn(){
 return window.localStorage['lpn'];
}
function spn(){
	 return window.localStorage['spn'];
}
function realname(){
	 return window.localStorage['realname'];
}
function nickname(){
	 return window.localStorage['nickname'];
}
function sex(){
 return window.localStorage['sex'];
}
function interest(){
	 return window.localStorage['interest'];
}
function univs_name(){
	 return window.localStorage['univs_name'];
}
function academy_name(){
	 return window.localStorage['academy_name'];
}
function icon(){
	return  window.localStorage['icon']; 
}
function report(){
	 return window.localStorage['report'];
}
function sessionuid(){
 return window.localStorage['sessionuid'];
}
function sessionsid(){
 return window.localStorage['sessionsid'];
}
function class_name(){
	 return window.localStorage['class_name'];
}
function class_introduce(){
	 return window.localStorage['class_introduce'];
}
function class_grade(){
	 return window.localStorage['class_grade'];
}
function class_academy_id(){
	 return window.localStorage['academy_id'];
}
function class_academy_name(){
	 return window.localStorage['class_academy_name'];
}
function class_univs_name(){
	 return window.localStorage['class_univs_name'];
}
function class_univs_id(){
	 return window.localStorage['class_univs_id'];
}

function class_owner_id(){
	 return window.localStorage['class_owner_id'];
}
function class_icon(){
 return window.localStorage['class_icon'];
}
function class_memberCount(){
	 return window.localStorage['class_memberCount'];
}
function publish_count(){
	return window.localStorage['publish_count'];
}
function followed_count(){
	return window.localStorage['followed_count'];
}
function follow_others_count(){
	return window.localStorage['follow_others_count'];
}
function private_letter_count(){
	return  window.localStorage['private_letter_count'];
}
//传入typeid，选择活动类型与活动css类
function choosetype(type){
            switch (type) {
                case '1':
                    return "xw";
                    break;
                case '2':
                    return "tz";
                    break;
                case '3':
                    return "jz";
                    break;
                case '4':
                    return "bs";
                    break;
                case '5':
                    return "hd";
                    break;
                case '6':
                    return "tp";
                    break;
                case '7':
                    return "zy";
                    break;
                case '8':
                    return "gr";
                    break;
                case '9':
                    return "tz";
                    break;
                case '10':
                    return "zx";
                    break;
                case '11':
                    return "zf";
                    break;
            }
        }
        

