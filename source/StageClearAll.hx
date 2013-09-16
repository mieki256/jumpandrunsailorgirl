package ;

import flash.Lib;
import flash.display.BitmapData;
import openfl.Assets;
import org.flixel.FlxG;
import org.flixel.FlxObject;
import org.flixel.FlxSprite;
import org.flixel.FlxText;
import org.flixel.FlxGroup;
import org.flixel.FlxState;
import org.flixel.tweens.FlxTween;
import org.flixel.tweens.misc.MultiVarTween;

/**
 * ステージクリア画面
 * @author mieki256
 */
class StageClearAll extends FlxState{

    var bgspr:FlxSprite;
    var photo:FlxSprite;
    var pressz:FlxSprite;
    var lapstexts:FlxGroup;
    var step:Int;
    var startTime:Int;
    
    override public function create():Void
    {
        // 背景表示用スプライト
        bgspr = new FlxSprite();
        var img:BitmapData = Assets.getBitmapData("assets/images/thankyouforplaying.png");
        bgspr.loadGraphic(img);
        add(bgspr);

        // 御褒美画像用スプライト
        // プレイ回数に応じて異なる画像を表示する
        var fnameList = ["present1.png", "present2.png", "present3.png"];
        var idx:Int = Laps.getPlayCount() % fnameList.length;
        photo = new FlxSprite(60, 60);
        photo.loadGraphic(Assets.getBitmapData("assets/images/" + fnameList[idx]));
        add(photo);
        
        // クリア時間記録用テキスト
        var t:FlxGroup = Laps.setLapsTextsPos(420, 80, true);
        add(t);

        // 「Press Z」表示用スプライト
        img = Assets.getBitmapData("assets/images/pressz.png");
        var x = 8;
        var y = FlxG.height - img.height - 8;
        pressz = new FlxSprite(x, y);
        pressz.loadGraphic(img);
        add(pressz);

        // tweenで文字部分を点滅させる
        var mvt:MultiVarTween = new MultiVarTween(null, FlxTween.PINGPONG);
        mvt.tween(pressz, { "alpha":0.0 }, 0.5);
        pressz.addTween(mvt);
        
        #if flash
        FlxG.playMusic(Assets.getSound("BgmAllStageClear"));
        #end

        FlxG.flash(0xFFFFFFFF, 0.5);  // フェードイン効果
        step = 0;
        super.create();
    }

    /**
     * 毎フレーム呼ばれる処理
     */
    override public function update():Void {
        super.update();     // これを呼んでおかないと、tweenその他が働かないので注意

        switch (step) {
            case 0:
                // キー入力待ち
                if (FlxG.keys.justPressed("Z")) {
                    // BGMフェードアウト
                    #if flash
                    FlxG.music.fadeOut(1.0);
                    #end
                    
                    FlxG.fade(0x00000000, 1.0);   // フェードアウト効果
                    startTime = Lib.getTimer();
                    pressz.exists = false;
                    step++;
                }
            case 1:
                // BGMフェードアウト中
                if ( Lib.getTimer() - startTime >= 1500 ) {
                    // 一定時間が経過したので次の処理に移る
                    #if flash
                    FlxG.music.stop();
                    #end
                    
                    Laps.incPlayCount();
                    
                    // タイトル画面に切り替える
                    FlxG.switchState(new MenuState());
                }
        }
    }
    
}