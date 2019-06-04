import EnvType from '../const/EnvType';

var __instance=null;


class Logger{
	static get instance(){
		if(__instance===null){
			__instance = new Logger();
		}
		return __instance;
	}

	__isDevVersion(){
		return process.env.NODE_ENV === EnvType.DEVELOPMENT;
	}

	log(...args){
		if(this.__isDevVersion()){
			console.log(...args);
		}
	}

	info(...args){
		if(this.__isDevVersion()){
			console.info(...args);
		}
	}

	error(...args){
		if(this.__isDevVersion()){
			console.error(...args);
		}
	}
}


export default Logger.instance;