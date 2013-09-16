package ;

import flash.Lib;
import openfl.Assets;
import org.flixel.FlxG;
import org.flixel.FlxGroup;
import org.flixel.FlxSprite;
import org.flixel.util.FlxPoint;
import org.flixel.tweens.FlxTween;
import org.flixel.tweens.misc.MultiVarTween;
import org.flixel.tweens.util.Ease;
import Laps;

/**
 * ステージクリアロゴ
 * @author mieki256
 */
class LogoStageClear extends FlxGroup {

    var logo:FlxSprite;
    var newrecord:FlxSprite;
    var step:Int;
    var startTime:Int;
    public var myAlive:Bool;
    
    public function new() {
        super();
        
        var img = Assets.getBitmapData("assets/images/stageclear.png");
        var tx = (FlxG.width - img.width) / 2;
        var ty = 120;
        logo = new FlxSprite(tx, ty);
        logo.loadGraphic(img, false, false, img.width, img.height);
        logo.scrollFactor = new FlxPoint();     // スクロールに追従させない
        logo.solid = false;
        logo.exists = false;
        add(logo);
        
        img = Assets.getBitmapData("assets/images/itsanewrecord.png");
        tx = (FlxG.width - img.width) / 2;
        ty = 260;
        newrecord = new FlxSprite(tx, ty);
        newrecord.loadGraphic(img, false, false, img.width, img.height);
        newrecord.scrollFactor = new FlxPoint();
        newrecord.solid = false;
        newrecord.exists = false;
        add(newrecord);
        
        step = 0;
        myAlive = false;
    }

    /**
     * 表示を有効化
     */
    public function start():Void {
        step = 0;
        myAlive = true;
        
        logo.exists = true;
        logo.scale.x = 3.0;
        logo.scale.y = 3.0;
        startTime = Lib.getTimer();

        // Tweenを設定
        
        // ONESHOT(1回のみ)で変化させる。
        var mvt1 = new MultiVarTween(null, FlxTween.ONESHOT);
        
        // 変化させたいプロパティを指定。
        mvt1.tween(logo.scale, { "x":1.0, "y":1.0 }, 0.3, Ease.backOut);
        
        // tweenを登録
        logo.addTween(mvt1);
    }
    
    override public function update():Void {
        super.update();
        if ( !myAlive ) return;
        
        var difftime:Int = Lib.getTimer() - startTime;
        switch(step) {
            case 0:
                if (difftime >= 3000) {
                    if (Laps.checkNewRecord()) {
                        // 新記録ならSEを鳴らす
                        #if flash
                        FlxG.play(Assets.getSound("SeNewRecord"));
                        #end
                        
                        newrecord.exists = true;
                    }
                    step++;
                }
                
            case 1:
                if ( difftime >= 5300) {
                    // アルファ値のtweenを指定
                    var mvt2 = new MultiVarTween(null, FlxTween.ONESHOT);
                    mvt2.tween(logo, { "alpha":0 }, 0.5);
                    logo.addTween(mvt2);
                    
                    var mvt3 = new MultiVarTween(null, FlxTween.ONESHOT);
                    mvt3.tween(newrecord, { "alpha":0 }, 0.5);
                    newrecord.addTween(mvt3);
                    
                    startTime = Lib.getTimer();
                    step++;
                }
                    
            case 2:
                if ( logo.alpha <= 0 ) {
                    step++;
                    logo.alpha = 1.0;
                    logo.exists = false;
                    newrecord.exists = false;
                    myAlive = false;
                }
        }
    }
}