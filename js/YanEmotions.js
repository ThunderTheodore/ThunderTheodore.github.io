function YanEmotions(){
    this._init_();
}

YanEmotions.prototype = {
    constructor:YanEmotions,
    _init_:function(){
        this.left_hands = ['(','╭(','╰(','ヾ(','(ฅ','(๑','٩(','(ง','ᕦ(','╮(','(つ','⊂(','(σ','ლ(','ԅ(','ρ(','ψ(','╭∩╮('];
        this.emotions = ['●｀∀′●','●’◡’●','*′▽‘*','＾∀＾●','●′∀｀●','˘ 3˘','๑•́ ₃•̀๑','๑ơ ₃ ơ','๑＞ ₃ ＜','′ω`','◔ ‸◔','￢_￢','≖‿≖','o‿≖','●′ω`●','//▽//','Ծ‸Ծ','“▔□▔','..•˘_˘•..','๑乛◡乛๑','｡￫‿￩｡','๑￫‿ฺ￩๑','｡◕ฺˇε ˇ◕ฺ｡','๑′ڡ`๑','๑＞ڡ＜','￣……￣','。◕ฺ∀◕ฺ','〃＾∇＾','◕ฺˇд ˇ◕ฺ','//̀Д/́/','*ﾟ▽ﾟ*','o^∇^o','≧▽≦','◕‿◕','￣▽￣"','ヾ?∀?*','≧0≦','╬￣皿￣','≧Д≦','￣ε(#￣','ಗдಗ。','￣ェ￣','〃’▽’〃','●′▽｀●','✪ω✪',',,•ω•,,','`・ω・´','⊙ω⊙','¯﹃¯'];
        this.right_hands = [')',')╯',')╮',')ﾉ',')ﾉ',')ﾉｼ','ฅ)',')ھ',')ง',')۶',')ᕤ',')╭',')つ',')σ','⊂)',')y','ლ)','ԅ)',')ゞ',')ﾌﾟ',')ψ',')╭∩╮'];
        this.decorations = ['♪','♫','♬','。','ﾟ','~','♥','+ﾟ','✧','〃','✲ฺ','✿','★','*','メ','ξ'];
    },
    getOneEmotion:function(){
        var randNum1 = Math.floor(Math.random()*this.left_hands.length);
        var randNum2 = Math.floor(Math.random()*this.emotions.length);
        var randNum3 = Math.floor(Math.random()*this.right_hands.length);
        return this.left_hands[randNum1]+this.emotions[randNum2]+this.right_hands[randNum3];
    },
    getDecoration:function(){
        var randNum1 = Math.floor(Math.random()*this.decorations.length);
        return this.decorations[randNum1];
    },
    getEmotions:function(num,len,deco){
        num=num||50;
        len=len||3;
        deco=deco||true;
        var emotions = [];
        for(var i=0;i<num;++i){
            var str="";
            for(var j=0;j<len;++j){
                str += this.getOneEmotion();
                while(j<len-1 && Math.random()>0.5){
                    str += this.getDecoration();
                }
            }
            emotions.push(str);
        }
        return emotions;
    }
}
