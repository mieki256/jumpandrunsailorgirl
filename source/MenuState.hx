package;

import openfl.Assets;
import org.flixel.FlxG;
import org.flixel.FlxSprite;
import org.flixel.FlxState;
import org.flixel.FlxGroup;
import org.flixel.tweens.FlxTween;
import org.flixel.tweens.misc.MultiVarTween;

/**
 * タイトル画面用クラス
 * 
 * サンプルプロジェクトを作成すると、
 * メニュー画面用としてこのクラスが作成されるので、
 * 内容を自分用に書き換えればいい。
 */
class MenuState extends FlxState
{
    var spr2:FlxSprite;
    var vspd:Float;
    
	/**
	 * Function that is called up when to state is created to set it up.
     * 初期化処理
	 */
	override public function create():Void
	{
		// Set a background color
		FlxG.bgColor = 0xff131c1b;
        
		// Show the mouse (in case it hasn't been disabled)
		#if !FLX_NO_MOUSE
		//FlxG.mouse.show();
		#end

        // BG用スプライト
        var spr = new FlxSprite(0, 0);
        spr.loadGraphic(Assets.getBitmapData("assets/images/title_image.png"));
        add(spr);

        // クリア時間記録用テキスト
        var t:FlxGroup = Laps.setLapsTextsPos(480, 310, false);
        add(t);

        // 「Press Z to start」スプライト
        spr2 = new FlxSprite(16, 439);
        spr2.loadGraphic(Assets.getBitmapData("assets/images/press_z_to_start.png"));
        add(spr2);
        
        // tweenで文字部分を点滅させる
        var mvt:MultiVarTween = new MultiVarTween(null, FlxTween.PINGPONG);
        mvt.tween(spr2, { "alpha":0.0 }, 0.5);
        spr2.addTween(mvt);

        // BGM再生開始
        #if flash
        FlxG.playMusic(Assets.getSound("BgmTitle"));
        #end
        
		super.create();
	}
	
	/**
	 * Function that is called when this state is destroyed - you might want to 
	 * consider setting all objects this state uses to null to help garbage collection.
	 */
	override public function destroy():Void
	{
		super.destroy();
	}

	/**
	 * Function that is called once every frame.
     * 毎フレーム呼ばれる処理
	 */
	override public function update():Void
	{
        super.update();

        if (FlxG.keys.justPressed("Z")) {
            // Zキーが押されたらステージ1に切り替える
            FlxG.switchState(new Stage1());
        }
	}	
}